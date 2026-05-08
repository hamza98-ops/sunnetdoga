// ===== HADİS ARŞİVİ — ARAMA & FİLTRE =====
(function() {
  const grid = document.getElementById('arsivGrid');
  const aramaKutusu = document.getElementById('aramaKutusu');
  const konuFiltresi = document.getElementById('konuFiltresi');
  const sayac = document.getElementById('arsivSayac');

  if (!grid || !window.HADIS_ARSIVI) return;

  let aktifKonu = 'tumu';
  let aramaTerimi = '';

  // Türkçe karakter normalize (arama için)
  function normalize(str) {
    return (str || '')
      .toLocaleLowerCase('tr-TR')
      .replace(/ı/g, 'i')
      .replace(/[ığüşöçâîû]/g, c => ({ığ:'ig', i:'i', ü:'u', ş:'s', ö:'o', ç:'c', â:'a', î:'i', û:'u' }[c] || c));
  }

  // Konu filtresi cipslerini oluştur
  HADIS_KONULARI.forEach(konu => {
    const cip = document.createElement('button');
    cip.className = 'konu-cip' + (konu.id === 'tumu' ? ' aktif' : '');
    cip.dataset.konu = konu.id;
    cip.textContent = konu.label;
    cip.setAttribute('role', 'tab');
    cip.setAttribute('aria-selected', konu.id === 'tumu');
    cip.addEventListener('click', () => {
      aktifKonu = konu.id;
      document.querySelectorAll('.konu-cip').forEach(c => {
        c.classList.toggle('aktif', c.dataset.konu === aktifKonu);
        c.setAttribute('aria-selected', c.dataset.konu === aktifKonu);
      });
      render();
    });
    konuFiltresi.appendChild(cip);
  });

  // Hadis kartını oluştur
  function kartHTML(hadis) {
    return `
      <article class="arsiv-kart" data-konu="${hadis.konu}">
        <div class="arsiv-kart-ust">
          <span class="arsiv-kart-konu">${hadis.konuLabel}</span>
          <span class="arsiv-kart-id">#${String(hadis.id).padStart(2, '0')}</span>
        </div>
        <h3>${hadis.baslik}</h3>
        <div class="arsiv-arapca" lang="ar" dir="rtl">${hadis.arapca}</div>
        <p class="arsiv-turkce">"${hadis.turkce}"</p>
        <div class="arsiv-meta">
          ${hadis.ravi && hadis.ravi !== '—' ? `
          <div class="arsiv-meta-satir">
            <span class="arsiv-meta-etiket">Râvî:</span>
            <span class="arsiv-meta-deger">${hadis.ravi}</span>
          </div>` : ''}
          <div class="arsiv-meta-satir">
            <span class="arsiv-meta-etiket">Kaynak:</span>
            <span class="arsiv-meta-deger">${hadis.kaynak}</span>
          </div>
          <div class="arsiv-meta-satir">
            <span class="arsiv-meta-etiket">Derece:</span>
            <span class="arsiv-meta-deger">${hadis.derece}</span>
          </div>
        </div>
        <div class="arsiv-modern">
          <strong>🔗 Modern bağlantı:</strong> ${hadis.modern}
        </div>
      </article>
    `;
  }

  // Filtreleme + Render
  function render() {
    const aramaNormal = normalize(aramaTerimi.trim());

    const filtreli = HADIS_ARSIVI.filter(h => {
      // Konu filtresi
      if (aktifKonu !== 'tumu' && h.konu !== aktifKonu) return false;

      // Arama filtresi
      if (aramaNormal.length === 0) return true;
      const aranabilir = normalize(
        h.baslik + ' ' + h.turkce + ' ' + h.kaynak + ' ' + h.modern + ' ' + (h.ravi || '') + ' ' + h.konuLabel
      );
      return aranabilir.includes(aramaNormal);
    });

    if (filtreli.length === 0) {
      grid.innerHTML = `
        <div class="sonuc-yok">
          <div class="sonuc-yok-emoji">🔍</div>
          <h3 style="color:var(--koyu-yesil); margin-bottom:0.5rem;">Sonuç bulunamadı</h3>
          <p>Farklı bir kelimeyle arayın veya tüm konuları görüntüleyin.</p>
        </div>
      `;
    } else {
      grid.innerHTML = filtreli.map(kartHTML).join('');
    }

    sayac.textContent = `${filtreli.length} / ${HADIS_ARSIVI.length}`;
  }

  // Arama kutusu (debounce)
  let zamanlayici;
  aramaKutusu.addEventListener('input', (e) => {
    clearTimeout(zamanlayici);
    zamanlayici = setTimeout(() => {
      aramaTerimi = e.target.value;
      render();
    }, 150);
  });

  // URL hash'inden konuyu oku (örn: #su)
  if (location.hash) {
    const hash = location.hash.slice(1);
    if (HADIS_KONULARI.some(k => k.id === hash)) {
      aktifKonu = hash;
    }
  }

  // İlk render
  render();
})();
