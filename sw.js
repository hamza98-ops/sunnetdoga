// ===== SERVICE WORKER =====
// Basit önbellek + günlük hatırlatıcı bildirim desteği

const CACHE_AD = 'sunnetinizinde-cevre-v1';
const ON_BELLEK_DOSYALARI = [
  './',
  './index.html',
  './hadisler.html',
  './hadis-arsivi.html',
  './pratik-rehber.html',
  './medya.html',
  './hakkimizda.html',
  './iletisim.html',
  './test.html',
  './style.css',
  './script.js',
  './test.js',
  './hadis-arsivi.js',
  './hadisler-data.js',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_AD).then(c => c.addAll(ON_BELLEK_DOSYALARI).catch(() => null))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_AD).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Sadece GET isteklerini önbellekten dene
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(yanit => {
      if (yanit) return yanit;
      return fetch(e.request).then(taze => {
        // Başarılı GET'i önbelleğe ekle (kendi origin için)
        if (taze && taze.status === 200 && taze.type === 'basic') {
          const klon = taze.clone();
          caches.open(CACHE_AD).then(c => c.put(e.request, klon));
        }
        return taze;
      }).catch(() => yanit);
    })
  );
});

// Push bildirim (ileride sunucu tarafı eklenirse)
self.addEventListener('push', (e) => {
  const veri = e.data ? e.data.json() : {};
  const baslik = veri.baslik || '🌿 Bugünkü Çevre Görevin';
  const mesaj = veri.mesaj || 'Bugün küçük ama değerli bir çevre davranışı yap!';
  e.waitUntil(
    self.registration.showNotification(baslik, {
      body: mesaj,
      icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>',
      badge: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>',
      tag: 'gunluk-cevre',
      data: { url: './pratik-rehber.html' }
    })
  );
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || './';
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(liste => {
      for (const c of liste) {
        if ('focus' in c) return c.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
