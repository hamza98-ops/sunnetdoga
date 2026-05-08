// ===== ÇEVRE HADİSLERİ ARŞİVİ =====
// Toplam 32 hadis · 6 kategori
// Kaynaklar: Buhârî, Müslim, Ebû Dâvûd, Tirmizî, Nesâî, İbn Mâce, Müsned-i Ahmed, Muvatta
// Veriler İslam Ansiklopedisi (DİB) ve klasik hadis koleksiyonlarından derlenmiştir.

const HADIS_ARSIVI = [
  // ===== SU (8) =====
  {
    id: 1, konu: "su", konuLabel: "💧 Su",
    baslik: "Akar Nehirde Bile İsraf Etme",
    arapca: "لَا تُسْرِفُوا فِي الْمَاءِ وَلَوْ كُنْتُمْ عَلَى نَهَرٍ جَارٍ",
    turkce: "Akar bir nehrin kenarında abdest alıyor olsanız bile suyu israf etmeyin.",
    ravi: "Abdullah b. Amr (r.a.)",
    kaynak: "İbn Mâce, Tahâret, 48",
    derece: "Hasen",
    modern: "Su krizi · BM SDG 6 (Temiz Su ve Sanitasyon)"
  },
  {
    id: 2, konu: "su", konuLabel: "💧 Su",
    baslik: "Durgun Suya Pislik Bırakma",
    arapca: "لَا يَبُولَنَّ أَحَدُكُمْ فِي الْمَاءِ الدَّائِمِ ثُمَّ يَغْتَسِلُ مِنْهُ",
    turkce: "Sizden biriniz akmayan duran suya bevl etmesin, sonra da o sudan gusledecek olmasın.",
    ravi: "Ebû Hüreyre (r.a.)",
    kaynak: "Buhârî, Vudû, 68 · Müslim, Tahâret, 94",
    derece: "Sahih",
    modern: "Su kaynaklarını kirletme yasağı · Modern çevre hukuku ile paralellik"
  },
  {
    id: 3, konu: "su", konuLabel: "💧 Su",
    baslik: "Müslümanların Üç Ortak Hakkı",
    arapca: "الْمُسْلِمُونَ شُرَكَاءُ فِي ثَلَاثٍ: فِي الْمَاءِ وَالْكَلَإِ وَالنَّارِ",
    turkce: "Müslümanlar üç şeyde ortaktır: Suda, otlakta ve ateşte.",
    ravi: "İbn Abbâs ve Câbir (r.a.)",
    kaynak: "Ebû Dâvûd, Büyû', 60 · İbn Mâce, Ruhûn, 16",
    derece: "Hasen",
    modern: "Su ve doğal kaynakların kamusal niteliği · Müşterek mallar (commons) anlayışı"
  },
  {
    id: 4, konu: "su", konuLabel: "💧 Su",
    baslik: "En Faziletli Sadaka Sudur",
    arapca: "أَيُّ الصَّدَقَةِ أَفْضَلُ؟ قَالَ: الْمَاءُ",
    turkce: "(Sa'd b. Ubâde sordu:) 'En faziletli sadaka hangisidir?' Peygamber Efendimiz: 'Su (vermektir)' buyurdu.",
    ravi: "Sa'd b. Ubâde (r.a.)",
    kaynak: "Ebû Dâvûd, Zekât, 41 · Nesâî, Vesâyâ, 9",
    derece: "Hasen",
    modern: "Su erişim hakkı · 2,2 milyar insan güvenli içme suyundan yoksun"
  },
  {
    id: 5, konu: "su", konuLabel: "💧 Su",
    baslik: "Az Su ile Abdest ve Gusül",
    arapca: "كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَتَوَضَّأُ بِالْمُدِّ وَيَغْتَسِلُ بِالصَّاعِ",
    turkce: "Peygamber Efendimiz (s.a.v.) bir müd (yaklaşık 600 ml) su ile abdest alır, bir sâ' (yaklaşık 2,4 lt) su ile gusül ederdi.",
    ravi: "Enes b. Mâlik (r.a.)",
    kaynak: "Buhârî, Vudû, 47 · Müslim, Hayz, 51",
    derece: "Sahih",
    modern: "Tasarruflu su kullanımı · Günümüzde 5 dakika duş ≈ 75 lt"
  },
  {
    id: 6, konu: "su", konuLabel: "💧 Su",
    baslik: "Susuz Köpeği Sulayan Affedildi",
    arapca: "بَيْنَمَا رَجُلٌ يَمْشِي... فَإِذَا كَلْبٌ يَلْهَثُ يَأْكُلُ الثَّرَى مِنَ الْعَطَشِ، فَنَزَلَ الْبِئْرَ فَمَلَأَ خُفَّهُ مَاءً، ثُمَّ سَقَى الْكَلْبَ، فَشَكَرَ اللَّهُ لَهُ فَغَفَرَ لَهُ",
    turkce: "Bir adam yolda yürürken susuzluktan dilini sarkıtmış bir köpek gördü. Kuyuya inip ayakkabısını suyla doldurdu ve köpeği suladı. Allah onun bu iyiliğine karşılık olarak günahlarını affetti.",
    ravi: "Ebû Hüreyre (r.a.)",
    kaynak: "Buhârî, Şürb, 9 · Müslim, Selâm, 153",
    derece: "Sahih",
    modern: "Hayvanlara su erişimi · Biyoçeşitliliği koruma"
  },
  {
    id: 7, konu: "su", konuLabel: "💧 Su",
    baslik: "Suya Tükürme Yasağı",
    arapca: "نَهَى أَنْ يُبَالَ فِي الْمَاءِ الرَّاكِدِ",
    turkce: "Peygamber Efendimiz, durgun suya bevl etmeyi ve onu kirletmeyi yasaklamıştır.",
    ravi: "Câbir (r.a.)",
    kaynak: "Müslim, Tahâret, 95",
    derece: "Sahih",
    modern: "Su kalitesi · Mikrobiyolojik kirlilik · Kentsel su yönetimi"
  },
  {
    id: 8, konu: "su", konuLabel: "💧 Su",
    baslik: "Su Bir Ölçüye Göre",
    arapca: "إِذَا كَانَ الْمَاءُ قُلَّتَيْنِ لَمْ يَحْمِلِ الْخَبَثَ",
    turkce: "Su iki kulle (yaklaşık 200 lt) miktarına ulaşırsa, pislik onu kirletmez.",
    ravi: "Abdullah b. Ömer (r.a.)",
    kaynak: "Ebû Dâvûd, Tahâret, 33 · Tirmizî, Tahâret, 50",
    derece: "Sahih",
    modern: "Sulu sistemlerin kendini temizleme kapasitesi · Ekolojik denge"
  },

  // ===== AĞAÇ & FİDAN (6) =====
  {
    id: 9, konu: "agac", konuLabel: "🌳 Ağaç & Fidan",
    baslik: "Kıyamet Kopuyor Olsa Bile",
    arapca: "إِنْ قَامَتِ السَّاعَةُ وَفِي يَدِ أَحَدِكُمْ فَسِيلَةٌ، فَإِنِ اسْتَطَاعَ أَنْ لَا تَقُومَ حَتَّى يَغْرِسَهَا، فَلْيَغْرِسْهَا",
    turkce: "Kıyamet kopuyor olsa bile, sizden birinin elinde bir hurma fidanı varsa ve onu dikme imkânı varsa, hemen onu diksin.",
    ravi: "Enes b. Mâlik (r.a.)",
    kaynak: "Müsned-i Ahmed, 12902 · Buhârî, el-Edebü'l-Müfred, 479",
    derece: "Sahih (Müsned-i Ahmed muhakkikleri)",
    modern: "İklim umudu · Ağaçlandırma · BM SDG 13 (İklim Eylemi)"
  },
  {
    id: 10, konu: "agac", konuLabel: "🌳 Ağaç & Fidan",
    baslik: "Diktiği Fidan Sadaka Olur",
    arapca: "مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا أَوْ يَزْرَعُ زَرْعًا، فَيَأْكُلُ مِنْهُ طَيْرٌ أَوْ إِنْسَانٌ أَوْ بَهِيمَةٌ، إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ",
    turkce: "Bir müslümanın diktiği ağaç veya ektiği ekinden bir kuş, bir insan veya bir hayvan yerse, bu onun için sadaka olur.",
    ravi: "Enes b. Mâlik (r.a.)",
    kaynak: "Buhârî, Müzâraa, 1 · Müslim, Müsâkât, 10",
    derece: "Sahih (Muttefekun aleyh)",
    modern: "Karbon yutağı · Ormansızlaşma · BM SDG 15 (Karasal Yaşam)"
  },
  {
    id: 11, konu: "agac", konuLabel: "🌳 Ağaç & Fidan",
    baslik: "Kıyamete Kadar Sevap",
    arapca: "لَا يَغْرِسُ مُسْلِمٌ غَرْسًا فَيَأْكُلَ مِنْهُ إِنْسَانٌ وَلَا دَابَّةٌ وَلَا طَيْرٌ، إِلَّا كَانَ لَهُ صَدَقَةً إِلَى يَوْمِ الْقِيَامَةِ",
    turkce: "Bir müslümanın diktiği fidandan insan, hayvan veya kuş yedikçe, bu onun için kıyamete kadar sadaka olarak yazılır.",
    ravi: "Câbir (r.a.)",
    kaynak: "Müslim, Müsâkât, 12",
    derece: "Sahih",
    modern: "Sürdürülebilir kalkınma · Sadaka-i câriye anlayışı"
  },
  {
    id: 12, konu: "agac", konuLabel: "🌳 Ağaç & Fidan",
    baslik: "Medine'nin Korunması (Hima)",
    arapca: "إِنَّ إِبْرَاهِيمَ حَرَّمَ مَكَّةَ، وَإِنِّي حَرَّمْتُ الْمَدِينَةَ، حَرَامٌ مَا بَيْنَ لَابَتَيْهَا، لَا يُقْطَعُ عِضَاهُهَا وَلَا يُصَادُ صَيْدُهَا",
    turkce: "İbrahim (a.s.) Mekke'yi harem ilan etti, ben de Medine'yi (Lâbeteyn arasını) harem ilan ediyorum: ağaçları kesilmez, hayvanları avlanmaz.",
    ravi: "Câbir (r.a.)",
    kaynak: "Müslim, Hac, 458",
    derece: "Sahih",
    modern: "Korunan alan kavramı · Modern milli park ve biyosfer rezervlerinin erken örneği"
  },
  {
    id: 13, konu: "agac", konuLabel: "🌳 Ağaç & Fidan",
    baslik: "Sidre Ağacını Kesene Sert Uyarı",
    arapca: "مَنْ قَطَعَ سِدْرَةً صَوَّبَ اللَّهُ رَأْسَهُ فِي النَّارِ",
    turkce: "Kim (faydasız yere) sidre ağacını keserse, Allah onun başını cehenneme dik diker.",
    ravi: "Abdullah b. Hubşî (r.a.)",
    kaynak: "Ebû Dâvûd, Edeb, 158",
    derece: "Sahih (Albânî)",
    modern: "Faydasız ağaç kesimi yasağı · Kontrolsüz ormansızlaşmayla uyumlu uyarı"
  },
  {
    id: 14, konu: "agac", konuLabel: "🌳 Ağaç & Fidan",
    baslik: "Kuşatmada Bile Doğa Tahribi Yasağı",
    arapca: "لَا تَقْتُلُوا صَبِيًّا وَلَا امْرَأَةً وَلَا شَيْخًا كَبِيرًا، وَلَا تَقْطَعُوا شَجَرًا، وَلَا تُخَرِّبُوا عَامِرًا",
    turkce: "(Hz. Ebû Bekir komutanlara şu emri verirdi:) Çocuk, kadın ve yaşlıyı öldürmeyin; ağaç kesmeyin; bayındırlığı tahrip etmeyin.",
    ravi: "Hz. Ebû Bekir (r.a.) — Peygamber Efendimiz'in talimatları doğrultusunda",
    kaynak: "Muvatta, Cihâd, 10 · Beyhakî, Sünen, IX/85",
    derece: "Sahih",
    modern: "Çatışmalarda çevreyi koruma ilkesi · Modern uluslararası humaniter hukukla paralel"
  },

  // ===== HAYVAN (7) =====
  {
    id: 15, konu: "hayvan", konuLabel: "🐾 Hayvan",
    baslik: "Allah Her Şeye İhsanı Emretti",
    arapca: "إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ",
    turkce: "Şüphesiz Allah her şeye karşı iyilik (ihsan) yapmayı emretmiştir.",
    ravi: "Şeddâd b. Evs (r.a.)",
    kaynak: "Müslim, Sayd ve Zebâih, 57",
    derece: "Sahih",
    modern: "Hayvan refahı · Kesimde ihsan · Tüm canlıya saygı"
  },
  {
    id: 16, konu: "hayvan", konuLabel: "🐾 Hayvan",
    baslik: "Kediyi Hapseden Kadın",
    arapca: "عُذِّبَتِ امْرَأَةٌ فِي هِرَّةٍ سَجَنَتْهَا حَتَّى مَاتَتْ، فَدَخَلَتْ فِيهَا النَّارَ، لَا هِيَ أَطْعَمَتْهَا وَسَقَتْهَا، وَلَا هِيَ تَرَكَتْهَا تَأْكُلُ مِنْ خَشَاشِ الْأَرْضِ",
    turkce: "Bir kadın, hapsettiği bir kedi yüzünden cehennemlik oldu. Kediyi hapsetti, ölünceye kadar ne yedirdi ne suladı; ne de bırakıp yerin haşeratından yemesine izin verdi.",
    ravi: "Abdullah b. Ömer (r.a.)",
    kaynak: "Buhârî, Bedu'l-Halk, 17 · Müslim, Birr, 151",
    derece: "Sahih (Muttefekun aleyh)",
    modern: "Hayvan hakları · Hapsedilen hayvanların temel ihtiyaçları"
  },
  {
    id: 17, konu: "hayvan", konuLabel: "🐾 Hayvan",
    baslik: "Hayvanın Yüzünü Damgalama Yasağı",
    arapca: "نَهَى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنِ الضَّرْبِ فِي الْوَجْهِ، وَعَنِ الْوَسْمِ فِي الْوَجْهِ",
    turkce: "Peygamber Efendimiz, (insan veya hayvanın) yüzüne vurmayı ve yüzüne damga vurmayı yasakladı.",
    ravi: "Câbir (r.a.)",
    kaynak: "Müslim, Libâs, 106",
    derece: "Sahih",
    modern: "Hayvan onuru · Modern hayvan hakları yasalarıyla uyumlu"
  },
  {
    id: 18, konu: "hayvan", konuLabel: "🐾 Hayvan",
    baslik: "Canlıyı Hedef Yapmayın",
    arapca: "لَعَنَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَنِ اتَّخَذَ شَيْئًا فِيهِ الرُّوحُ غَرَضًا",
    turkce: "Peygamber Efendimiz, canlı bir varlığı atış hedefi yapan kimseye lanet etmiştir.",
    ravi: "Abdullah b. Ömer (r.a.)",
    kaynak: "Buhârî, Zebâih, 25 · Müslim, Sayd, 58",
    derece: "Sahih",
    modern: "Hayvanlara eziyet yasağı · Spor amaçlı kıyım eleştirisi"
  },
  {
    id: 19, konu: "hayvan", konuLabel: "🐾 Hayvan",
    baslik: "Devenin Şikâyeti",
    arapca: "دَخَلَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ حَائِطًا لِرَجُلٍ مِنَ الْأَنْصَارِ، فَإِذَا جَمَلٌ، فَلَمَّا رَأَى النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ حَنَّ وَذَرَفَتْ عَيْنَاهُ... فَقَالَ: أَفَلَا تَتَّقِي اللَّهَ فِي هَذِهِ الْبَهِيمَةِ الَّتِي مَلَّكَكَ اللَّهُ إِيَّاهَا، فَإِنَّهُ شَكَا إِلَيَّ أَنَّكَ تُجِيعُهُ وَتُدْئِبُهُ",
    turkce: "Peygamber Efendimiz bir Ensarî'nin bahçesine girdiğinde bir deve gördü; deve O'nu görünce inledi ve gözleri yaşardı. Sahibi geldiğinde Peygamber Efendimiz: 'Allah'ın senin idarene verdiği bu hayvana zulmetmekten korkmuyor musun? O bana, kendisini aç bıraktığını ve ağır iş yüklediğini şikâyet etti' buyurdu.",
    ravi: "Abdullah b. Ca'fer (r.a.)",
    kaynak: "Ebû Dâvûd, Cihad, 47",
    derece: "Sahih (Albânî)",
    modern: "Çiftlik hayvanlarının refahı · Aşırı yüklenme yasağı"
  },
  {
    id: 20, konu: "hayvan", konuLabel: "🐾 Hayvan",
    baslik: "Karınca Yuvası Yakma Yasağı",
    arapca: "نَزَلَ نَبِيٌّ مِنَ الْأَنْبِيَاءِ تَحْتَ شَجَرَةٍ، فَلَدَغَتْهُ نَمْلَةٌ، فَأَمَرَ بِجَهَازِهِ فَأُخْرِجَ مِنْ تَحْتِهَا، ثُمَّ أَمَرَ بِبَيْتِهَا فَأُحْرِقَ بِالنَّارِ، فَأَوْحَى اللَّهُ إِلَيْهِ: فَهَلَّا نَمْلَةً وَاحِدَةً!",
    turkce: "Peygamberlerden biri bir ağaç altında konaklamıştı; bir karınca onu ısırdı. Bunun üzerine eşyalarının taşınmasını ve karınca yuvasının yakılmasını emretti. Allah ona şöyle vahyetti: 'Seni ısıran bir karıncaydı; sen ise koca bir ümmet olan karınca topluluğunu yaktın!'",
    ravi: "Ebû Hüreyre (r.a.)",
    kaynak: "Buhârî, Cihad, 153 · Müslim, Selâm, 147",
    derece: "Sahih (Muttefekun aleyh)",
    modern: "Topluca canlı kıyım yasağı · Ekosistem dengesi"
  },
  {
    id: 21, konu: "hayvan", konuLabel: "🐾 Hayvan",
    baslik: "Kuş Yumurtası ve Yavrusu",
    arapca: "كُنَّا مَعَ رَسُولِ اللَّهِ فِي سَفَرٍ، فَانْطَلَقَ لِحَاجَتِهِ، فَرَأَيْنَا حُمَّرَةً مَعَهَا فَرْخَانِ فَأَخَذْنَا فَرْخَيْهَا، فَجَاءَتِ الْحُمَّرَةُ فَجَعَلَتْ تَفْرِشُ، فَجَاءَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: مَنْ فَجَعَ هَذِهِ بِوَلَدِهَا؟ رُدُّوا وَلَدَهَا إِلَيْهَا",
    turkce: "Peygamber Efendimiz'le birlikte yolculuktayken bir kuş yavrularını aldık; ana kuş başımızda kanat çırpmaya başladı. Peygamber Efendimiz dönünce: 'Bu kuşu yavruları konusunda kim üzdü? Yavrularını ona iade edin' buyurdu.",
    ravi: "Abdurrahman b. Abdullah b. Mes'ûd (r.a.)",
    kaynak: "Ebû Dâvûd, Edeb, 164",
    derece: "Sahih",
    modern: "Yaban hayatın korunması · Yavruların anneden ayrılmaması"
  },

  // ===== TEMİZLİK (5) =====
  {
    id: 22, konu: "temizlik", konuLabel: "🧹 Temizlik",
    baslik: "Yoldan Eziyet Kaldırmak Sadakadır",
    arapca: "إِمَاطَةُ الْأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ",
    turkce: "Yoldan (insanlara) eziyet veren şeyleri kaldırmak sadakadır.",
    ravi: "Ebû Hüreyre (r.a.)",
    kaynak: "Buhârî, Cihad, 128 · Müslim, Zekât, 56",
    derece: "Sahih (Muttefekun aleyh)",
    modern: "Çevre temizliği · Plastik kirliliği · Kentsel atık"
  },
  {
    id: 23, konu: "temizlik", konuLabel: "🧹 Temizlik",
    baslik: "Temizlik İmanın Yarısıdır",
    arapca: "الطَّهُورُ شَطْرُ الإِيمَانِ",
    turkce: "Temizlik imanın yarısıdır.",
    ravi: "Ebû Mâlik el-Eş'arî (r.a.)",
    kaynak: "Müslim, Tahâret, 1",
    derece: "Sahih",
    modern: "Hijyen kültürü · Halk sağlığı"
  },
  {
    id: 24, konu: "temizlik", konuLabel: "🧹 Temizlik",
    baslik: "Allah Temizdir, Temizliği Sever",
    arapca: "إِنَّ اللَّهَ طَيِّبٌ يُحِبُّ الطَّيِّبَ، نَظِيفٌ يُحِبُّ النَّظَافَةَ، كَرِيمٌ يُحِبُّ الْكَرَمَ، جَوَادٌ يُحِبُّ الْجُودَ، فَنَظِّفُوا أَفْنِيَتَكُمْ",
    turkce: "Allah temizdir, temizliği sever; pak ve nezihtir, nezahati sever; cömerttir, cömertliği sever. Öyleyse evlerinizin avlularını temiz tutun.",
    ravi: "Sa'd b. Ebî Vakkâs (r.a.)",
    kaynak: "Tirmizî, Edeb, 41",
    derece: "Hasen",
    modern: "Çevre temizliği · Mahalle ve kent sağlığı"
  },
  {
    id: 25, konu: "temizlik", konuLabel: "🧹 Temizlik",
    baslik: "Yoldan Dikenli Dal Çekmek",
    arapca: "مَرَّ رَجُلٌ بِغُصْنِ شَجَرَةٍ عَلَى ظَهْرِ طَرِيقٍ، فَقَالَ: وَاللَّهِ لَأُنَحِّيَنَّ هَذَا عَنِ الْمُسْلِمِينَ لَا يُؤْذِيهِمْ، فَأُدْخِلَ الْجَنَّةَ",
    turkce: "Bir adam yol üzerinde duran ağaç dalını gördü ve: 'Vallahi bunu kaldırırım ki müslümanlara eziyet etmesin' dedi. Bu sebeple cennete konuldu.",
    ravi: "Ebû Hüreyre (r.a.)",
    kaynak: "Müslim, Birr, 127",
    derece: "Sahih",
    modern: "Niyetin önemi · Küçük çevre adımlarının değeri"
  },
  {
    id: 26, konu: "temizlik", konuLabel: "🧹 Temizlik",
    baslik: "Yeryüzü Mescit ve Temiz Kılındı",
    arapca: "جُعِلَتْ لِيَ الْأَرْضُ مَسْجِدًا وَطَهُورًا",
    turkce: "Yeryüzü benim için bir mescit ve temizlik vasıtası kılındı.",
    ravi: "Câbir b. Abdullah (r.a.)",
    kaynak: "Buhârî, Salât, 56 · Müslim, Mesâcid, 3",
    derece: "Sahih (Muttefekun aleyh)",
    modern: "Toprağa ve doğaya saygı · Ekolojik bütünlük"
  },

  // ===== İSRAF (3) =====
  {
    id: 27, konu: "israf", konuLabel: "⚖️ İsraf",
    baslik: "Yiyiniz, İçiniz; İsraf Etmeden",
    arapca: "كُلُوا وَاشْرَبُوا وَتَصَدَّقُوا وَالْبَسُوا فِي غَيْرِ إِسْرَافٍ وَلَا مَخِيلَةٍ",
    turkce: "Yiyiniz, içiniz, sadaka veriniz ve giyiniz; ancak israf etmeden ve kibirlenmeden.",
    ravi: "Abdullah b. Amr (r.a.)",
    kaynak: "Nesâî, Zekât, 66 · İbn Mâce, Libâs, 23",
    derece: "Hasen",
    modern: "Sürdürülebilir tüketim · Fast fashion eleştirisi · BM SDG 12"
  },
  {
    id: 28, konu: "israf", konuLabel: "⚖️ İsraf",
    baslik: "Saçıp Savuranlar Şeytanın Kardeşi",
    arapca: "وَلَا تُبَذِّرْ تَبْذِيرًا ۝ إِنَّ الْمُبَذِّرِينَ كَانُوا إِخْوَانَ الشَّيَاطِينِ",
    turkce: "Saçıp savurma! Çünkü saçıp savuranlar şeytanın kardeşleri olmuşlardır.",
    ravi: "—",
    kaynak: "Kur'an-ı Kerim · İsrâ Sûresi, 26-27. âyet",
    derece: "Âyet (kesin nass)",
    modern: "Tüketim çılgınlığı eleştirisi · Gıda israfı (yıllık 1,3 milyar ton)"
  },
  {
    id: 29, konu: "israf", konuLabel: "⚖️ İsraf",
    baslik: "Lokmayı Sil, Tabağı Yala",
    arapca: "إِذَا أَكَلَ أَحَدُكُمْ طَعَامًا فَلْيَلْعَقْ أَصَابِعَهُ... وَلَا يَدَعْ يَدَهُ حَتَّى يَلْعَقَهَا أَوْ يُلْعِقَهَا",
    turkce: "Sizden biriniz yemek yediğinde, parmaklarını yalasın ve tabağı silsin. (Çünkü) yiyeceğin hangi parçasında bereketin olduğunu bilemezsiniz.",
    ravi: "Câbir (r.a.)",
    kaynak: "Müslim, Eşribe, 136-137",
    derece: "Sahih",
    modern: "Yemek artıklarının bereketi · Gıda israfının önlenmesi"
  },

  // ===== DOĞA & GENEL (3) =====
  {
    id: 30, konu: "doga", konuLabel: "🌍 Doğa & Genel",
    baslik: "Yeryüzünde Bozgunculuk Yapmayın",
    arapca: "وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ",
    turkce: "Onlara 'Yeryüzünde bozgunculuk etmeyin' denildiğinde 'Biz ancak ıslah edicileriz' derler.",
    ravi: "—",
    kaynak: "Kur'an-ı Kerim · Bakara Sûresi, 11. âyet",
    derece: "Âyet (kesin nass)",
    modern: "Çevre tahribatı · Ekosistem bozulması · Greenwashing eleştirisi"
  },
  {
    id: 31, konu: "doga", konuLabel: "🌍 Doğa & Genel",
    baslik: "Islah Edilmiş Yeryüzünü Bozmayın",
    arapca: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا",
    turkce: "Yeryüzü ıslah edildikten (düzene konulduktan) sonra orada bozgunculuk etmeyin.",
    ravi: "—",
    kaynak: "Kur'an-ı Kerim · A'râf Sûresi, 56. âyet",
    derece: "Âyet (kesin nass)",
    modern: "Doğal denge · Restorasyon · Sürdürülebilirlik"
  },
  {
    id: 32, konu: "doga", konuLabel: "🌍 Doğa & Genel",
    baslik: "Mümin Bir Bahçe Gibidir",
    arapca: "مَثَلُ الْمُؤْمِنِ كَمَثَلِ الزَّرْعِ، لَا تَزَالُ الرِّيحُ تُمِيلُهُ، وَلَا يَزَالُ الْمُؤْمِنُ يُصِيبُهُ الْبَلَاءُ",
    turkce: "Müminin durumu yeşil bir ekin gibidir; rüzgâr onu yatırır kaldırır; müminin başına da musibetler aynı şekilde gelip geçer.",
    ravi: "Ebû Hüreyre (r.a.)",
    kaynak: "Buhârî, Merdâ, 1 · Müslim, Münâfikîn, 58",
    derece: "Sahih (Muttefekun aleyh)",
    modern: "Doğanın insan ahlâkına aynalığı · Tabiat metaforları"
  }
];

const HADIS_KONULARI = [
  { id: "tumu", label: "📖 Tümü", renk: "var(--yesil)" },
  { id: "su", label: "💧 Su", renk: "#0096c7" },
  { id: "agac", label: "🌳 Ağaç & Fidan", renk: "#52b788" },
  { id: "hayvan", label: "🐾 Hayvan", renk: "#d4a017" },
  { id: "temizlik", label: "🧹 Temizlik", renk: "#7209b7" },
  { id: "israf", label: "⚖️ İsraf", renk: "#e63946" },
  { id: "doga", label: "🌍 Doğa & Genel", renk: "#1b4332" }
];
