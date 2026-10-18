/* tests.js — les tests de fin d'unité (test.html). Format : voir content.sample/tests.js.
 * Cinq parties : co (écoute, lue par la voix du navigateur), ce (lecture), gv (grammaire et vocabulaire),
 * pe (production écrite) et po (production orale) — ces deux dernières sont corrigées par le tuteur IA.
 */
const TEST_TOPICS = {
  1: ["Le verbe être", "Les nationalités", "Tu ou vous", "Se présenter", "Compréhension orale", "Compréhension écrite"],
  2: ["Les possessifs", "Le verbe avoir", "La famille et les métiers", "Les nombres de 11 à 20", "Compréhension orale", "Compréhension écrite"],
  3: ["Je voudrais…", "Les articles indéfinis", "À la boulangerie", "Les nombres et les prix", "Compréhension orale", "Compréhension écrite"],
  4: ["L'impératif", "Au, à la, du", "La ville et les directions", "Les transports", "Compréhension orale", "Compréhension écrite"]
};

const TESTS = {
'1': {
  id: '1', title: "Test — Unité 1 · Bonjour ! Je me présente", titleEn: "Unit 1 test", covers: [1], minutes: 15,
  parts: [
    { key: 'co', title: "Compréhension orale", titleEn: "Listening", points: 20,
      intro: "Vous allez entendre deux étudiants au café des langues. Écoutez (2 fois maximum), puis répondez.",
      introEn: "You will hear two students at the language café. Listen (2 times at most), then answer.",
      audios: [
        { title: "Au café des langues", maxPlays: 2,
          transcript: [
            {who: "Emma", fr: "Bonjour ! Je m'appelle Emma. Et toi ?", en: "Hello! My name is Emma. And you?"},
            {who: "Ali", fr: "Salut, Emma ! Moi, c'est Ali. Je suis iranien.", en: "Hi, Emma! I'm Ali. I'm Iranian."},
            {who: "Emma", fr: "Enchantée ! Moi, je suis canadienne. Tu habites à Paris ?", en: "Nice to meet you! I'm Canadian. Do you live in Paris?"},
            {who: "Ali", fr: "Oui, j'habite à Paris. Je viens de Chiraz.", en: "Yes, I live in Paris. I come from Shiraz."} ] }
      ],
      items: [
        { type: 'mcq', q: "Emma est :", qEn: "Emma is:", options: ["française", "canadienne", "iranienne"], answer: 1,
          topic: "Compréhension orale", why: "Emma dit : « Moi, je suis canadienne. »" },
        { type: 'tf', q: "Ali habite à Paris.", qEn: "Ali lives in Paris.", answer: true,
          topic: "Compréhension orale", why: "« Oui, j'habite à Paris. »" },
        { type: 'gap', q: "Ali vient de ___.", qEn: "Ali comes from ___.", answer: "Chiraz|Shiraz",
          topic: "Compréhension orale", why: "« Je viens de Chiraz. »" }
      ] },
    { key: 'ce', title: "Compréhension écrite", titleEn: "Reading", points: 20,
      text: { title: "Le café des langues", kind: "annonce", fr: [
        "Le café des langues de Paris est ouvert le mardi et le jeudi, de 18 h à 21 h.",
        "Venez parler français, anglais, persan ou italien !",
        "C'est gratuit. Une boisson est offerte aux nouveaux." ] },
      items: [
        { type: 'mcq', q: "Le café des langues est ouvert :", qEn: "The language café is open:", options: ["tous les jours", "le mardi et le jeudi", "le week-end"], answer: 1,
          topic: "Compréhension écrite", why: "« ouvert le mardi et le jeudi »" },
        { type: 'tf', q: "On peut parler persan.", qEn: "You can speak Persian.", answer: true,
          topic: "Compréhension écrite", why: "« français, anglais, persan ou italien »" },
        { type: 'tf', q: "C'est cher.", qEn: "It's expensive.", answer: false,
          topic: "Compréhension écrite", why: "« C'est gratuit. »" }
      ] },
    { key: 'gv', title: "Grammaire et vocabulaire", titleEn: "Grammar & vocabulary", points: 20,
      items: [
        { type: 'gap', q: "Je ___ iranienne.", qEn: "I am Iranian.", answer: "suis",
          topic: "Le verbe être", why: "être : je suis." },
        { type: 'gap', q: "Vous ___ français ?", qEn: "Are you French?", answer: "êtes|etes",
          topic: "Le verbe être", why: "être : vous êtes." },
        { type: 'mcq', q: "Sara est ___.", qEn: "Sara is Iranian.", options: ["iranien", "iranienne", "Iranienne"], answer: 1,
          topic: "Les nationalités", why: "Au féminin : iranienne (deux n, sans majuscule)." },
        { type: 'mcq', q: "Au professeur, on dit :", qEn: "To the teacher, you say:", options: ["Salut, ça va ?", "Bonjour, comment allez-vous ?"], answer: 1,
          topic: "Tu ou vous", why: "Avec un professeur, on vouvoie." },
        { type: 'gap', q: "Je m'___ Lucas.", qEn: "My name is Lucas.", answer: "appelle",
          topic: "Se présenter", why: "je m'appelle : deux p, deux l." }
      ] },
    { key: 'pe', title: "Production écrite", titleEn: "Writing", points: 20,
      task: { fr: "Vous écrivez un petit message pour le site du café des langues. Présentez-vous : prénom, nationalité, ville d'origine, ville où vous habitez, langues que vous parlez.",
              en: "You write a short message for the language café's website. Introduce yourself: name, nationality, home town, the city where you live, the languages you speak.",
              minWords: 20, maxWords: 60,
              criteria: ["Saluer", "Dire son prénom", "Dire sa nationalité et d'où on vient", "Dire où on habite", "Dire les langues parlées"] } },
    { key: 'po', title: "Production orale", titleEn: "Speaking", points: 20,
      prompts: [
        { fr: "Présentez-vous : prénom, nationalité, ville.", en: "Introduce yourself: name, nationality, city.", kind: 'answer', seconds: 40 },
        { fr: "Demandez à une personne d'où elle vient.", en: "Ask someone where they come from.", kind: 'answer', seconds: 20 }
      ] }
  ]
},
'2': {
  id: '2', title: "Test — Unité 2 · Ma famille", titleEn: "Unit 2 test", covers: [2], minutes: 15,
  parts: [
    { key: 'co', title: "Compréhension orale", titleEn: "Listening", points: 20,
      intro: "Vous allez entendre Lucas parler de sa famille. Écoutez (2 fois maximum), puis répondez.",
      introEn: "You will hear Lucas talking about his family. Listen (2 times at most), then answer.",
      audios: [
        { title: "La famille de Lucas", maxPlays: 2,
          transcript: [
            {who: "Lucas", fr: "Dans ma famille, nous sommes quatre.", en: "There are four of us in my family."},
            {who: "Lucas", fr: "Mon père s'appelle Marc. Il est médecin.", en: "My father is called Marc. He is a doctor."},
            {who: "Lucas", fr: "Ma mère est avocate.", en: "My mother is a lawyer."},
            {who: "Lucas", fr: "J'ai une sœur, Léa. Elle a quinze ans.", en: "I have a sister, Léa. She is fifteen."} ] }
      ],
      items: [
        { type: 'mcq', q: "Le père de Lucas est :", qEn: "Lucas's father is:", options: ["professeur", "médecin", "avocat"], answer: 1,
          topic: "Compréhension orale", why: "« Il est médecin. »" },
        { type: 'gap', q: "Léa a ___ ans.", qEn: "Léa is ___ years old.", answer: "quinze|15",
          topic: "Compréhension orale", why: "« Elle a quinze ans. »" },
        { type: 'tf', q: "Lucas a deux sœurs.", qEn: "Lucas has two sisters.", answer: false,
          topic: "Compréhension orale", why: "« J'ai une sœur, Léa. »" }
      ] },
    { key: 'ce', title: "Compréhension écrite", titleEn: "Reading", points: 20,
      text: { title: "L'immeuble de Mamie Jo", kind: "lettre", fr: [
        "Bonjour ! Je m'appelle Josette, mais tout le monde dit « Mamie Jo ». J'ai soixante-quinze ans.",
        "J'habite au troisième étage. Mes enfants habitent à Lyon.",
        "J'ai quatre petits-enfants. Le dimanche, ils viennent manger chez moi." ] },
      items: [
        { type: 'gap', q: "Le vrai prénom de Mamie Jo est ___.", qEn: "Mamie Jo's real first name is ___.", answer: "Josette",
          topic: "Compréhension écrite", why: "« Je m'appelle Josette »" },
        { type: 'tf', q: "Ses enfants habitent à Paris.", qEn: "Her children live in Paris.", answer: false,
          topic: "Compréhension écrite", why: "« Mes enfants habitent à Lyon. »" },
        { type: 'mcq', q: "Mamie Jo a ___ petits-enfants.", qEn: "Mamie Jo has ___ grandchildren.", options: ["deux", "trois", "quatre"], answer: 2,
          topic: "Compréhension écrite", why: "« J'ai quatre petits-enfants. »" }
      ] },
    { key: 'gv', title: "Grammaire et vocabulaire", titleEn: "Grammar & vocabulary", points: 20,
      items: [
        { type: 'gap', q: "___ sœur s'appelle Mina. (my)", qEn: "My sister is called Mina.", answer: "ma|Ma",
          topic: "Les possessifs", why: "Sœur est féminin : ma sœur." },
        { type: 'gap', q: "___ parents habitent à Téhéran. (my)", qEn: "My parents live in Tehran.", answer: "mes|Mes",
          topic: "Les possessifs", why: "Au pluriel : mes." },
        { type: 'gap', q: "Il ___ vingt ans.", qEn: "He is twenty.", answer: "a",
          topic: "Le verbe avoir", why: "L'âge avec avoir : il a vingt ans." },
        { type: 'mcq', q: "La sœur de mon père, c'est ma :", qEn: "My father's sister is my:", options: ["mère", "tante", "fille"], answer: 1,
          topic: "La famille et les métiers", why: "La sœur du père ou de la mère : la tante." },
        { type: 'gap', q: "16 = ___", qEn: "16", answer: "seize",
          topic: "Les nombres de 11 à 20", why: "16 se dit seize." }
      ] },
    { key: 'pe', title: "Production écrite", titleEn: "Writing", points: 20,
      task: { fr: "Vous écrivez à Mamie Jo pour présenter votre famille : qui sont les personnes, leur prénom, leur âge et leur métier.",
              en: "You write to Mamie Jo to present your family: who they are, their first names, ages and jobs.",
              minWords: 25, maxWords: 70,
              criteria: ["Présenter au moins trois personnes", "Utiliser mon / ma / mes", "Dire l'âge avec avoir", "Dire le métier sans article"] } },
    { key: 'po', title: "Production orale", titleEn: "Speaking", points: 20,
      prompts: [
        { fr: "Présentez une personne de votre famille.", en: "Present someone in your family.", kind: 'answer', seconds: 40 },
        { fr: "Demandez à un ami s'il a des frères et sœurs.", en: "Ask a friend if they have brothers and sisters.", kind: 'answer', seconds: 20 }
      ] }
  ]
},
'3': {
  id: '3', title: "Test — Unité 3 · À la boulangerie", titleEn: "Unit 3 test", covers: [3], minutes: 15,
  parts: [
    { key: 'co', title: "Compréhension orale", titleEn: "Listening", points: 20,
      intro: "Vous allez entendre un client à la boulangerie. Écoutez (2 fois maximum), puis répondez.",
      introEn: "You will hear a customer at the bakery. Listen (2 times at most), then answer.",
      audios: [
        { title: "À la boulangerie", maxPlays: 2,
          transcript: [
            {who: "La boulangère", fr: "Bonjour, monsieur. Vous désirez ?", en: "Hello, sir. What would you like?"},
            {who: "Karim", fr: "Bonjour. Je voudrais deux baguettes, s'il vous plaît.", en: "Hello. I would like two baguettes, please."},
            {who: "La boulangère", fr: "Deux baguettes. Et avec ça ?", en: "Two baguettes. Anything else?"},
            {who: "Karim", fr: "Une tarte aux pommes. C'est combien ?", en: "An apple pie. How much is it?"},
            {who: "La boulangère", fr: "Ça fait neuf euros.", en: "That's nine euros."} ] }
      ],
      items: [
        { type: 'gap', q: "Karim achète ___ baguettes.", qEn: "Karim buys ___ baguettes.", answer: "deux|2",
          topic: "Compréhension orale", why: "« Je voudrais deux baguettes »" },
        { type: 'mcq', q: "Il prend aussi :", qEn: "He also takes:", options: ["un croissant", "une tarte aux pommes", "un gâteau"], answer: 1,
          topic: "Compréhension orale", why: "« Une tarte aux pommes. »" },
        { type: 'gap', q: "Il paie ___ euros.", qEn: "He pays ___ euros.", answer: "neuf|9",
          topic: "Compréhension orale", why: "« Ça fait neuf euros. »" }
      ] },
    { key: 'ce', title: "Compréhension écrite", titleEn: "Reading", points: 20,
      text: { title: "Boulangerie Dubois", kind: "annonce", fr: [
        "Boulangerie Dubois — ouverte du mardi au dimanche, de 7 h à 20 h. Fermée le lundi.",
        "Une baguette : 1,30 €. Un croissant : 1,20 €. Un pain au chocolat : 1,40 €.",
        "Le samedi : un croissant offert pour trois croissants achetés !" ] },
      items: [
        { type: 'tf', q: "La boulangerie est fermée le lundi.", qEn: "The bakery is closed on Mondays.", answer: true,
          topic: "Compréhension écrite", why: "« Fermée le lundi. »" },
        { type: 'mcq', q: "Le pain au chocolat coûte :", qEn: "The chocolate pastry costs:", options: ["1,20 €", "1,30 €", "1,40 €"], answer: 2,
          topic: "Compréhension écrite", why: "« Un pain au chocolat : 1,40 €. »" },
        { type: 'mcq', q: "Le samedi, pour trois croissants achetés :", qEn: "On Saturdays, for three croissants bought:", options: ["un croissant est offert", "une baguette est offerte", "rien"], answer: 0,
          topic: "Compréhension écrite", why: "« un croissant offert pour trois croissants achetés »" }
      ] },
    { key: 'gv', title: "Grammaire et vocabulaire", titleEn: "Grammar & vocabulary", points: 20,
      items: [
        { type: 'gap', q: "Je ___ une baguette, s'il vous plaît.", qEn: "I would like a baguette, please.", answer: "voudrais",
          topic: "Je voudrais…", why: "La formule polie : je voudrais." },
        { type: 'gap', q: "___ tarte, s'il vous plaît.", qEn: "A pie, please.", answer: "une|Une",
          topic: "Les articles indéfinis", why: "Tarte est féminin : une tarte." },
        { type: 'gap', q: "___ croissants, s'il vous plaît.", qEn: "Some croissants, please.", answer: "des|Des",
          topic: "Les articles indéfinis", why: "Au pluriel : des." },
        { type: 'mcq', q: "Le repas du matin, c'est :", qEn: "The morning meal is:", options: ["le dîner", "le petit-déjeuner", "le goûter"], answer: 1,
          topic: "À la boulangerie", why: "Le matin : le petit-déjeuner." },
        { type: 'gap', q: "60 = ___", qEn: "60", answer: "soixante",
          topic: "Les nombres et les prix", why: "60 se dit soixante." }
      ] },
    { key: 'pe', title: "Production écrite", titleEn: "Writing", points: 20,
      task: { fr: "Vous écrivez le dialogue entre vous et le boulanger : saluez, commandez deux ou trois choses, demandez le prix, payez et remerciez.",
              en: "You write the dialogue between you and the baker: greet, order two or three things, ask the price, pay and say thank you.",
              minWords: 20, maxWords: 60,
              criteria: ["Saluer", "Commander poliment (je voudrais, s'il vous plaît)", "Utiliser un / une / des", "Demander le prix", "Remercier"] } },
    { key: 'po', title: "Production orale", titleEn: "Speaking", points: 20,
      prompts: [
        { fr: "Vous êtes à la boulangerie. Commandez votre petit-déjeuner.", en: "You are at the bakery. Order your breakfast.", kind: 'answer', seconds: 30 },
        { fr: "Demandez le prix et remerciez.", en: "Ask the price and say thank you.", kind: 'answer', seconds: 20 }
      ] }
  ]
},
'4': {
  id: '4', title: "Test — Unité 4 · En ville", titleEn: "Unit 4 test", covers: [4], minutes: 15,
  parts: [
    { key: 'co', title: "Compréhension orale", titleEn: "Listening", points: 20,
      intro: "Vous allez entendre une touriste demander son chemin. Écoutez (2 fois maximum), puis répondez.",
      introEn: "You will hear a tourist asking the way. Listen (2 times at most), then answer.",
      audios: [
        { title: "Dans la rue", maxPlays: 2,
          transcript: [
            {who: "La touriste", fr: "Pardon, madame. Où est la pharmacie, s'il vous plaît ?", en: "Excuse me, madam. Where is the pharmacy, please?"},
            {who: "La dame", fr: "Allez tout droit, puis tournez à gauche.", en: "Go straight ahead, then turn left."},
            {who: "La touriste", fr: "C'est loin ?", en: "Is it far?"},
            {who: "La dame", fr: "Non, c'est à cinq minutes à pied. La pharmacie est à côté de la banque.", en: "No, it's five minutes on foot. The pharmacy is next to the bank."} ] }
      ],
      items: [
        { type: 'mcq', q: "La touriste cherche :", qEn: "The tourist is looking for:", options: ["la gare", "la pharmacie", "le musée"], answer: 1,
          topic: "Compréhension orale", why: "« Où est la pharmacie ? »" },
        { type: 'mcq', q: "Après « tout droit », elle tourne :", qEn: "After going straight ahead, she turns:", options: ["à gauche", "à droite"], answer: 0,
          topic: "Compréhension orale", why: "« puis tournez à gauche »" },
        { type: 'tf', q: "La pharmacie est à côté de la banque.", qEn: "The pharmacy is next to the bank.", answer: true,
          topic: "Compréhension orale", why: "« à côté de la banque »" }
      ] },
    { key: 'ce', title: "Compréhension écrite", titleEn: "Reading", points: 20,
      text: { title: "Le message de Lucas", kind: "message", fr: [
        "Salut Sara ! Pour venir chez moi, prends la ligne 4, direction Mairie de Montrouge.",
        "Descends à Odéon. Sors, va tout droit et tourne à droite dans la rue de Seine.",
        "J'habite au numéro 12, en face du café. À samedi !" ] },
      items: [
        { type: 'gap', q: "Sara prend la ligne ___.", qEn: "Sara takes line ___.", answer: "4|quatre",
          topic: "Compréhension écrite", why: "« prends la ligne 4 »" },
        { type: 'mcq', q: "Elle descend à :", qEn: "She gets off at:", options: ["Odéon", "Montrouge", "Châtelet"], answer: 0,
          topic: "Compréhension écrite", why: "« Descends à Odéon. »" },
        { type: 'tf', q: "Lucas habite en face du parc.", qEn: "Lucas lives opposite the park.", answer: false,
          topic: "Compréhension écrite", why: "« en face du café »" }
      ] },
    { key: 'gv', title: "Grammaire et vocabulaire", titleEn: "Grammar & vocabulary", points: 20,
      items: [
        { type: 'gap', q: "(tourner) ___ à droite, s'il vous plaît.", qEn: "Turn right, please.", answer: "Tournez|tournez",
          topic: "L'impératif", why: "Avec vous : tournez." },
        { type: 'gap', q: "(prendre) ___ la ligne 1. (vous)", qEn: "Take line 1.", answer: "Prenez|prenez",
          topic: "L'impératif", why: "Prendre, avec vous : prenez." },
        { type: 'mcq', q: "Je vais ___ musée.", qEn: "I'm going to the museum.", options: ["à le", "au", "à la"], answer: 1,
          topic: "Au, à la, du", why: "à + le = au." },
        { type: 'mcq', q: "Le musée est en face ___ parc.", qEn: "The museum is opposite the park.", options: ["de le", "du", "de la"], answer: 1,
          topic: "Au, à la, du", why: "de + le = du." },
        { type: 'gap', q: "Je vais au travail ___ métro.", qEn: "I go to work by metro.", answer: "en",
          topic: "Les transports", why: "en métro, en bus ; mais à pied, à vélo." }
      ] },
    { key: 'pe', title: "Production écrite", titleEn: "Writing", points: 20,
      task: { fr: "Un ami vient chez vous pour la première fois. Écrivez-lui un message : quelle ligne de métro, où descendre, et le chemin à pied jusqu'à chez vous.",
              en: "A friend is visiting you for the first time. Write them a message: which metro line, where to get off, and the way on foot to your home.",
              minWords: 25, maxWords: 70,
              criteria: ["Saluer", "Donner la ligne et la station", "Utiliser l'impératif (prends, descends, tourne…)", "Utiliser à gauche / à droite / tout droit / en face de"] } },
    { key: 'po', title: "Production orale", titleEn: "Speaking", points: 20,
      prompts: [
        { fr: "Demandez où est la gare et si c'est loin.", en: "Ask where the station is and whether it is far.", kind: 'answer', seconds: 30 },
        { fr: "Expliquez le chemin de la gare au musée.", en: "Explain the way from the station to the museum.", kind: 'answer', seconds: 40 }
      ] }
  ]
}
};
