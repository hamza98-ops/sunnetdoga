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
        <a href="https://www.instagram.com/sunnetin_izinde_doga_/" target="_blank" rel="noopener" class="paylas-cagrisi" style="margin-bottom:0.8rem;">📸 Instagram'da paylaş & bizi etiketle</a>
        <br>
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

// ===== İLERLEME KAYDI (localStorage) =====
const ILERLEME_KEY = 'sunnetdoga_ilerleme_v2';

function ilerlemeOku() {
  try {
    return JSON.parse(localStorage.getItem(ILERLEME_KEY)) || { gorevler: {}, hadisler: {} };
  } catch {
    return { gorevler: {}, hadisler: {} };
  }
}

function ilerlemeYaz(veri) {
  try {
    localStorage.setItem(ILERLEME_KEY, JSON.stringify(veri));
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      alert('Cihazınızdaki saklama alanı doldu. Daha küçük bir fotoğraf seçer misiniz?');
    }
  }
}

function ilerlemeKaydet(tip, anahtar, kayit) {
  const veri = ilerlemeOku();
  if (!veri[tip]) veri[tip] = {};
  if (kayit) {
    veri[tip][anahtar] = {
      tarih: new Date().toISOString(),
      not: kayit.not || '',
      foto: kayit.foto || null
    };
  } else {
    delete veri[tip][anahtar];
  }
  ilerlemeYaz(veri);
  ilerlemeRozetiGuncelle();
}

// Tamamlanan görev sayısını gösteren rozeti güncelle
function ilerlemeRozetiGuncelle() {
  const veri = ilerlemeOku();
  const gorevSayisi = Object.keys(veri.gorevler || {}).length;
  const hadisSayisi = Object.keys(veri.hadisler || {}).length;
  const toplam = gorevSayisi + hadisSayisi;

  let rozet = document.getElementById('ilerlemeRozeti');
  if (toplam === 0) {
    if (rozet) rozet.remove();
    return;
  }

  if (!rozet) {
    rozet = document.createElement('div');
    rozet.id = 'ilerlemeRozeti';
    rozet.className = 'ilerleme-rozeti';
    rozet.title = 'Tamamladığın görevler — bu rakam senin tarayıcında saklanır';
    document.body.appendChild(rozet);
  }
  rozet.innerHTML = `🌿 <strong>${toplam}</strong> <span>görev tamamlandı</span>`;
}

// ===== GÖREV ONAY FORMU =====
// Bir görev kartına form'u dinamik olarak ekler ve davranışı bağlar
function gorevFormuKur(kart, tip, anahtar, idx, butonMetni) {
  // Form HTML'i
  const form = document.createElement('div');
  form.className = 'gorev-form';
  form.innerHTML = `
    <label for="not-${tip}-${idx}">📝 Bugün ne yaptın? Kısaca anlat:</label>
    <textarea id="not-${tip}-${idx}" placeholder="Örn: Bugün dişlerimi fırçalarken musluğu kapattım, yaklaşık 5 litre su tasarruf ettim." maxlength="500"></textarea>

    <label class="foto-yukle">
      📸 İstersen bir fotoğraf ekle (opsiyonel — sadece senin cihazında saklanır)
      <input type="file" accept="image/*" capture="environment">
    </label>

    <img class="foto-onizleme" style="display:none;" alt="Yüklenen fotoğraf önizlemesi">

    <div class="gorev-form-butonlar">
      <button type="button" class="gorev-form-onayla" disabled>✅ Onayla & Kaydet</button>
      <button type="button" class="gorev-form-iptal">İptal</button>
    </div>

    <p style="font-size:0.78rem; color:var(--gri-metin); margin-top:0.8rem; text-align:center;">
      💡 Fotoğraflar ve notlar yalnızca senin tarayıcında saklanır. Paylaşmak istersen Instagram'da bizi etiketleyebilirsin: <strong>@sunnetin_izinde_doga_</strong>
    </p>
  `;
  kart.appendChild(form);

  const textarea = form.querySelector('textarea');
  const fileInput = form.querySelector('input[type="file"]');
  const fotoOnizleme = form.querySelector('.foto-onizleme');
  const onayBtn = form.querySelector('.gorev-form-onayla');
  const iptalBtn = form.querySelector('.gorev-form-iptal');
  let fotoVerisi = null;

  // Onay butonu — not yazıldığında aktif
  textarea.addEventListener('input', () => {
    onayBtn.disabled = textarea.value.trim().length < 3;
  });

  // Fotoğraf yükleme (base64'e çevirip önizle)
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;
    if (file.size > 1.5 * 1024 * 1024) {
      alert('Fotoğraf çok büyük (max 1.5 MB). Daha küçük bir fotoğraf seçin.');
      fileInput.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      fotoVerisi = e.target.result;
      fotoOnizleme.src = fotoVerisi;
      fotoOnizleme.style.display = 'block';
    };
    reader.readAsDataURL(file);
  });

  // İptal
  iptalBtn.addEventListener('click', () => {
    form.classList.remove('acik');
    textarea.value = '';
    fileInput.value = '';
    fotoVerisi = null;
    fotoOnizleme.style.display = 'none';
    onayBtn.disabled = true;
  });

  // Onayla — kaydet ve tebrik göster
  onayBtn.addEventListener('click', () => {
    const not = textarea.value.trim();
    if (not.length < 3) return;

    ilerlemeKaydet(tip, anahtar, { not: not, foto: fotoVerisi });
    form.classList.remove('acik');
    kartiTamamlandiYap(kart, tip, anahtar, butonMetni);
    tebrikGoster(idx);
  });

  return form;
}

