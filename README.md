# Quiz o sarnie — GitHub Pages + Firebase

Quiz dla 17 uczestników; adres strony pozostaje bez zmian, więc wcześniej wydrukowane kody QR nadal prowadzą do quizu. Quiz ma 5 pytań, zdjęcia, rundę tropów, sytuację dotyczącą młodej sarny, prawda/fałsz, objaśnienia po odpowiedziach, odznaki oraz panel statystyk klasy.

## Funkcje
- Strona uczestnika: pseudonim, pięć pytań, zdjęcia, informacja zwrotna po sprawdzeniu każdej odpowiedzi.
- Odznaki: Mistrz leśnej wiedzy, Leśny ekspert, Leśny odkrywca, Tropiciel śladów i Przyjaciel sarny.
- Panel prowadzącego: ranking, czas, średni wynik, najtrudniejsze pytanie, odsetek poprawnych odpowiedzi i eksport CSV.
- Filtr popularnych niecenzuralnych loginów pozostaje aktywny.

## Pliki
- `index.html` — strona ucznia.
- `admin.html` — panel prowadzącego.
- `questions.js` — pytania i wyjaśnienia.
- `app.js` / `admin.js` — logika quizu i statystyki.
- `firebase-config.js` — konfiguracja projektu.
- `database.rules.json` — reguły Realtime Database.

## Ważne przed lekcją
Ponieważ treść pytań została zmieniona, usuń stare próbne wyniki z węzła `submissions` w Firebase przed właściwym quizem. Dzięki temu statystyki pytań będą liczone wyłącznie dla nowej wersji. Nie usuwaj całej bazy ani konta administratora.

## Zdjęcia i licencje
- „Roe Deer - Doe.jpg” — Caroline Legg, Wikimedia Commons, CC BY 2.0: https://commons.wikimedia.org/wiki/File:Roe_Deer_-_Doe.jpg
- „Deer Hoofprint.jpg” — MaryC2000, Wikimedia Commons, CC BY 4.0: https://commons.wikimedia.org/wiki/File:Deer_Hoofprint.jpg
- „Roe deer fawn (3722435972).jpg” — Gilles San Martin, Wikimedia Commons, CC BY-SA: https://commons.wikimedia.org/wiki/File:Roe_deer_fawn_(3722435972).jpg

## Adresy
- Quiz dla uczniów: https://gregslowik-a11y.github.io/quiz-sarna/
- Panel prowadzącego: https://gregslowik-a11y.github.io/quiz-sarna/admin.html

## Ograniczenie
To edukacyjna zabawa, nie egzamin. Odpowiedzi i klucz są odczytywane po stronie przeglądarki, więc użytkownik techniczny może próbować obejść wynik. Filtr loginów także nie wykryje wszystkich możliwych wariantów słów.
