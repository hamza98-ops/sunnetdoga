// ===== ÖN TEST – SON TEST =====
// Likert tipi 5'li ölçek + 5 açık uçlu soru
// localStorage'da on_test ve son_test olarak saklanır

const TEST_KEY = 'sunnetdoga_test_v1';
const LIKERT_ETIKET = ['Kesinlikle Katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Kesinlikle Katılıyorum'];
const SORU_GRUPLARI = {
  'A. Çevre ve Emanet Bilinci': [1, 2, 3, 4, 5],
  'B. Sünnet ve Çevre İlişkisi': [6, 7, 8, 9, 10],
  'C. Davranış Eğilimi': [11, 12, 13, 14, 15],
  'D. Dijital İçerik ve Farkındalık': [16, 17, 18, 19, 20]
};

let aktifTip = null;
let cevaplar = {};
let acikCevaplar = {};

function testOku() {
  try {
    return JSON.parse(localStorage.getItem(TEST_KEY)) || {};
  } catch {
    return {};
  }
}

function testYaz(veri) {
  try {
    localStorage.setItem(TEST_KEY, JSON.stringify(veri));
  } catch (e) {
    alert('Kayıt yapılamadı, cihazınızdaki saklama alanı dolmuş olabilir.');
  }
}

// Likert butonlarını her soruya yerleştir
function likertButonlariOlustur() {
  document.querySelectorAll('.test-soru').forEach(soru => {
    const likert = soru.querySelector('.likert');
    if (likert.children.length > 0) return;
    for (let i = 1; i <= 5; i++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'likert-btn';
      btn.dataset.deger = i;
      btn.innerHTML = `<span class="likert-rakam">${i}</span><span class="likert-etiket">${LIKERT_ETIKET[i - 1]}</span>`;
      btn.addEventListener('click', () => {
        const soruNo = parseInt(soru.dataset.soru);
        cevaplar[soruNo] = i;
        likert.querySelectorAll('.likert-btn').forEach(b => b.classList.remove('secili'));
        btn.classList.add('secili');
        ilerlemeGuncelle();
      });
      likert.appendChild(btn);
    }
  });
}

function ilerlemeGuncelle() {
  const cevaplanan = Object.keys(cevaplar).length;
  const toplam = 20;
  const yuzde = (cevaplanan / toplam) * 100;
  document.getElementById('testCevaplanan').textContent = cevaplanan;
  document.getElementById('testToplam').textContent = toplam;
  document.getElementById('testIlerlemeCubuk').style.width = yuzde + '%';
  document.getElementById('testGonder').disabled = cevaplanan < toplam;
}