// Tamamlanan kartı görselleştir (form yerine kayıtlı not ve fotoğraf göster)
function kartiTamamlandiYap(kart, tip, anahtar, butonMetni) {
  const veri = ilerlemeOku();
  const kayit = veri[tip] && veri[tip][anahtar];
  if (!kayit) return;

  kart.classList.add('tamamlandi');

  // Hadis görev kartı için
  const hadisBtn = kart.querySelector('.hadis-tamamla-btn');
  if (hadisBtn) hadisBtn.textContent = '✅ Tamamladın';

  // Haftalık görev kartı için
  const badge = kart.querySelector('.badge');
  if (badge) {
    badge.textContent = '✅ Tamamlandı!';
    kart.style.borderLeftColor = '#2d6a4f';
    kart.style.background = 'rgba(45, 106, 79, 0.05)';
  }

  // Önceden eklenmiş not yoksa ekle
  if (!kart.querySelector('.tamamlanan-not')) {
    const tarih = new Date(kayit.tarih || Date.now()).toLocaleDateString('tr-TR', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    const notDiv = document.createElement('div');
    notDiv.className = 'tamamlanan-not';
    const fotoHTML = kayit.foto ? `<img src="${kayit.foto}" alt="Görev fotoğrafı">` : '';
    notDiv.innerHTML = `
      <div class="not-baslik">📝 Senin notun:</div>
      <div>${(kayit.not || '').replace(/[<>]/g, '')}</div>
      ${fotoHTML}
      <div class="not-tarih">${tarih}</div>
      <a href="https://www.instagram.com/sunnetin_izinde_doga_/" target="_blank" rel="noopener" class="paylas-cagrisi">📸 Instagram'da paylaş & bizi etiketle</a>
    `;
    kart.appendChild(notDiv);
  }
}

// Haftalık görev kartları (pratik-rehber)
document.querySelectorAll('.gorev-kart').forEach((kart, idx) => {
  const anahtar = kart.dataset.gorev || ('hafta-' + (idx + 1));
  kart.dataset.gorev = anahtar;

  // Önceden tamamlanmış mı?
  const veri = ilerlemeOku();
  if (veri.gorevler && veri.gorevler[anahtar]) {
    kartiTamamlandiYap(kart, 'gorevler', anahtar);
    return; // Form'u kurma, zaten tamamlandı
  }

  // Form'u oluştur (gizli)
  const form = gorevFormuKur(kart, 'gorevler', anahtar, idx, 'badge');

  // Karta tıklama: form'u aç
  kart.addEventListener('click', (e) => {
    // Form içine veya tamamlanmış karta tıklamayı yok say
    if (e.target.closest('.gorev-form')) return;
    if (kart.classList.contains('tamamlandi')) return;
    form.classList.toggle('acik');
  });
});

// Hadis görev kartları (hadisler.html)
document.querySelectorAll('.hadis-gorev').forEach((kart, idx) => {
  const anahtar = kart.dataset.hadis || ('hadis-' + idx);
  const btn = kart.querySelector('.hadis-tamamla-btn');
  if (!btn) return;

  // Önceden tamamlanmış mı?
  const veri = ilerlemeOku();
  if (veri.hadisler && veri.hadisler[anahtar]) {
    kartiTamamlandiYap(kart, 'hadisler', anahtar);
    return;
  }

  // Form'u oluştur (gizli)
  const form = gorevFormuKur(kart, 'hadisler', anahtar, idx, 'btn');

  btn.addEventListener('click', () => {
    if (kart.classList.contains('tamamlandi')) return;
    form.classList.toggle('acik');
    btn.style.display = form.classList.contains('acik') ? 'none' : '';
  });

  // İptal butonu basılınca dıştaki butonu tekrar göster
  const iptalBtn = form.querySelector('.gorev-form-iptal');
  if (iptalBtn) {
    iptalBtn.addEventListener('click', () => {
      btn.style.display = '';
    });
  }
});

// Sayfa yüklendiğinde rozeti çiz
ilerlemeRozetiGuncelle();
