/* ============================================================
   PARLER — les exercices oraux des quatre unités (SLOTS, TILE_EN, SPK, CONV).
   Format : voir content.sample/revision/parler.js. Les traductions persanes des
   champs « en » sont dans content/fa.js (FA_TR), indexées par le texte anglais.
   ============================================================ */
const SLOTS = {
  name:  {kind:'open', max:2, cap:true, label:"ton prénom"},
  city:  {kind:'open', max:2, cap:true, label:"ta ville"},
  num:   {kind:'num', label:"un nombre"},
  nat:   {kind:'list', label:"ta nationalité", title:"Les nationalités",
          items:[["iranien","Iranian (m.)"],["iranienne","Iranian (f.)"],["français","French (m.)"],["française","French (f.)"],["canadien","Canadian (m.)"],["canadienne","Canadian (f.)"]]},
  job:   {kind:'list', label:"ton métier", title:"Les métiers",
          items:[["étudiant","student (m.)"],["étudiante","student (f.)"],["professeur","teacher"],["médecin","doctor"],["ingénieur","engineer (m.)"],["ingénieure","engineer (f.)"]]},
  food:  {kind:'art', arts:["un","une","des"], label:"quelque chose à la boulangerie", title:"À la boulangerie",
          items:[["une baguette","a baguette"],["un croissant","a croissant"],["un pain au chocolat","a chocolate pastry"],["une tarte","a pie"],["des croissants","some croissants"]]},
  place: {kind:'list', label:"un lieu", title:"Les lieux de la ville",
          items:[["la gare","the train station"],["la banque","the bank"],["la pharmacie","the pharmacy"],["le musée","the museum"],["le parc","the park"]]},
  trans: {kind:'list', label:"un transport", title:"Les transports",
          items:[["en métro","by metro"],["en bus","by bus"],["à pied","on foot"],["à vélo","by bike"]]}
};

const TILE_EN = {
  "je":"I", "j'ai":"I have", "j'habite":"I live", "m'appelle":"am called (→ je m'appelle = my name is)",
  "comment":"how", "tu":"you (informal)", "t'appelles":"are called (→ tu t'appelles = your name is)",
  "viens":"come (venir)", "de":"from, of", "à":"in, to, at", "suis":"am (être)", "est":"is (être)", "a":"has (avoir)",
  "oui":"yes", "et":"and", "un":"a, one (masc.)", "une":"a, one (fem.)", "frère":"brother", "sœur":"sister",
  "elle":"she", "il":"he", "ans":"years", "quel":"which, what", "son":"his, her (masc. noun)", "métier":"job",
  "mon":"my (masc. noun)", "vingt":"twenty", "voudrais":"would like (vouloir)",
  "s'il":"if it (→ s'il vous plaît = please)", "vous":"you (polite)", "plaît":"pleases (→ s'il vous plaît = please)",
  "ça":"that", "fait":"makes (→ ça fait = that comes to)", "euros":"euros", "c'est":"it is", "combien":"how much",
  "tout":"all", "merci":"thank you", "cherche":"am looking for (chercher)", "vais":"go (aller)", "au":"to the (à + le)",
  "travail":"work", "où":"where", "le":"the (masc.)", "musée":"museum", "pardon":"excuse me", "loin":"far",
  "beaucoup":"a lot (→ merci beaucoup = thank you very much)", "Paris":"Paris"
};

