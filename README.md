# Quiz o sarnie — GitHub Pages + Firebase

Quiz dla 17 uczestników; adres strony pozostaje bez zmian, więc wydrukowane wcześniej kody QR nadal prowadzą do quizu. Quiz ma teraz 12 pytań: przyroda, zachowanie w lesie i anatomia czaszki sarny z projektu/prezentacji.

## Funkcje
- 12 pytań z odpowiedziami wielokrotnego wyboru i prawda/fałsz.
- Zdjęcia sarny, tropu i młodego koźlęcia.
- 7 pytań o czaszce: parostki, możdżeń, kości nosowe, oczodoły, szczęka górna, żuchwa i zęby policzkowe.
- Wyjaśnienie edukacyjne po każdej odpowiedzi.
- Odznaki: Mistrz leśnej wiedzy, Leśny ekspert, Leśny odkrywca, Tropiciel śladów i Przyjaciel sarny.
- Panel prowadzącego: ranking, czas, średni wynik, najtrudniejsze pytanie, eksport CSV i przycisk do wyczyszczenia wyników.
- Filtr popularnych niecenzuralnych loginów.

## Pliki
- `index.html` — strona ucznia.
- `admin.html` — panel prowadzącego.
- `questions.js` — 12 pytań i wyjaśnienia.
- `app.js` / `admin.js` — logika quizu i statystyki.
- `firebase-config.js` — konfiguracja projektu.
- `database.rules.json` — reguły Realtime Database.

## Ważne po zmianie na 12 pytań
**Opublikuj zaktualizowane reguły Firebase.** Otwórz Firebase Console → Realtime Database → Rules. Skopiuj całą zawartość pliku `database.rules.json` z repozytorium, wklej ją do edytora reguł i kliknij **Publish**. Reguły muszą pozwalać na wynik do 12 punktów, `questionCount = 12` i zapisywanie 12 odpowiedzi. Jeśli pozostaną stare reguły na 5 pytań, wysyłanie wyników może być odrzucone.

## Przed właściwą lekcją
Wyczyść stare wyniki z wersji 5-pytaniowej w panelu prowadzącego, używając przycisku **Wyczyść wszystkie wyniki**. Potwierdź ostrzeżenie i wpisz `USUŃ WYNIKI`. Dzięki temu ranking i statystyki dotyczą wyłącznie nowej wersji. Operacja jest nieodwracalna; nie usuwa całej bazy ani konta administratora.

## Zdjęcia i licencje
- „Roe Deer - Doe.jpg” — Caroline Legg, Wikimedia Commons, CC BY 2.0: https://commons.wikimedia.org/wiki/File:Roe_Deer_-_Doe.jpg
- „Deer Hoofprint.jpg” — MaryC2000, Wikimedia Commons, CC BY 4.0: https://commons.wikimedia.org/wiki/File:Deer_Hoofprint.jpg
- „Roe deer fawn (3722435972).jpg” — Gilles San Martin, Wikimedia Commons, CC BY-SA: https://commons.wikimedia.org/wiki/File:Roe_deer_fawn_(3722435972).jpg

## Adresy
- Quiz dla uczniów: https://gregslowik-a11y.github.io/quiz-sarna/
- Panel prowadzącego: https://gregslowik-a11y.github.io/quiz-sarna/admin.html

## Ograniczenie
To edukacyjna zabawa, nie egzamin. Odpowiedzi i klucz są odczytywane po stronie przeglądarki, a filtr loginów nie wykryje wszystkich możliwych wariantów słów.
