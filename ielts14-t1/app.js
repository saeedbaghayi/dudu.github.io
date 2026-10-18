/* IELTS practice test (Cambridge IELTS 14, Test 1) — listening, reading, writing, speaking, words.
   Works without a server. AI feedback / the AI examiner call Claude with the learner's own API key
   (stored only in this browser) through the official SDK, loaded on first use. */
const D = window.IELTS;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const main = $('#main');

/* ------------------------------ storage ------------------------------ */
const KEY = 'dudu-ielts14-t1';
const AIKEY = 'anthropic-key';
const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } };
const st = Object.assign({ ans: { L: {}, R: {} }, writing: {}, speak: {}, cards: {}, tab: 'listening', rate: 1, fa: true, rp: 1, wt: 1, sp: 'p1' }, load());
st.ans = Object.assign({ L: {}, R: {} }, st.ans);
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };
const getKey = () => { try { return localStorage.getItem(AIKEY) || ''; } catch (e) { return ''; } };

/* ------------------------------ speech out (English voice, chosen speed) ------------------------------ */
const RATES = [0.5, 0.75, 1, 1.25];
let voices = [];
const loadVoices = () => { try { voices = speechSynthesis.getVoices().filter(v => /^en(-|_|$)/i.test(v.lang)); } catch (e) {} };
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.addEventListener('voiceschanged', loadVoices); }
function bestVoice() {
  const rank = v => (/natural|neural|premium|enhanced|google/i.test(v.name) ? 20 : 0) + (/en-GB/i.test(v.lang) ? 10 : /en-US/i.test(v.lang) ? 6 : 0) + (v.localService ? 1 : 0);
  return voices.slice().sort((a, b) => rank(b) - rank(a))[0] || null;
}
let speakingBtn = null;
function say(text, btn) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  if (speakingBtn) speakingBtn.classList.remove('on');
  if (btn && speakingBtn === btn) { speakingBtn = null; return; }   // second tap = stop
  const u = new SpeechSynthesisUtterance(text);
  const v = bestVoice(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-GB';
  u.rate = st.rate;
  speakingBtn = btn || null;
  if (btn) btn.classList.add('on');
  u.onend = u.onerror = () => { if (btn) btn.classList.remove('on'); if (speakingBtn === btn) speakingBtn = null; };
  speechSynthesis.speak(u);
}
const sayBtn = (text, label = 'Listen') => `<button type="button" class="say" data-say="${esc(text)}" aria-label="${esc(label)}" title="${esc(label)}">🔈</button>`;

/* ------------------------------ speech in (recording answers) ------------------------------ */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let rec = null;
function startRec(target, btn, statusEl) {
  if (!SR) { statusEl.textContent = 'Speech recognition needs Chrome or Edge. You can type your answer instead.'; return; }
  if (rec) { rec.stop(); return; }
  const r = new SR();
  r.lang = 'en-GB'; r.continuous = true; r.interimResults = true;
  const base = target.value ? target.value.trim() + ' ' : '';
  let finalText = '';
  r.onresult = e => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) finalText += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    target.value = (base + finalText + interim).replace(/\s+/g, ' ').trimStart();
    target.dispatchEvent(new Event('input', { bubbles: true }));
  };
  r.onerror = e => { statusEl.textContent = e.error === 'not-allowed' ? 'The microphone is blocked. Allow it for this site in the browser settings.' : 'Recording stopped (' + e.error + ').'; };
  r.onend = () => { rec = null; btn.textContent = '🎤 Record'; btn.classList.remove('t-btn--teal'); if (!statusEl.textContent.startsWith('The microphone')) statusEl.textContent = 'Stopped. Edit the transcript if needed.'; };
  try { r.start(); } catch (e) { statusEl.textContent = 'Could not start the microphone.'; return; }
  rec = r; btn.textContent = '■ Stop'; btn.classList.add('t-btn--teal'); statusEl.textContent = 'Listening… speak now.';
}

