// 12 pytań: przyroda, tropy i anatomia czaszki sarny.
export const questions = [
  {
    id: "samica",
    q: "Na zdjęciu widzisz dorosłą samicę sarny. Jak się nazywa?",
    a: ["Łania", "Koza", "Kozioł", "Koźlę"],
    correct: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Roe_Deer_-_Doe.jpg",
    imageAlt: "Dorosła samica sarny na łące",
    imageCaption: "Przyjrzyj się budowie i wyglądowi dorosłej sarny.",
    explanation: "Samicę sarny nazywamy kozą. Łania to samica jelenia szlachetnego, a kozioł to samiec sarny."
  },
  {
    id: "samiec",
    q: "Jak nazywa się dorosły samiec sarny?",
    a: ["Kozioł", "Byk", "Tryk", "Ogier"],
    correct: 0,
    explanation: "Dorosły samiec sarny to kozioł. Sarna i jeleń szlachetny są różnymi gatunkami z rodziny jeleniowatych."
  },
  {
    id: "tropy",
    q: "Leśny detektyw: co najlepiej przedstawia ślad na zdjęciu?",
    a: ["Trop zwierzęcia kopytnego", "Odcisk łapy lisa", "Ślad ptasiej stopy", "Odcisk ludzkiego buta"],
    correct: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Deer_Hoofprint.jpg",
    imageAlt: "Odcisk kopyta zwierzęcia na ziemi",
    imageCaption: "Ślady na miękkim podłożu mogą pomóc rozpoznać, jakie zwierzę tędy przechodziło.",
    explanation: "To trop zwierzęcia kopytnego. Odciski racic mają charakterystyczny kształt, ale jeden trop nie zawsze wystarcza do pewnego określenia gatunku."
  },
  {
    id: "kozle",
    q: "Widzisz samotnie leżące w trawie młode koźlę. Co najlepiej zrobić?",
    a: [
      "Zostawić je w spokoju i spokojnie odejść",
      "Zabrać je do domu",
      "Pogłaskać i nakarmić",
      "Podejść bardzo blisko, by zrobić zdjęcie"
    ],
    correct: 0,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roe_deer_fawn_%283722435972%29.jpg",
    imageAlt: "Młoda sarna ukryta w trawie",
    imageCaption: "Młode może leżeć nieruchomo i czekać, aż wróci matka.",
    explanation: "Nie dotykaj ani nie zabieraj koźlęcia — matka może żerować w oddaleniu i wrócić później. Jeśli zwierzę jest ranne lub w bezpośrednim niebezpieczeństwie, powiedz dorosłemu."
  },
  {
    id: "pokarm",
    q: "Prawda czy fałsz: sarna jest roślinożercą i zjada między innymi liście, pędy oraz zioła.",
    a: ["Prawda", "Fałsz"],
    correct: 0,
    type: "truefalse",
    explanation: "To prawda. Sarna jest roślinożerna; jej pokarm obejmuje m.in. liście, pąki, młode pędy i rośliny zielne."
  },
  {
    id: "parostki",
    q: "Jak nazywa się poroże dorosłego samca sarny?",
    a: ["Parostki", "Wieniec", "Rogi stałe", "Rogi keratynowe"],
    correct: 0,
    explanation: "Poroże kozła sarny nazywa się parostkami. Termin „wieniec” stosuje się zwykle do poroża dorosłego jelenia szlachetnego."
  },
  {
    id: "mozdzen",
    q: "Jak nazywa się kostny wyrostek na czaszce, z którego wyrasta poroże?",
    a: ["Możdżeń", "Oczodół", "Żuchwa", "Kość nosowa"],
    correct: 0,
    explanation: "Możdżeń to kostny wyrostek kości czołowej, na którym rozwija się poroże."
  },
  {
    id: "mozgoczaszka",
    q: "Który element czaszki otacza i chroni mózg?",
    a: ["Mózgoczaszka", "Kości nosowe", "Żuchwa", "Zęby policzkowe"],
    correct: 0,
    explanation: "Mózgoczaszka tworzy ochronną część czaszki, w której znajduje się mózg."
  },
  {
    id: "oczodoly",
    q: "Do czego służą oczodoły widoczne po bokach czaszki?",
    a: [
      "Mieszczą i chronią narządy wzroku",
      "Służą do rozcierania pokarmu",
      "Są miejscem wyrastania poroża",
      "Łączą zęby z żuchwą"
    ],
    correct: 0,
    explanation: "Oczodoły to zagłębienia czaszki mieszczące gałki oczne i związane z nimi struktury."
  },
  {
    id: "zuchwa",
    q: "Jak nazywa się ruchoma kość dolnej części pyska?",
    a: ["Żuchwa", "Możdżeń", "Kość nosowa", "Mózgoczaszka"],
    correct: 0,
    explanation: "Żuchwa jest ruchomą kością dolnej części pyska. Znajdują się w niej dolne siekacze i zęby policzkowe."
  },
  {
    id: "poroże",
    q: "Z jakiej tkanki zbudowane jest poroże sarny?",
    a: ["Z tkanki kostnej", "Z keratyny jak pazury", "Z zębiny", "Z chrząstki przez całe życie"],
    correct: 0,
    explanation: "Poroże jest strukturą kostną. Nie jest tym samym co stałe rogi zbudowane z kostnego rdzenia pokrytego keratyną."
  },
  {
    id: "zeby",
    q: "Które zęby pomagają sarnie rozcierać pokarm roślinny?",
    a: [
      "Zęby policzkowe, w tym przedtrzonowe i trzonowe",
      "Wyłącznie kły",
      "Siekacze górne",
      "Zęby służące do wyrastania poroża"
    ],
    correct: 0,
    explanation: "Zęby policzkowe mają powierzchnie przystosowane do rozcierania roślin. U jeleniowatych z przodu górnej szczęki nie ma siekaczy — pokarm odgryzają dolnymi siekaczami opartymi o twardą poduszkę dziąsłową."
  }
];
