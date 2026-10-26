import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
import { firebaseConfig, ADMIN_EMAIL } from "./firebase-config.js";

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

function render(data) {
  rows = Object.entries(data).map(([uid, r]) => ({uid, ...r}))
    .sort((a,b) => (b.score||0)-(a.score||0) || (a.durationSeconds||0)-(b.durationSeconds||0) || String(a.nickname).localeCompare(String(b.nickname), "pl"));
  $("count").textContent = `${rows.length}/17`;
  $("topScore").textContent = rows.length ? `${rows[0].score}/5` : "—";
  $("winnerName").textContent = rows.length ? rows[0].nickname : "—";
  $("summary").textContent = rows.length === 17 ? "Wszyscy uczestnicy zakończyli test." : `Otrzymano ${rows.length} z 17 zgłoszeń.`;
  const body = $("resultsBody"); body.replaceChildren();
  if (!rows.length) {
    const tr = document.createElement("tr"), td = document.createElement("td");
    td.colSpan = 6; td.textContent = "Brak wyników."; tr.append(td); body.append(tr); return;
  }
  rows.forEach((r, i) => {
    const tr = document.createElement("tr");
    const vals = [i+1, r.nickname || "—", `${r.score ?? 0}/5`, fmt(r.durationSeconds), (r.answers||[]).map(x => Number(x)+1).join(", "), safeTime(r.submittedAt)];
    vals.forEach(v => { const td = document.createElement("td"); td.textContent = v; if (i===0) td.classList.add("leader"); tr.append(td); });
    body.append(tr);
  });
}
$("exportBtn").addEventListener("click", () => {
  const header = ["Pozycja","Login","Punkty","Czas_sekundy","Odpowiedzi_1-5","Wysłano"];
  const data = rows.map((r,i) => [i+1,r.nickname,r.score,r.durationSeconds,(r.answers||[]).map(x=>Number(x)+1).join("-"),r.submittedAt ? new Date(r.submittedAt).toISOString() : ""]);
  const csv = [header,...data].map(row => row.map(v => `"${String(v ?? "").replaceAll('"','""')}"`).join(";")).join("\r\n");
  const blob = new Blob(["\ufeff"+csv], {type:"text/csv;charset=utf-8;"});
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "wyniki-quizu-sarna.csv"; a.click(); URL.revokeObjectURL(a.href);
});