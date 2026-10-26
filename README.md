# Quiz o sarnie — GitHub Pages + Firebase

Quiz demonstracyjny dla 17 uczestników: 5 pytań, osobny start dla każdego ucznia, panel administratora z wynikami na żywo, rankingiem i eksportem CSV.

## Pliki
- `index.html` — strona uczestnika.
- `admin.html` — panel prowadzącego (logowanie, wyniki, ranking, eksport CSV).
- `questions.js` — pięć przykładowych pytań i indeksy poprawnych odpowiedzi.
- `firebase-config.js` — konfiguracja aplikacji Firebase.
- `database.rules.json` — początkowe reguły Realtime Database.

## 1. Konfiguracja Firebase
1. Utwórz projekt w [Firebase Console](https://console.firebase.google.com/).
2. Dodaj aplikację internetową i skopiuj konfigurację do `firebase-config.js`.
3. Włącz **Authentication → Sign-in method → Anonymous** oraz **Email/Password**.
4. W Authentication utwórz konto administratora. W pliku `firebase-config.js` wpisz jego e-mail jako `ADMIN_EMAIL`.
5. Utwórz **Realtime Database**. W `database.rules.json` zamień `twoj-adres-admina@example.com` na dokładny adres administratora, a następnie wklej te reguły w zakładce Rules i opublikuj.
6. Uzupełnij `databaseURL` w `firebase-config.js` dokładnym adresem bazy widocznym w Firebase Console.

Nie włączaj publicznego odczytu i zapisu bazy. Reguły pozwalają anonimowemu uczestnikowi wysłać tylko jeden rekord pod jego UID; wyniki są czytelne tylko dla konta administratora. Po zmianie reguł sprawdź je w Firebase Rules Playground.

## 2. Publikacja przez GitHub Pages
1. W repozytorium `gregslowik-a11y/quiz-sarna` otwórz **Settings → Pages**.
2. Jako źródło wybierz gałąź `main` i folder `/(root)`, a następnie zapisz.
3. Po opublikowaniu strona uczestnika będzie dostępna pod adresem `https://gregslowik-a11y.github.io/quiz-sarna/`.
4. Panel administratora: `https://gregslowik-a11y.github.io/quiz-sarna/admin.html`.

## 3. Kod QR
Po opublikowaniu strony skopiuj dokładny adres uczestnika, wygeneruj z niego QR i sprawdź go telefonem przed lekcją. QR powinien prowadzić do strony głównej, nie do `admin.html`.

## 4. Test przed lekcją
- Otwórz stronę uczestnika na dwóch telefonach lub w dwóch przeglądarkach.
- Sprawdź, czy wynik pojawia się w panelu administratora.
- Sprawdź wylogowanie i eksport CSV.
- Ta wersja ogranicza ponowne wysłanie w obrębie anonimowego UID, ale nie potwierdza tożsamości ucznia; inna przeglądarka lub wyczyszczenie danych może utworzyć nowy UID.

## Uwaga: wersja demonstracyjna
Klucz odpowiedzi jest w kodzie JavaScript, a wynik oblicza przeglądarka. Osoba techniczna może zobaczyć poprawne odpowiedzi lub zmodyfikować wynik. To wersja do nieformalnego quizu, nie do egzaminów ani oceniania o wysokiej stawce. Wersja bardziej odporna na manipulacje wymaga sprawdzania odpowiedzi po stronie serwera (np. Cloud Functions).

## Edycja pytań
W pliku `questions.js` zmień treść pytań, cztery warianty odpowiedzi i indeks `correct` (liczony od 0). Po każdej zmianie przetestuj quiz przed użyciem.
