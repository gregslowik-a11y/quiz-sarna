// Quiz edukacyjny o sarnie: pięć pytań, wyjaśnienie po każdej odpowiedzi.
// Zdjęcia pochodzą z Wikimedia Commons; informacje o autorach i licencjach są w README.md.
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
    explanation: "Dorosły samiec sarny to kozioł. Sarna i jeleń szlachetny są różnymi gatunkami, chociaż oba należą do rodziny jeleniowatych."
  },
  {
    id: "tropy",
    q: "Leśny detektyw: co najlepiej przedstawia ślad na zdjęciu?",
    a: ["Trop zwierzęcia kopytnego", "Odcisk łapy lisa", "Ślad ptasiej stopy", "Odcisk ludzkiego buta"],
    correct: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Deer_Hoofprint.jpg",
    imageAlt: "Odcisk kopyta zwierzęcia na ziemi",
    imageCaption: "Ślady na miękkim podłożu mogą pomóc rozpoznać, jakie zwierzę tędy przechodziło.",
    explanation: "To trop, czyli ślad pozostawiony przez zwierzę. Odciski racic mają charakterystyczny kształt; sam jeden trop nie zawsze pozwala pewnie ustalić gatunek."
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
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Roe_deer_fawn_%283722435972%29.jpg",
    imageAlt: "Młoda sarna ukryta w trawie",
    imageCaption: "Młode może leżeć nieruchomo i czekać, aż wróci matka.",
    explanation: "Nie dotykaj ani nie zabieraj koźlęcia — matka może żerować w oddaleniu i wrócić później. Jeśli zwierzę jest wyraźnie ranne lub znajduje się w bezpośrednim niebezpieczeństwie, powiedz dorosłemu, by skontaktował się z odpowiednimi służbami."
  },
  {
    id: "pokarm",
    q: "Prawda czy fałsz: sarna jest roślinożercą i zjada między innymi liście, pędy oraz zioła.",
    a: ["Prawda", "Fałsz"],
    correct: 0,
    type: "truefalse",
    explanation: "To prawda. Sarna jest roślinożerna; jej pokarm obejmuje między innymi liście, pąki, młode pędy i rośliny zielne. Dieta zmienia się wraz z porą roku."
  }
];
