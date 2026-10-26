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

function show(id) { $(id).classList.remove("hidden"); }
function hide(id) { $(id).classList.add("hidden"); }
function elapsed() { return Math.max(0, Math.floor((Date.now() - startedAt) / 1000)); }
function fmt(s) { return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`; }

$("startBtn").addEventListener("click", async () => {
  $("entryError").textContent = "";
  nickname = $("nickname").value.trim().replace(/\s+/g, " ");
  if (nickname.length < 2) { $("entryError").textContent = "Wpisz login mający co najmniej 2 znaki."; return; }
  $("startBtn").disabled = true;
  try {
    user = auth.currentUser || (await signInAnonymously(auth)).user;
    const existing = await get(ref(db, `submissions/${user.uid}`));
    if (existing.exists()) {
      hide("entry"); show("donePanel");
      $("doneText").textContent = "Z tego urządzenia wysłano już odpowiedzi. Poproś prowadzącego o pomoc, jeśli to pomyłka.";
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
  $("progress").textContent = `Pytanie ${index + 1} z ${questions.length}`;
  $("progressBar").style.width = `${(index / questions.length) * 100}%`;
  $("questionText").textContent = item.q;
  $("answers").replaceChildren();
  item.a.forEach((answer, i) => {
    const label = document.createElement("label");
    label.className = "answer-option";
    const radio = document.createElement("input");
    radio.type = "radio"; radio.name = "answer"; radio.value = i;
    radio.checked = picked[index] === i;
    radio.addEventListener("change", () => { picked[index] = i; $("nextBtn").disabled = false; });
    const span = document.createElement("span"); span.textContent = answer;
    label.append(radio, span); $("answers").append(label);
  });
  $("nextBtn").disabled = picked[index] === undefined;
  $("nextBtn").textContent = index === questions.length - 1 ? "Zakończ i wyślij" : "Dalej";
}
$("nextBtn").addEventListener("click", async () => {
  if (picked[index] === undefined) return;
  $("quizError").textContent = "";
  if (index < questions.length - 1) { index++; renderQuestion(); return; }
  $("nextBtn").disabled = true;
  try {
    const answers = questions.map((q, i) => Number(picked[i]));
    const score = questions.reduce((sum, q, i) => sum + (answers[i] === q.correct ? 1 : 0), 0);
    const payload = {
      nickname, answers, score, durationSeconds: elapsed(),
      submittedAt: serverTimestamp(), questionCount: questions.length
    };
    await set(ref(db, `submissions/${user.uid}`), payload);
    clearInterval(timerHandle);
    hide("quizPanel"); show("donePanel");
    $("doneText").textContent = `Dziękujemy, ${nickname}! Odpowiedzi zostały wysłane.`;
  } catch (e) {
    $("quizError").textContent = "Nie udało się wysłać odpowiedzi. Sprawdź połączenie i spróbuj ponownie.";
    $("nextBtn").disabled = false; console.error(e);
  }
});