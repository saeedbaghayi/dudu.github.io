/* ============================================================
   VOCABULAIRE À MÉMORISER — les cartes de Mémoire.
   {fr, en, fa, u: l'unité, ex: phrase avec le mot entre accolades, exEn, exFa}
   ============================================================ */
const VOCAB = [
/* unité 1 */
{fr:"bonjour", en:"hello", fa:"سلام، روز بخیر", u:1, ex:"{Bonjour}, madame !", exEn:"Hello, madam!", exFa:"سلام خانم!"},
{fr:"salut", en:"hi (informal)", fa:"سلام (خودمانی)", u:1, ex:"{Salut}, Lucas !", exEn:"Hi, Lucas!", exFa:"سلام لوکاس!"},
{fr:"au revoir", en:"goodbye", fa:"خداحافظ", u:1, ex:"Merci, {au revoir} !", exEn:"Thank you, goodbye!", exFa:"ممنون، خداحافظ!"},
{fr:"à bientôt", en:"see you soon", fa:"به امید دیدار", u:1, ex:"{À bientôt}, Sara !", exEn:"See you soon, Sara!", exFa:"به امید دیدار، سارا!"},
{fr:"enchanté", en:"nice to meet you", fa:"از آشنایی‌تان خوشوقتم", u:1, ex:"{Enchanté}, je m'appelle Lucas.", exEn:"Nice to meet you, my name is Lucas.", exFa:"خوشوقتم، اسم من لوکاس است."},
{fr:"je m'appelle", en:"my name is", fa:"اسم من … است", u:1, ex:"{Je m'appelle} Sara.", exEn:"My name is Sara.", exFa:"اسم من سارا است."},
{fr:"je suis", en:"I am", fa:"من … هستم", u:1, ex:"{Je suis} iranienne.", exEn:"I am Iranian.", exFa:"من ایرانی هستم."},
{fr:"iranien / iranienne", en:"Iranian", fa:"ایرانی", u:1, ex:"Sara est {iranienne}.", exEn:"Sara is Iranian.", exFa:"سارا ایرانی است."},
{fr:"français / française", en:"French", fa:"فرانسوی", u:1, ex:"Lucas est {français}.", exEn:"Lucas is French.", exFa:"لوکاس فرانسوی است."},
{fr:"j'habite à", en:"I live in", fa:"در … زندگی می‌کنم", u:1, ex:"{J'habite à} Paris.", exEn:"I live in Paris.", exFa:"در پاریس زندگی می‌کنم."},
{fr:"je viens de", en:"I come from", fa:"اهل … هستم", u:1, ex:"{Je viens de} Téhéran.", exEn:"I come from Tehran.", exFa:"اهل تهرانم."},
{fr:"tu es d'où", en:"where are you from", fa:"اهل کجایی", u:1, ex:"Et toi, {tu es d'où} ?", exEn:"And you, where are you from?", exFa:"تو اهل کجایی؟"},
/* unité 2 */
{fr:"la famille", en:"the family", fa:"خانواده", u:2, ex:"Voici {la famille} de Sara.", exEn:"Here is Sara's family.", exFa:"این خانواده‌ی ساراست."},
{fr:"le père", en:"the father", fa:"پدر", u:2, ex:"{Le père} de Sara s'appelle Reza.", exEn:"Sara's father is called Reza.", exFa:"اسم پدر سارا رضاست."},
{fr:"la mère", en:"the mother", fa:"مادر", u:2, ex:"{La mère} de Sara est ingénieure.", exEn:"Sara's mother is an engineer.", exFa:"مادر سارا مهندس است."},
{fr:"le frère", en:"the brother", fa:"برادر", u:2, ex:"J'ai un {frère}.", exEn:"I have a brother.", exFa:"یک برادر دارم."},
{fr:"la sœur", en:"the sister", fa:"خواهر", u:2, ex:"C'est ma {sœur}, Mina.", exEn:"This is my sister, Mina.", exFa:"این خواهرم میناست."},
{fr:"les parents", en:"the parents", fa:"پدر و مادر", u:2, ex:"Mes {parents} habitent à Téhéran.", exEn:"My parents live in Tehran.", exFa:"پدر و مادرم در تهران زندگی می‌کنند."},
{fr:"le fils", en:"the son", fa:"پسر (فرزند)", u:2, ex:"Leur {fils} a vingt ans.", exEn:"Their son is twenty.", exFa:"پسرشان بیست سال دارد."},
{fr:"la fille", en:"the daughter, the girl", fa:"دختر", u:2, ex:"Ils ont une {fille}.", exEn:"They have a daughter.", exFa:"آن‌ها یک دختر دارند."},
{fr:"le professeur", en:"the teacher", fa:"معلم", u:2, ex:"Il est {professeur}.", exEn:"He is a teacher.", exFa:"او معلم است."},
{fr:"le médecin", en:"the doctor", fa:"پزشک", u:2, ex:"Ma tante est {médecin}.", exEn:"My aunt is a doctor.", exFa:"خاله‌ام پزشک است."},
{fr:"l'étudiant / l'étudiante", en:"the student", fa:"دانشجو", u:2, ex:"Mon frère est {étudiant}.", exEn:"My brother is a student.", exFa:"برادرم دانشجوست."},
{fr:"avoir … ans", en:"to be … years old", fa:"… سال داشتن", u:2, ex:"Elle {a dix ans}.", exEn:"She is ten years old.", exFa:"ده سال دارد."},
/* unité 3 */
{fr:"je voudrais", en:"I would like", fa:"می‌خواستم (مؤدبانه)", u:3, ex:"{Je voudrais} une baguette.", exEn:"I would like a baguette.", exFa:"یک باگت می‌خواستم."},
{fr:"s'il vous plaît", en:"please (formal)", fa:"لطفاً", u:3, ex:"Un croissant, {s'il vous plaît}.", exEn:"A croissant, please.", exFa:"یک کروسان، لطفاً."},
{fr:"le pain", en:"bread", fa:"نان", u:3, ex:"J'achète du {pain}.", exEn:"I'm buying some bread.", exFa:"نان می‌خرم."},
{fr:"une baguette", en:"a baguette", fa:"یک باگت", u:3, ex:"{Une baguette}, s'il vous plaît.", exEn:"A baguette, please.", exFa:"یک باگت، لطفاً."},
{fr:"un croissant", en:"a croissant", fa:"یک کروسان", u:3, ex:"Je voudrais {un croissant}.", exEn:"I would like a croissant.", exFa:"یک کروسان می‌خواستم."},
{fr:"un pain au chocolat", en:"a chocolate pastry", fa:"یک نان شکلاتی", u:3, ex:"Et {un pain au chocolat} !", exEn:"And a chocolate pastry!", exFa:"و یک نان شکلاتی!"},
{fr:"une tarte", en:"a pie, a tart", fa:"یک تارت", u:3, ex:"{Une tarte} aux pommes.", exEn:"An apple pie.", exFa:"یک تارت سیب."},
{fr:"un gâteau", en:"a cake", fa:"یک کیک", u:3, ex:"C'est {un gâteau} au chocolat.", exEn:"It's a chocolate cake.", exFa:"این یک کیک شکلاتی است."},
{fr:"c'est combien", en:"how much is it", fa:"چقدر می‌شود", u:3, ex:"La tarte, {c'est combien} ?", exEn:"How much is the pie?", exFa:"تارت چقدر می‌شود؟"},
{fr:"ça fait", en:"that comes to", fa:"می‌شود (مبلغ)", u:3, ex:"{Ça fait} cinq euros.", exEn:"That comes to five euros.", exFa:"می‌شود پنج یورو."},
{fr:"et avec ça", en:"anything else", fa:"چیز دیگری هم می‌خواهید", u:3, ex:"Une baguette. {Et avec ça} ?", exEn:"A baguette. Anything else?", exFa:"یک باگت. چیز دیگری هم می‌خواهید؟"},
{fr:"le petit-déjeuner", en:"breakfast", fa:"صبحانه", u:3, ex:"Je mange un croissant au {petit-déjeuner}.", exEn:"I eat a croissant for breakfast.", exFa:"صبحانه یک کروسان می‌خورم."},
/* unité 4 */
{fr:"où est", en:"where is", fa:"… کجاست", u:4, ex:"{Où est} la gare ?", exEn:"Where is the station?", exFa:"ایستگاه قطار کجاست؟"},
{fr:"la gare", en:"the train station", fa:"ایستگاه قطار", u:4, ex:"Je vais à {la gare}.", exEn:"I'm going to the station.", exFa:"به ایستگاه قطار می‌روم."},
{fr:"le musée", en:"the museum", fa:"موزه", u:4, ex:"{Le musée} est en face.", exEn:"The museum is opposite.", exFa:"موزه روبه‌روست."},
{fr:"la banque", en:"the bank", fa:"بانک", u:4, ex:"{La banque} est à gauche.", exEn:"The bank is on the left.", exFa:"بانک سمت چپ است."},
{fr:"la pharmacie", en:"the pharmacy", fa:"داروخانه", u:4, ex:"Je cherche {la pharmacie}.", exEn:"I'm looking for the pharmacy.", exFa:"دنبال داروخانه می‌گردم."},
{fr:"à gauche", en:"on the left", fa:"سمت چپ", u:4, ex:"Tournez {à gauche}.", exEn:"Turn left.", exFa:"به چپ بپیچید."},
{fr:"à droite", en:"on the right", fa:"سمت راست", u:4, ex:"Le parc est {à droite}.", exEn:"The park is on the right.", exFa:"پارک سمت راست است."},
{fr:"tout droit", en:"straight ahead", fa:"مستقیم", u:4, ex:"Allez {tout droit}.", exEn:"Go straight ahead.", exFa:"مستقیم بروید."},
{fr:"en face de", en:"opposite", fa:"روبه‌روی", u:4, ex:"Le musée est {en face du} parc.", exEn:"The museum is opposite the park.", exFa:"موزه روبه‌روی پارک است."},
{fr:"loin", en:"far", fa:"دور", u:4, ex:"C'est {loin} ?", exEn:"Is it far?", exFa:"دور است؟"},
{fr:"prenez la ligne", en:"take the line", fa:"خطِ … را سوار شوید", u:4, ex:"{Prenez la ligne} 1.", exEn:"Take line 1.", exFa:"خط ۱ را سوار شوید."},
{fr:"descendez à", en:"get off at", fa:"در … پیاده شوید", u:4, ex:"{Descendez à} Concorde.", exEn:"Get off at Concorde.", exFa:"در کنکورد پیاده شوید."}
];
