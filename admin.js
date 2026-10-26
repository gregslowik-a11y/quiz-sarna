import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
import { firebaseConfig, ADMIN_EMAIL } from "./firebase-config.js";
import { questions } from "./questions.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const $ = id => document.getElementById(id);
let rows = [], unsubscribeResults = null;

function show(id) { $(id).classList.remove("hidden"); }
function hide(id) { $(id).classList.add("hidden"); }
function fmt(s) { return `${Math.floor((s||0)/60)}:${String((s||0)%60).padStart(2,"0")}`; }
function safeTime(ts) { return ts ? new Date(ts).toLocaleTimeString("pl-PL", {hour:"2-digit",minute:"2-digit",second:"2-digit"}) : "—"; }

$("loginBtn").addEventListener("click", async () => {
  $("loginError").textContent = "";
  try {
    const email = $("email").value.trim();
    if (email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) throw new Error("Użyj skonfigurowanego adresu administratora.");
    await signInWithEmailAndPassword(auth, email, $("password").value);
  } catch (e) {
    $("loginError").textContent = e.message.includes("Użyj") ? e.message : "Logowanie nieudane. Sprawdź e-mail, hasło i ustawienia Firebase.";
  }
});
$("logoutBtn").addEventListener("click", () => signOut(auth));
onAuthStateChanged(auth, user => {
  if (unsubscribeResults) { unsubscribeResults(); unsubscribeResults = null; }
  if (user && user.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
    hide("loginPanel"); show("dashboard");
    unsubscribeResults = onValue(ref(db, "submissions"), snap => render(snap.val() || {}), err => {
      $("summary").textContent = "Brak dostępu do wyników. Sprawdź reguły Firebase."; console.error(err);
    });
  } else {
    rows = [];
    show("loginPanel"); hide("dashboard");
  }
});

