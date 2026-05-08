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
    baslik: 'Tebrikler! Bugün Küçük Ama Değerli Bir Çevre Davranışı Yaptın',
    mesaj: 'Attığın bu adım küçük görünebilir; ama yeryüzünün dengesini koruyan tüm büyük değişimler bu küçük adımlarla başlar. Sünnete uyarak yeryüzüne emanet bilinciyle baktın.',
    ayet: '"Kim bir hayra delâlet ederse, o hayrı yapan gibi sevap alır." — Hz. Muhammed (s.a.v.) · Müslim'
  },
  {
    emoji: '🌳',
    baslik: 'Maşallah! Bir Sünneti İhya Ettin',
    mesaj: 'Bugün attığın bu adım, hem doğaya nefes oldu hem amel defterine yazıldı. Yeryüzü emanetini koruyanlardan oldun. Bunu sürdürmen dileğiyle!',
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
  },
  {
    emoji: '✨',
    baslik: 'Aferin Sana — Niyetin Amele Döndü',
    mesaj: 'Bugün hem niyet ettin hem yaptın. Sünnetin izinden çevreye değer kattın. Bu güzel hâlini önümüzdeki günlerde de sürdürmen dileğiyle.',
    ayet: '"Ameller niyetlere göredir." — Buhârî, Bed\'ü\'l-Vahy, 1'
  },
  {
    emoji: '🍃',
    baslik: 'Bugün Yeryüzü Senin Sayende Daha İyi',
    mesaj: 'Yaptığın bu küçük çevre davranışı, bir yaprağın rüzgâra direnmesi gibi sessiz ama anlamlı. Bu hâli alışkanlığa dönüştürmen ümidiyle.',
    ayet: '"Yeryüzünde dolaşın ve Allah\'ın yarattıklarına bakın." — Ankebût, 20'
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

// ===== HAFTALIK GERİ BİLDİRİM =====
// Bir haftada en az 1 görev tamamlanmışsa, haftada bir kez toplu özet/teşvik mesajı gösterir
const HAFTALIK_KEY = 'sunnetdoga_haftalik_v1';

const haftalikMesajlar = [
  {
    emoji: '🌿',
    baslik: 'Bu Hafta Çevre Görevleri Tamamladın!',
    mesaj: 'Çevre temizliği ve israf konusunda güzel adımlar atıyorsun. Önümüzdeki hafta da bunu sürdürmen dileğiyle.',
    ayet: '"İnsanların hayırlısı, insanlara faydalı olandır." — Beyhakî'
  },
  {
    emoji: '🌳',
    baslik: 'Haftalık Hayır Hanene Tebrikler',
    mesaj: 'Bu hafta küçük gibi görünen ama büyük anlam taşıyan birkaç sünnet işledin. Niyetinin sürekliliği, ibadetin de sürekliliğidir.',
    ayet: '"Allah\'a en sevimli ameller, az da olsa devamlı olanıdır." — Buhârî, Rikâk, 18'
  },
  {
    emoji: '🏆',
    baslik: 'Haftanın Çevre Kahramanı Sensin',
    mesaj: 'Yapılanlar küçük; ama bu haftaki çabaların yeryüzünün emanet bilinciyle korunmasına katkı sağladı. Haydi yeni haftada da iyilik zincirini büyütelim.',
    ayet: '"Yeryüzü güzeldir ve Allah temizliği sever." — Tirmizî'
  },
  {
    emoji: '🤲',
    baslik: 'Bu Hafta Doğa Sana Teşekkür Ediyor',
    mesaj: 'Tasarruf, paylaşım, merhamet... Bu hafta sünnetin izinde geçti. Önümüzdeki hafta da bu farkındalıkla devam etmen dileğiyle.',
    ayet: '"Yiyiniz, içiniz; ama israf etmeyiniz." — A\'râf, 31'
  }
];

function haftaninNumarasi(tarih = new Date()) {
  // ISO hafta numarası
  const d = new Date(Date.UTC(tarih.getFullYear(), tarih.getMonth(), tarih.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yilBaslangic = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const haftaNo = Math.ceil((((d - yilBaslangic) / 86400000) + 1) / 7);
  return d.getUTCFullYear() + '-W' + String(haftaNo).padStart(2, '0');
}

function buHaftakiTamamlananGorevler() {
  const veri = ilerlemeOku();
  const simdi = new Date();
  // Haftanın başlangıcı: Pazartesi 00:00
  const haftaBas = new Date(simdi);
  const gun = haftaBas.getDay() || 7; // Pazar=0 -> 7
  haftaBas.setDate(haftaBas.getDate() - (gun - 1));
  haftaBas.setHours(0, 0, 0, 0);

  const tamamlananlar = [];
  ['gorevler', 'hadisler'].forEach(tip => {
    const grup = veri[tip] || {};
    Object.keys(grup).forEach(anahtar => {
      const tarihStr = grup[anahtar].tarih;
      if (!tarihStr) return;
      const t = new Date(tarihStr);
      if (t >= haftaBas) {
        tamamlananlar.push({ tip, anahtar, tarih: t, not: grup[anahtar].not });
      }
    });
  });
  return tamamlananlar;
}

function haftalikGeriBildirimGoster(zorla = false) {
  const tamamlananlar = buHaftakiTamamlananGorevler();
  if (!zorla && tamamlananlar.length === 0) return;

  const buHafta = haftaninNumarasi();
  let kayit = {};
  try { kayit = JSON.parse(localStorage.getItem(HAFTALIK_KEY)) || {}; } catch {}

  if (!zorla && kayit.sonGosterilenHafta === buHafta) return;

  // Mesajı seç
  const mesaj = haftalikMesajlar[Math.floor(Math.random() * haftalikMesajlar.length)];

  let overlay = document.getElementById('haftalikOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'haftalikOverlay';
    overlay.className = 'tebrik-overlay haftalik-overlay';
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
    <div class="tebrik-kutu haftalik-kutu">
      <div class="tebrik-emoji">${mesaj.emoji}</div>
      <h3 class="tebrik-baslik">${mesaj.baslik}</h3>
      <p class="tebrik-mesaj">Bu hafta <strong>${tamamlananlar.length}</strong> çevre görevi tamamladın. ${mesaj.mesaj}</p>
      <div class="haftalik-liste">
        ${tamamlananlar.slice(0, 5).map(t => `
          <div class="haftalik-satir">
            <span>${t.tip === 'gorevler' ? '🎯' : '📜'}</span>
            <span class="haftalik-not">${(t.not || 'Görev tamamlandı').replace(/[<>]/g, '').slice(0, 80)}${(t.not || '').length > 80 ? '...' : ''}</span>
          </div>
        `).join('')}
        ${tamamlananlar.length > 5 ? `<div class="haftalik-satir" style="opacity:0.7;">+ ${tamamlananlar.length - 5} görev daha</div>` : ''}
      </div>
      <div class="tebrik-ayet">${mesaj.ayet}</div>
      <a href="https://www.instagram.com/sunnetin_izinde_doga_/" target="_blank" rel="noopener" class="paylas-cagrisi" style="margin-bottom:0.8rem;">📸 Haftanın özetini Instagram'da paylaş</a>
      <br>
      <button class="tebrik-kapat-btn" id="haftalikKapatBtn">🌿 Yeni Haftaya Hazırım</button>
    </div>
  `;

  overlay.classList.add('goster');
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('goster');
  });
  document.getElementById('haftalikKapatBtn').addEventListener('click', () => {
    overlay.classList.remove('goster');
  });

  // Kayıt
  kayit.sonGosterilenHafta = buHafta;
  kayit.sonGosterimTarih = new Date().toISOString();
  localStorage.setItem(HAFTALIK_KEY, JSON.stringify(kayit));
}

// Sayfa yüklendiğinde haftalık özet kontrolü (1.5 sn gecikmeli, kullanıcı sayfayı görsün)
setTimeout(() => haftalikGeriBildirimGoster(false), 1500);

// ===== GÜNLÜK HATIRLATICI =====
// 3 yöntem: 1) Tarayıcı bildirim izni 2) ICS takvim dosyası 3) PWA service worker
const HATIRLATICI_KEY = 'sunnetdoga_hatirlatici_v1';

function hatirlaticiOku() {
  try { return JSON.parse(localStorage.getItem(HATIRLATICI_KEY)) || {}; } catch { return {}; }
}

function hatirlaticiYaz(veri) {
  localStorage.setItem(HATIRLATICI_KEY, JSON.stringify(veri));
}

const gunlukIpuclari = [
  '💧 Bugün diş fırçalarken musluğu kapattın mı? — 5 lt su tasarruf!',
  '🌱 Saksıdaki bitkine bakmayı unutma — küçük bir sünnet ihyası.',
  '🛍️ Markete giderken bez torba aldın mı? — Yılda 200+ plastikten kurtulursun.',
  '🍞 Bayat ekmek varsa kuşlara, sokak hayvanlarına bırak — sadaka.',
  '♻️ Çöpünü ayrıştırdın mı? — Geri dönüşüm, israftan kaçınmaktır.',
  '🚶 Yakın yere arabasız git — peygamberimizin "yaya yürüme" sünneti.',
  '🐈 Sokak hayvanına bir kase su koydun mu? — Susuza su veren cennete girer.',
  '📿 Bugünkü çevre hadisini okudun mu? — Site\'de seni bekliyor.',
  '🌿 Bugünün küçük çevre davranışı: ışıkları söndür, fişleri çek.',
  '🍽️ Tabağındaki yemeği bitirmek de israftan kaçınmaktır.'
];

function rastgeleIpucu() {
  return gunlukIpuclari[Math.floor(Math.random() * gunlukIpuclari.length)];
}

// Tarayıcı bildirim izni iste ve bildirim gönder (sadece site açıkken)
async function bildirimIzniIste() {
  if (!('Notification' in window)) {
    alert('Tarayıcınız bildirimleri desteklemiyor. Takvim dosyasını indirerek hatırlatıcı kurabilirsiniz.');
    return false;
  }

  let izin = Notification.permission;
  if (izin === 'default') {
    izin = await Notification.requestPermission();
  }

  if (izin === 'granted') {
    new Notification('🌿 Sünnetin İzinde Çevre', {
      body: 'Bildirimler aktif! Her gün küçük bir çevre davranışı için sana hatırlatma göndereceğiz.',
      icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>'
    });
    const veri = hatirlaticiOku();
    veri.bildirimAktif = true;
    veri.aktifTarih = new Date().toISOString();
    hatirlaticiYaz(veri);
    return true;
  } else {
    alert('Bildirim izni reddedildi. Takvim dosyasını indirerek hatırlatıcı kurabilirsiniz.');
    return false;
  }
}

// Site açıkken her gün ilk girişte bir hatırlatma göster
function gunlukIcGosterim() {
  const veri = hatirlaticiOku();
  const bugun = new Date().toISOString().slice(0, 10);
  if (veri.sonGosterimGunu === bugun) return;
  if (Notification.permission !== 'granted') return;

  new Notification('🌿 Bugünkü Çevre Görevin', {
    body: rastgeleIpucu(),
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>',
    tag: 'gunluk-cevre'
  });
  veri.sonGosterimGunu = bugun;
  hatirlaticiYaz(veri);
}

// ICS takvim dosyası oluştur ve indir
// Her gün belirli saatte tekrar eden bir etkinlik (1 yıl boyunca)
function icsDosyasiniIndir(saat = '09:00') {
  const [ss, dd] = saat.split(':');
  const simdi = new Date();
  const ilkTarih = new Date(simdi.getFullYear(), simdi.getMonth(), simdi.getDate(), parseInt(ss), parseInt(dd), 0);
  // Eğer bugünkü saat geçmişse yarına ayarla
  if (ilkTarih < simdi) ilkTarih.setDate(ilkTarih.getDate() + 1);
  const bitis = new Date(ilkTarih.getTime() + 15 * 60 * 1000); // 15 dk

  function fmt(d) {
    return d.getUTCFullYear() +
      String(d.getUTCMonth() + 1).padStart(2, '0') +
      String(d.getUTCDate()).padStart(2, '0') + 'T' +
      String(d.getUTCHours()).padStart(2, '0') +
      String(d.getUTCMinutes()).padStart(2, '0') + '00Z';
  }

  const uid = 'sunnetinizinde-cevre-' + Date.now() + '@sunnetinizinde-doga';
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sünnetin İzinde Çevre//TR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:' + uid,
    'DTSTAMP:' + fmt(new Date()),
    'DTSTART:' + fmt(ilkTarih),
    'DTEND:' + fmt(bitis),
    'RRULE:FREQ=DAILY;COUNT=365',
    'SUMMARY:🌿 Günün Çevre Görevi (Sünnetin İzinde)',
    'DESCRIPTION:Bugün küçük ama değerli bir çevre davranışı yap! Saksı sula\\, plastiği azalt\\, su tasarrufu yap\\, hayvanlara su ver. Detay: https://sunnetin-izinde-doga.com',
    'LOCATION:',
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    'DESCRIPTION:🌿 Bugünkü çevre görevini hatırla!',
    'TRIGGER:-PT0M',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sunnetin-izinde-cevre-hatirlatici.ics';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
    a.remove();
  }, 100);

  const veri = hatirlaticiOku();
  veri.icsIndirildi = true;
  veri.icsTarih = new Date().toISOString();
  hatirlaticiYaz(veri);
}

// PWA: Service worker kaydı
function pwaKayitEt() {
  if (!('serviceWorker' in navigator)) return;
  if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;

  navigator.serviceWorker.register('sw.js').catch(err => {
    console.log('SW kayıt başarısız:', err);
  });
}

// "Ana ekrana ekle" tetikleyicisi
let pwaPromptOlay = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  pwaPromptOlay = e;
  const btn = document.getElementById('pwaEkleBtn');
  if (btn) btn.style.display = 'inline-block';
});

async function pwaEkleClick() {
  if (!pwaPromptOlay) {
    alert('Tarayıcınızdan "Ana ekrana ekle" seçeneğini kullanabilirsiniz (Chrome: ⋮ menüsü → Uygulamayı yükle).');
    return;
  }
  pwaPromptOlay.prompt();
  const sonuc = await pwaPromptOlay.userChoice;
  if (sonuc.outcome === 'accepted') {
    const veri = hatirlaticiOku();
    veri.pwaYuklendi = true;
    hatirlaticiYaz(veri);
  }
  pwaPromptOlay = null;
}

// ===== HATIRLATICI MERKEZİ (kayan buton + modal) =====
function hatirlaticiMerkeziOlustur() {
  if (document.getElementById('hatirlaticiBtn')) return;

  const btn = document.createElement('button');
  btn.id = 'hatirlaticiBtn';
  btn.className = 'hatirlatici-btn';
  btn.title = 'Günlük hatırlatıcı kur';
  btn.innerHTML = '🔔';
  document.body.appendChild(btn);

  btn.addEventListener('click', hatirlaticiModalAc);
}

function hatirlaticiModalAc() {
  let modal = document.getElementById('hatirlaticiModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'hatirlaticiModal';
    modal.className = 'tebrik-overlay';
    modal.innerHTML = `
      <div class="tebrik-kutu hatirlatici-kutu">
        <div class="tebrik-emoji">🔔</div>
        <h3 class="tebrik-baslik">Günlük Hatırlatıcı Kur</h3>
        <p class="tebrik-mesaj">Her gün küçük bir çevre davranışı için sana hatırlatma gelsin. Üç yöntemden istediğini seç:</p>

        <div class="hatirlatici-secenekler">
          <div class="hatirlatici-kart">
            <div class="hatirlatici-emoji">📱</div>
            <h4>Tarayıcı Bildirimi</h4>
            <p>Site açıkken günde 1 kere hatırlatma alırsın. İzin gerektirir.</p>
            <button type="button" id="bildirimIzinBtn" class="btn-birincil" style="border:none; cursor:pointer; width:100%;">İzin Ver & Aktif Et</button>
          </div>

          <div class="hatirlatici-kart">
            <div class="hatirlatici-emoji">📅</div>
            <h4>Telefon Takvimi (.ics)</h4>
            <p>İndirdiğin dosyayı aç → telefon takvimine her gün <strong>09:00</strong>'da hatırlatıcı eklenir. <strong>En güvenilir yol</strong>.</p>
            <button type="button" id="icsIndirBtn" class="btn-ikincil" style="border:none; cursor:pointer; width:100%;">📥 Takvim Dosyasını İndir</button>
          </div>

          <div class="hatirlatici-kart">
            <div class="hatirlatici-emoji">🏠</div>
            <h4>Ana Ekrana Ekle (PWA)</h4>
            <p>Site bir uygulama gibi telefonuna eklenir; daha sık ve güvenilir hatırlatma gönderir.</p>
            <button type="button" id="pwaEkleBtn" class="btn-ikincil" style="border:none; cursor:pointer; width:100%; display:none;">📲 Ana Ekrana Ekle</button>
            <p id="pwaIpucu" style="font-size:0.78rem; color:var(--gri-metin); margin-top:0.5rem;">Tarayıcı menüsünden "Ana ekrana ekle" / "Uygulamayı yükle" seçeneğini kullanın.</p>
          </div>
        </div>

        <button class="tebrik-kapat-btn" id="hatirlaticiKapatBtn" style="margin-top:1rem;">Kapat</button>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('goster');
    });
    document.getElementById('hatirlaticiKapatBtn').addEventListener('click', () => modal.classList.remove('goster'));
    document.getElementById('bildirimIzinBtn').addEventListener('click', async () => {
      const ok = await bildirimIzniIste();
      if (ok) document.getElementById('bildirimIzinBtn').textContent = '✅ Bildirim Aktif';
    });
    document.getElementById('icsIndirBtn').addEventListener('click', () => {
      icsDosyasiniIndir('09:00');
      document.getElementById('icsIndirBtn').textContent = '✅ İndirildi — Şimdi dosyayı aç';
    });
    document.getElementById('pwaEkleBtn').addEventListener('click', pwaEkleClick);
  }

  // Mevcut durumu yansıt
  if (Notification.permission === 'granted') {
    const b = document.getElementById('bildirimIzinBtn');
    if (b) b.textContent = '✅ Bildirim Aktif';
  }

  modal.classList.add('goster');
}

// PWA kayıt + hatırlatıcı butonunu çiz
pwaKayitEt();
hatirlaticiMerkeziOlustur();
gunlukIcGosterim();
