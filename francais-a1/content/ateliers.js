/* ============================================================
   ATELIERS — l'« Atelier d'écriture » : une production écrite par unité, corrigée par le tuteur.
   Format : voir content.sample/ateliers.js.
   ============================================================ */
const ATELIERS = {
1: [
  { id: 'u1w-1', kind: 'post',
    title: "Je me présente au café des langues", titleEn: "Introducing myself at the language café",
    prompt: "Vous écrivez un petit message sur le site du café des langues. Saluez, donnez votre prénom, votre nationalité, votre ville d'origine et la ville où vous habitez.",
    promptEn: "You write a short message on the language café's website. Greet, give your name, nationality, home town and the city where you live.",
    minWords: 20, maxWords: 50,
    criteria: ["Saluer", "Dire son prénom", "Dire sa nationalité", "Dire d'où on vient et où on habite"],
    phrases: [
      {fr: "Bonjour à tous !", en: "Hello everyone!"},
      {fr: "Je m'appelle…", en: "My name is…"},
      {fr: "Je suis iranienne.", en: "I am Iranian."},
      {fr: "Je viens de Téhéran et j'habite à Paris.", en: "I come from Tehran and I live in Paris."},
      {fr: "À bientôt !", en: "See you soon!"}
    ],
    model: {fr: "Bonjour à tous ! Je m'appelle Sara. Je suis iranienne, je viens de Téhéran. J'habite à Paris. Je parle persan et anglais, et j'apprends le français. À bientôt !",
            en: "Hello everyone! My name is Sara. I'm Iranian, I come from Tehran. I live in Paris. I speak Persian and English, and I'm learning French. See you soon!"},
    focus: ["Le verbe être", "Les nationalités", "Se présenter"] }
],
2: [
  { id: 'u2w-1', kind: 'message',
    title: "Ma famille, pour Mamie Jo", titleEn: "My family, for Mamie Jo",
    prompt: "Mamie Jo veut connaître votre famille. Écrivez-lui un message : présentez trois personnes (prénom, âge, métier).",
    promptEn: "Mamie Jo wants to know about your family. Write her a message: present three people (name, age, job).",
    minWords: 25, maxWords: 60,
    criteria: ["Présenter trois personnes", "Utiliser mon / ma / mes", "Dire l'âge avec avoir", "Dire le métier"],
    phrases: [
      {fr: "Chère Mamie Jo,", en: "Dear Mamie Jo,"},
      {fr: "Voici ma famille.", en: "Here is my family."},
      {fr: "Mon père s'appelle… Il a … ans.", en: "My father is called… He is … years old."},
      {fr: "Ma sœur est étudiante.", en: "My sister is a student."},
      {fr: "Bises,", en: "Love,"}
    ],
    model: {fr: "Chère Mamie Jo, voici ma famille. Mon père s'appelle Reza, il a cinquante ans et il est professeur. Ma mère est ingénieure. Ma sœur Mina a dix ans. Bises, Sara",
            en: "Dear Mamie Jo, here is my family. My father is called Reza, he is fifty and he is a teacher. My mother is an engineer. My sister Mina is ten. Love, Sara"},
    focus: ["Les possessifs", "Le verbe avoir", "La famille et les métiers"] }
],
3: [
  { id: 'u3w-1', kind: 'message',
    title: "Une commande pour la boulangerie", titleEn: "An order for the bakery",
    prompt: "Vous écrivez à la boulangerie Dubois pour commander le petit-déjeuner de samedi : saluez, commandez trois choses, demandez le prix et remerciez.",
    promptEn: "You write to the Dubois bakery to order Saturday's breakfast: greet, order three things, ask the price and say thank you.",
    minWords: 20, maxWords: 50,
    criteria: ["Saluer", "Commander poliment (je voudrais)", "Utiliser un / une / des", "Demander le prix", "Remercier"],
    phrases: [
      {fr: "Bonjour monsieur,", en: "Hello sir,"},
      {fr: "Je voudrais commander pour samedi :", en: "I would like to order for Saturday:"},
      {fr: "une baguette et des croissants", en: "a baguette and some croissants"},
      {fr: "C'est combien, s'il vous plaît ?", en: "How much is it, please?"},
      {fr: "Merci beaucoup !", en: "Thank you very much!"}
    ],
    model: {fr: "Bonjour monsieur, je voudrais commander pour samedi matin : une baguette, quatre croissants et une tarte aux pommes, s'il vous plaît. C'est combien ? Merci beaucoup ! Sara",
            en: "Hello sir, I would like to order for Saturday morning: a baguette, four croissants and an apple pie, please. How much is it? Thank you very much! Sara"},
    focus: ["Je voudrais…", "Les articles indéfinis", "À la boulangerie"] }
],
4: [
  { id: 'u4w-1', kind: 'message',
    title: "Le chemin jusqu'à chez moi", titleEn: "The way to my home",
    prompt: "Un ami vient chez vous samedi. Écrivez-lui le chemin : la ligne de métro, la station où descendre, puis le chemin à pied.",
    promptEn: "A friend is coming to your place on Saturday. Write them the way: the metro line, the station to get off at, then the way on foot.",
    minWords: 25, maxWords: 60,
    criteria: ["Donner la ligne et la direction", "Dire où descendre", "Utiliser l'impératif", "Utiliser à gauche / à droite / tout droit"],
    phrases: [
      {fr: "Salut !", en: "Hi!"},
      {fr: "Prends la ligne 4, direction…", en: "Take line 4, towards…"},
      {fr: "Descends à…", en: "Get off at…"},
      {fr: "Tourne à gauche et va tout droit.", en: "Turn left and go straight ahead."},
      {fr: "J'habite en face de…", en: "I live opposite…"}
    ],
    model: {fr: "Salut Lucas ! Prends la ligne 1, direction Château de Vincennes. Descends à Bastille. Sors, tourne à gauche et va tout droit. J'habite au numéro 8, en face de la pharmacie. À samedi !",
            en: "Hi Lucas! Take line 1, towards Château de Vincennes. Get off at Bastille. Go out, turn left and go straight ahead. I live at number 8, opposite the pharmacy. See you Saturday!"},
    focus: ["L'impératif", "La ville et les directions", "Les transports"] }
]
};
