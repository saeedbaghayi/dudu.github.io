/* ============================================================
   PARLER — Édito A1, unité 1 (SLOTS, TILE_EN, SPK, CONV). Persan : content/fa.js (FA_TR).
   ============================================================ */
const SLOTS = {
  name:  {kind:'open', max:2, cap:true, label:"ton prénom"},
  city:  {kind:'open', max:2, cap:true, label:"ta ville"},
  num:   {kind:'num', label:"un nombre"},
  nat:   {kind:'list', label:"ta nationalité", title:"Les nationalités",
          items:[["iranien","Iranian (m.)"],["iranienne","Iranian (f.)"],["français","French (m.)"],["française","French (f.)"],["canadien","Canadian (m.)"],["canadienne","Canadian (f.)"],["italien","Italian (m.)"],["italienne","Italian (f.)"]]},
  hobby: {kind:'list', label:"un loisir", title:"Les loisirs",
          items:[["le tennis","tennis"],["la natation","swimming"],["la musique","music"],["la lecture","reading"],["le cinéma","the cinema"],["la danse","dance"],["la peinture","painting"]]},
  lang:  {kind:'list', label:"une langue", title:"Les langues",
          items:[["persan","Persian"],["anglais","English"],["français","French"],["espagnol","Spanish"],["arabe","Arabic"]]}
};

const TILE_EN = {
  "je":"I", "j'ai":"I have", "j'aime":"I like", "j'habite":"I live", "m'appelle":"am called (→ je m'appelle = my name is)",
  "comment":"how", "vous":"you (polite)", "appelez":"are called (→ vous vous appelez)", "tu":"you (informal)", "as":"have (avoir)",
  "quel":"which, what", "âge":"age", "ans":"years", "suis":"am (être)", "ne":"not (ne … pas)", "n'":"not (ne before a vowel)",
  "pas":"not (ne … pas)", "à":"in, to (+ city)", "en":"in (+ feminine country)", "au":"in (+ masculine country)", "aux":"in (+ plural country)",
  "parle":"speak (parler)", "et":"and", "êtes":"are (être)", "français":"French", "mon":"my", "numéro":"number", "c'est":"it is",
  "le":"the (masc.)", "la":"the (fem.)", "l'":"the (before a vowel)", "les":"the (plural)", "ton":"your", "mail":"email", "quoi":"what"
};

