/* ATELIERS — Édito A1 unité 1 (livre p. 31 : réaliser une fiche d'identité). */
const ATELIERS = {
1: [
  { id: 'e1w-1', kind: 'formulaire',
    title: "La fiche d'identité d'une personnalité francophone", titleEn: "The identity card of a French-speaking celebrity",
    prompt: "Choisissez une célébrité francophone (un artiste, un acteur, un sportif…). Écrivez sa fiche : prénom et nom, nationalité, profession, âge, lieu de naissance, pays et ville, langues parlées. Puis présentez-la en 3 phrases.",
    promptEn: "Choose a French-speaking celebrity (an artist, an actor, a sportsperson…). Write their card: name, nationality, job, age, place of birth, country and city, languages. Then present them in 3 sentences.",
    minWords: 30, maxWords: 70,
    criteria: ["Nom, nationalité, profession", "L'âge avec avoir", "Le lieu de naissance (né(e) à…)", "La ville / le pays avec à, au, en, aux", "Les langues parlées"],
    phrases: [
      {fr: "Il s'appelle… / Elle s'appelle…", en: "His / Her name is…"},
      {fr: "Il est belge. Il est chanteur.", en: "He is Belgian. He is a singer."},
      {fr: "Il a … ans.", en: "He is … years old."},
      {fr: "Il est né à Etterbeek, en Belgique.", en: "He was born in Etterbeek, in Belgium."},
      {fr: "Il vit à Bruxelles. Il parle français.", en: "He lives in Brussels. He speaks French."}
    ],
    model: {fr: "Nom : Stromae. Nationalité : belge. Profession : chanteur. Né le 12 mars 1985 à Etterbeek (Belgique). Il vit à Bruxelles, en Belgique. Il parle français. Il s'appelle Stromae, il est belge et il est chanteur. Il est né en Belgique et il habite à Bruxelles.",
            en: "Name: Stromae. Nationality: Belgian. Job: singer. Born on 12 March 1985 in Etterbeek (Belgium). He lives in Brussels, Belgium. He speaks French. His name is Stromae, he is Belgian and he is a singer. He was born in Belgium and he lives in Brussels."},
    focus: ["Les adjectifs de nationalité", "Les prépositions + villes et pays"] }
]
};
