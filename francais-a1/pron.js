/* pron.js — prononciation partout (page de révision et mode leçon).
   1. Toucher n'importe quel mot français le fait entendre (voix et vitesse choisies : say() de la page).
   2. Chaque phrase traduite (data-en) sans bouton 🔈 en reçoit un. */
(function () {
  'use strict';
  if (typeof window.say !== 'function') return;
  var SKIP = 'button,input,select,textarea,label,a,summary,.opt,.mitem,.en,.enbtn,.speak,.tile,.au-row,.au-tools,.selpop,.ttspanel,.umenu,header,nav,.dic-list,.exbar,.aiw-ui,.ais-ui,.t-tabbar,.lp-bar,.lp-top';
  var LETTER = /[A-Za-zÀ-ÖØ-öø-ÿŒœ'’-]/;

  function textOf(el) {
    var c = el.cloneNode(true);
    c.querySelectorAll('.en,.enbtn,.speak,.note,.hint,.num,input,select,button').forEach(function (x) { x.remove(); });
    return c.textContent.replace(/\s+/g, ' ').trim();
  }
  function addButtons(root) {
    (root || document).querySelectorAll('main [data-en]:not([data-pron]), #lessonRoot [data-en]:not([data-pron])').forEach(function (el) {
      el.setAttribute('data-pron', '1');
      if (el.closest(SKIP) || el.querySelector('.speak,input,select,.opt,.mitem')) return;
      var text = textOf(el);
      if (text.length < 2 || !/[A-Za-zÀ-ÿ]/.test(text)) return;
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'speak pron'; b.textContent = '🔈'; b.title = 'Écouter'; b.setAttribute('aria-label', 'Écouter');
      b.addEventListener('click', function (e) { e.stopPropagation(); window.say(text, null, b); });
      el.insertBefore(b, el.querySelector(':scope > .enbtn'));
    });
  }

  /* un mot touché → on l'entend */
  document.addEventListener('click', function (e) {
    if (e.target.closest(SKIP) || !e.target.closest('main, #lessonRoot')) return;
    var sel = window.getSelection && getSelection();
    if (sel && !sel.isCollapsed) return;                       // une sélection : c'est la bulle 🔈 de la page qui s'en occupe
    var node, off;
    if (document.caretPositionFromPoint) { var p = document.caretPositionFromPoint(e.clientX, e.clientY); if (p) { node = p.offsetNode; off = p.offset; } }
    else if (document.caretRangeFromPoint) { var r = document.caretRangeFromPoint(e.clientX, e.clientY); if (r) { node = r.startContainer; off = r.startOffset; } }
    if (!node || node.nodeType !== 3 || !node.parentElement || node.parentElement.closest(SKIP)) return;
    var t = node.textContent, s = off, f = off;
    while (s > 0 && LETTER.test(t[s - 1])) s--;
    while (f < t.length && LETTER.test(t[f])) f++;
    var word = t.slice(s, f).replace(/^['’-]+|['’-]+$/g, '');
    if (!word || !/[A-Za-zÀ-ÿ]/.test(word)) return;
    window.say(word);
  });

  function run() { addButtons(document); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  setTimeout(run, 800);
  var pending = 0;
  new MutationObserver(function () { clearTimeout(pending); pending = setTimeout(run, 300); }).observe(document.body, { childList: true, subtree: true });
})();
