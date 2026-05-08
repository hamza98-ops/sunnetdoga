// ===== NAVİGASYON =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('acik');
  });
}

// Aktif link belirleme
const mevcutSayfa = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const hedef = link.getAttribute('href');
  if (hedef === mevcutSayfa || (mevcutSayfa === '' && hedef === 'index.html')) {
    link.classList.add('aktif');
  }
});

// Dışarı tıklayınca menüyü kapat
document.addEventListener('click', (e) => {
  if (navLinks && hamburger && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('acik');
  }
});

// ===== İLERLEME ÇUBUĞU =====
const ilerleme = document.createElement('div');
ilerleme.className = 'ilerleme-cubugu';
document.body.prepend(ilerleme);

window.addEventListener('scroll', () => {
  const toplam = document.documentElement.scrollHeight - window.innerHeight;
  const mevcut = window.scrollY;
  const yuzde = (mevcut / toplam) * 100;
  ilerleme.style.width = yuzde + '%';
});

// ===== SCROLL ANİMASYON =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.kart, .hadis-kart, .gorev-kart, .ekip-kart, .indirme-kart').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ===== İLETİŞİM FORMU =====
const form = document.getElementById('iletisimFormu');
const mesaj = document.getElementById('formMesaj');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Form simülasyonu
    const btn = form.querySelector('.form-gonder-btn');
    btn.textContent = 'Gönderiliyor...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Mesaj Gönder ✉️';
      btn.disabled = false;
      if (mesaj) {
        mesaj.classList.add('goster');
        setTimeout(() => mesaj.classList.remove('goster'), 5000);
      }
      form.reset();
    }, 1500);
  });
}

// ===== SAYAÇ ANİMASYONU =====
function sayacAnimas(el, hedef, sure) {
  let baslangic = 0;
  const adim = sure / hedef;
  const timer = setInterval(() => {
    baslangic++;
    el.textContent = baslangic.toLocaleString('tr-TR') + (el.dataset.suffix || '');
    if (baslangic >= hedef) clearInterval(timer);
  }, adim);
}

const sayacObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.sayildi) {
      entry.target.dataset.sayildi = 'true';
      const hedef = parseInt(entry.target.dataset.hedef);
      sayacAnimas(entry.target, hedef, 2000);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.sayac').forEach(el => sayacObserver.observe(el));

// ===== TEBRİK MESAJI VE GÖREV TAMAMLAMA =====
const tebrikMesajlari = [
  {
    emoji: '🌿',
    baslik: 'Tebrikler! Doğaya Katkı Sağladınız',
    mesaj: 'Küçük bir adım, büyük bir hayır oldu. Peygamber Efendimiz\'in (s.a.v.) sünnetine uyarak yeryüzüne emanet bilinciyle baktınız.',
    ayet: '"Kim bir hayra delâlet ederse, o hayrı yapan gibi sevap alır." — Hz. Muhammed (s.a.v.) · Müslim'
  },
  {
    emoji: '🌳',
    baslik: 'Maşallah! Bir Sünneti İhya Ettin',
    mesaj: 'Bugün attığın bu adım, hem doğaya nefes oldu hem amel defterine yazıldı. Yeryüzü emanetini koruyanlardan oldun.',
    ayet: '"Bir müslüman fidan dikerse, ondan yenilen her şey onun için sadaka olur." — Buhârî, Müzâraa, 1'
  },
  {
    emoji: '💧',
    baslik: 'Harika! Her Damla Değerlidir',
    mesaj: 'Yaptığın küçük tasarrufla milyonlarca insanın susuzluk çektiği dünyada bir damla umut oldun. Allah razı olsun!',
    ayet: '"Akar nehirde abdest alıyor olsanız bile suyu israf etmeyin." — İbn Mâce, Taharet, 48'
  },
  {
    emoji: '🤲',
    baslik: 'Allah Razı Olsun!',
    mesaj: 'Sünnete uygun bu davranışın, hem bu dünyaya hem ahiretine yatırımdır. Bilgini ve güzel halini başkalarıyla da paylaş.',
    ayet: '"Yeryüzünde bozgunculuk yapmayın." — Bakara Sûresi, 11. Ayet'
  },
  {
    emoji: '🌍',
    baslik: 'Sen Değişimin Bir Parçasısın',
    mesaj: 'Bugün yaptığın iyilik, yarın binlerce kişiye ilham olabilir. "Kim bir hayra delâlet ederse, o hayrı yapan gibi sevap alır."',
    ayet: '"Yoldan eziyet veren şeyleri kaldırmak sadakadır." — Buhârî, Cihad, 128'
  }
];

function tebrikGoster(index) {
  const veri = tebrikMesajlari[index % tebrikMesajlari.length];
  let overlay = document.getElementById('tebrikOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'tebrikOverlay';
    overlay.className = 'tebrik-overlay';
    overlay.innerHTML = `
      <div class="tebrik-kutu">
        <div class="tebrik-emoji" id="tebrikEmoji"></div>
        <h3 class="tebrik-baslik" id="tebrikBaslik"></h3>
        <p class="tebrik-mesaj" id="tebrikMesaj"></p>
        <div class="tebrik-ayet" id="tebrikAyet"></div>
        <button class="tebrik-kapat-btn" id="tebrikKapatBtn">🌿 Devam Et</button>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) tebrikKapat();
    });
    document.getElementById('tebrikKapatBtn').addEventListener('click', tebrikKapat);
  }

  document.getElementById('tebrikEmoji').textContent = veri.emoji;
  document.getElementById('tebrikBaslik').textContent = veri.baslik;
  document.getElementById('tebrikMesaj').textContent = veri.mesaj;
  document.getElementById('tebrikAyet').textContent = veri.ayet;

  overlay.classList.add('goster');
  konfetiPatlat();
}

function tebrikKapat() {
  const overlay = document.getElementById('tebrikOverlay');
  if (overlay) overlay.classList.remove('goster');
}

function konfetiPatlat() {
  const kutu = document.querySelector('.tebrik-kutu');
  if (!kutu) return;
  const semboller = ['🌿', '🌱', '✨', '🌟', '💚', '🍃'];
  for (let i = 0; i < 12; i++) {
    const k = document.createElement('span');
    k.className = 'tebrik-konfeti';
    k.textContent = semboller[Math.floor(Math.random() * semboller.length)];
    k.style.setProperty('--yon', (Math.random() * 300 - 150) + 'px');
    k.style.animationDelay = (Math.random() * 0.4) + 's';
    kutu.appendChild(k);
    setTimeout(() => k.remove(), 1800);
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') tebrikKapat();
});

// Haftalık görev kartları (pratik-rehber)
document.querySelectorAll('.gorev-kart').forEach((kart, idx) => {
  kart.addEventListener('click', () => {
    const yeniDurum = !kart.classList.contains('tamamlandi');
    kart.classList.toggle('tamamlandi');
    const badge = kart.querySelector('.badge');
    if (yeniDurum) {
      kart.style.borderLeftColor = '#2d6a4f';
      kart.style.background = 'rgba(45, 106, 79, 0.05)';
      if (badge) badge.textContent = '✅ Tamamlandı!';
      tebrikGoster(idx);
    } else {
      kart.style.borderLeftColor = '';
      kart.style.background = '';
      if (badge) badge.textContent = '🎯 Katıl!';
    }
  });
});

// Hadis görev kartları (hadisler.html)
document.querySelectorAll('.hadis-gorev').forEach((kart, idx) => {
  const btn = kart.querySelector('.hadis-tamamla-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (kart.classList.contains('tamamlandi')) return;
    kart.classList.add('tamamlandi');
    btn.textContent = '✅ Tamamlandı';
    tebrikGoster(idx);
  });
});
