# 🌿 Sünnetin İzinde Çevre

> **Doğayı Korumak İnancımızın Gereğidir.**

Hz. Peygamber'in (s.a.v.) **14 asır önce ortaya koyduğu çevre ahlakı** ile bugünün **sürdürülebilirlik kavramları** arasındaki köprüyü kuran Sosyalfest 2026 projesi.

🌐 **Canlı:** [sunnetdoga.com.tr](https://sunnetdoga.com.tr)
📸 **Instagram:** [@sunnetinizindecevre](https://www.instagram.com/sunnetinizindecevre/)
▶️ **YouTube:** [@sunnetinizindecevre](https://www.youtube.com/@sunnetinizindecevre)

---

## 🎯 Amaç

Sünnet kaynaklı çevre ilkelerini (su tasarrufu, ağaçlandırma, hayvanlara merhamet, çevre temizliği, israf yasağı), BM Sürdürülebilir Kalkınma Hedefleri (SDGs) ile ilişkilendirerek tanıtmak ve öğrenciyi **bugün uygulayabileceği somut adımlara** davet etmek.

## 👥 Hedef Kitle

- 🎓 Ortaöğretim öğrencileri (özellikle hazırlık sınıfı)
- 👩‍🏫 Din Kültürü ve Ahlak Bilgisi öğretmenleri
- 👥 Sosyalfest 2026 jürisi
- 📲 İslam-çevre kesişimine ilgi duyan genel kitle

## 🚀 Kullanılan Teknolojiler

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Hosting:** GitHub Pages (custom domain)
- **Fontlar:** Google Fonts (Cairo, Amiri)
- **QR Kod:** Yerel PNG + api.qrserver.com (yedek)
- **Build adımı yok** — saf statik site, kapsam dışı bağımlılıkla bozulmaz

## 🌐 Yerel Çalıştırma

Repo'yu klonladıktan sonra herhangi bir HTML dosyasını tarayıcıda açabilirsiniz. Build/install gerekmez.

```bash
git clone https://github.com/hamza98-ops/sunnetdoga.git
cd sunnetdoga
# Tarayıcıda index.html'i açın
```

(Opsiyonel) Yerel sunucu ile çalıştırma:

```bash
python -m http.server 8000
# http://localhost:8000 → tarayıcıda açın
```

## 📁 Proje Yapısı

```
.
├── index.html              # Ana sayfa
├── hadisler.html           # Hadisler ışığında çevre
├── pratik-rehber.html      # Günlük hayatta sünnet
├── medya.html              # Videolar, indirme, QR kod
├── hakkimizda.html         # Ekip ve proje hikayesi
├── iletisim.html           # İletişim formu + SSS
├── style.css               # Tüm sayfalar için stil
├── script.js               # Etkileşim, görev, tebrik, ilerleme kaydı
├── assets/
│   └── qr-sunnetdoga.png   # Yerel QR kod yedeği
├── BRIFING.md              # Detaylı proje brifingi (jüri/ekip için)
├── README.md               # Bu dosya
├── CNAME                   # GitHub Pages özel alan adı
└── İndirilebilir materyaller (broşür, sunum, rapor)
```

## ✨ Öne Çıkan Özellikler

- 📜 **40+ hadis** orijinal Arapça + Türkçe meal + kaynak gösterimiyle
- ⚖️ Beş ana başlık: Su, Ağaç, Hayvan, Temizlik, İsraf
- 🔗 Her bölümde **BM SDG eşleştirmesi** ve modern istatistiklerle bağlantı
- 🎯 **Hadis görev kartları** + 8 haftalık çevre challenge
- 🎉 Konfeti animasyonlu **tebrik modal sistemi** (5 farklı mesaj)
- 💾 **localStorage** ile kullanıcı ilerleme kaydı (sayfa yenilense de korunur)
- 🌿 Sayfanın sağ alt köşesinde **canlı görev sayacı rozeti**
- 📱 **QR kod** — afişlere ve broşürlere eklenebilir
- 📥 İndirilebilir materyaller: broşür PDF, sunum PPTX, rapor DOCX, site arşivi
- ♿ **Erişilebilirlik:** prefers-reduced-motion, klavye odak görünürlüğü, alt metinler
- 📱 Responsive (mobil/tablet/masaüstü)

## 📚 Kaynakça (Özet)

### İslamî Kaynaklar
Sahih-i Buhârî · Sahih-i Müslim · Müsned-i Ahmed b. Hanbel · İbn Mâce, Sünen · Ebû Dâvûd, Sünen · Tirmizî, Sünen · Nesâî, Sünen · Kur'an-ı Kerim

### Çevre/Veri Kaynakları
- BM Sürdürülebilir Kalkınma Hedefleri (SDGs) — sdgs.un.org/goals
- WHO/UNICEF Joint Monitoring Programme
- FAO Global Forest Resources Assessment
- UN-Water raporları
- IPCC İklim Değişikliği Raporları

Tam dipnot listesi için [hadisler.html](hadisler.html) sayfasının altındaki "Veri Kaynakları" bölümüne bakın.

## 👥 Ekip

| Üye | Rol |
|-----|-----|
| **İclal** | 📝 Proje Lideri & Metin Yazarı |
| **Halime** | 🎬 Video Kurgu & Seslendirme |
| **Fatma** | 🔍 Araştırmacı & Görsel Tasarım |
| **Hazal Koç** | 🌐 Web Sitesi & Sosyal Medya Sorumlusu |

**Danışman:** Emrah Hoca

## 🚧 Geliştirme Süreci

| Tarih | Aşama |
|-------|-------|
| Ocak 2026 | 💡 Fikrin doğması |
| Şubat 2026 | 🔍 Hadis ve veri derleme |
| Mart 2026 | 🎬 Web sitesi ve içerik üretimi |
| Sosyalfest 2026 | 🏆 Sunum |

## 🛠️ Yayın & Bakım

Site `main` branch'tan otomatik olarak GitHub Pages'a yayınlanır.

```bash
git add <değişen-dosyalar>
git commit -m "Açıklama"
git push
# 1-3 dakika içinde sunnetdoga.com.tr'de canlı
```

Yeni sürümün cache yüzünden eski göründüğü olursa: **Ctrl+F5** (sert yenileme).

## 📄 Lisans

Hazırlanan tüm materyaller (PDF afiş, infografik, sunum) **eğitim amaçlı serbest kullanım** içindir. Tek ricamız: kullandığınızda kaynak gösterin (sunnetdoga.com.tr).

## 📬 İletişim

- **Instagram:** [@sunnetinizindecevre](https://www.instagram.com/sunnetinizindecevre/)
- **İletişim formu:** [sunnetdoga.com.tr/iletisim.html](https://sunnetdoga.com.tr/iletisim.html)

---

🌍 *"Kıyamet kopuyor olsa bile elinizdeki fidanı dikin." — Hz. Muhammed (s.a.v.) · Müsned-i Ahmed*
