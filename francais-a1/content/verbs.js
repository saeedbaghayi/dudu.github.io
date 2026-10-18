/* ============================================================
   VERBES — le carnet (carnet.html). Format : voir content.sample/verbs.js.
   ============================================================ */
const VERBS = [
 {"inf": "être", "en": "to be", "group": "ind", "unit": 1,
  "forms": ["suis", "es", "est", "sommes", "êtes", "sont"], "imp": ["sois", "soyons", "soyez"], "hl": [0, 1, 2, 3, 4, 5],
  "ex": ["Je suis iranienne.", "I am Iranian."], "neg": ["Il n'est pas français.", "He isn't French."],
  "note": "Très irrégulier : à apprendre par cœur."},
 {"inf": "s'appeler", "en": "to be called", "group": "er", "unit": 1,
  "forms": ["m'appelle", "t'appelles", "s'appelle", "nous appelons", "vous appelez", "s'appellent"], "imp": ["appelle-toi", "appelons-nous", "appelez-vous"], "hl": [0, 1, 2, 5],
  "ex": ["Je m'appelle Sara.", "My name is Sara."], "neg": ["Il ne s'appelle pas Paul.", "His name isn't Paul."],
  "note": "Deux l quand la fin ne se prononce pas : je m'appelle, mais nous nous appelons."},
 {"inf": "habiter", "en": "to live", "group": "er", "unit": 1,
  "forms": ["habite", "habites", "habite", "habitons", "habitez", "habitent"], "imp": ["habite", "habitons", "habitez"], "hl": [3, 4],
  "ex": ["J'habite à Paris.", "I live in Paris."], "neg": ["Je n'habite pas à Lyon.", "I don't live in Lyon."],
  "note": "Un h muet : je → j'habite."},
 {"inf": "parler", "en": "to speak", "group": "er", "unit": 1,
  "forms": ["parle", "parles", "parle", "parlons", "parlez", "parlent"], "imp": ["parle", "parlons", "parlez"], "hl": [3, 4],
  "ex": ["Tu parles bien français !", "You speak French well!"], "neg": ["Je ne parle pas italien.", "I don't speak Italian."],
  "note": "Le modèle des verbes en -er : je, tu, il et ils se prononcent pareil."},
 {"inf": "avoir", "en": "to have", "group": "ind", "unit": 2,
  "forms": ["ai", "as", "a", "avons", "avez", "ont"], "imp": ["aie", "ayons", "ayez"], "hl": [0, 1, 2, 3, 4, 5],
  "ex": ["Elle a dix ans.", "She is ten years old."], "neg": ["Je n'ai pas de frère.", "I don't have a brother."],
  "note": "Pour l'âge : avoir + nombre + ans."},
 {"inf": "vouloir", "en": "to want", "group": "irr", "unit": 3,
  "forms": ["veux", "veux", "veut", "voulons", "voulez", "veulent"], "imp": ["veuille", "voulons", "veuillez"], "hl": [0, 1, 2, 5],
  "ex": ["Je voudrais une baguette.", "I would like a baguette."], "neg": ["Je ne veux pas de sucre.", "I don't want sugar."],
  "note": "Au magasin, on dit « je voudrais » (plus poli que « je veux »)."},
 {"inf": "payer", "en": "to pay", "group": "er", "unit": 3,
  "forms": ["paie|paye", "paies|payes", "paie|paye", "payons", "payez", "paient|payent"], "imp": ["paie|paye", "payons", "payez"], "hl": [0, 1, 2, 5],
  "ex": ["Je paie cinq euros.", "I pay five euros."], "neg": ["Il ne paie pas le pain.", "He isn't paying for the bread."],
  "note": "Deux orthographes acceptées : je paie / je paye."},
 {"inf": "prendre", "en": "to take", "group": "irr", "unit": 4,
  "forms": ["prends", "prends", "prend", "prenons", "prenez", "prennent"], "imp": ["prends", "prenons", "prenez"], "hl": [3, 4, 5],
  "ex": ["Prenez la ligne 1.", "Take line 1."], "neg": ["Je ne prends pas le bus.", "I don't take the bus."],
  "note": "Ils prennent : deux n."},
 {"inf": "aller", "en": "to go", "group": "irr", "unit": 4,
  "forms": ["vais", "vas", "va", "allons", "allez", "vont"], "imp": ["va", "allons", "allez"], "hl": [0, 1, 2, 5],
  "ex": ["Je vais au musée.", "I'm going to the museum."], "neg": ["Je ne vais pas à la gare.", "I'm not going to the station."],
  "note": "Très irrégulier. À + le = au : je vais au parc."},
 {"inf": "tourner", "en": "to turn", "group": "er", "unit": 4,
  "forms": ["tourne", "tournes", "tourne", "tournons", "tournez", "tournent"], "imp": ["tourne", "tournons", "tournez"], "hl": [4],
  "ex": ["Tournez à gauche.", "Turn left."], "neg": ["Ne tournez pas à droite.", "Don't turn right."],
  "note": "Impératif : tu tournes → Tourne ! (sans s)."}
];

const VERB_EXPRS = [
 {"unit": 1, "html": "« <b>Je m'appelle</b> + prénom » — pour dire son prénom.", "en": "Je m'appelle + first name — to say your name.", "say": "Je m'appelle Sara."},
 {"unit": 2, "html": "« <b>avoir</b> + nombre + <b>ans</b> » — pour dire l'âge.", "en": "avoir + number + ans — to say your age.", "say": "J'ai vingt-cinq ans."},
 {"unit": 3, "html": "« <b>Je voudrais</b> + nom » — la forme polie, au magasin.", "en": "Je voudrais + noun — the polite form, in a shop.", "say": "Je voudrais une baguette, s'il vous plaît."},
 {"unit": 4, "html": "« <b>Où est</b> … ? » — pour demander un lieu.", "en": "Où est… ? — to ask where a place is.", "say": "Où est la gare, s'il vous plaît ?"}
];
