/* Service worker du site à plusieurs livres (généré par tools/build-static.mjs) :
   réseau d'abord pour les pages, cache d'abord pour le reste ; tout ce qui a été ouvert marche hors ligne. */
const VERSION = 'books-ef056c0e852e';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.pathname.startsWith('/api/')) return;
  const same = url.origin === location.origin, fonts = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!same && !fonts) return;
  const put = res => { if (res && res.ok && res.type !== 'opaqueredirect') { const c = res.clone(); caches.open(VERSION).then(ca => ca.put(req, c)); } return res; };
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(put).catch(() => caches.match(req).then(r => r || caches.match('/'))));
  } else {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(put)));
  }
});