const SPK = {
/* ---------- unité 1 · se présenter ---------- */
'u1-t1': {q:"Comment tu t'appelles ?", en:"What's your name?",
  tiles:["je","m'appelle",{s:'name'}], model:"Je m'appelle Sara."},
'u1-t2': {q:"Tu es d'où ?", en:"Where are you from?",
  tiles:["je","viens","de",{s:'city'}], model:"Je viens de Téhéran."},
'u1-f1': {flip:1, q:"Je m'appelle Lucas.", en:"My name is Lucas.",
  tiles:["comment","tu","t'appelles"], model:"Comment tu t'appelles ?"},
'u1-r1': {rep:1, en:"I'm Iranian. I come from Tehran.", model:"Je suis iranienne. Je viens de Téhéran."},
'u1-r2': {rep:1, en:"Nice to meet you! See you soon!", model:"Enchanté ! À bientôt !"},
'u1-x1': {tr:1, en:"I live in Paris.", tiles:["j'habite","à","Paris"], model:"J'habite à Paris."},
'u1-dlg': {dlg:1, title:"Au café des langues", intro:"Vous arrivez au café des langues. Lucas vous pose deux questions — répondez à chacune.",
  introEn:"You arrive at the language café. Lucas asks you two questions — answer each one.",
  turns:[
    {q:"Salut ! Comment tu t'appelles ?", en:"Hi! What's your name?",
     tiles:["je","m'appelle",{s:'name'}], model:"Je m'appelle Sara.", reply:"Enchanté, {name} !"},
    {q:"Tu es de quelle nationalité ?", en:"What nationality are you?",
     tiles:["je","suis",{s:'nat'}], model:"Je suis iranienne.", reply:"Super ! Bienvenue au café des langues ! 👋"}
  ]},

/* ---------- unité 2 · la famille ---------- */
'u2-t1': {q:"Tu as des frères et sœurs ?", en:"Do you have brothers and sisters?",
  tiles:["oui","j'ai","un","frère","et","une","sœur"], model:"Oui, j'ai un frère et une sœur."},
'u2-t2': {q:"Quel âge a ta sœur ?", en:"How old is your sister?",
  tiles:["elle","a",{s:'num'},"ans"], model:"Elle a dix ans.",
  trap:{t:"est", replaces:1, why:"Pour l'âge, on utilise <b>avoir</b> : elle <b>a</b> dix ans.",
        whyEn:"For age, use avoir: elle a dix ans."}},
'u2-f1': {flip:1, q:"Il est professeur.", en:"He is a teacher.",
  tiles:["quel","est","son","métier"], model:"Quel est son métier ?"},
'u2-r1': {rep:1, en:"Here is my family.", model:"Voici ma famille."},
'u2-r2': {rep:1, en:"My mother is an engineer.", model:"Ma mère est ingénieure."},
'u2-x1': {tr:1, en:"My brother is twenty.", tiles:["mon","frère","a","vingt","ans"], model:"Mon frère a vingt ans."},
'u2-dlg': {dlg:1, title:"Chez Mamie Jo", intro:"Mamie Jo, la voisine du troisième étage, vous invite à prendre le thé. Répondez à ses deux questions.",
  introEn:"Mamie Jo, the neighbour on the third floor, invites you for tea. Answer her two questions.",
  turns:[
    {q:"Bonjour ! Tu as quel âge ?", en:"Hello! How old are you?",
     tiles:["j'ai",{s:'num'},"ans"], model:"J'ai vingt ans.", reply:"{num} ans ! Très bien."},
    {q:"Et qu'est-ce que tu fais dans la vie ?", en:"And what do you do for a living?",
     tiles:["je","suis",{s:'job'}], model:"Je suis étudiante.", reply:"Bravo ! Entre, je fais du thé. ☕"}
  ]},

/* ---------- unité 3 · la boulangerie ---------- */
'u3-t1': {q:"Bonjour ! Vous désirez ?", en:"Hello! What would you like?",
  tiles:["je","voudrais",{s:'food'},"s'il","vous","plaît"], model:"Je voudrais une baguette, s'il vous plaît.",
  trap:{t:"veux", replaces:1, why:"Dans un magasin, on dit <b>je voudrais</b> : c'est plus poli que <em>je veux</em>.",
        whyEn:"In a shop say je voudrais: more polite than je veux."}},
'u3-t2': {q:"Ça fait combien ?", en:"How much is it?",
  tiles:["ça","fait",{s:'num'},"euros"], model:"Ça fait cinq euros."},
'u3-f1': {flip:1, q:"Trois euros cinquante.", en:"Three euros fifty.",
  tiles:["c'est","combien"], model:"C'est combien ?"},
'u3-r1': {rep:1, en:"Two croissants and a chocolate pastry, please.", model:"Deux croissants et un pain au chocolat, s'il vous plaît."},
'u3-r2': {rep:1, en:"Thank you, have a good day!", model:"Merci, bonne journée !"},
'u3-x1': {tr:1, en:"That's all, thank you.", tiles:["c'est","tout","merci"], model:"C'est tout, merci."},
'u3-dlg': {dlg:1, title:"Chez M. Dubois", intro:"Vous entrez à la boulangerie. M. Dubois vous pose deux questions — répondez à chacune.",
  introEn:"You walk into the bakery. Mr Dubois asks you two questions — answer each one.",
  turns:[
    {q:"Bonjour ! Qu'est-ce que vous voulez ?", en:"Hello! What do you want?",
     tiles:["je","voudrais",{s:'food'}], model:"Je voudrais un croissant.", reply:"{food}, très bien !"},
    {q:"Et avec ça ?", en:"Anything else?",
     tiles:["c'est","tout","merci"], model:"C'est tout, merci.", reply:"Merci, bonne journée ! 👋"}
  ]},

/* ---------- unité 4 · en ville ---------- */
'u4-t1': {q:"Vous cherchez quoi ?", en:"What are you looking for?",
  tiles:["je","cherche",{s:'place'}], model:"Je cherche la gare."},
'u4-t2': {q:"Comment vous allez au travail ?", en:"How do you get to work?",
  tiles:["je","vais","au","travail",{s:'trans'}], model:"Je vais au travail en métro."},
'u4-f1': {flip:1, q:"Le musée est en face du parc.", en:"The museum is opposite the park.",
  tiles:["où","est","le","musée"], model:"Où est le musée ?"},
'u4-r1': {rep:1, en:"Take line 1, towards La Défense.", model:"Prenez la ligne 1, direction La Défense."},
'u4-r2': {rep:1, en:"Turn right and go straight ahead.", model:"Tournez à droite et allez tout droit."},
'u4-x1': {tr:1, en:"Excuse me, is it far?", tiles:["pardon","c'est","loin"], model:"Pardon, c'est loin ?"},
'u4-dlg': {dlg:1, title:"Dans le métro", intro:"Vous êtes perdu·e à la station Châtelet. Un agent vous aide — répondez à ses deux questions.",
  introEn:"You are lost at Châtelet station. A staff member helps you — answer their two questions.",
  turns:[
    {q:"Bonjour ! Je peux vous aider ?", en:"Hello! Can I help you?",
     tiles:["où","est",{s:'place'}], model:"Où est la gare ?", reply:"Pour {place} ? Prenez la ligne 4, c'est à deux stations."},
    {q:"Vous avez compris ?", en:"Did you understand?",
     tiles:["oui","merci","beaucoup"], model:"Oui, merci beaucoup.", reply:"De rien, bonne journée ! 👋"}
  ]}
};

