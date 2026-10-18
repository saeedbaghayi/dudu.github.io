/* ai-fr.js — writing (.aiw) and speaking (.ais) practice boxes in units.html, with AI feedback.
   Feedback comes from Claude with the learner's own Anthropic API key (saved only in this browser,
   shared with the IELTS book), or the prompt can be copied into ChatGPT / Claude.ai.
   Markup:  <div class="aiw" data-id="…" data-task="…" data-min="40" data-model="…"> (hints inside, in <details>) </div>
            <div class="ais" data-id="…" data-q="question in French" data-model="…"></div> */
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const AIKEY = 'anthropic-key';                       // no "dudu" prefix: one key for every book on this site
const MODEL = 'claude-opus-5-5';
const getKey = () => { try { return localStorage.getItem(AIKEY) || ''; } catch (e) { return ''; } };
const kv = (k, v) => { try { if (v === undefined) return localStorage.getItem('aifr-' + k) || ''; localStorage.setItem('aifr-' + k, v); } catch (e) { return ''; } };
const words = t => (String(t).trim().match(/[\p{L}\p{N}'’-]+/gu) || []).length;
const level = () => ((window.COURSE && COURSE.name) || 'French A1');

const SYSTEM = 'You are a warm, precise teacher of French as a foreign language (CEFR A1). The learner speaks Persian and English. ' +
  'Correct only what matters at A1, explain simply, and never invent errors. Format with short headings:\n' +
  '1. Score /10 and one encouraging sentence.\n2. Corrections: each error as «original» → «corrected» — short reason in English.\n' +
  '3. Corrected version of the whole text in French.\n4. One richer A1 sentence the learner could add.\n' +
  'Then a short summary of the 3 most important points in Persian under the heading «خلاصه به فارسی».';

let sdk = null;
async function claude(prompt, onText) {
  const key = getKey();
  if (!key) throw new Error('NO_KEY');
  sdk = sdk || import('https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@0.131.0/+esm');
  const { default: Anthropic } = await sdk;
  const client = new Anthropic({ apiKey: key, dangerouslyAllowBrowser: true });
  try {
    const stream = client.beta.messages.stream({
      model: MODEL, max_tokens: 16000, output_config: { effort: 'medium' },
      betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default',
      system: SYSTEM, messages: [{ role: 'user', content: prompt }]
    });
    stream.on('text', onText);
    const msg = await stream.finalMessage();
    if (msg.stop_reason === 'refusal') throw new Error('The model declined this request.');
    return msg.content.filter(b => b.type === 'text').map(b => b.text).join('');
  } catch (e) {
    if (e instanceof Anthropic.AuthenticationError) throw new Error('Your API key was not accepted. Remove it and paste it again.');
    if (e instanceof Anthropic.RateLimitError) throw new Error('Too many requests right now. Wait a minute and try again.');
    if (e instanceof Anthropic.APIConnectionError) throw new Error('Could not reach the AI service. Check your internet connection.');
    if (e instanceof Anthropic.APIError) throw new Error('The AI service returned an error (' + (e.status || '?') + '). Try again.');
    throw e;
  }
}

function keyForm(out, retry) {
  out.innerHTML = `<div class="box tip"><p style="margin:0 0 6px"><b>✨ AI feedback</b> uses Claude with your own Anthropic API key (console.anthropic.com). It is saved only in this browser; each correction costs about one cent.
    <span class="fa-help" dir="rtl" lang="fa">برای بازخورد هوش مصنوعی، کلید API خودتان را وارد کنید. فقط در همین مرورگر ذخیره می‌شود.</span></p>
    <input type="password" class="inp aifr-key" placeholder="sk-ant-…" style="width:100%;max-width:420px" autocomplete="off">
    <p style="margin:8px 0 0"><button type="button" class="btn aifr-keysave">Save and correct</button> <span class="note">No key? Use “Copy for ChatGPT/Claude”.</span></p></div>`;
  out.querySelector('.aifr-keysave').onclick = () => { const v = out.querySelector('.aifr-key').value.trim(); if (!v) return; try { localStorage.setItem(AIKEY, v); } catch (e) {} retry(); };
}
async function feedback(out, prompt, retry) {
  if (!getKey()) { keyForm(out, retry); return; }
  out.innerHTML = '<p class="note">✨ Correction en cours… (up to a minute)</p><div class="aifr-out" style="white-space:pre-wrap;line-height:1.65"></div>';
  const box = out.querySelector('.aifr-out');
  try { box.textContent = await claude(prompt, t => { box.textContent += t; }); out.firstElementChild.textContent = '✨ AI feedback'; }
  catch (e) { if (e.message === 'NO_KEY') keyForm(out, retry); else out.innerHTML = `<p class="note" style="color:var(--red,#c33)">${esc(e.message)}</p>`; }
}
async function copy(text, btn) {
  try { await navigator.clipboard.writeText(SYSTEM + '\n\n' + text); btn.textContent = 'Copied ✓ — paste into ChatGPT or Claude'; }
  catch (e) { btn.textContent = 'Copy failed'; }
}
const say = (t, b) => { if (typeof window.say === 'function') window.say(t, null, b); };

/* ---------- writing ---------- */
function buildWriting(el) {
  const id = el.dataset.id, min = +el.dataset.min || 30, model = el.dataset.model || '';
  const ui = document.createElement('div');
  ui.className = 'aiw-ui';
  ui.innerHTML = `<textarea class="inp" lang="fr" spellcheck="false" rows="8" style="width:100%;margin-top:8px;font-size:16px;line-height:1.6" placeholder="Écrivez votre texte ici…"></textarea>
    <p class="note aifr-wc" style="margin:4px 0">0 mots · minimum ${min}</p>
    <div class="exbar"><button type="button" class="btn aifr-go">✨ Correction IA</button><button type="button" class="btn ghost aifr-copy">Copy for ChatGPT/Claude</button>${model ? '<button type="button" class="btn ghost aifr-model">Voir un modèle</button>' : ''}</div>
    ${model ? `<div class="box tip aifr-modelbox" hidden><p style="white-space:pre-line;margin:0">${esc(model)}</p><button type="button" class="speak aifr-say">🔈 Écouter le modèle</button></div>` : ''}
    <div class="aifr-res"></div>`;
  el.appendChild(ui);
  const ta = ui.querySelector('textarea'), wc = ui.querySelector('.aifr-wc');
  ta.value = kv('w-' + id);
  const count = () => { const n = words(ta.value); wc.textContent = `${n} mot${n > 1 ? 's' : ''} · minimum ${min}`; };
  count();
  ta.addEventListener('input', () => { kv('w-' + id, ta.value); count(); });
  const prompt = () => `${level()} — writing task.\nTask: ${el.dataset.task}\nMinimum ${min} words. The learner wrote ${words(ta.value)} words:\n"""\n${ta.value}\n"""`;
  const go = () => { if (words(ta.value) < 8) { ui.querySelector('.aifr-res').innerHTML = '<p class="note">Write a few sentences first.</p>'; return; } feedback(ui.querySelector('.aifr-res'), prompt(), go); };
  ui.querySelector('.aifr-go').onclick = go;
  ui.querySelector('.aifr-copy').onclick = e => copy(prompt(), e.target);
  if (model) {
    ui.querySelector('.aifr-model').onclick = () => { const b = ui.querySelector('.aifr-modelbox'); b.hidden = !b.hidden; };
    ui.querySelector('.aifr-say').onclick = e => say(model, e.target);
  }
}

/* ---------- speaking ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let rec = null;
function buildSpeaking(el) {
  const id = el.dataset.id, q = el.dataset.q, model = el.dataset.model || '';
  const ui = document.createElement('div');
  ui.className = 'ais-ui';
  ui.innerHTML = `<div class="exbar"><button type="button" class="btn ghost aifr-q">🔈 Question</button><button type="button" class="btn aifr-rec">🎤 Enregistrer</button><span class="note aifr-st"></span></div>
    <textarea class="inp" lang="fr" rows="3" style="width:100%;font-size:16px" placeholder="Votre réponse apparaît ici (ou tapez-la)…"></textarea>
    <div class="exbar"><button type="button" class="btn aifr-go">✨ Avis IA</button><button type="button" class="btn ghost aifr-copy">Copy for ChatGPT/Claude</button>${model ? '<button type="button" class="btn ghost aifr-model">Réponse modèle 🔈</button>' : ''}</div>
    ${model ? `<p class="aifr-modelbox" hidden style="margin:6px 0"><i>${esc(model)}</i></p>` : ''}<div class="aifr-res"></div>`;
  el.appendChild(ui);
  const ta = ui.querySelector('textarea'), st = ui.querySelector('.aifr-st'), btn = ui.querySelector('.aifr-rec');
  ta.value = kv('s-' + id);
  ta.addEventListener('input', () => kv('s-' + id, ta.value));
  ui.querySelector('.aifr-q').onclick = e => say(q, e.target);
  btn.onclick = () => {
    if (!SR) { st.textContent = 'Speech recognition needs Chrome or Edge — type your answer instead.'; return; }
    if (rec) { rec.stop(); return; }
    const r = new SR(); r.lang = 'fr-FR'; r.continuous = true; r.interimResults = true;
    const base = ta.value ? ta.value.trim() + ' ' : ''; let fin = '';
    r.onresult = ev => { let mid = ''; for (let i = ev.resultIndex; i < ev.results.length; i++) { if (ev.results[i].isFinal) fin += ev.results[i][0].transcript + ' '; else mid += ev.results[i][0].transcript; } ta.value = (base + fin + mid).trim(); kv('s-' + id, ta.value); };
    r.onerror = ev => { st.textContent = ev.error === 'not-allowed' ? 'Microphone blocked — allow it in the browser.' : 'Stopped (' + ev.error + ').'; };
    r.onend = () => { rec = null; btn.textContent = '🎤 Enregistrer'; };
    try { r.start(); rec = r; btn.textContent = '■ Stop'; st.textContent = 'Parlez…'; } catch (e) { st.textContent = 'Could not start the microphone.'; }
  };
  const prompt = () => `${level()} — speaking task (speech-to-text transcript, ignore punctuation).\nQuestion: ${q}\nAnswer:\n"""\n${ta.value}\n"""\nAlso give a natural A1 model answer that the learner can repeat.`;
  const go = () => { if (words(ta.value) < 3) { ui.querySelector('.aifr-res').innerHTML = '<p class="note">Record or type your answer first.</p>'; return; } feedback(ui.querySelector('.aifr-res'), prompt(), go); };
  ui.querySelector('.aifr-go').onclick = go;
  ui.querySelector('.aifr-copy').onclick = e => copy(prompt(), e.target);
  if (model) ui.querySelector('.aifr-model').onclick = e => { const b = ui.querySelector('.aifr-modelbox'); b.hidden = !b.hidden; if (!b.hidden) say(model, e.target); };
}

$$('.aiw:not([data-built])').forEach(el => { el.dataset.built = '1'; buildWriting(el); });
$$('.ais:not([data-built])').forEach(el => { el.dataset.built = '1'; buildSpeaking(el); });
const css = document.createElement('style');
css.textContent = '.fa-help{display:block;font-family:Vazirmatn,Tahoma,sans-serif;font-style:normal}.aiw details,.ais details{margin:6px 0}.aiw summary{cursor:pointer;font-weight:700}';
document.head.appendChild(css);