function getAwards(r) {
  const answers = r.answers || [];
  const score = Number(r.score) || 0;
  const awards = [];
  if (score === questions.length) awards.push("🏆 Mistrz leśnej wiedzy");
  else if (score >= 10) awards.push("🌟 Leśny ekspert");
  else if (score >= 7) awards.push("🌿 Leśny odkrywca");
  else awards.push("🍃 Uczestnik leśnej wyprawy");
  if (Number(answers[2]) === questions[2].correct) awards.push("🔎 Tropiciel śladów");
  if (Number(answers[3]) === questions[3].correct) awards.push("🦌 Przyjaciel sarny");
  return awards;
}
function render(data) {
  rows = Object.entries(data).map(([uid, r]) => ({uid, ...r}))
    .sort((a,b) => (b.score||0)-(a.score||0) || (a.durationSeconds||0)-(b.durationSeconds||0) || String(a.nickname).localeCompare(String(b.nickname), "pl"));
  $("count").textContent = `${rows.length}/17`;
  $("topScore").textContent = rows.length ? `${rows[0].score}/${questions.length}` : "—";
  $("winnerName").textContent = rows.length ? rows[0].nickname : "—";
  const average = rows.length ? rows.reduce((sum, r) => sum + (Number(r.score) || 0), 0) / rows.length : null;
  $("averageScore").textContent = average === null ? "—" : `${average.toFixed(1)}/${questions.length}`;
  $("summary").textContent = rows.length === 17 ? "Wszyscy uczestnicy zakończyli test." : `Otrzymano ${rows.length} z 17 zgłoszeń.`;

  const body = $("resultsBody"); body.replaceChildren();
  if (!rows.length) {
    const tr = document.createElement("tr"), td = document.createElement("td");
    td.colSpan = 7; td.textContent = "Brak wyników."; tr.append(td); body.append(tr);
  } else {
    rows.forEach((r, i) => {
      const tr = document.createElement("tr");
      const responseMarks = (r.answers || []).map((answer, qi) => `${qi+1}${Number(answer) === questions[qi]?.correct ? "✓" : "✗"}`).join(" ");
      const vals = [i+1, r.nickname || "—", `${r.score ?? 0}/${questions.length}`, fmt(r.durationSeconds), responseMarks || "—", getAwards(r).join(" · "), safeTime(r.submittedAt)];
      vals.forEach((v, j) => { const td = document.createElement("td"); td.textContent = v; if (i===0) td.classList.add("leader"); tr.append(td); });
      body.append(tr);
    });
  }

  const stats = questions.map((q, qi) => {
    const validRows = rows.filter(r => Array.isArray(r.answers) && r.answers.length === questions.length && Number.isInteger(Number(r.answers[qi])));
    const correctCount = validRows.filter(r => Number(r.answers[qi]) === q.correct).length;
    return {q, qi, correctCount, total: validRows.length, rate: validRows.length ? correctCount / validRows.length : null};
  });
  const statsBody = $("questionStatsBody"); statsBody.replaceChildren();
  if (!rows.length || !stats.some(s => s.total)) {
    const tr = document.createElement("tr"), td = document.createElement("td");
    td.colSpan = 3; td.textContent = "Statystyki pojawią się po pierwszych ukończonych quizach."; tr.append(td); statsBody.append(tr);
    $("hardestSummary").textContent = "Podsumowanie pojawi się po pierwszych zgłoszeniach.";
  } else {
    stats.forEach(stat => {
      const tr = document.createElement("tr");
      const title = document.createElement("td"); title.textContent = `${stat.qi+1}. ${stat.q.q}`;
      const count = document.createElement("td"); count.textContent = `${stat.correctCount}/${stat.total}`;
      const rate = document.createElement("td"); rate.textContent = stat.rate === null ? "—" : `${Math.round(stat.rate*100)}%`;
      tr.append(title, count, rate); statsBody.append(tr);
    });
    const activeStats = stats.filter(s => s.rate !== null).sort((a,b) => a.rate-b.rate);
    const hardest = activeStats[0];
    $("hardestSummary").textContent = hardest ? `Najwięcej trudności sprawiło pytanie ${hardest.qi+1}: „${hardest.q.q}” — poprawnie odpowiedziało ${hardest.correctCount} z ${hardest.total} osób (${Math.round(hardest.rate*100)}%).` : "Brak wystarczających danych.";
  }
}
$("exportBtn").addEventListener("click", () => {
  const header = ["Pozycja","Login","Punkty","Czas_sekundy","Odpowiedzi_poprawne_numerami","Odznaki","Wysłano"];
  const data = rows.map((r,i) => [i+1,r.nickname,r.score,r.durationSeconds,(r.answers||[]).map((a,j)=>Number(a)===questions[j]?.correct ? "P"+(j+1)+":tak" : "P"+(j+1)+":nie").join(" | "),getAwards(r).join(", "),r.submittedAt ? new Date(r.submittedAt).toISOString() : ""]);
  const csv = [header,...data].map(row => row.map(v => `"${String(v ?? "").replaceAll('"','""')}"`).join(";")).join("\r\n");
  const blob = new Blob(["\ufeff"+csv], {type:"text/csv;charset=utf-8;"});
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "wyniki-quizu-sarna.csv"; a.click(); URL.revokeObjectURL(a.href);
});


$("clearResultsBtn").addEventListener("click", async () => {
  $("clearStatus").textContent = "";
  const currentUser = auth.currentUser;
  if (!currentUser || !currentUser.email || currentUser.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
    $("clearStatus").textContent = "Ta czynność wymaga zalogowania na konto administratora.";
    return;
  }
  if (rows.length === 0) {
    $("clearStatus").textContent = "Nie ma wyników do usunięcia.";
    return;
  }

  const accepted = window.confirm(`Czy na pewno usunąć wszystkie ${rows.length} zapisane wyniki? Ranking i statystyki zostaną wyczyszczone. Tej operacji nie można cofnąć.`);
  if (!accepted) return;

  const phrase = window.prompt('Aby potwierdzić usunięcie, wpisz dokładnie: USUŃ WYNIKI');
  if (phrase !== "USUŃ WYNIKI") {
    $("clearStatus").textContent = "Anulowano. Wyniki nie zostały usunięte.";
    return;
  }

  const button = $("clearResultsBtn");
  button.disabled = true;
  button.textContent = "Usuwanie wyników…";
  try {
    await remove(ref(db, "submissions"));
    $("clearStatus").textContent = "Wszystkie wyniki zostały usunięte. Panel i statystyki zostały wyczyszczone.";
  } catch (e) {
    console.error(e);
    $("clearStatus").textContent = "Nie udało się usunąć wyników. Sprawdź, czy opublikowano aktualne reguły database.rules.json w Firebase.";
  } finally {
    button.disabled = false;
    button.textContent = "Wyczyść wszystkie wyniki";
  }
});
