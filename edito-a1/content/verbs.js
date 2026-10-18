/* VERBES — le carnet, Édito A1 unité 1 (avoir, s'appeler, être + aimer, habiter, parler). */
const VERBS = [
 {"inf": "être", "en": "to be", "group": "ind", "unit": 1,
  "forms": ["suis", "es", "est", "sommes", "êtes", "sont"], "imp": ["sois", "soyons", "soyez"], "hl": [0, 1, 2, 3, 4, 5],
  "ex": ["Je suis suédois.", "I'm Swedish."], "neg": ["Je ne suis pas espagnol.", "I'm not Spanish."],
  "note": "Très irrégulier : à apprendre par cœur."},
 {"inf": "avoir", "en": "to have", "group": "ind", "unit": 1,
  "forms": ["ai", "as", "a", "avons", "avez", "ont"], "imp": ["aie", "ayons", "ayez"], "hl": [0, 1, 2, 3, 4, 5],
  "ex": ["J'ai 63 ans aujourd'hui !", "I'm 63 today!"], "neg": ["Paul n'a pas le numéro de Marie.", "Paul doesn't have Marie's number."],
  "note": "Pour l'âge : avoir + nombre + ans."},
 {"inf": "s'appeler", "en": "to be called", "group": "er", "unit": 1,
  "forms": ["m'appelle", "t'appelles", "s'appelle", "nous appelons", "vous appelez", "s'appellent"], "imp": ["appelle-toi", "appelons-nous", "appelez-vous"], "hl": [0, 1, 2, 5],
  "ex": ["Elle s'appelle Adelina.", "Her name is Adelina."], "neg": ["Il ne s'appelle pas Boris.", "His name isn't Boris."],
  "note": "Deux l quand la fin est muette (je m'appelle) ; un l avec nous et vous."},
 {"inf": "aimer", "en": "to like, to love", "group": "er", "unit": 1,
  "forms": ["aime", "aimes", "aime", "aimons", "aimez", "aiment"], "imp": ["aime", "aimons", "aimez"], "hl": [3, 4],
  "ex": ["J'aime le tennis et la natation.", "I like tennis and swimming."], "neg": ["Je n'aime pas le chocolat.", "I don't like chocolate."],
  "note": "Aimer + le / la / l' / les : on parle en général."},
 {"inf": "habiter", "en": "to live", "group": "er", "unit": 1,
  "forms": ["habite", "habites", "habite", "habitons", "habitez", "habitent"], "imp": ["habite", "habitons", "habitez"], "hl": [3, 4],
  "ex": ["J'habite aux Comores.", "I live in the Comoros."], "neg": ["Tu n'habites pas en France ?", "Don't you live in France?"],
  "note": "h muet : j'habite. À + ville, au / en / aux + pays."},
 {"inf": "parler", "en": "to speak", "group": "er", "unit": 1,
  "forms": ["parle", "parles", "parle", "parlons", "parlez", "parlent"], "imp": ["parle", "parlons", "parlez"], "hl": [3, 4],
  "ex": ["Je parle français, anglais et chinois.", "I speak French, English and Chinese."], "neg": ["Tu ne parles pas chinois.", "You don't speak Chinese."],
  "note": "Je parle, tu parles, il parle, ils parlent : même prononciation."}
];

VERBS.push(
 {"inf": "aller", "en": "to go", "group": "ind", "unit": 2,
  "forms": ["vais", "vas", "va", "allons", "allez", "vont"], "imp": ["va", "allons", "allez"], "hl": [0, 1, 2, 3, 4, 5],
  "ex": ["Vous allez tout droit.", "You go straight ahead."], "neg": ["Je ne vais pas à la gare.", "I'm not going to the station."],
  "note": "Très irrégulier : à apprendre par cœur."},
 {"inf": "prendre", "en": "to take", "group": "irr", "unit": 2,
  "forms": ["prends", "prends", "prend", "prenons", "prenez", "prennent"], "imp": ["prends", "prenons", "prenez"], "hl": [3, 4, 5],
  "ex": ["Tu prends le métro ligne 2.", "You take metro line 2."], "neg": ["Je ne prends pas le bus.", "I don't take the bus."],
  "note": "Ils prennent : deux n."},
 {"inf": "descendre", "en": "to get off, to go down", "group": "irr", "unit": 2,
  "forms": ["descends", "descends", "descend", "descendons", "descendez", "descendent"], "imp": ["descends", "descendons", "descendez"], "hl": [0, 1, 2],
  "ex": ["Tu descends à l'arrêt Voltaire.", "You get off at the Voltaire stop."], "neg": ["Il ne descend pas ici.", "He isn't getting off here."],
  "note": "Je descends, tu descends, il descend : même prononciation."},
 {"inf": "chercher", "en": "to look for", "group": "er", "unit": 2,
  "forms": ["cherche", "cherches", "cherche", "cherchons", "cherchez", "cherchent"], "imp": ["cherche", "cherchons", "cherchez"], "hl": [3, 4],
  "ex": ["Je cherche la rue des Bœufs.", "I'm looking for the rue des Bœufs."], "neg": ["Je ne cherche pas la gare.", "I'm not looking for the station."],
  "note": "Un verbe en -er régulier."},
 {"inf": "acheter", "en": "to buy", "group": "er", "unit": 3,
  "forms": ["achète", "achètes", "achète", "achetons", "achetez", "achètent"], "imp": ["achète", "achetons", "achetez"], "hl": [0, 1, 2, 5],
  "ex": ["J'achète les fruits au marché.", "I buy fruit at the market."], "neg": ["Je n'achète pas de viande.", "I don't buy meat."],
  "note": "è devant une fin muette : j'achète, mais nous achetons."},
 {"inf": "manger", "en": "to eat", "group": "er", "unit": 3,
  "forms": ["mange", "manges", "mange", "mangeons", "mangez", "mangent"], "imp": ["mange", "mangeons", "mangez"], "hl": [3],
  "ex": ["Ce midi, on mange du poisson.", "This lunchtime, we're eating fish."], "neg": ["Je ne mange pas de viande.", "I don't eat meat."],
  "note": "Nous mangeons : on garde le e."},
 {"inf": "faire", "en": "to do, to make", "group": "irr", "unit": 3,
  "forms": ["fais", "fais", "fait", "faisons", "faites", "font"], "imp": ["fais", "faisons", "faites"], "hl": [0, 1, 2, 3, 4, 5],
  "ex": ["Je fais les courses.", "I do the shopping."], "neg": ["Il ne fait pas la cuisine.", "He doesn't cook."],
  "note": "Vous faites, ils font : très irrégulier."}
);

const VERB_EXPRS = [
 {"unit": 1, "html": "« <b>Je suis né(e)</b> à / au / en… » — pour dire le lieu de naissance.", "en": "Je suis né(e) à… — to say where you were born.", "say": "Je suis née au Vietnam."},
 {"unit": 1, "html": "« <b>Je viens de</b> + ville » — pour dire d'où on vient.", "en": "Je viens de + city — to say where you come from.", "say": "Je viens de Moroni."}
];
