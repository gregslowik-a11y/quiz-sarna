# Quiz o sarnie — GitHub Pages + Firebase

Quiz dla 17 uczestników; adres strony pozostaje bez zmian, więc wydrukowane wcześniej kody QR nadal prowadzą do quizu. Quiz ma 15 pytań: 10 o sarnie i jej życiu oraz 5 łatwych pytań o czaszce. Kolejność pytań i odpowiedzi jest losowana oddzielnie dla każdego uczestnika. W pytaniach o czaszkę pokazują się zdjęcia, zbliżenia i podpisy.

## Funkcje
- 15 pytań z obrazkami, odpowiedziami wielokrotnego wyboru i pytaniami prawda/fałsz.
- Zdjęcia sarny, tropu i młodego koźlęcia.
- 5 łatwych pytań o czaszce ze zdjęciami: parostki, możdżeń, oczodoły, żuchwa i zęby policzkowe.
- Kolejność pytań i wariantów odpowiedzi miesza się dla każdej próby; zapisana kolejność pozwala panelowi poprawnie liczyć wyniki i statystyki.
- Wyjaśnienie edukacyjne po każdej odpowiedzi.
- Odznaki: Mistrz leśnej wiedzy, Leśny ekspert, Leśny odkrywca, Tropiciel śladów i Przyjaciel sarny.
- Panel prowadzącego: ranking, czas, średni wynik, najtrudniejsze pytanie, eksport CSV i przycisk do wyczyszczenia wyników.
- Filtr popularnych niecenzuralnych loginów.

## Pliki
- `index.html` — strona ucznia.
- `admin.html` — panel prowadzącego.
- `questions.js` — 15 pytań i wyjaśnienia.
- `app.js` / `admin.js` — logika quizu i statystyki.
- `firebase-config.js` — konfiguracja projektu.
- `database.rules.json` — reguły Realtime Database.

## Ważne po zmianie na 15 pytań
**Opublikuj zaktualizowane reguły Firebase.** Otwórz Firebase Console → Realtime Database → Rules. Skopiuj całą zawartość pliku `database.rules.json` z repozytorium, wklej ją do edytora reguł i kliknij **Publish**. Reguły muszą pozwalać na wynik do 12 punktów, `questionCount = 12` i zapisywanie 12 odpowiedzi. Jeśli pozostaną stare reguły na 5 pytań, wysyłanie wyników może być odrzucone.

## Przed właściwą lekcją
Wyczyść stare wyniki z wersji 12-pytaniowej w panelu prowadzącego, używając przycisku **Wyczyść wszystkie wyniki**. Potwierdź ostrzeżenie i wpisz `USUŃ WYNIKI`. Dzięki temu ranking i statystyki dotyczą wyłącznie nowej wersji. Operacja jest nieodwracalna; nie usuwa całej bazy ani konta administratora.

## Zdjęcia i licencje
Zdjęcia do pytań o sarnie i jej czaszce są osadzone z Wikimedia Commons, a podpisy wskazują, co należy rozpoznać. Czaszka przedstawia Capreolus capreolus; zbliżenia są kadrowane w przeglądarce.
- „Roe deer eating leaves in Tuntorp 2.jpg” — W.carter, CC0: https://commons.wikimedia.org/wiki/File:Roe_deer_eating_leaves_in_Tuntorp_2.jpg
- „Roe deer tracks on a muddy path in Tuntorp.jpg” — Ann-Sophie Qvarnström, CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Roe_deer_tracks_on_a_muddy_path_in_Tuntorp.jpg
- „Roe deer buck in a clearing in Tuntorp, Brastad 1.jpg” — Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Roe_deer_buck_in_a_clearing_in_Tuntorp,_Brastad_1.jpg
- „Roe deer antler.jpg” — V8powerage, CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Roe_deer_antler.jpg

Zdjęcia czaszek i zębów pochodzą z Wikimedia Commons; niektóre przedstawiają czaszki innych jeleniowatych, więc służą jako ilustracja porównawcza, a nie dokładny model każdej kości sarny.
- „Full deer skull.jpg” — Jbjensen1, CC BY 4.0: https://commons.wikimedia.org/wiki/File:Full_deer_skull.jpg
- „Crânio de corça.jpg” — Cpls, CC BY-SA 4.0, czaszka sarny europejskiej: https://commons.wikimedia.org/wiki/File:Cr%C3%A2nio_de_cor%C3%A7a.jpg
- „Deer Skull 176.jpg” — Chris Light, CC BY-SA 4.0, czaszka mulaka: https://commons.wikimedia.org/wiki/File:Deer_Skull_176.jpg

- „Roe Deer - Doe.jpg” — Caroline Legg, Wikimedia Commons, CC BY 2.0: https://commons.wikimedia.org/wiki/File:Roe_Deer_-_Doe.jpg
- „Deer Hoofprint.jpg” — MaryC2000, Wikimedia Commons, CC BY 4.0: https://commons.wikimedia.org/wiki/File:Deer_Hoofprint.jpg
- „Roe deer fawn (3722435972).jpg” — Gilles San Martin, Wikimedia Commons, CC BY-SA: https://commons.wikimedia.org/wiki/File:Roe_deer_fawn_(3722435972).jpg

## Adresy
- Quiz dla uczniów: https://gregslowik-a11y.github.io/quiz-sarna/
- Panel prowadzącego: https://gregslowik-a11y.github.io/quiz-sarna/admin.html

## Ograniczenie
To edukacyjna zabawa, nie egzamin. Odpowiedzi i klucz są odczytywane po stronie przeglądarki, a filtr loginów nie wykryje wszystkich możliwych wariantów słów.
