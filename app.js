import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getDatabase, ref, get, set, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
import { firebaseConfig } from "./firebase-config.js";
import { questions } from "./questions.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const $ = (id) => document.getElementById(id);
let user = null, nickname = "", index = 0, picked = {}, startedAt = 0, timerHandle = null;
let locked = false, points = 0;

const profanityRoots = [
  "kurw", "chuj", "huj", "jeb", "pierd", "spierd", "pojeb", "zjeb",
  "zajeb", "wyjeb", "najeb", "dojeb", "pizd", "sukinsyn", "skurwysyn",
  "dziwk", "szmat", "kutas", "cipa", "fiut", "cwel", "sraj", "gowno", "dupa",
  "ruchaj", "ruchac", "fuck", "shit", "bitch", "cunt", "pussy",
  "bastard", "motherfuck", "whore", "slut", "wank", "twat", "bollock",
  "asshole", "arsehole", "dickhead", "dickwad", "jackass", "asshat",
  "faggot", "nigger", "nigga", "retard"
];
const exactProfanity = new Set(["ass", "dick", "cock", "damn"]);

function normalizeNickname(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, "l")
    .replace(/[0134578@!$]/g, ch => ({ "0":"o", "1":"i", "3":"e", "4":"a", "5":"s", "7":"t", "8":"b", "@":"a", "!":"i", "$":"s" }[ch] || ch));
}
function containsProfanity(value) {
  const normalized = normalizeNickname(value);
  const words = normalized.split(/[^a-z0-9]+/).filter(Boolean);
  if (words.some(word => exactProfanity.has(word))) return true;
  if (words.some(word => profanityRoots.some(root => word.startsWith(root)))) return true;
  const compact = normalized.replace(/[^a-z0-9]/g, "");
  if (exactProfanity.has(compact)) return true;
  return profanityRoots.some(root => compact.includes(root));
}
function show(id) { $(id).classList.remove("hidden"); }
function hide(id) { $(id).classList.add("hidden"); }
function elapsed() { return Math.max(0, Math.floor((Date.now() - startedAt) / 1000)); }
function fmt(s) { return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`; }

$("nickname").addEventListener("input", () => {
  const value = $("nickname").value.trim();
  $("entryError").textContent = containsProfanity(value) ? "Ten login zawiera niedozwolone słowo. Wybierz inny pseudonim." : "";
});

$("startBtn").addEventListener("click", async () => {
  $("entryError").textContent = "";
  nickname = $("nickname").value.trim().replace(/\s+/g, " ");
  if (nickname.length < 2) { $("entryError").textContent = "Wpisz login mający co najmniej 2 znaki."; return; }
  if (containsProfanity(nickname)) {
    $("entryError").textContent = "Ten login zawiera niedozwolone słowo. Wybierz inny pseudonim.";
    $("nickname").focus(); return;
  }
  $("startBtn").disabled = true;
  try {
    user = auth.currentUser || (await signInAnonymously(auth)).user;
    const existing = await get(ref(db, `submissions/${user.uid}`));
    if (existing.exists()) {
      hide("entry"); show("donePanel");
      $("doneText").textContent = "Z tego urządzenia wysłano już odpowiedzi. Poproś prowadzącego o pomoc, jeśli to pomyłka.";
      $("finalScore").textContent = `${existing.val().score ?? "—"}/5 punktów`;
      $("awardList").replaceChildren();
      return;
    }
    startedAt = Date.now();
    hide("entry"); show("quizPanel");
    timerHandle = setInterval(() => $("timer").textContent = fmt(elapsed()), 1000);
    renderQuestion();
  } catch (e) {
    $("entryError").textContent = "Nie udało się połączyć z quizem. Sprawdź internet i konfigurację Firebase.";
    console.error(e);
  } finally { $("startBtn").disabled = false; }
});

function renderQuestion() {
  const item = questions[index];
  locked = false;
  $("progress").textContent = `Pytanie ${index + 1} z ${questions.length}`;
  $("progressBar").style.width = `${(index / questions.length) * 100}%`;
  $("questionText").textContent = item.q;
  $("questionTag").textContent = item.type === "truefalse" ? "PRAWDA / FAŁSZ" : item.image ? "RUNDA OBRAZKOWA" : "SPRAWDŹ SWOJĄ WIEDZĘ";
  $("answers").replaceChildren();
  $("feedbackBox").classList.add("hidden");
  $("feedbackBox").classList.remove("is-correct", "is-wrong");
  hide("nextBtn"); show("checkBtn");
  $("checkBtn").disabled = true;
  $("checkBtn").textContent = "Sprawdź odpowiedź";
  $("quizError").textContent = "";

  if (item.image) {
    show("questionFigure");
    $("questionImage").src = item.image;
    $("questionImage").alt = item.imageAlt || "Zdjęcie do pytania";
    $("questionImageCaption").textContent = item.imageCaption || "";
    $("questionImage").onerror = () => {
      $("questionFigure").classList.add("image-failed");
      $("questionImageCaption").textContent = "Zdjęcie nie załadowało się — możesz nadal odpowiedzieć na pytanie.";
    };
    $("questionImage").onload = () => $("questionFigure").classList.remove("image-failed");
  } else {
    hide("questionFigure");
    $("questionImage").removeAttribute("src");
  }

  item.a.forEach((answer, i) => {
    const label = document.createElement("label");
    label.className = "answer-option";
    const radio = document.createElement("input");
    radio.type = "radio"; radio.name = "answer"; radio.value = i;
    radio.addEventListener("change", () => { if (!locked) { picked[index] = i; $("checkBtn").disabled = false; } });
    const span = document.createElement("span"); span.textContent = answer;
    label.append(radio, span); $("answers").append(label);
  });
}

$("checkBtn").addEventListener("click", () => {
  if (locked || picked[index] === undefined) return;
  locked = true;
  const item = questions[index];
  const selected = Number(picked[index]);
  const correct = selected === item.correct;
  if (correct) points += 1;
  $("answers").querySelectorAll("input").forEach(input => { input.disabled = true; });
  $("feedbackBox").classList.remove("hidden");
  $("feedbackBox").classList.add(correct ? "is-correct" : "is-wrong");
  $("feedbackTitle").textContent = correct ? "Dobrze! +1 punkt" : `Tym razem nie. Poprawna odpowiedź: ${item.a[item.correct]}.`;
  $("feedbackText").textContent = item.explanation;
  $("checkBtn").classList.add("hidden");
  show("nextBtn");
  $("nextBtn").textContent = index === questions.length - 1 ? "Zakończ quiz" : "Następne pytanie";
});

$("nextBtn").addEventListener("click", async () => {
  if (!locked) return;
  if (index < questions.length - 1) {
    index++;
    renderQuestion();
    return;
  }
  $("nextBtn").disabled = true;
  $("quizError").textContent = "";
  const score = questions.reduce((sum, q, i) => sum + (Number(picked[i]) === q.correct ? 1 : 0), 0);
  const answers = questions.map((q, i) => Number(picked[i]));
  const awards = calculateAwards(answers, score);
  try {
    await set(ref(db, `submissions/${user.uid}`), {
      nickname, answers, score, durationSeconds: elapsed(),
      submittedAt: serverTimestamp(), questionCount: questions.length
    });
    clearInterval(timerHandle);
    hide("quizPanel"); show("donePanel");
    $("doneText").textContent = `Dziękujemy, ${nickname}! Odpowiedzi zostały wysłane.`;
    $("finalScore").textContent = `Twój wynik: ${score}/${questions.length} punktów`;
    $("awardList").replaceChildren();
    awards.forEach(award => {
      const badge = document.createElement("span"); badge.className = "award";
      badge.textContent = award; $("awardList").append(badge);
    });
  } catch (e) {
    $("quizError").textContent = "Nie udało się wysłać odpowiedzi. Sprawdź połączenie i spróbuj ponownie.";
    $("nextBtn").disabled = false; console.error(e);
  }
});

function calculateAwards(answers, score) {
  const awards = [];
  if (score === questions.length) awards.push("🏆 Mistrz leśnej wiedzy");
  else if (score >= 4) awards.push("🌟 Leśny ekspert");
  else if (score >= 3) awards.push("🌿 Leśny odkrywca");
  else awards.push("🍃 Uczestnik leśnej wyprawy");
  if (Number(answers[2]) === questions[2].correct) awards.push("🔎 Tropiciel śladów");
  if (Number(answers[3]) === questions[3].correct) awards.push("🦌 Przyjaciel sarny");
  return awards;
}
