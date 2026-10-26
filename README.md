# Quiz o sarnie — GitHub Pages + Firebase

Quiz dla 17 uczestników; adres strony pozostaje bez zmian, więc wcześniej wydrukowane kody QR nadal prowadzą do quizu. Quiz ma 5 pytań, zdjęcia, rundę tropów, sytuację dotyczącą młodej sarny, prawda/fałsz, objaśnienia po odpowiedziach, odznaki oraz panel statystyk klasy.

## Funkcje
- Strona uczestnika: pseudonim, pięć pytań, zdjęcia, informacja zwrotna po sprawdzeniu każdej odpowiedzi.
- Odznaki: Mistrz leśnej wiedzy, Leśny ekspert, Leśny odkrywca, Tropiciel śladów i Przyjaciel sarny.
- Panel prowadzącego: ranking, czas, średni wynik, najtrudniejsze pytanie, odsetek poprawnych odpowiedzi, eksport CSV i przycisk do wyczyszczenia wszystkich wyników z podwójnym potwierdzeniem.
- Usuwanie wyników wymaga reguły `.write` dla administratora w `database.rules.json`. Po zmianie tego pliku trzeba skopiować jego zawartość do Firebase Console → Realtime Database → Rules i kliknąć **Publish**.
- Filtr popularnych niecenzuralnych loginów pozostaje aktywny.

## Pliki
- `index.html` — strona ucznia.
- `admin.html` — panel prowadzącego.
- `questions.js` — pytania i wyjaśnienia.
- `app.js` / `admin.js` — logika quizu i statystyki.
- `firebase-config.js` — konfiguracja projektu.
- `database.rules.json` — reguły Realtime Database.

## Ważne przed lekcją
Ponieważ treść pytań została zmieniona, usuń stare próbne wyniki przed właściwym quizem. Można to zrobić z panelu prowadzącego przyciskiem **Wyczyść wszystkie wyniki**. Wymagane jest potwierdzenie w oknie oraz wpisanie `USUŃ WYNIKI`. Operacja usuwa wszystkie wpisy w `submissions` i nie da się jej cofnąć. Nie usuwa całej bazy ani konta administratora.

## Zdjęcia i licencje
- „Roe Deer - Doe.jpg” — Caroline Legg, Wikimedia Commons, CC BY 2.0: https://commons.wikimedia.org/wiki/File:Roe_Deer_-_Doe.jpg
- „Deer Hoofprint.jpg” — MaryC2000, Wikimedia Commons, CC BY 4.0: https://commons.wikimedia.org/wiki/File:Deer_Hoofprint.jpg
- „Roe deer fawn (3722435972).jpg” — Gilles San Martin, Wikimedia Commons, CC BY-SA: https://commons.wikimedia.org/wiki/File:Roe_deer_fawn_(3722435972).jpg

## Adresy
- Quiz dla uczniów: https://gregslowik-a11y.github.io/quiz-sarna/
- Panel prowadzącego: https://gregslowik-a11y.github.io/quiz-sarna/admin.html

## Ograniczenie
To edukacyjna zabawa, nie egzamin. Odpowiedzi i klucz są odczytywane po stronie przeglądarki, więc użytkownik techniczny może próbować obejść wynik. Filtr loginów także nie wykryje wszystkich możliwych wariantów słów.
