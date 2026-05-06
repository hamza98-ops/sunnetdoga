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

// ===== GOREV TAMAMLAMA =====
document.querySelectorAll('.gorev-kart').forEach(kart => {
  kart.addEventListener('click', () => {
    kart.classList.toggle('tamamlandi');
    const badge = kart.querySelector('.badge');
    if (kart.classList.contains('tamamlandi')) {
      kart.style.borderLeftColor = '#2d6a4f';
      kart.style.background = 'rgba(45, 106, 79, 0.05)';
      if (badge) badge.textContent = '✅ Tamamlandı!';
    } else {
      kart.style.borderLeftColor = '';
      kart.style.background = '';
      if (badge) badge.textContent = '🎯 Katıl!';
    }
  });
});