function testBaslat(tip) {
  aktifTip = tip;
  cevaplar = {};
  acikCevaplar = {};

  // Önceki seçimleri temizle
  document.querySelectorAll('.likert-btn').forEach(b => b.classList.remove('secili'));
  document.querySelectorAll('.test-acik-soru textarea').forEach(t => t.value = '');

  document.getElementById('testBaslik').textContent = tip === 'on' ? '📝 Ön Test' : '🎯 Son Test';
  document.getElementById('testBolum').style.display = 'block';
  document.getElementById('sonucBolum').style.display = 'none';
  ilerlemeGuncelle();

  setTimeout(() => {
    document.getElementById('testBolum').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function testKaydet() {
  if (Object.keys(cevaplar).length < 20) {
    alert('Lütfen tüm Likert sorularını cevaplayın.');
    return;
  }

  // Açık uçlu cevapları topla
  document.querySelectorAll('.test-acik-soru textarea').forEach(t => {
    const no = parseInt(t.dataset.acik);
    const val = t.value.trim();
    if (val) acikCevaplar[no] = val;
  });

  const veri = testOku();
  veri[aktifTip] = {
    tarih: new Date().toISOString(),
    cevaplar: { ...cevaplar },
    acik: { ...acikCevaplar }
  };
  testYaz(veri);

  sonucGoster();
}

function ortalamaHesapla(cevap) {
  const degerler = Object.values(cevap);
  if (degerler.length === 0) return 0;
  return degerler.reduce((a, b) => a + b, 0) / degerler.length;
}

function grupOrtalamasi(cevap, soruNumaralari) {
  const degerler = soruNumaralari.map(n => cevap[n]).filter(v => v != null);
  if (degerler.length === 0) return 0;
  return degerler.reduce((a, b) => a + b, 0) / degerler.length;
}

function yuzdeyeCevir(ort) {
  // 1-5 arasını 0-100'e çevir (1=0, 5=100)
  return Math.round(((ort - 1) / 4) * 100);
}

function sonucGoster() {
  const veri = testOku();
  const onTest = veri.on;
  const sonTest = veri.son;
  const aktif = veri[aktifTip];

  document.getElementById('testBolum').style.display = 'none';
  document.getElementById('sonucBolum').style.display = 'block';

  document.getElementById('sonucBaslik').textContent =
    aktifTip === 'on' ? '✅ Ön Test Kaydedildi!' : '🎉 Son Test Kaydedildi!';

  let html = '';

  // Aktif testin özeti
  const aktifOrt = ortalamaHesapla(aktif.cevaplar);
  html += `
    <div class="sonuc-kart">
      <h3>📋 Bu Test (${aktifTip === 'on' ? 'Ön Test' : 'Son Test'})</h3>
      <div class="sonuc-skor">
        <div class="sonuc-buyuk">${aktifOrt.toFixed(2)}<span style="font-size:1rem; opacity:0.7;"> / 5</span></div>
        <div class="sonuc-yuzde">%${yuzdeyeCevir(aktifOrt)} olumlu tutum</div>
      </div>
      <div class="sonuc-grup-listesi">
  `;

  for (const [grupAd, soruNumaralari] of Object.entries(SORU_GRUPLARI)) {
    const grupOrt = grupOrtalamasi(aktif.cevaplar, soruNumaralari);
    const grupYuzde = yuzdeyeCevir(grupOrt);
    html += `
      <div class="sonuc-grup">
        <div class="sonuc-grup-baslik">
          <span>${grupAd}</span>
          <strong>${grupOrt.toFixed(2)} <small>(%${grupYuzde})</small></strong>
        </div>
        <div class="sonuc-bar"><div class="sonuc-bar-dolu" style="width:${grupYuzde}%;"></div></div>
      </div>
    `;
  }
  html += '</div></div>';

  // Karşılaştırma — hem ön hem son varsa
  if (onTest && sonTest) {
    const onOrt = ortalamaHesapla(onTest.cevaplar);
    const sonOrt = ortalamaHesapla(sonTest.cevaplar);
    const fark = sonOrt - onOrt;
    const farkYuzde = yuzdeyeCevir(sonOrt) - yuzdeyeCevir(onOrt);

    html += `
      <div class="sonuc-kart sonuc-karsilastirma">
        <h3>📊 Ön Test ↔ Son Test Karşılaştırması</h3>
        <div class="karsilastirma-grid">
          <div class="karsilastirma-kutu on">
            <div class="kutu-etiket">Ön Test</div>
            <div class="kutu-buyuk">${onOrt.toFixed(2)}</div>
            <div class="kutu-yuzde">%${yuzdeyeCevir(onOrt)}</div>
            <small>${new Date(onTest.tarih).toLocaleDateString('tr-TR')}</small>
          </div>
          <div class="karsilastirma-ok">${fark >= 0 ? '⬆️' : '⬇️'}</div>
          <div class="karsilastirma-kutu son">
            <div class="kutu-etiket">Son Test</div>
            <div class="kutu-buyuk">${sonOrt.toFixed(2)}</div>
            <div class="kutu-yuzde">%${yuzdeyeCevir(sonOrt)}</div>
            <small>${new Date(sonTest.tarih).toLocaleDateString('tr-TR')}</small>
          </div>
        </div>

        <div class="karsilastirma-sonuc ${fark >= 0 ? 'pozitif' : 'negatif'}">
          ${fark >= 0
            ? `🌱 Tebrikler! Çevre bilincin ve davranış eğilimin <strong>%${farkYuzde > 0 ? farkYuzde : 0} oranında</strong> arttı. Proje sayesinde sünnet eksenli çevre farkındalığın güçlendi.`
            : `Bu kez ortalaman düştü gibi görünüyor; soruları tekrar dürüstçe değerlendirebilir, projeyi daha yakından deneyimleyebilirsin.`}
        </div>

        <h4 style="margin-top:1.5rem; color:var(--koyu-yesil);">📈 Bölüm Bölüm Değişim</h4>
        <div class="sonuc-grup-listesi">
    `;

    for (const [grupAd, soruNumaralari] of Object.entries(SORU_GRUPLARI)) {
      const onG = grupOrtalamasi(onTest.cevaplar, soruNumaralari);
      const sonG = grupOrtalamasi(sonTest.cevaplar, soruNumaralari);
      const farkG = sonG - onG;
      html += `
        <div class="sonuc-grup">
          <div class="sonuc-grup-baslik">
            <span>${grupAd}</span>
            <strong>${onG.toFixed(2)} → ${sonG.toFixed(2)} <small style="color:${farkG >= 0 ? 'var(--yesil)' : '#c0392b'};">(${farkG >= 0 ? '+' : ''}${farkG.toFixed(2)})</small></strong>
          </div>
          <div class="sonuc-bar-cift">
            <div class="cift-on" style="width:${yuzdeyeCevir(onG)}%;" title="Ön: %${yuzdeyeCevir(onG)}"></div>
            <div class="cift-son" style="width:${yuzdeyeCevir(sonG)}%;" title="Son: %${yuzdeyeCevir(sonG)}"></div>
          </div>
        </div>
      `;
    }
    html += '</div></div>';
  } else if (aktifTip === 'on') {
    html += `
      <div class="sonuc-bilgi">
        💡 Projeyi tamamlayıp <strong>Son Test</strong>'i de doldurduğunda, çevre bilincindeki değişimi görebileceksin.
      </div>
    `;
  } else {
    html += `
      <div class="sonuc-bilgi">
        💡 Önce <strong>Ön Test</strong>'i doldurmadıysan, karşılaştırma yapamayız. Bir sonraki katılımcı için ön testin önce yapılması önerilir.
      </div>
    `;
  }

  // Açık uçlu cevapları göster (kişiye özel)
  if (Object.keys(aktif.acik).length > 0) {
    html += `<div class="sonuc-kart"><h3>📝 Senin Yazdıkların</h3>`;
    for (const [no, cevap] of Object.entries(aktif.acik)) {
      const sorular = [
        '', // 0
        'Bu projede sizi en çok etkileyen hadis veya mesaj neydi?',
        'Proje sonrasında günlük hayatınızda değiştirdiğiniz bir davranış oldu mu?',
        'Sizce çevre bilinci oluştururken sünnet merkezli yaklaşım neden önemlidir?',
        'Bu proje size ne hissettirdi?',
        'Projeyle ilgili geliştirilmesini istediğiniz yönler nelerdir?'
      ];
      html += `
        <div class="acik-cevap-blok">
          <div class="acik-soru-baslik">${no}. ${sorular[no]}</div>
          <div class="acik-cevap-metin">${cevap.replace(/[<>]/g, '')}</div>
        </div>
      `;
    }
    html += '</div>';
  }

  document.getElementById('sonucIcerik').innerHTML = html;

  setTimeout(() => {
    document.getElementById('sonucBolum').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function testDurumGuncelle() {
  const veri = testOku();
  const durum = document.getElementById('testDurum');
  if (!durum) return;

  let html = '';
  if (veri.on) {
    const tarih = new Date(veri.on.tarih).toLocaleDateString('tr-TR');
    const ort = ortalamaHesapla(veri.on.cevaplar).toFixed(2);
    html += `<div class="durum-kart"><strong>✅ Ön Test:</strong> ${tarih} · Ortalama: ${ort} / 5</div>`;
  }
  if (veri.son) {
    const tarih = new Date(veri.son.tarih).toLocaleDateString('tr-TR');
    const ort = ortalamaHesapla(veri.son.cevaplar).toFixed(2);
    html += `<div class="durum-kart"><strong>🎯 Son Test:</strong> ${tarih} · Ortalama: ${ort} / 5</div>`;
  }
  if (veri.on && veri.son) {
    html += `<div class="durum-kart durum-sonuc"><button id="durumSonucGor" type="button">📊 Karşılaştırmayı Gör</button></div>`;
  }
  durum.innerHTML = html;

  const btn = document.getElementById('durumSonucGor');
  if (btn) {
    btn.addEventListener('click', () => {
      // Son tamamlanan testi göster
      aktifTip = veri.son ? 'son' : 'on';
      sonucGoster();
    });
  }
}

// === BAŞLAT ===
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('testForm')) return; // Sadece test sayfasında çalış

  likertButonlariOlustur();
  testDurumGuncelle();

  document.getElementById('onTestBaslat').addEventListener('click', () => testBaslat('on'));
  document.getElementById('sonTestBaslat').addEventListener('click', () => testBaslat('son'));

  document.getElementById('testForm').addEventListener('submit', (e) => {
    e.preventDefault();
    testKaydet();
  });

  document.getElementById('testIptal').addEventListener('click', () => {
    if (confirm('Test iptal edilsin mi? Cevapların kaydedilmeyecek.')) {
      document.getElementById('testBolum').style.display = 'none';
      cevaplar = {};
      acikCevaplar = {};
    }
  });

  document.getElementById('testTekrarla').addEventListener('click', () => {
    document.getElementById('sonucBolum').style.display = 'none';
    testDurumGuncelle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
