/* tests.js — test de fin d'unité, Édito A1 unité 1 (format : content.sample/tests.js). */
const TEST_TOPICS = {
  1: ["Les adjectifs de nationalité", "Les articles définis", "Les prépositions + villes et pays", "La négation", "Les nombres", "Compréhension orale", "Compréhension écrite"]
};

TEST_TOPICS[2] = ["Les articles définis et indéfinis", "Les verbes en -er", "L'adjectif quel", "Les professions", "La ville et les transports", "Compréhension orale", "Compréhension écrite"];
TEST_TOPICS[3] = ["Les prépositions de lieu", "La quantité non définie", "Le pronom en", "Au marché", "Au restaurant", "Compréhension orale", "Compréhension écrite"];

const TESTS = {
'2': {
  id: '2', title: "Test — Édito A1 · Unité 2 · On va où ?", titleEn: "Unit 2 test", covers: [2], minutes: 20,
  parts: [
    { key: 'co', title: "Compréhension orale", titleEn: "Listening", points: 20,
      intro: "Une touriste demande son chemin. Écoutez (2 fois maximum), puis répondez.", introEn: "A tourist asks the way. Listen (2 times at most), then answer.",
      audios: [{ title: "Dans la rue", maxPlays: 2, transcript: [
        {who: "La touriste", fr: "Pardon, monsieur. Où est la bibliothèque, s'il vous plaît ?", en: "Excuse me, sir. Where is the library, please?"},
        {who: "L'homme", fr: "Vous allez tout droit et vous prenez la deuxième rue à gauche.", en: "You go straight ahead and you take the second street on the left."},
        {who: "La touriste", fr: "C'est loin ?", en: "Is it far?"},
        {who: "L'homme", fr: "Non, c'est à cinq minutes à pied. La bibliothèque est en face de la poste.", en: "No, it's five minutes on foot. The library is opposite the post office."} ] }],
      items: [
        { type: 'mcq', q: "La touriste cherche :", qEn: "The tourist is looking for:", options: ["la poste", "la bibliothèque", "la gare"], answer: 1, topic: "Compréhension orale", why: "« Où est la bibliothèque ? »" },
        { type: 'mcq', q: "Elle prend :", qEn: "She takes:", options: ["la première rue à droite", "la deuxième rue à gauche"], answer: 1, topic: "Compréhension orale", why: "« la deuxième rue à gauche »" },
        { type: 'tf', q: "C'est loin.", qEn: "It's far.", answer: false, topic: "Compréhension orale", why: "« Non, c'est à cinq minutes à pied. »" } ] },
    { key: 'ce', title: "Compréhension écrite", titleEn: "Reading", points: 20,
      text: { title: "SMS de Luc", kind: "message", fr: ["Salut Fabien ! Pour venir chez moi, tu prends le métro ligne 2 direction Saint-Philibert.", "Tu changes à Gare Lille-Flandres et tu prends le bus 10.", "Tu descends à l'arrêt Voltaire. Mon adresse : 15 rue Saint-André."] },
      items: [
        { type: 'gap', q: "Fabien prend le métro ligne ___.", qEn: "Fabien takes metro line ___.", answer: "2|deux", topic: "Compréhension écrite", why: "« le métro ligne 2 »" },
        { type: 'mcq', q: "Il change à :", qEn: "He changes at:", options: ["Voltaire", "Gare Lille-Flandres", "Saint-Philibert"], answer: 1, topic: "Compréhension écrite", why: "« Tu changes à Gare Lille-Flandres »" },
        { type: 'gap', q: "Luc habite ___ rue Saint-André.", qEn: "Luc lives at ___ rue Saint-André.", answer: "15|quinze", topic: "Compréhension écrite", why: "« 15 rue Saint-André »" } ] },
    { key: 'gv', title: "Grammaire et vocabulaire", titleEn: "Grammar & vocabulary", points: 20,
      items: [
        { type: 'mcq', q: "___ tour Eiffel est à Paris.", qEn: "The Eiffel Tower is in Paris.", options: ["Une", "La", "Les"], answer: 1, topic: "Les articles définis et indéfinis", why: "Une seule tour Eiffel : article défini." },
        { type: 'gap', q: "Nous (visiter) ___ la ville.", qEn: "We visit the city.", answer: "visitons", topic: "Les verbes en -er", why: "nous + -ons" },
        { type: 'mcq', q: "Vous prenez ___ ligne ?", qEn: "Which line do you take?", options: ["quel", "quelle", "quels"], answer: 1, topic: "L'adjectif quel", why: "ligne : féminin singulier → quelle." },
        { type: 'gap', q: "Il est infirmier. Elle est ___ .", qEn: "He is a nurse. She is a nurse.", answer: "infirmière|infirmiere", topic: "Les professions", why: "-er → -ère" },
        { type: 'mcq', q: "Je vais au travail ___ vélo.", qEn: "I go to work by bike.", options: ["en", "à"], answer: 1, topic: "La ville et les transports", why: "à pied, à vélo ; en bus, en métro." } ] },
    { key: 'pe', title: "Production écrite", titleEn: "Writing", points: 20,
      task: { fr: "Vous écrivez un SMS à un ami : vous indiquez l'itinéraire pour aller de la gare à chez vous (transport, arrêt, directions).", en: "You write a text message to a friend: give the route from the station to your home (transport, stop, directions).",
              minWords: 25, maxWords: 50, criteria: ["Saluer", "Indiquer le transport et l'arrêt", "Utiliser à gauche / à droite / tout droit", "Donner son adresse"] } },
    { key: 'po', title: "Production orale", titleEn: "Speaking", points: 20,
      prompts: [ { fr: "Demandez le chemin pour aller à la gare.", en: "Ask the way to the station.", kind: 'answer', seconds: 30 },
                 { fr: "Expliquez comment vous allez au travail ou à l'école.", en: "Explain how you go to work or school.", kind: 'answer', seconds: 40 } ] }
  ]
},
'3': {
  id: '3', title: "Test — Édito A1 · Unité 3 · Qu'est-ce qu'on mange ?", titleEn: "Unit 3 test", covers: [3], minutes: 20,
  parts: [
    { key: 'co', title: "Compréhension orale", titleEn: "Listening", points: 20,
      intro: "Une cliente au marché. Écoutez (2 fois maximum), puis répondez.", introEn: "A customer at the market. Listen (2 times at most), then answer.",
      audios: [{ title: "Au marché", maxPlays: 2, transcript: [
        {who: "Le marchand", fr: "Bonjour madame, qu'est-ce que je vous sers ?", en: "Hello madam, what can I get you?"},
        {who: "La cliente", fr: "Je voudrais un kilo de tomates et trois citrons, s'il vous plaît.", en: "I'd like a kilo of tomatoes and three lemons, please."},
        {who: "Le marchand", fr: "Et avec ça ?", en: "Anything else?"},
        {who: "La cliente", fr: "Ce sera tout. C'est combien ?", en: "That will be all. How much is it?"},
        {who: "Le marchand", fr: "Quatre euros vingt. Vous payez comment ?", en: "Four euros twenty. How are you paying?"},
        {who: "La cliente", fr: "Par carte.", en: "By card."} ] }],
      items: [
        { type: 'gap', q: "La cliente achète un kilo de ___.", qEn: "The customer buys a kilo of ___.", answer: "tomates", topic: "Compréhension orale", why: "« un kilo de tomates »" },
        { type: 'mcq', q: "Elle paie :", qEn: "She pays:", options: ["en espèces", "par carte", "par chèque"], answer: 1, topic: "Compréhension orale", why: "« Par carte. »" },
        { type: 'gap', q: "C'est ___ euros vingt.", qEn: "It's ___ euros twenty.", answer: "quatre|4", topic: "Compréhension orale", why: "« Quatre euros vingt. »" } ] },
    { key: 'ce', title: "Compréhension écrite", titleEn: "Reading", points: 20,
      text: { title: "Le Bistrot du Marché", kind: "menu", fr: ["Entrées : gazpacho 5,30 € — salade de concombres 5,20 €.", "Plats : steak-frites 11 € — bœuf bourguignon 14,30 €.", "Desserts : mousse au chocolat 5,10 €.", "Formule entrée + plat + dessert : 20 €."] },
      items: [
        { type: 'mcq', q: "Le steak-frites coûte :", qEn: "The steak and chips costs:", options: ["5,30 €", "11 €", "14,30 €"], answer: 1, topic: "Compréhension écrite", why: "« steak-frites 11 € »" },
        { type: 'tf', q: "La mousse au chocolat est une entrée.", qEn: "The chocolate mousse is a starter.", answer: false, topic: "Compréhension écrite", why: "C'est un dessert." },
        { type: 'gap', q: "La formule complète coûte ___ €.", qEn: "The full set menu costs ___ €.", answer: "20|vingt", topic: "Compréhension écrite", why: "« 20 € »" } ] },
    { key: 'gv', title: "Grammaire et vocabulaire", titleEn: "Grammar & vocabulary", points: 20,
      items: [
        { type: 'mcq', q: "Je vais ___ boulangerie.", qEn: "I'm going to the bakery.", options: ["au", "à la", "aux"], answer: 1, topic: "Les prépositions de lieu", why: "à + la = à la" },
        { type: 'mcq', q: "Je vais ___ boucher.", qEn: "I'm going to the butcher's.", options: ["au", "chez le"], answer: 1, topic: "Les prépositions de lieu", why: "Une personne : chez le boucher." },
        { type: 'gap', q: "Un café crème, c'est du café et ___ lait.", qEn: "A white coffee is coffee and milk.", answer: "du", topic: "La quantité non définie", why: "lait : masculin → du" },
        { type: 'gap', q: "– Tu veux du sucre ? – Oui, j'___ veux.", qEn: "– Do you want sugar? – Yes, I want some.", answer: "en", topic: "Le pronom en", why: "en remplace « du sucre »." },
        { type: 'mcq', q: "Pour payer, on demande :", qEn: "To pay, you ask for:", options: ["la carte", "l'addition", "le pourboire"], answer: 1, topic: "Au restaurant", why: "« L'addition, s'il vous plaît ! »" } ] },
    { key: 'pe', title: "Production écrite", titleEn: "Writing", points: 20,
      task: { fr: "Un ami vous demande la recette de votre plat préféré. Écrivez les aliments et les quantités (30 à 40 mots).", en: "A friend asks for the recipe of your favourite dish. Write the foods and quantities (30–40 words).",
              minWords: 30, maxWords: 60, criteria: ["Saluer", "Nommer les aliments", "Utiliser du, de la, des, un peu de, beaucoup de", "Donner une quantité précise"] } },
    { key: 'po', title: "Production orale", titleEn: "Speaking", points: 20,
      prompts: [ { fr: "Vous êtes au marché. Achetez trois aliments et demandez le prix.", en: "You are at the market. Buy three foods and ask the price.", kind: 'answer', seconds: 40 },
                 { fr: "Vous êtes au restaurant. Commandez un plat et une boisson.", en: "You are at a restaurant. Order a dish and a drink.", kind: 'answer', seconds: 30 } ] }
  ]
},
'1': {
  id: '1', title: "Test — Édito A1 · Unité 1 · Et vous ?", titleEn: "Unit 1 test", covers: [1], minutes: 20,
  parts: [
    { key: 'co', title: "Compréhension orale", titleEn: "Listening", points: 20,
      intro: "Vous allez entendre deux volontaires de la Francophonie. Écoutez (2 fois maximum), puis répondez.",
      introEn: "You will hear two volunteers of La Francophonie. Listen (2 times at most), then answer.",
      audios: [
        { title: "À la réunion", maxPlays: 2,
          transcript: [
            {who: "Karim", fr: "Bonjour, je m'appelle Karim. Je suis marocain, j'habite à Casablanca.", en: "Hello, my name is Karim. I'm Moroccan, I live in Casablanca."},
            {who: "Anna", fr: "Bonjour Karim ! Moi, c'est Anna. Je suis polonaise, mais je vis en Belgique.", en: "Hello Karim! I'm Anna. I'm Polish, but I live in Belgium."},
            {who: "Karim", fr: "Vous parlez quelles langues ?", en: "Which languages do you speak?"},
            {who: "Anna", fr: "Je parle polonais, français et anglais. Je n'aime pas l'allemand !", en: "I speak Polish, French and English. I don't like German!"},
            {who: "Karim", fr: "Mon numéro, c'est le 06 45 72 91 18.", en: "My number is 06 45 72 91 18."} ] }
      ],
      items: [
        { type: 'mcq', q: "Karim est :", qEn: "Karim is:", options: ["malien", "marocain", "belge"], answer: 1,
          topic: "Compréhension orale", why: "« Je suis marocain »" },
        { type: 'mcq', q: "Anna habite :", qEn: "Anna lives:", options: ["en Pologne", "en Belgique", "au Maroc"], answer: 1,
          topic: "Compréhension orale", why: "« je vis en Belgique »" },
        { type: 'tf', q: "Anna parle allemand.", qEn: "Anna speaks German.", answer: false,
          topic: "Compréhension orale", why: "Elle parle polonais, français et anglais." },
        { type: 'gap', q: "Le numéro de Karim : 06 45 72 ___ 18", qEn: "Karim's number: 06 45 72 ___ 18", answer: "91|quatre-vingt-onze",
          topic: "Les nombres", why: "« 06 45 72 91 18 »" }
      ] },
    { key: 'ce', title: "Compréhension écrite", titleEn: "Reading", points: 20,
      text: { title: "Le site des francophones de Londres", kind: "site", fr: [
        "Bonjour ! Je m'appelle Lucia, j'ai 35 ans et je suis argentine.",
        "Je suis née à Buenos Aires, mais maintenant j'habite à Londres.",
        "Je suis architecte. J'aime la peinture et le cinéma, mais je n'aime pas le sport !",
        "Mon mail : lucia.gomez@edito.fr" ] },
      items: [
        { type: 'gap', q: "Lucia a ___ ans.", qEn: "Lucia is ___ years old.", answer: "35|trente-cinq",
          topic: "Compréhension écrite", why: "« j'ai 35 ans »" },
        { type: 'mcq', q: "Lucia est née :", qEn: "Lucia was born:", options: ["à Londres", "à Buenos Aires", "en France"], answer: 1,
          topic: "Compréhension écrite", why: "« Je suis née à Buenos Aires »" },
        { type: 'tf', q: "Lucia aime le sport.", qEn: "Lucia likes sport.", answer: false,
          topic: "Compréhension écrite", why: "« je n'aime pas le sport »" },
        { type: 'mcq', q: "Sa profession :", qEn: "Her job:", options: ["avocate", "architecte", "médecin"], answer: 1,
          topic: "Compréhension écrite", why: "« Je suis architecte. »" }
      ] },
    { key: 'gv', title: "Grammaire et vocabulaire", titleEn: "Grammar & vocabulary", points: 20,
      items: [
        { type: 'gap', q: "Julia est ___ . (italien)", qEn: "Julia is Italian.", answer: "italienne",
          topic: "Les adjectifs de nationalité", why: "italien → italienne (+ ne)." },
        { type: 'gap', q: "J'aime ___ natation.", qEn: "I like swimming.", answer: "la",
          topic: "Les articles définis", why: "La natation : féminin." },
        { type: 'gap', q: "J'habite ___ Comores.", qEn: "I live in the Comoros.", answer: "aux",
          topic: "Les prépositions + villes et pays", why: "Pays au pluriel : aux." },
        { type: 'gap', q: "Je suis née ___ Vietnam.", qEn: "I was born in Vietnam.", answer: "au",
          topic: "Les prépositions + villes et pays", why: "Le Vietnam : masculin → au." },
        { type: 'mcq', q: "La phrase négative correcte :", qEn: "The correct negative sentence:", options: ["Je ne suis espagnol pas.", "Je ne suis pas espagnol.", "Je suis ne pas espagnol."], answer: 1,
          topic: "La négation", why: "ne + verbe + pas." },
        { type: 'gap', q: "80 = ___", qEn: "80", answer: "quatre-vingts",
          topic: "Les nombres", why: "80 = quatre-vingts (4 × 20)." }
      ] },
    { key: 'pe', title: "Production écrite", titleEn: "Writing", points: 20,
      task: { fr: "Vous assistez à la réunion des volontaires internationaux. Complétez votre fiche : nom, prénom, pays / ville, lieu de naissance, langues parlées. Puis écrivez 3 phrases pour vous présenter.",
              en: "You attend the international volunteers' meeting. Complete your form: surname, first name, country / city, place of birth, languages spoken. Then write 3 sentences to introduce yourself.",
              minWords: 30, maxWords: 60,
              criteria: ["Nom et prénom", "Pays / ville avec la bonne préposition", "Lieu de naissance (je suis né(e) à…)", "Langues parlées (je parle…)"] } },
    { key: 'po', title: "Production orale", titleEn: "Speaking", points: 20,
      prompts: [
        { fr: "Présentez-vous : nom, nationalité, âge, ville.", en: "Introduce yourself: name, nationality, age, city.", kind: 'answer', seconds: 40 },
        { fr: "Demandez à une personne son numéro de téléphone et son adresse mail.", en: "Ask someone for their phone number and email address.", kind: 'answer', seconds: 30 }
      ] }
  ]
}
};
