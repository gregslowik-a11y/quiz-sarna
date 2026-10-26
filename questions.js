// 15 pytań edukacyjnych: 10 o sarnie i jej życiu oraz 5 łatwych pytań o czaszce.
export const questions = [
  {
    id: "samica",
    q: "Jak nazywa się dorosła samica sarny?",
    a: ["Kozioł", "Koza", "Łania", "Koźlę"],
    correct: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Roe_Deer_-_Doe.jpg",
    imageAlt: "Dorosła samica sarny na łące",
    imageCaption: "Rozpoznaj dorosłą samicę sarny.",
    explanation: "Samicę sarny nazywamy kozą. Łania to samica jelenia szlachetnego, a kozioł to samiec sarny."
  },
  {
    id: "samiec",
    q: "Jak nazywa się dorosły samiec sarny?",
    a: ["Byk", "Kozioł", "Tryk", "Ogier"],
    correct: 1,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roe_deer_buck_in_a_clearing_in_Tuntorp%2C_Brastad_1.jpg?width=1200",
    imageAlt: "Kozioł sarny na skraju leśnej polany",
    imageCaption: "Samiec sarny ma zwykle niewielkie poroże.",
    explanation: "Dorosły samiec sarny to kozioł. Sarna i jeleń to różne gatunki, choć oba należą do jeleniowatych."
  },
  {
    id: "kozle",
    q: "Jak nazywa się młode sarny?",
    a: ["Cielę", "Jagnię", "Koźlę", "Źrebię"],
    correct: 2,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roe_deer_fawn_%283722435972%29.jpg?width=1000",
    imageAlt: "Młode koźlę sarny ukryte w trawie",
    imageCaption: "Jasne plamki pomagają młodemu ukryć się wśród roślin.",
    explanation: "Młodą sarnę nazywamy koźlęciem. Jego cętkowana sierść pomaga mu kamuflować się w trawie."
  },
  {
    id: "pokarm",
    q: "Czym najczęściej żywi się sarna?",
    a: ["Głównie owadami", "Liśćmi, pąkami, pędami i ziołami", "Wyłącznie rybami", "Mięsem innych zwierząt"],
    correct: 1,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roe_deer_eating_leaves_in_Tuntorp_2.jpg?width=1200",
    imageAlt: "Sarna zjadająca liście",
    imageCaption: "Sarna wybiera różne części roślin rosnących w jej środowisku.",
    explanation: "Sarna jest roślinożerna. Zjada między innymi liście, pąki, młode pędy, zioła i inne miękkie części roślin."
  },
  {
    id: "siedlisko",
    q: "Gdzie można spotkać sarnę?",
    a: ["Tylko na pustyni", "Wyłącznie w wysokich górach", "W lasach, na skrajach pól i łąkach", "Tylko w centrum dużych miast"],
    correct: 2,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roe_deer_buck_in_a_clearing_in_Tuntorp%2C_Brastad_1.jpg?width=1200",
    imageAlt: "Sarna na skraju lasu",
    imageCaption: "Skraj lasu zapewnia osłonę oraz dostęp do roślin.",
    explanation: "Sarny spotyka się w lasach, zaroślach, na łąkach i w pobliżu pól. Lubią miejsca, w których mają i pokarm, i schronienie."
  },
  {
    id: "siersc",
    q: "Jaki kolor ma zwykle sierść sarny latem?",
    a: ["Niebieski", "Rudobrązowy", "Całkowicie czarny", "Biały jak śnieg"],
    correct: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Roe_Deer_-_Doe.jpg",
    imageAlt: "Sarna z rudobrązową letnią sierścią",
    imageCaption: "Przyjrzyj się kolorowi sierści na zdjęciu.",
    explanation: "Latem sierść sarny jest zwykle rudobrązowa. W chłodniejszej części roku staje się bardziej szarobrązowa."
  },
  {
    id: "tropy",
    q: "Co przedstawia ślad na zdjęciu?",
    a: ["Odcisk ludzkiego buta", "Ślad ptasiej stopy", "Trop zwierzęcia kopytnego", "Odcisk łapy lisa"],
    correct: 2,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roe_deer_tracks_on_a_muddy_path_in_Tuntorp.jpg?width=1200",
    imageAlt: "Trop racicy na miękkim podłożu",
    imageCaption: "Racice pozostawiają charakterystyczny ślad na ziemi lub śniegu.",
    explanation: "To trop zwierzęcia kopytnego. Ślad pomaga rozpoznać grupę zwierząt, ale czasem do ustalenia gatunku potrzebne są dodatkowe wskazówki."
  },
  {
    id: "bezpieczne-kozle",
    q: "Widzisz samotnie leżące w trawie koźlę. Co najlepiej zrobić?",
    a: ["Zostawić je w spokoju i odejść", "Zabrać je do domu", "Pogłaskać i nakarmić", "Podejść bardzo blisko, by zrobić zdjęcie"],
    correct: 0,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roe_deer_fawn_%283722435972%29.jpg?width=1000",
    imageAlt: "Koźlę ukryte w wysokiej trawie",
    imageCaption: "Młode może czekać w ukryciu, gdy matka żeruje w pobliżu.",
    explanation: "Nie dotykaj ani nie zabieraj koźlęcia — matka może być w pobliżu i wrócić później. Jeśli zwierzę wygląda na ranne albo jest w bezpośrednim niebezpieczeństwie, powiedz dorosłemu."
  },
  {
    id: "pora-aktywnosci",
    q: "O jakiej porze najłatwiej często zaobserwować sarnę?",
    a: ["Tylko w środku dnia", "O świcie i o zmierzchu", "Wyłącznie o północy", "Tylko podczas burzy"],
    correct: 1,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roe_deer_in_morning_mist_Lower_Havel_Valley.jpg?width=1200",
    imageAlt: "Sarna na łące o poranku",
    imageCaption: "Poranek to dobra pora, by wypatrywać zwierząt z daleka i w ciszy.",
    explanation: "Sarny często są aktywne o świcie i o zmierzchu, ale mogą być widywane także o innych porach."
  },
  {
    id: "rodzina",
    q: "Do jakiej rodziny zoologicznej należy sarna?",
    a: ["Psowate", "Jeleniowate", "Kotowate", "Zającowate"],
    correct: 1,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roe_deer_buck_in_a_clearing_in_Tuntorp%2C_Brastad_1.jpg?width=1200",
    imageAlt: "Sarna na leśnej polanie",
    imageCaption: "Sarna należy do tej samej rodziny co między innymi jeleń i łoś.",
    explanation: "Sarna należy do rodziny jeleniowatych. Do tej rodziny zaliczają się także między innymi jeleń szlachetny i łoś."
  },
  {
    id: "parostki",
    q: "Jak nazywa się poroże dorosłego samca sarny?",
    a: ["Wieniec", "Rogi stałe", "Parostki", "Rogi keratynowe"],
    correct: 2,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roe_deer_antler.jpg?width=1200",
    imageAlt: "Poroże sarny",
    imageCaption: "Przyjrzyj się kształtowi niewielkiego poroża sarny.",
    imageZoom: 1.15,
    imagePosition: "center center",
    explanation: "Poroże kozła sarny nazywa się parostkami. Poroże jest zrzucane i odrasta; nie jest tym samym co stałe rogi."
  },
  {
    id: "mozdzen",
    q: "Jak nazywa się kostny wyrostek, z którego wyrasta poroże?",
    a: ["Oczodół", "Możdżeń", "Żuchwa", "Kość nosowa"],
    correct: 1,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cr%C3%A2nio_de_cor%C3%A7a.jpg?width=1200",
    imageAlt: "Czaszka sarny z widoczną częścią czołową",
    imageCaption: "Możdżeń znajduje się na kości czołowej przy nasadzie poroża.",
    imageZoom: 1.35,
    imagePosition: "center 20%",
    explanation: "Możdżeń to kostny wyrostek kości czołowej, na którym rozwija się poroże."
  },
  {
    id: "sarna-a-jelen",
    q: "Prawda czy fałsz: sarna i jeleń szlachetny to ten sam gatunek.",
    a: ["Prawda", "Fałsz"],
    correct: 1,
    type: "truefalse",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Roe_Deer_-_Doe.jpg",
    imageAlt: "Dorosła sarna europejska na łące",
    imageCaption: "Sarna i jeleń szlachetny należą do tej samej rodziny, ale są różnymi gatunkami.",
    explanation: "Fałsz. Sarna europejska i jeleń szlachetny to dwa różne gatunki należące do rodziny jeleniowatych."
  },
  {
    id: "zuchwa",
    q: "Jak nazywa się ruchoma kość dolnej części pyska?",
    a: ["Mózgoczaszka", "Kość nosowa", "Możdżeń", "Żuchwa"],
    correct: 3,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cr%C3%A2nio_de_cor%C3%A7a.jpg?width=1200",
    imageAlt: "Czaszka sarny z widoczną żuchwą",
    imageCaption: "Dolna część pyska jest związana z ruchomą żuchwą.",
    imageZoom: 1.55,
    imagePosition: "center 77%",
    explanation: "Żuchwa jest ruchomą kością dolnej części pyska. Znajdują się w niej dolne siekacze oraz zęby policzkowe."
  },
  {
    id: "zeby",
    q: "Które zęby pomagają sarnie rozcierać pokarm roślinny?",
    a: ["Wyłącznie kły", "Siekacze górne", "Zęby policzkowe — przedtrzonowce i trzonowce", "Kości nosowe"],
    correct: 2,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cr%C3%A2nio_de_cor%C3%A7a.jpg?width=1200",
    imageAlt: "Czaszka sarny z widocznymi zębami policzkowymi",
    imageCaption: "Zęby policzkowe mają szerokie powierzchnie do rozcierania roślin.",
    imageZoom: 1.75,
    imagePosition: "center 77%",
    explanation: "Przedtrzonowce i trzonowce pomagają rozcierać pokarm. U jeleniowatych z przodu górnej szczęki nie ma siekaczy; rośliny odgryzają dolnymi siekaczami opartymi o twardą poduszkę dziąsłową."
  }
];