const SPK = {
'e1-t1': {q:"Comment vous vous appelez ?", en:"What is your name?",
  tiles:["je","m'appelle",{s:'name'}], model:"Je m'appelle Sara."},
'e1-t2': {q:"Vous avez quel âge ?", en:"How old are you?",
  tiles:["j'ai",{s:'num'},"ans"], model:"J'ai trente ans.",
  trap:{t:"suis", replaces:0, why:"Pour l'âge, on dit <b>j'ai</b> … ans (avoir), jamais « je suis ».",
        whyEn:"For age, say j'ai … ans (avoir), never «je suis»."}},
'e1-t3': {q:"Qu'est-ce que vous aimez ?", en:"What do you like?",
  tiles:["j'aime",{s:'hobby'}], model:"J'aime la natation."},
'e1-f1': {flip:1, q:"Non, je suis suédois.", en:"No, I'm Swedish.",
  tiles:["vous","êtes","français"], model:"Vous êtes français ?"},
'e1-f2': {flip:1, q:"Mon numéro, c'est le 06 21 75 84 32.", en:"My number is 06 21 75 84 32.",
  tiles:["c'est","quoi","ton","numéro"], model:"C'est quoi, ton numéro ?"},
'e1-r1': {rep:1, en:"Hello and welcome!", model:"Bonjour et bienvenue !"},
'e1-r2': {rep:1, en:"I live in the Comoros, I come from Moroni.", model:"J'habite aux Comores, je viens de Moroni."},
'e1-r3': {rep:1, en:"No, I'm not Spanish, I live in Madrid.", model:"Non, je ne suis pas espagnol, j'habite à Madrid."},
'e1-x1': {tr:1, en:"I don't like mobile phones.", tiles:["je","n'","aime","pas","les","téléphones","portables"], model:"Je n'aime pas les téléphones portables."},
'e1-x2': {tr:1, en:"I live in Belgium.", tiles:["j'habite","en","Belgique"], model:"J'habite en Belgique.",
  trap:{t:"à", replaces:1, why:"La Belgique est un pays féminin : <b>en</b> Belgique (à + ville).",
        whyEn:"Belgium is a feminine country: en Belgique (à is for cities)."}},
'e1-dlg': {dlg:1, title:"Dans le TGV", intro:"Vous êtes dans le TGV Bordeaux-Paris, place 3. Votre voisin, Oskar, vous pose deux questions — répondez à chacune.",
  introEn:"You are on the Bordeaux-Paris TGV, seat 3. Your neighbour, Oskar, asks you two questions — answer each one.",
  turns:[
    {q:"Bonjour ! Je m'appelle Oskar. Et vous ?", en:"Hello! My name is Oskar. And you?",
     tiles:["je","m'appelle",{s:'name'}], model:"Je m'appelle Sara.", reply:"Enchanté, {name} !"},
    {q:"Vous parlez quelles langues ?", en:"Which languages do you speak?",
     tiles:["je","parle",{s:'lang'},"et","français"], model:"Je parle persan et français.", reply:"Super ! Moi, je parle suédois et français. 🚄"}
  ]},

/* ---------- unité 2 · On va où ? ---------- */
'e2-t1': {q:"Pardon, où est la gare, s'il vous plaît ?", en:"Excuse me, where is the station, please?",
  tiles:["vous","allez","tout","droit"], model:"Vous allez tout droit."},
'e2-t2': {q:"Comment vous allez au travail ?", en:"How do you get to work?",
  tiles:["je","prends","le","bus"], model:"Je prends le bus.",
  trap:{t:"vais", replaces:1, why:"Avec un transport, on dit <b>je prends</b> le bus (ou : je vais au travail <b>en</b> bus).", whyEn:"With transport say je prends le bus (or: je vais au travail en bus)."}},
'e2-f1': {flip:1, q:"Prenez la ligne 2, direction Saint-Philibert.", en:"Take line 2, towards Saint-Philibert.",
  tiles:["quelle","est","la","ligne"], model:"Quelle est la ligne ?"},
'e2-r1': {rep:1, en:"Excuse me, I'm lost… I'm looking for the rue des Bœufs.", model:"Excusez-moi, je suis perdue… je cherche la rue des Bœufs."},
'e2-r2': {rep:1, en:"You take the first street on the right.", model:"Vous prenez la première rue à droite."},
'e2-x1': {tr:1, en:"Is it far from here?", tiles:["c'est","loin","d'ici"], model:"C'est loin d'ici ?"},
'e2-dlg': {dlg:1, title:"À Strasbourg", intro:"Vous êtes perdu·e à Strasbourg. Un passant vous aide — répondez à ses deux questions.",
  introEn:"You are lost in Strasbourg. A passer-by helps you — answer their two questions.",
  turns:[
    {q:"Bonjour ! Vous cherchez quoi ?", en:"Hello! What are you looking for?",
     tiles:["je","cherche","la","place","Kléber"], model:"Je cherche la place Kléber.", reply:"La place Kléber ? C'est tout droit, puis à gauche."},
    {q:"Vous êtes à pied ou en voiture ?", en:"Are you on foot or by car?",
     tiles:["je","suis","à","pied"], model:"Je suis à pied.", reply:"Alors c'est à cinq minutes. Bonne visite ! 👋"}
  ]},

/* ---------- unité 3 · Qu'est-ce qu'on mange ? ---------- */
'e3-t1': {q:"Bonjour, qu'est-ce que je vous sers ?", en:"Hello, what can I get you?",
  tiles:["je","voudrais","un","kilo","de","pommes"], model:"Je voudrais un kilo de pommes.",
  trap:{t:"veux", replaces:1, why:"Au marché, <b>je voudrais</b> est plus poli que <em>je veux</em>.", whyEn:"At the market, je voudrais is more polite than je veux."}},
'e3-t2': {q:"Vous payez comment ?", en:"How are you paying?",
  tiles:["par","carte","bancaire"], model:"Par carte bancaire."},
'e3-f1': {flip:1, q:"Aujourd'hui, c'est du poisson.", en:"Today it's fish.",
  tiles:["le","plat","du","jour","c'est","quoi"], model:"Le plat du jour, c'est quoi ?"},
'e3-r1': {rep:1, en:"The bill, please!", model:"L'addition, s'il vous plaît !"},
'e3-r2': {rep:1, en:"A coffee and a glass of water, please.", model:"Un café et un verre d'eau, s'il vous plaît."},
'e3-x1': {tr:1, en:"That will be all, thank you.", tiles:["ce","sera","tout","merci"], model:"Ce sera tout, merci."},
'e3-dlg': {dlg:1, title:"Au Bistrot du Marché", intro:"Vous êtes au Bistrot du Marché. Le serveur prend votre commande — répondez à ses deux questions.",
  introEn:"You are at the Bistrot du Marché. The waiter takes your order — answer his two questions.",
  turns:[
    {q:"Bonjour ! Qu'est-ce que vous prenez ?", en:"Hello! What will you have?",
     tiles:["une","formule","s'il","vous","plaît"], model:"Une formule, s'il vous plaît.", reply:"Très bien. Et comme boisson ?"},
    {q:"Et comme boisson ?", en:"And to drink?",
     tiles:["une","carafe","d'eau"], model:"Une carafe d'eau.", reply:"C'est noté ! Bon appétit ! 🍽️"}
  ]}
};