/* ------------------------------ timers ------------------------------ */
const timers = {};
function timerHTML(id, minutes) {
  const t = timers[id];
  const left = t ? t.left : minutes * 60;
  return `<span class="ie-row"><span class="timer" id="tm-${id}">${fmt(left)}</span><button type="button" class="t-btn t-btn--secondary t-btn--sm" data-timer="${id}" data-min="${minutes}">${t && t.run ? 'Pause' : (t ? 'Resume' : 'Start timer')}</button></span>`;
}
const fmt = s => { s = Math.max(0, Math.round(s)); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
function toggleTimer(id, minutes, btn, onEnd) {
  let t = timers[id];
  if (!t) t = timers[id] = { left: minutes * 60, run: false, h: 0 };
  if (t.run) { clearInterval(t.h); t.run = false; btn.textContent = 'Resume'; return; }
  t.run = true; btn.textContent = 'Pause';
  t.h = setInterval(() => {
    t.left -= 1;
    const el = $('#tm-' + id);
    if (el) { el.textContent = fmt(t.left); el.classList.toggle('low', t.left <= 60); }
    if (t.left <= 0) { clearInterval(t.h); t.run = false; const b = $(`[data-timer="${id}"]`); if (b) b.textContent = 'Time is up'; if (onEnd) onEnd(); }
  }, 1000);
}

/* ------------------------------ marking ------------------------------ */
const norm = s => String(s || '').toLowerCase().replace(/[’`]/g, "'").replace(/£/g, '').replace(/[.,;:!?]+$/g, '').replace(/^the\s+/, '').replace(/\s+/g, ' ').trim();
function band(kind, raw) { for (const [min, b] of D.bands[kind]) if (raw >= min) return b; return 0; }

/* every question of a set of groups → [{n, given, ok, key, why}] */
function markGroups(groups, answers) {
  const out = [];
  for (const g of groups) {
    if (g.kind === 'notes') {
      const nums = Object.keys(g.ans).map(Number);
      const pair = g.pair || [];
      const usedPair = new Set();
      for (const n of nums) {
        const given = answers[n] || '';
        let ok;
        if (pair.includes(n)) {          // either-order pair: any unused accepted word counts once
          const accepted = g.ans[n].map(norm).filter(a => !usedPair.has(a));
          ok = accepted.includes(norm(given));
          if (ok) usedPair.add(norm(given));
        } else ok = g.ans[n].some(a => norm(a) === norm(given));
        out.push({ n, given, ok, key: pair.includes(n) ? g.ans[pair[0]].slice(0, 2).join(' / ') : g.ans[n][0], why: g.why && g.why[n] });
      }
    } else if (g.kind === 'two') {
      const chosen = (answers[g.ns[0]] || '').split('').filter(Boolean);
      const good = chosen.filter(c => g.ans.includes(c));
      g.ns.forEach((n, i) => out.push({ n, given: chosen.join(', '), ok: i < good.length, key: g.ans.join(' & '), why: i === 0 ? g.why : '' }));
    } else {
      const items = g.items.map(it => it[0]);
      for (const n of items) {
        const given = answers[n] || '';
        out.push({ n, given, ok: given === g.ans[n], key: g.ans[n], why: g.why && g.why[n] });
      }
    }
  }
  return out.sort((a, b) => a.n - b.n);
}

/* ------------------------------ question rendering ------------------------------ */
function groupHTML(g, part, answers) {
  const instr = `<p class="ie-instr">${esc(g.instr)}<span class="fa">${esc(g.instrFa || '')}</span></p>`;
  const title = g.title ? `<h4 class="ie-h3">${esc(g.title)}</h4>` : '';
  if (g.kind === 'notes') {
    const lines = g.lines.map(l => '<li>' + l.replace(/\[\[(\d+)\]\]/g, (m, n) =>
      `<span class="gap" data-q="${n}"><b>${n}</b><input data-part="${part}" data-n="${n}" value="${esc(answers[n] || '')}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Answer ${n}"></span>`) + '</li>').join('');
    return `<div class="ie-note">${instr}${title}<ul class="ie-lines">${lines}</ul></div>`;
  }
  if (g.kind === 'two') {
    const chosen = (answers[g.ns[0]] || '').split('');
    return `<div class="ie-note q" data-q="${g.ns[0]}" data-two="${g.ns.join(',')}">${instr}<p class="q-t"><b>${g.ns.join(' & ')}</b>${esc(g.q)}</p>` +
      g.options.map(([k, t]) => `<label class="opt" data-k="${k}"><input type="checkbox" data-part="${part}" data-two="${g.ns[0]}" value="${k}"${chosen.includes(k) ? ' checked' : ''}><span><b>${k}</b> ${esc(t)}</span></label>`).join('') + '</div>';
  }
  if (g.kind === 'match') {
    const box = g.boxHidden ? '' : `<div class="ie-box">${g.title ? `<b>${esc(g.title)}</b><br>` : ''}${g.box.map(([k, t]) => `<b>${k}</b> ${esc(t)}`).join('<br>')}</div>`;
    const letters = g.box.map(b => b[0]);
    return `<div class="ie-note">${instr}${box}` + g.items.map(([n, t]) =>
      `<div class="q" data-q="${n}"><span class="q-t"><b>${n}</b>${esc(t)}</span><select data-part="${part}" data-n="${n}" aria-label="Answer ${n}"><option value="">—</option>${letters.map(l => `<option${answers[n] === l ? ' selected' : ''}>${l}</option>`).join('')}</select></div>`).join('') + '</div>';
  }
  if (g.kind === 'mc') {
    return `<div class="ie-note">${instr}` + g.items.map(([n, t, opts]) =>
      `<div class="q" data-q="${n}"><span class="q-t"><b>${n}</b>${esc(t)}</span>` + opts.map(([k, o]) =>
        `<label class="opt" data-k="${k}"><input type="radio" name="${part}-${n}" data-part="${part}" data-n="${n}" value="${k}"${answers[n] === k ? ' checked' : ''}><span><b>${k}</b> ${esc(o)}</span></label>`).join('') + '</div>').join('') + '</div>';
  }
  if (g.kind === 'tfng') {
    const vals = g.mode === 'YN' ? ['YES', 'NO', 'NOT GIVEN'] : ['TRUE', 'FALSE', 'NOT GIVEN'];
    return `<div class="ie-note">${instr}` + g.items.map(([n, t]) =>
      `<div class="q" data-q="${n}"><span class="q-t"><b>${n}</b>${esc(t)}</span><select data-part="${part}" data-n="${n}" aria-label="Answer ${n}"><option value="">—</option>${vals.map(v => `<option${answers[n] === v ? ' selected' : ''}>${v}</option>`).join('')}</select></div>`).join('') + '</div>';
  }
  return '';
}

/* show ticks, keys and explanations under each question */
function showMarks(root, results) {
  $$('.mk', root).forEach(e => e.remove());
  $$('.ok,.bad', root).forEach(e => e.classList.remove('ok', 'bad'));
  $$('.opt', root).forEach(e => e.classList.remove('right', 'wrong'));
  for (const r of results) {
    const host = $(`[data-q="${r.n}"]`, root);
    if (!host) continue;
    if (host.dataset.two) {                                    // choose-two block: mark once
      if (host.dataset.marked) continue;
      host.dataset.marked = '1';
      const key = r.key.split(' & ');
      $$('.opt', host).forEach(o => { const inp = $('input', o); if (key.includes(o.dataset.k)) o.classList.add('right'); else if (inp.checked) o.classList.add('wrong'); });
      host.insertAdjacentHTML('beforeend', `<span class="mk key">Answer: ${esc(r.key)}${r.why ? `<span class="why">${esc(r.why)}</span>` : ''}</span>`);
      continue;
    }
    host.classList.add(r.ok ? 'ok' : 'bad');
    $$('.opt', host).forEach(o => { if (o.dataset.k === r.key) o.classList.add('right'); else if ($('input', o).checked) o.classList.add('wrong'); });
    const txt = `${r.ok ? '✓' : '✗ ' + esc(r.key)}${r.why ? `<span class="why">${esc(r.why)}</span>` : ''}`;
    if (host.classList.contains('gap')) host.insertAdjacentHTML('afterend', ` <span class="mk key">${txt}</span>`);
    else host.insertAdjacentHTML('beforeend', `<span class="mk key">${txt}</span>`);
  }
  $$('[data-two]', root).forEach(h => delete h.dataset.marked);
}

function scoreHTML(kind, results, total) {
  const raw = results.filter(r => r.ok).length;
  const b = total === 40 ? band(kind, raw) : null;
  return `<div class="t-card score"><div><span class="t-label">Your score</span><div class="band">${raw} / ${total}</div></div>` +
    (b != null ? `<div><span class="t-label">Estimated band</span><div class="band">${b}</div></div>` : `<p class="t-small">Finish all passages to get a band estimate.</p>`) +
    `<p class="t-small" style="flex-basis:100%">Wrong answers are marked ✗ with the correct answer${kind === 'reading' ? ' and where it is in the passage' : ''}.<span class="fa">جواب‌های غلط با ✗ و جواب درست مشخص شده‌اند.</span></p></div>`;
}

/* ------------------------------ LISTENING ------------------------------ */
const allListeningGroups = () => D.listening.sections.flatMap(s => s.groups);
function viewListening() {
  const L = D.listening;
  return `<section class="t-card"><span class="t-label">Listening · 30 minutes · 40 questions</span><h2 class="ie-h2">Listening</h2>
    <p class="ie-p">${esc(L.help.en)}<span class="fa">${esc(L.help.fa)}</span></p>
    <div class="ie-row" style="margin-top:10px">${timerHTML('L', 30)}</div></section>` +
    L.sections.map(s => `<section class="t-card" id="ls-${s.n}"><span class="t-label">${esc(s.title)}</span><h3 class="ie-h2" style="font-size:20px">${esc(s.topic)}</h3>
      <div class="ie-row" style="margin:10px 0"><label class="t-btn t-btn--secondary t-btn--sm">🎧 Load audio for section ${s.n}<input type="file" accept="audio/*" data-audio="${s.n}" hidden></label>
      <audio controls preload="none" id="au-${s.n}" hidden style="width:100%"></audio></div>
      ${s.groups.map(g => groupHTML(g, 'L', st.ans.L)).join('')}</section>`).join('') +
    `<div class="ie-row"><button type="button" class="t-btn t-btn--block" data-act="checkL">Check my answers</button></div><div id="L-score"></div>`;
}

/* audio files the learner loads stay in this browser (IndexedDB) */
function idb() {
  return new Promise((res, rej) => { const r = indexedDB.open('ielts-audio', 1); r.onupgradeneeded = () => r.result.createObjectStore('a'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
}
async function putAudio(n, blob) { const db = await idb(); return new Promise(r => { const tx = db.transaction('a', 'readwrite'); tx.objectStore('a').put(blob, KEY + '-' + n); tx.oncomplete = r; }); }
async function getAudio(n) { const db = await idb(); return new Promise(r => { const q = db.transaction('a').objectStore('a').get(KEY + '-' + n); q.onsuccess = () => r(q.result || null); q.onerror = () => r(null); }); }
function showAudio(n, blob) { const a = $('#au-' + n); if (!a || !blob) return; a.src = URL.createObjectURL(blob); a.playbackRate = st.rate; a.hidden = false; }
async function restoreAudio() { try { for (const s of D.listening.sections) showAudio(s.n, await getAudio(s.n)); } catch (e) {} }

/* ------------------------------ READING ------------------------------ */
function viewReading() {
  const R = D.reading, p = R.passages[st.rp - 1];
  return `<section class="t-card"><span class="t-label">Academic Reading · 60 minutes · 40 questions</span><h2 class="ie-h2">Reading</h2>
    <p class="ie-p">${esc(R.help.en)}<span class="fa">${esc(R.help.fa)}</span></p>
    <div class="ie-row" style="margin-top:10px">${timerHTML('R', 60)}</div>
    <div class="ie-tabs" style="margin-top:10px">${R.passages.map(x => `<button type="button" data-rp="${x.n}" aria-pressed="${x.n === st.rp}">Passage ${x.n}</button>`).join('')}</div></section>
    <section class="t-card"><span class="t-label">Reading Passage ${p.n} · ${esc(p.qs)} · about ${p.time} minutes</span>
      <h2 class="ie-h2">${esc(p.title)}</h2>${p.sub ? `<p class="ie-instr">${esc(p.sub)}</p>` : ''}
      <div>${p.paras.map(([l, t]) => `<div class="pass-p"><span class="let">${esc(l)}</span><p class="pass">${esc(t)}</p>${sayBtn(t, 'Read this paragraph aloud')}</div>`).join('')}</div>
      ${p.note ? `<p class="t-small">${esc(p.note)}</p>` : ''}</section>
    <section class="t-card" id="R-q">${p.groups.map(g => groupHTML(g, 'R', st.ans.R)).join('')}</section>
    <div class="ie-row"><button type="button" class="t-btn" data-act="checkR">Check passage ${p.n}</button><button type="button" class="t-btn t-btn--secondary" data-act="checkRall">Check all 40</button></div><div id="R-score"></div>`;
}

/* ------------------------------ WRITING ------------------------------ */
const PIE = { Breakfast: '#9A8F9C', Lunch: '#F3B534', Dinner: '#2B2230', Snacks: '#FFFDF8' };
function pieSVG(c) {
  let a0 = -Math.PI / 2, out = '';
  const entries = Object.entries(c.values);
  for (const [k, v] of entries) {
    const a1 = a0 + v / 100 * Math.PI * 2, large = a1 - a0 > Math.PI ? 1 : 0;
    const x0 = 60 + 50 * Math.cos(a0), y0 = 60 + 50 * Math.sin(a0), x1 = 60 + 50 * Math.cos(a1), y1 = 60 + 50 * Math.sin(a1);
    const mid = (a0 + a1) / 2, tx = 60 + 32 * Math.cos(mid), ty = 60 + 32 * Math.sin(mid);
    const dark = k === 'Dinner' || k === 'Breakfast';
    out += `<path d="M60 60 L${x0.toFixed(2)} ${y0.toFixed(2)} A50 50 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z" fill="${PIE[k]}" stroke="#2B2230" stroke-width="1.5"/>` +
      `<text x="${tx.toFixed(1)}" y="${(ty + 4).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="800" fill="${dark ? '#FFFDF8' : '#2B2230'}" font-family="system-ui,sans-serif">${v}%</text>`;
    a0 = a1;
  }
  return `<svg viewBox="0 0 120 120" width="160" height="160" role="img" aria-label="${esc(c.name)}: ${entries.map(([k, v]) => k + ' ' + v + '%').join(', ')}">${out}</svg>`;
}
const words = t => (String(t).trim().match(/[A-Za-z0-9’'-]+/g) || []).length;
function viewWriting() {
  const t = D.writing.tasks[st.wt - 1], draft = st.writing['t' + t.n] || '';
  const chart = t.charts ? `<p class="ie-h3" style="text-align:center">${esc(t.chartTitle)}</p><div class="pies">${t.charts.map(c => `<figure>${'<figcaption>' + esc(c.name) + '</figcaption>'}${pieSVG(c)}</figure>`).join('')}</div>
    <div class="legend">${Object.keys(PIE).map(k => `<span><i style="background:${PIE[k]}"></i>${k}</span>`).join('')}</div>` : '';
  return `<section class="t-card"><span class="t-label">Academic Writing · 60 minutes</span><h2 class="ie-h2">Writing</h2>
    <div class="ie-tabs" style="margin-top:10px">${D.writing.tasks.map(x => `<button type="button" data-wt="${x.n}" aria-pressed="${x.n === st.wt}">Task ${x.n}</button>`).join('')}</div></section>
    <section class="t-card"><span class="t-label">Writing Task ${t.n} · about ${t.time} minutes · at least ${t.min} words</span>
      <div class="cue" style="margin:8px 0"><p class="ie-p"><b>${esc(t.prompt)}</b></p><span class="fa">${esc(t.promptFa)}</span></div>
      ${chart}
      <h4 class="ie-h3" style="margin-top:12px">Tips</h4><ul class="ie-lines">${t.tips.map(([e, f]) => `<li>• ${esc(e)}<span class="fa">${esc(f)}</span></li>`).join('')}</ul></section>
    <section class="t-card"><div class="ie-row" style="justify-content:space-between;margin-bottom:8px">${timerHTML('W' + t.n, t.time)}<span class="wc${words(draft) >= t.min ? ' ok' : ''}" id="wc">${words(draft)} words</span></div>
      <textarea class="ie-txt" id="wtext" data-task="${t.n}" placeholder="Write your answer here…" spellcheck="true" lang="en">${esc(draft)}</textarea>
      <div class="ie-row" style="margin-top:10px"><button type="button" class="t-btn t-btn--teal t-btn--sm" data-act="aiW">✨ AI feedback & band</button>
      <button type="button" class="t-btn t-btn--secondary t-btn--sm" data-act="copyW">Copy for ChatGPT/Claude</button>
      <button type="button" class="t-btn t-btn--secondary t-btn--sm" data-act="modelW">Show Band 8 sample</button></div>
      <div id="W-ai"></div><div id="W-model" hidden><div class="ie-row" style="margin-top:12px"><h4 class="ie-h3" style="margin:0">Band 8 sample answer</h4>${sayBtn(t.model, 'Read the sample aloud')}</div><p class="model">${esc(t.model)}</p><p class="t-small">${esc(t.modelNote)}</p></div></section>
    <section class="t-card"><h4 class="ie-h3">Useful phrases</h4><ul class="ie-lines">${D.writing.phrases.map(([e, f]) => `<li>${sayBtn(e)} ${esc(e)}<span class="fa">${esc(f)}</span></li>`).join('')}</ul></section>`;
}

/* ------------------------------ SPEAKING ------------------------------ */
function qCard(id, q, sample, label) {
  const tr = st.speak[id] || '';
  return `<div class="t-card t-card--flat" style="display:flex;flex-direction:column;gap:8px" data-sq="${id}">
    <div class="ie-row"><span class="q-t" style="flex:1"><b>${esc(label)}</b>${esc(q)}</span>${sayBtn(q, 'Hear the question')}</div>
    <div class="ie-row"><button type="button" class="t-btn t-btn--sm" data-rec="${id}">🎤 Record</button><span class="t-small" id="rs-${id}"></span></div>
    <textarea class="ie-txt" style="min-height:90px" data-tr="${id}" placeholder="Your answer appears here (or type it)…" lang="en">${esc(tr)}</textarea>
    <div class="ie-row"><button type="button" class="t-btn t-btn--teal t-btn--sm" data-aiq="${id}">✨ AI feedback</button>
      <button type="button" class="t-btn t-btn--secondary t-btn--sm" data-sample="${id}">Band 8 sample</button></div>
    <div data-sampleout="${id}" hidden><div class="ie-row"><p class="model" style="flex:1">${esc(sample)}</p>${sayBtn(sample, 'Read the sample aloud')}</div></div>
    <div data-aiout="${id}"></div></div>`;
}
const speakItems = () => {
  const S = D.speaking, m = {};
  S.part1.qs.forEach((x, i) => { m['p1-' + i] = { q: x.q, sample: x.sample, part: 'Part 1 (' + S.part1.topic + ')' }; });
  m['p2'] = { q: S.part2.card + ' You should say: ' + S.part2.points.join('; '), sample: S.part2.sample, part: 'Part 2 (long turn)' };
  S.part3.forEach((t, j) => t.qs.forEach((x, i) => { m['p3-' + j + '-' + i] = { q: x.q, sample: x.sample, part: 'Part 3 (' + t.topic + ')' }; }));
  return m;
};
function viewSpeaking() {
  const S = D.speaking;
  const tabs = [['p1', 'Part 1'], ['p2', 'Part 2'], ['p3', 'Part 3'], ['ai', '🤖 AI examiner']];
  let body = '';
  if (st.sp === 'p1') body = `<section class="t-card"><span class="t-label">Part 1 · 4–5 minutes</span><h3 class="ie-h2" style="font-size:20px">${esc(S.part1.topic)}</h3>
      <p class="t-small">The examiner asks about you and familiar topics. Answer in 2–4 sentences.<span class="fa">ممتحن درباره‌ی خودتان و موضوع‌های آشنا می‌پرسد. در ۲ تا ۴ جمله جواب دهید.</span></p></section>` +
    S.part1.qs.map((x, i) => qCard('p1-' + i, x.q, x.sample, (i + 1) + '.')).join('');
  else if (st.sp === 'p2') body = `<section class="t-card"><span class="t-label">Part 2 · 1 minute to prepare · speak for 1–2 minutes</span>
      <div class="cue"><p class="ie-p"><b>${esc(S.part2.card)}</b></p><p class="ie-p">You should say:</p><ul>${S.part2.points.slice(0, 3).map(p => `<li>${esc(p)}</li>`).join('')}</ul><p class="ie-p"><b>${esc(S.part2.points[3])}</b></p><span class="fa">${esc(S.part2.cardFa)}</span></div>
      <div class="ie-row" style="margin-top:10px"><span class="t-small">Prepare:</span>${timerHTML('S2prep', 1)}<span class="t-small">Talk:</span>${timerHTML('S2talk', 2)}</div>
      <textarea class="ie-txt" style="min-height:70px;margin-top:8px" data-tr="p2notes" placeholder="Your notes (key words)…">${esc(st.speak.p2notes || '')}</textarea></section>` +
    qCard('p2', S.part2.card, S.part2.sample, 'Your talk:');
  else if (st.sp === 'p3') body = S.part3.map((t, j) => `<section class="t-card"><span class="t-label">Part 3 · discussion</span><h3 class="ie-h2" style="font-size:20px">${esc(t.topic)}</h3></section>` +
    t.qs.map((x, i) => qCard('p3-' + j + '-' + i, x.q, x.sample, (i + 1) + '.')).join('')).join('');
  else body = viewExaminer();
  return `<section class="t-card"><span class="t-label">Speaking · 11–14 minutes</span><h2 class="ie-h2">Speaking</h2>
    <ul class="ie-lines" style="margin-top:6px">${S.tips.map(([e, f]) => `<li>• ${esc(e)}<span class="fa">${esc(f)}</span></li>`).join('')}</ul>
    <div class="ie-tabs" style="margin-top:10px">${tabs.map(([k, l]) => `<button type="button" data-sp="${k}" aria-pressed="${k === st.sp}">${l}</button>`).join('')}</div></section>` + body;
}

/* the AI examiner: a full mock speaking test, one question at a time */
let chat = [];
function viewExaminer() {
  return `<section class="t-card" style="display:flex;flex-direction:column;gap:10px"><span class="t-label">Mock speaking test with an AI examiner</span>
    <p class="t-small">The examiner asks the book's Part 1, 2 and 3 questions one at a time and reads them aloud. Answer by recording or typing. Say or type <b>finish</b> to get your band estimate and corrections.
      <span class="fa">ممتحن هوش مصنوعی سؤال‌های بخش ۱، ۲ و ۳ کتاب را یکی‌یکی می‌پرسد و بلند می‌خواند. با ضبط صدا یا تایپ جواب دهید. برای گرفتن نمره و اصلاحات، finish بنویسید.</span></p>
    <div class="chat" id="chat">${chat.map(m => `<div class="msg ${m.role === 'user' ? 'me' : 'ex'}">${esc(m.content)}</div>`).join('')}</div>
    ${chat.length ? `<div class="ie-row"><button type="button" class="t-btn t-btn--sm" data-rec="chatbox">🎤 Record</button><span class="t-small" id="rs-chatbox"></span></div>
      <textarea class="ie-txt" style="min-height:80px" id="chatbox" data-tr="chatbox" placeholder="Your answer…" lang="en"></textarea>
      <div class="ie-row"><button type="button" class="t-btn t-btn--teal" data-act="chatSend">Send answer</button><button type="button" class="t-btn t-btn--secondary t-btn--sm" data-act="chatFinish">Finish & get my band</button><button type="button" class="t-btn t-btn--ghost t-btn--sm" data-act="chatReset">Start again</button></div>`
      : `<button type="button" class="t-btn t-btn--teal" data-act="chatStart">Start the mock test</button>`}
    <p class="t-small" id="chatStatus" role="status"></p></section>`;
}

/* ------------------------------ WORDS (flashcards, Leitner boxes) ------------------------------ */
let card = null, flipped = false;
function nextCard() {
  const now = Date.now();
  const due = D.words.filter(w => { const c = st.cards[w.w]; return !c || c.due <= now; });
  card = due.length ? due[Math.floor(Math.random() * Math.min(due.length, 8))] : null;
  flipped = false;
}
function viewWords() {
  if (!card) nextCard();
  const learned = D.words.filter(w => (st.cards[w.w] || {}).box >= 3).length;
  const front = card ? `<div class="w">${esc(card.w)}</div><span class="t-pill">${esc(card.p)}</span>${sayBtn(card.w + '. ' + card.ex, 'Hear the word and example')}` : '';
  const back = card && flipped ? `<p class="ie-p"><b>${esc(card.en)}</b></p><span class="fa" style="text-align:center;font-size:18px">${esc(card.fa)}</span><p class="ex">“${esc(card.ex)}”</p>` : '';
  return `<section class="t-card"><span class="t-label">Vocabulary from Test 1 · ${D.words.length} words</span><h2 class="ie-h2">Words</h2>
    <p class="t-small">${learned} learned · cards you know come back less often.<span class="fa">${learned} کلمه یاد گرفته شده · کارت‌هایی که بلدید کمتر تکرار می‌شوند.</span></p>
    <div class="t-progress t-progress--teal t-progress--sm" style="margin-top:8px"><i style="--v:${Math.round(learned / D.words.length * 100)}%"></i></div></section>
    ${card ? `<section class="t-card flash" data-act="flip">${front}${back}${flipped ? '' : '<p class="t-small">Tap to see the meaning</p>'}</section>
      ${flipped ? `<div class="ie-row" style="justify-content:center"><button type="button" class="t-btn t-btn--secondary" data-grade="0">Again</button><button type="button" class="t-btn t-btn--teal" data-grade="1">I knew it</button></div>` : ''}`
      : `<section class="t-card"><h3 class="ie-h3">All done for now 🎉</h3><p class="t-small">Come back later for the next review.</p></section>`}
    <section class="t-card"><h4 class="ie-h3">All words</h4><ul class="ie-lines">${D.words.map(w => `<li>${sayBtn(w.w)} <b>${esc(w.w)}</b> <i>${esc(w.p)}</i> — ${esc(w.en)}<span class="fa">${esc(w.fa)}</span></li>`).join('')}</ul></section>`;
}
function grade(ok) {
  const c = st.cards[card.w] || { box: 0 };
  c.box = ok ? Math.min(c.box + 1, 5) : 0;
  c.due = Date.now() + [0, 1, 3, 7, 16, 35][c.box] * 864e5 + (ok ? 0 : 60e3);
  st.cards[card.w] = c;
  st.ex_words = { tot: D.words.length, ok: D.words.filter(w => (st.cards[w.w] || {}).box >= 3).length };
  save(); nextCard(); render();
}

/* ------------------------------ AI (Claude, learner's own key) ------------------------------ */
const MODEL = 'claude-opus-5-5';
let sdk = null;
async function claude({ system, messages, onText, effort = 'medium' }) {
  const key = getKey();
  if (!key) { openKeySheet(); throw new Error('Add your Anthropic API key first (✨ button at the top).'); }
  sdk = sdk || import('https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@0.131.0/+esm');
  const { default: Anthropic } = await sdk;
  const client = new Anthropic({ apiKey: key, dangerouslyAllowBrowser: true });
  try {
    const stream = client.beta.messages.stream({
      model: MODEL, max_tokens: 16000,
      output_config: { effort },
      betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default',
      system, messages
    });
    stream.on('text', t => onText && onText(t));
    const msg = await stream.finalMessage();
    if (msg.stop_reason === 'refusal') throw new Error('The model declined this request.');
    return msg.content.filter(b => b.type === 'text').map(b => b.text).join('');
  } catch (e) {
    if (e instanceof Anthropic.AuthenticationError) throw new Error('Your API key was not accepted. Check it in the ✨ settings.');
    if (e instanceof Anthropic.RateLimitError) throw new Error('Too many requests right now. Wait a minute and try again.');
    if (e instanceof Anthropic.APIConnectionError) throw new Error('Could not reach the AI service. Check your internet connection.');
    if (e instanceof Anthropic.APIError) throw new Error('The AI service returned an error (' + (e.status || '?') + '). Try again.');
    throw e;
  }
}
const EXAMINER = 'You are an experienced, certified IELTS examiner helping a candidate whose first language is Persian prepare for the Academic test. Be accurate and honest about bands (use the official public band descriptors), encouraging but direct. Write in clear English with short headings. After the English feedback, add a short summary of the three most important points in Persian under the heading "خلاصه به فارسی".';
function writingPrompt(t, text) {
  const data = t.charts ? '\nChart data (percent of daily intake): ' + t.charts.map(c => c.name + ' — ' + Object.entries(c.values).map(([k, v]) => k + ' ' + v + '%').join(', ')).join('; ') : '';
  return `IELTS Academic Writing Task ${t.n}.\nTask: ${t.prompt}${data}\nMinimum words: ${t.min}. The candidate wrote ${words(text)} words.\n\nCandidate's answer:\n"""\n${text}\n"""\n\nGive: 1) an estimated band for each criterion (${t.n === 1 ? 'Task Achievement' : 'Task Response'}, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy) with one-line reasons, and the overall band; 2) three strengths; 3) the most important corrections, quoting the original and the corrected version; 4) one paragraph rewritten at Band 8 level; 5) two concrete things to do differently next time.`;
}
function speakingPrompt(item, text) {
  return `IELTS Speaking ${item.part}.\nQuestion: ${item.q}\nThe candidate's answer (speech-to-text transcript, so ignore punctuation and minor recognition errors):\n"""\n${text}\n"""\n\nGive: 1) estimated bands for Fluency and Coherence, Lexical Resource and Grammatical Range and Accuracy (say that pronunciation cannot be judged from text); 2) what was good; 3) corrections (original → better); 4) a natural Band 8 version of the same answer, keeping the candidate's ideas; 5) 3–5 useful words or phrases for this topic.`;
}
async function runAI(outEl, system, prompt, effort) {
  outEl.innerHTML = '<p class="t-small">✨ Thinking… this can take up to a minute.</p><p class="ai-out"></p>';
  const p = $('.ai-out', outEl);
  try {
    const text = await claude({ system, messages: [{ role: 'user', content: prompt }], onText: t => { p.textContent += t; }, effort });
    p.textContent = text;
    outEl.firstElementChild.textContent = '✨ AI feedback (estimate — not an official score)';
  } catch (e) { outEl.innerHTML = `<div class="warnbox">${esc(e.message)}</div>`; }
}
async function copyText(text, btn) {
  try { await navigator.clipboard.writeText(text); btn.textContent = 'Copied ✓ — paste it into ChatGPT or Claude'; }
  catch (e) { btn.textContent = 'Copy failed — select the text manually'; }
}

/* the examiner chat */
const examinerSystem = () => {
  const S = D.speaking;
  return EXAMINER + `\n\nYou are now running a full mock IELTS Speaking test, speaking as the examiner. Use exactly these questions from Cambridge IELTS 14, Test 1:\nPart 1 (${S.part1.topic}): ${S.part1.qs.map(q => q.q).join(' | ')}\nPart 2 cue card: ${S.part2.card} You should say: ${S.part2.points.join('; ')}\nPart 3: ${S.part3.map(t => t.topic + ': ' + t.qs.map(q => q.q).join(' | ')).join(' || ')}\n\nRules: ask ONE question per turn, exactly like a real examiner (short, neutral, no feedback, no Persian during the test). Begin with a brief greeting and the first Part 1 question. For Part 2, show the cue card, say they have one minute to prepare, then ask them to begin. When the candidate writes "finish", or after the last Part 3 question has been answered, stop the test and give: estimated bands for Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy (pronunciation cannot be judged from a transcript), an overall estimate, the five most useful corrections (original → better), and the Persian summary.`;
};
async function chatTurn(userText) {
  const status = $('#chatStatus');
  if (userText) chat.push({ role: 'user', content: userText });
  const box = $('#chat');
  if (userText) box.insertAdjacentHTML('beforeend', `<div class="msg me">${esc(userText)}</div>`);
  box.insertAdjacentHTML('beforeend', '<div class="msg ex">…</div>');
  const out = box.lastElementChild;
  status.textContent = 'The examiner is thinking…';
  try {
    const messages = chat.length ? chat : [{ role: 'user', content: 'I am ready. Please start the test.' }];
    let first = true;
    const text = await claude({ system: examinerSystem(), messages, effort: 'low', onText: t => { if (first) { out.textContent = ''; first = false; } out.textContent += t; } });
    if (!chat.length) chat.push({ role: 'user', content: 'I am ready. Please start the test.' });
    chat.push({ role: 'assistant', content: text });
    out.textContent = text;
    status.textContent = '';
    if (text.length < 900) say(text);
    render();
    const nb = $('#chatbox'); if (nb) nb.focus();
  } catch (e) { out.remove(); if (userText) chat.pop(); status.textContent = e.message; }
}

function openKeySheet() {
  const cur = getKey();
  const html = `<div class="t-card" id="keySheet" style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:90;width:min(520px,calc(100vw - 32px));display:flex;flex-direction:column;gap:10px;max-height:90vh;overflow:auto">
    <h3 class="ie-h3">✨ AI feedback (optional)</h3>
    <p class="t-small">AI feedback and the AI examiner use Claude (${MODEL}). Paste your own Anthropic API key from <b>console.anthropic.com</b>. It is saved only in this browser and sent directly to Anthropic. Each feedback costs a few cents. Don't save it on a shared computer.
      <span class="fa">برای بازخورد هوش مصنوعی، کلید API خودتان از console.anthropic.com را وارد کنید. فقط در همین مرورگر ذخیره می‌شود و مستقیم به Anthropic فرستاده می‌شود. هر بازخورد چند سنت هزینه دارد.</span></p>
    <p class="t-small">No key? Use <b>Copy for ChatGPT/Claude</b> and paste the prompt into the free chat apps instead.</p>
    <input type="password" id="keyIn" class="ie-txt" style="min-height:0" placeholder="sk-ant-…" value="${esc(cur)}" autocomplete="off">
    <div class="ie-row"><button type="button" class="t-btn t-btn--teal t-btn--sm" data-act="keySave">Save key</button>${cur ? '<button type="button" class="t-btn t-btn--secondary t-btn--sm" data-act="keyDel">Remove key</button>' : ''}<button type="button" class="t-btn t-btn--ghost t-btn--sm" data-act="keyClose">Close</button></div></div>`;
  document.body.insertAdjacentHTML('beforeend', html);
  $('#keyIn').focus();
}

/* ------------------------------ shell ------------------------------ */
const TABS = [
  ['listening', 'Listening', '<path d="M4 14v-2a8 8 0 0116 0v2M4 14h3v6H5a1 1 0 01-1-1zM20 14h-3v6h2a1 1 0 001-1z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'],
  ['reading', 'Reading', '<path d="M4 5h6a2 2 0 012 2v12a2 2 0 00-2-2H4zM20 5h-6a2 2 0 00-2 2v12a2 2 0 012-2h6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'],
  ['writing', 'Writing', '<path d="M4 20h4L19 9l-4-4L4 16zM14 6l4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'],
  ['speaking', 'Speaking', '<rect x="9" y="3" width="6" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5.5 11a6.5 6.5 0 0013 0M12 17.5V21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'],
  ['words', 'Words', '<rect x="3" y="7" width="13" height="13" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7.5 3.5H18a2.5 2.5 0 012.5 2.5v10.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>']
];
function render() {
  $('#rateSeg').innerHTML = RATES.map(r => `<button type="button" data-rate="${r}" aria-pressed="${st.rate === r}">${r}×</button>`).join('');
  $('#faBtn').setAttribute('aria-pressed', String(st.fa));
  document.body.classList.toggle('no-fa', !st.fa);
  $('#tabbar').innerHTML = TABS.map(([k, l, ic]) => `<button type="button" class="t-tab" data-tab="${k}"${st.tab === k ? ' aria-current="page"' : ''}><span class="t-tab__ic"><svg viewBox="0 0 24 24" aria-hidden="true">${ic}</svg></span>${l}</button>`).join('');
  main.innerHTML = { listening: viewListening, reading: viewReading, writing: viewWriting, speaking: viewSpeaking, words: viewWords }[st.tab]();
  if (st.tab === 'listening') restoreAudio();
}

document.addEventListener('click', async e => {
  const t = e.target.closest('button,[data-act],label.opt');
  if (!t) return;
  if (t.dataset.tab) { if (rec) rec.stop(); speechSynthesis && speechSynthesis.cancel(); st.tab = t.dataset.tab; save(); render(); scrollTo(0, 0); return; }
  if (t.dataset.rate) { st.rate = +t.dataset.rate; save(); $$('#rateSeg button').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.rate === st.rate))); $$('audio').forEach(a => { a.playbackRate = st.rate; }); return; }
  if (t.id === 'faBtn') { st.fa = !st.fa; save(); render(); return; }
  if (t.id === 'aiBtn') { if (!$('#keySheet')) openKeySheet(); return; }
  if (t.dataset.say != null) { say(t.dataset.say, t); return; }
  if (t.dataset.timer) { toggleTimer(t.dataset.timer, +t.dataset.min, t); return; }
  if (t.dataset.rp) { st.rp = +t.dataset.rp; save(); render(); scrollTo(0, 0); return; }
  if (t.dataset.wt) { st.wt = +t.dataset.wt; save(); render(); return; }
  if (t.dataset.sp) { if (rec) rec.stop(); st.sp = t.dataset.sp; save(); render(); return; }
  if (t.dataset.rec) { const id = t.dataset.rec; startRec($(`[data-tr="${id}"]`), t, $('#rs-' + id)); return; }
  if (t.dataset.sample) { const o = $(`[data-sampleout="${t.dataset.sample}"]`); o.hidden = !o.hidden; return; }
  if (t.dataset.aiq) {
    const id = t.dataset.aiq, text = ($(`[data-tr="${id}"]`).value || '').trim(), out = $(`[data-aiout="${id}"]`);
    if (words(text) < 5) { out.innerHTML = '<div class="warnbox">Record or type your answer first.</div>'; return; }
    runAI(out, EXAMINER, speakingPrompt(speakItems()[id], text), 'medium'); return;
  }
  if (t.dataset.grade) { grade(t.dataset.grade === '1'); return; }
  const act = t.dataset.act;
  if (act === 'flip') { if (card && !flipped) { flipped = true; render(); } return; }
  if (act === 'checkL') {
    const res = markGroups(allListeningGroups(), st.ans.L);
    showMarks(main, res);
    st.ex_listening = { tot: 40, ok: res.filter(r => r.ok).length }; save();
    $('#L-score').innerHTML = scoreHTML('listening', res, 40); $('#L-score').scrollIntoView({ behavior: 'smooth', block: 'center' }); return;
  }
  if (act === 'checkR' || act === 'checkRall') {
    const p = D.reading.passages[st.rp - 1];
    const groups = act === 'checkRall' ? D.reading.passages.flatMap(x => x.groups) : p.groups;
    const res = markGroups(groups, st.ans.R);
    showMarks($('#R-q'), markGroups(p.groups, st.ans.R));
    if (act === 'checkRall') { st.ex_reading = { tot: 40, ok: res.filter(r => r.ok).length }; save(); }
    $('#R-score').innerHTML = scoreHTML('reading', res, act === 'checkRall' ? 40 : res.length); return;
  }
  if (act === 'modelW') { const m = $('#W-model'); m.hidden = !m.hidden; t.textContent = m.hidden ? 'Show Band 8 sample' : 'Hide sample'; return; }
  if (act === 'aiW' || act === 'copyW') {
    const task = D.writing.tasks[st.wt - 1], text = $('#wtext').value.trim();
    if (words(text) < 40) { $('#W-ai').innerHTML = '<div class="warnbox">Write at least a few paragraphs first.</div>'; return; }
    if (act === 'copyW') { copyText(EXAMINER + '\n\n' + writingPrompt(task, text), t); return; }
    runAI($('#W-ai'), EXAMINER, writingPrompt(task, text), 'high'); return;
  }
  if (act === 'chatStart') { chat = []; render(); chatTurn(''); return; }
  if (act === 'chatSend') { const v = $('#chatbox').value.trim(); if (!v) return; if (rec) rec.stop(); chatTurn(v); return; }
  if (act === 'chatFinish') { if (rec) rec.stop(); chatTurn('finish'); return; }
  if (act === 'chatReset') { chat = []; render(); return; }
  if (act === 'keySave') { const v = $('#keyIn').value.trim(); try { if (v) localStorage.setItem(AIKEY, v); } catch (er) {} $('#keySheet').remove(); return; }
  if (act === 'keyDel') { try { localStorage.removeItem(AIKEY); } catch (er) {} $('#keySheet').remove(); return; }
  if (act === 'keyClose') { $('#keySheet').remove(); return; }
});

/* answers are saved as you type */
document.addEventListener('input', e => {
  const el = e.target;
  if (el.dataset.part && el.dataset.n) { st.ans[el.dataset.part][el.dataset.n] = el.value; save(); }
  if (el.id === 'wtext') {
    const task = D.writing.tasks[st.wt - 1];
    st.writing['t' + el.dataset.task] = el.value; save();
    const n = words(el.value), wc = $('#wc'); wc.textContent = n + ' words'; wc.classList.toggle('ok', n >= task.min);
  }
  if (el.dataset.tr && el.dataset.tr !== 'chatbox') { st.speak[el.dataset.tr] = el.value; save(); }
});
document.addEventListener('change', async e => {
  const el = e.target;
  if (el.dataset.part && el.dataset.n) { st.ans[el.dataset.part][el.dataset.n] = el.value; save(); }
  if (el.dataset.two) {                                  // choose TWO: keep at most two ticked
    const boxes = $$(`input[data-two="${el.dataset.two}"]`);
    const on = boxes.filter(b => b.checked);
    if (on.length > 2) { el.checked = false; return; }
    st.ans[el.dataset.part][el.dataset.two] = on.map(b => b.value).join(''); save();
  }
  if (el.dataset.audio && el.files[0]) { const n = +el.dataset.audio; showAudio(n, el.files[0]); try { await putAudio(n, el.files[0]); } catch (er) {} }
});

render();
if ('serviceWorker' in navigator) try { navigator.serviceWorker.register('/sw.js').catch(() => {}); } catch (e) {}
