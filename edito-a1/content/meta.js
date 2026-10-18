/* ============================================================
   COURSE — Édito A1 (Didier, 2016). Adaptation personnelle : unité 1 pour l'instant.
   Ajoutez les unités suivantes ici (jusqu'à 5) et dans units.html.
   ============================================================ */
window.COURSE = {
  name: "Édito A1",
  book: { title: "Édito A1", subtitle: "Méthode de français · Didier", cover: "#1D7A5A" },
  next: "Bienvenue chez moi !",
  revisionSub: u => `Édito A1 · ${u.pages}`,
  revisionTitle: (n, u) => `Édito A1 · Unité ${n} · ${u.titre}`,
  revisionFoot: (n, u) => `Édito A1 · unité ${n} · ${u.titre} — usage personnel.`,
  units: {
    1: {n: 1, titre: "Et vous ?", pages: "livre p. 19-32", pistes: "CD 10-22 · DVD 1",
        obj: "Se présenter, demander de se présenter, donner des informations personnelles.", dossier: ""},
    2: {n: 2, titre: "On va où ?", pages: "livre p. 33-46", pistes: "CD 23-31",
        obj: "Demander et indiquer le chemin, comprendre un itinéraire, se déplacer.", dossier: ""},
    3: {n: 3, titre: "Qu'est-ce qu'on mange ?", pages: "livre p. 47-60", pistes: "CD 32-37",
        obj: "Faire des courses alimentaires, commander au restaurant, exprimer ses goûts.", dossier: ""}
  },
  goals: {
    1: ['se présenter', 'les nationalités', 'le, la, l\', les', 'à, au, en, aux', 'la négation', 'les nombres 32 à 100'],
    2: ['demander le chemin', 'un, une / le, la', 'les verbes en -er', 'quel, quelle', 'les professions', 'les transports'],
    3: ['faire les courses', 'au restaurant', 'au, à la, chez', 'du, de la, des', 'le pronom en', 'j\'aime / je déteste']
  },
  topics: {
    1: ['se présenter', 'les nationalités', 'les loisirs', 'les coordonnées', 'la Francophonie'],
    2: ['la ville', 'les directions', 'les transports', 'les professions'],
    3: ['le marché', 'le supermarché', 'le restaurant', 'les goûts']
  },
  shortLabels: {
    "présentations": "A · Présentations",
    "qu'est-ce que vous aimez ?": "B · Loisirs",
    "ana, francesco, adriana et noé (épisode 1)": "C · Vidéo",
    "vive les artistes francophones !": "D · Artistes",
    "vous êtes volontaire ?": "E · Volontaire",
    "rencontres de volontaires": "F · Rencontres",
    "on reste en contact ?": "G · Contact",
    "les adjectifs de nationalité": "Nationalités",
    "les articles définis le, la, l', les": "Le, la, les",
    "les prépositions devant les noms de villes et de pays": "À, au, en",
    "la négation": "Ne… pas"
  }
};