const CONV = {
'e1-cv1': {unit:1, title:"La réunion des volontaires", titleEn:"The volunteers' meeting",
  role:"Tu es Simon, un volontaire belge de 30 ans, à la réunion des volontaires internationaux de la Francophonie. Tu vouvoies l'élève et tu évites tout accord masculin / féminin à son sujet. Tu te présentes, puis tu lui demandes son nom, sa nationalité, où il habite, les langues qu'il parle et son numéro de téléphone ou son mail. Phrases très courtes, niveau A1 débutant (Édito A1, unité 1).",
  setting:"Vous êtes à la réunion des volontaires internationaux de la Francophonie. Un volontaire belge, Simon, vient vous parler. Il vous vouvoie.",
  settingEn:"You are at the meeting of the international volunteers of La Francophonie. A Belgian volunteer, Simon, comes to talk to you. He uses vous with you.",
  goals:[{fr:"Dire son nom et sa nationalité", en:"Say your name and nationality"},
         {fr:"Dire où on habite", en:"Say where you live"},
         {fr:"Dire les langues parlées", en:"Say which languages you speak"},
         {fr:"Donner son numéro ou son mail", en:"Give your number or email"}],
  opener:"Bonjour ! Je m'appelle Simon, je suis belge. Comment vous vous appelez ?", openerEn:"Hello! My name is Simon, I'm Belgian. What is your name?"},
'e2-cv1': {unit:2, title:"Perdu à Strasbourg", titleEn:"Lost in Strasbourg",
  role:"Tu es un habitant de Strasbourg, place Kléber. Tu vouvoies l'élève et tu évites tout accord masculin / féminin à son sujet. L'élève cherche un lieu (la cathédrale, la gare, le musée) : tu indiques le chemin (tout droit, à gauche, à droite, la première rue…) ou le tram à prendre. Phrases très courtes, niveau A1 (Édito A1, unité 2).",
  setting:"Vous êtes place Kléber, à Strasbourg. Vous cherchez la cathédrale. Vous demandez votre chemin à un passant. Il vous vouvoie.",
  settingEn:"You are at the Place Kléber in Strasbourg. You are looking for the cathedral. You ask a passer-by the way. He uses vous with you.",
  goals:[{fr:"Saluer et s'excuser", en:"Greet and say excuse me"}, {fr:"Demander où est un lieu", en:"Ask where a place is"},
         {fr:"Demander si c'est loin", en:"Ask if it is far"}, {fr:"Remercier", en:"Say thank you"}],
  opener:"Bonjour ! Je peux vous aider ?", openerEn:"Hello! Can I help you?"},
'e3-cv1': {unit:3, title:"Au Bistrot du Marché", titleEn:"At the Bistrot du Marché",
  role:"Tu es le serveur du Bistrot du Marché. Tu vouvoies l'élève et tu évites tout accord masculin / féminin à son sujet. Menu : entrées (gazpacho 5,30 €, salade de concombres 5,20 €), plats (pâtes aux courgettes 13,90 €, bœuf bourguignon 14,30 €, steak-frites 11 €), desserts (mousse au chocolat 5,10 €, fraises au sucre 4,70 €), formules 10/15/20 €, boissons. Tu prends la commande, tu réponds aux questions sur les plats, puis tu donnes l'addition. Phrases très courtes, niveau A1 (Édito A1, unité 3).",
  setting:"Vous déjeunez au Bistrot du Marché. Le serveur arrive à votre table. Il vous vouvoie.",
  settingEn:"You are having lunch at the Bistrot du Marché. The waiter comes to your table. He uses vous with you.",
  goals:[{fr:"Commander une entrée et un plat", en:"Order a starter and a main course"}, {fr:"Poser une question sur un plat", en:"Ask a question about a dish"},
         {fr:"Commander une boisson", en:"Order a drink"}, {fr:"Demander l'addition", en:"Ask for the bill"}],
  opener:"Bonjour ! Je peux prendre votre commande ?", openerEn:"Hello! Can I take your order?"}
};