const CONV = {
'u1-cv1': {unit:1, title:"Au café des langues", titleEn:"At the language café",
  role:"Tu es Lucas, un étudiant français au café des langues de Paris. Tu tutoies l'élève et tu évites tout accord masculin / féminin à son sujet. Tu lui demandes son prénom, d'où il vient, où il habite et quelles langues il parle. Phrases très courtes, niveau A1 débutant.",
  setting:"Vous êtes au café des langues, à Paris. Un étudiant français, Lucas, s'assoit à votre table. Il vous tutoie.",
  settingEn:"You're at the language café in Paris. A French student, Lucas, sits down at your table. He uses tu with you.",
  goals:[{fr:"Saluer Lucas", en:"Greet Lucas"},
         {fr:"Dire son prénom", en:"Say your name"},
         {fr:"Dire d'où on vient", en:"Say where you come from"},
         {fr:"Dire au revoir", en:"Say goodbye"}],
  opener:"Salut ! Je m'appelle Lucas. Et toi ?", openerEn:"Hi! My name is Lucas. And you?"},
'u2-cv1': {unit:2, title:"Chez Mamie Jo", titleEn:"At Mamie Jo's",
  role:"Tu es Mamie Jo, une voisine de 75 ans, très gentille et curieuse. Tu tutoies l'élève et tu évites tout accord masculin / féminin à son sujet. Tu lui poses des questions sur sa famille : frères et sœurs, âge, métiers des parents. Phrases très courtes, niveau A1 débutant.",
  setting:"Vous prenez le thé chez Mamie Jo, votre voisine. Elle regarde vos photos de famille. Elle vous tutoie.",
  settingEn:"You're having tea at Mamie Jo's, your neighbour. She is looking at your family photos. She uses tu with you.",
  goals:[{fr:"Présenter un membre de sa famille", en:"Present a family member"},
         {fr:"Dire son âge", en:"Say their age"},
         {fr:"Dire son métier", en:"Say their job"},
         {fr:"Poser une question à Mamie Jo", en:"Ask Mamie Jo a question"}],
  opener:"Oh, c'est qui sur cette photo ?", openerEn:"Oh, who is in this photo?"},
'u3-cv1': {unit:3, title:"À la boulangerie", titleEn:"At the bakery",
  role:"Tu es M. Dubois, le boulanger. Tu vouvoies l'élève et tu évites tout accord masculin / féminin à son sujet. Tu prends sa commande (pain, viennoiseries, gâteaux), tu proposes autre chose (« Et avec ça ? »), puis tu dis le prix en euros. Phrases très courtes, niveau A1 débutant.",
  setting:"Vous entrez à la boulangerie de M. Dubois. Ça sent bon le pain chaud. Il vous vouvoie.",
  settingEn:"You walk into Mr Dubois's bakery. It smells of warm bread. He uses vous with you.",
  goals:[{fr:"Saluer le boulanger", en:"Greet the baker"},
         {fr:"Commander poliment (je voudrais)", en:"Order politely (je voudrais)"},
         {fr:"Demander le prix", en:"Ask the price"},
         {fr:"Remercier et dire au revoir", en:"Thank him and say goodbye"}],
  opener:"Bonjour ! Qu'est-ce que je vous sers ?", openerEn:"Hello! What can I get you?"},
'u4-cv1': {unit:4, title:"À la station de métro", titleEn:"At the metro station",
  role:"Tu es un agent de la RATP à la station Châtelet. Tu vouvoies l'élève et tu évites tout accord masculin / féminin à son sujet. L'élève cherche un lieu (musée, gare, parc) : tu donnes la ligne, la direction, la station où descendre, puis le chemin à pied (à gauche, à droite, tout droit). Phrases très courtes, niveau A1 débutant.",
  setting:"Vous êtes à la station Châtelet, à Paris. Vous voulez aller au musée d'Orsay. Un agent vous aide. Il vous vouvoie.",
  settingEn:"You're at Châtelet station in Paris. You want to go to the Musée d'Orsay. A staff member helps you. He uses vous with you.",
  goals:[{fr:"Demander où est le musée", en:"Ask where the museum is"},
         {fr:"Demander si c'est loin", en:"Ask if it is far"},
         {fr:"Répéter la ligne ou la station", en:"Repeat the line or the station"},
         {fr:"Remercier", en:"Say thank you"}],
  opener:"Bonjour ! Je peux vous aider ?", openerEn:"Hello! Can I help you?"}
};
