/* ============================================================
   COURSE — Français A1, premiers pas (quatre unités, contenu original).
   Champs : voir content.sample/meta.js.
   openAll : true ouvre toutes les unités sans test (utile sans tuteur IA) ; le site statique l'active tout seul.
   ============================================================ */
window.COURSE = {
  name: "Français A1 · premiers pas",
  next: "À la friperie",
  revisionSub: u => `Français A1 · cours + révision · ${u.pages}`,
  revisionTitle: (n, u) => `Unité ${n} · ${u.titre} (cours + révision)`,
  revisionFoot: (n, u) => `Unité ${n} · ${u.titre} — Français A1, contenu original.`,
  units: {
    1: {n: 1, titre: "Bonjour ! Je me présente", pages: "café des langues", pistes: "FR · EN · FA",
        obj: "Saluer, dire son prénom, sa nationalité et sa ville.", dossier: ""},
    2: {n: 2, titre: "Ma famille", pages: "l'immeuble de Mamie Jo", pistes: "FR · EN · FA",
        obj: "Présenter sa famille, dire l'âge et le métier.", dossier: ""},
    3: {n: 3, titre: "À la boulangerie", pages: "la boulangerie de M. Dubois", pistes: "FR · EN · FA",
        obj: "Commander poliment, demander le prix, compter jusqu'à 100.", dossier: ""},
    4: {n: 4, titre: "En ville", pages: "la station de métro", pistes: "FR · EN · FA",
        obj: "Demander et indiquer le chemin, prendre le métro.", dossier: ""}
  },
  goals: {
    1: ['saluer', 'je m\'appelle…', 'le verbe être', 'tu ou vous', 'les nombres de 1 à 10'],
    2: ['c\'est ma sœur', 'mon, ma, mes', 'le verbe avoir', 'l\'âge et les métiers', 'les nombres de 11 à 20'],
    3: ['je voudrais…', 'un, une, des', 'c\'est combien ?', 'les nombres de 20 à 100', 'les sons [u] et [y]'],
    4: ['où est… ?', 'l\'impératif', 'au, à la, du', 'les directions', 'le son [ɑ̃]']
  },
  topics: {
    1: ['se présenter', 'les nationalités', 'les salutations'],
    2: ['la famille', 'les métiers', 'l\'âge'],
    3: ['la boulangerie', 'les repas', 'les prix'],
    4: ['la ville', 'le métro', 'les directions']
  },
  shortLabels: {
    "au café des langues": "Se présenter",
    "le verbe être et les nationalités": "Être",
    "tu ou vous ?": "Tu / vous",
    "la photo de famille": "La famille",
    "les possessifs mon, ma, mes": "Mon, ma, mes",
    "le verbe avoir et l'âge": "Avoir",
    "à la boulangerie de m. dubois": "Boulangerie",
    "je voudrais… : demander poliment": "Je voudrais",
    "les articles un, une, des": "Un, une, des",
    "à la station de métro": "Le métro",
    "l'impératif : prenez, allez, tournez": "Impératif",
    "à + le = au, de + le = du": "Au, du"
  }
};
