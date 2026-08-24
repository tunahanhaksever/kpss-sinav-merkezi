/**
 * KPSS Genel Yetenek & Genel Kültür Çıkmış Sınav Soruları ve Gerekçeli Çözümleri
 * ÖSYM KPSS Lisans, Önlisans ve Ortaöğretim Arşivi
 */

const KPSS_QUESTION_BANK = [
  // TARİH
  {
    id: 1,
    period: "2024 KPSS Lisans",
    topic: "Tarih",
    subTopic: "İlk Türk Devletleri",
    question: "İslamiyet öncesi Türk devletlerinde hükümdarın yetkilerini Tanrı'dan aldığına inanılan ve kan bağı yoluyla hanedanın tüm erkek üyelerine geçtiği kabul edilen egemenlik anlayışı aşağıdakilerden hangisidir?",
    options: [
      "A) Kut anlayışı",
      "B) Töre",
      "C) Kurultay",
      "D) Oguş",
      "E) Ayukı"
    ],
    answer: 0,
    explanation: "İslamiyet öncesi Türk devletlerinde devleti yönetme yetkisinin Gök Tanrı tarafından verildiğine inanılan anlayışa 'KUT' denir. Kut'un kan bağı yoluyla hanedan üyelerine geçtiğine inanılması 'veraset sisteminde belirsizliğe' ve sık sık taht kavgalarına yol açmıştır.",
    lawRef: "ÖSYM KPSS Tarih — İslam Öncesi Türk Tarihi / Veraset Hukuku"
  },
  {
    id: 2,
    period: "2024 KPSS Lisans",
    topic: "Tarih",
    subTopic: "Kurtuluş Savaşı Hazırlık Dönemi",
    question: "Milli Mücadele Dönemi'nde 'Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.' maddesiyle Kurtuluş Savaşı'nın amacı, gerekçesi ve yöntemi ilk kez aşağıdakilerin hangisinde belirtilmiştir?",
    options: [
      "A) Havza Genelgesi",
      "B) Amasya Genelgesi",
      "C) Erzurum Kongresi",
      "D) Sivas Kongresi",
      "E) Misak-ı Milli Kararları"
    ],
    answer: 1,
    explanation: "Amasya Genelgesi (22 Haziran 1919), Kurtuluş Savaşı'nın gerekçesini ('Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir'), amacını ve yöntemini ('Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır') ilk kez ortaya koyan ihtilal beyannamesidir.",
    lawRef: "ÖSYM KPSS Tarih — Milli Mücadeleye Hazırlık Dönemi"
  },
  {
    id: 3,
    period: "2023 KPSS Lisans",
    topic: "Tarih",
    subTopic: "Osmanlı Kültür ve Medeniyeti",
    question: "Osmanlı Devleti'nde gelirleri doğrudan devlet hazinesine aktarılan ve vergileri 'iltizam sistemi' yoluyla mültezimler tarafından toplanan dirlik arazisi aşağıdakilerden hangisidir?",
    options: [
      "A) Dirlik (Tımar)",
      "B) Mukataa",
      "C) Vakıf",
      "D) Ocaklık",
      "E) Yurtluk"
    ],
    answer: 1,
    explanation: "Mukataa; gelirleri doğrudan doğruya devlet hazinesine (Hazine-i Amire) giden, vergileri iltizam sistemiyle peşin olarak mültezimlere ihale edilen miri arazi çeşididir. Ocaklık kale muhafızlarına, Yurtluk sınır boylarındaki akıncılara, Vakıf ise kamu yararına ayrılan topraklardır.",
    lawRef: "ÖSYM KPSS Tarih — Osmanlı Toprak ve Maliye Sistemi"
  },
  {
    id: 4,
    period: "2023 KPSS Lisans",
    topic: "Tarih",
    subTopic: "Atatürk İlke ve İnkılapları",
    question: "Türkiye'de özel sektörün sermaye yetersizliği nedeniyle gerçekleştiremediği yatırımların bizzat devlet eliyle yapılmasını ve 1933 yılında I. Beş Yıllık Sanayi Planı'nın hazırlanmasını sağlayan Atatürk ilkesi aşağıdakilerden hangisidir?",
    options: [
      "A) Devletçilik",
      "B) Laiklik",
      "C) Milliyetçilik",
      "D) Halkçılık",
      "E) Cumhuriyetçilik"
    ],
    answer: 0,
    explanation: "Devletçilik ilkesi; 1929 Dünya Ekonomik Buhranı sonrası özel teşebbüsün gücünün yetmediği büyük sanayi kuruluşlarının, fabrikaların ve bankaların (Etibank, Sümerbank) bizzat devlet eliyle kurulmasını öngören ekonomi modelidir.",
    lawRef: "ÖSYM KPSS Tarih — Atatürk İlkeleri ve İktisat Politikaları"
  },
  {
    id: 5,
    period: "2022 KPSS Lisans",
    topic: "Tarih",
    subTopic: "Milli Mücadele Dönemi",
    question: "Aşağıdakilerden hangisi Kurtuluş Savaşı sırasında toplanan Erzurum Kongresi'nin özelliklerinden biri değildir?",
    options: [
      "A) Toplanış bakımından bölgesel, aldığı kararlar bakımından ulusal olması",
      "B) İlk kez milli sınırlardan (Misak-ı Milli) bahsedilmesi",
      "C) Temsil Heyeti'nin ilk kez oluşturulması",
      "D) Manda ve himayenin ilk kez reddedilmesi",
      "E) Tüm cemiyetlerin 'Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti' adı altında birleştirilmesi"
    ],
    answer: 4,
    explanation: "Tüm cemiyetlerin tek çatı altında birleştirilmesi 'Sivas Kongresi'nde' gerçekleşmiştir. Erzurum Kongresi'nde sadece Doğu illerindeki cemiyetler (Şarki Anadolu Müdafaa-i Hukuk) birleştirilmişti.",
    lawRef: "ÖSYM KPSS Tarih — Kongreler Dönemi"
  },

  // COĞRAFYA
  {
    id: 6,
    period: "2024 KPSS Lisans",
    topic: "Coğrafya",
    subTopic: "Türkiye'nin Fiziki Coğrafyası",
    question: "Türkiye'de kalker (kireçtaşı), alçıtaşı (jips) ve kaya tuzu gibi suda kolay çözünebilen kayaçların bulunduğu alanlarda oluşan lapya, dolin, uvala, polye ve mağara gibi yer şekillerine ne ad verilir?",
    options: [
      "A) Volkanik şekiller",
      "B) Karstik şekiller",
      "C) Buzul şekilleri",
      "D) Rüzgâr aşınım şekilleri",
      "E) Kıyı kordonu şekilleri"
    ],
    answer: 1,
    explanation: "Kalker, jips ve kaya tuzunun çözünmesiyle oluşan yer şekillerine 'Karstik Şekiller' denir. Türkiye'de en yaygın olarak Akdeniz Bölgesi'nde (Teke ve Taşeli Platoları, Toroslar) görülür.",
    lawRef: "ÖSYM KPSS Coğrafya — Türkiye'nin Jeomorfolojisi ve Karstik Alanlar"
  },
  {
    id: 7,
    period: "2024 KPSS Lisans",
    topic: "Coğrafya",
    subTopic: "Türkiye'nin Madenleri ve Enerji Kaynakları",
    question: "Dünya rezervlerinin yaklaşık %72'si Türkiye'de bulunan; Balıkesir (Bigadiç, Susurluk), Bursa (Mustafakemalpaşa), Kütahya (Emet) ve Eskişehir (Seyitgazi)'de çıkarılan stratejik maden aşağıdakilerden hangisidir?",
    options: [
      "A) Boksit",
      "B) Bor mineralleri",
      "C) Bakır",
      "D) Krom",
      "E) Demir"
    ],
    answer: 1,
    explanation: "Dünya rezervlerinin %72'den fazlası Türkiye'de bulunan maden 'BOR' madenidir. Formülü: 'BİBEK' (Balıkesir, Bursa, Eskişehir, Kütahya). Jet yakıtı, cam, seramik, deterjan ve nükleer sanayide kullanılır.",
    lawRef: "ÖSYM KPSS Coğrafya — Madenler ve Enerji Kaynakları"
  },
  {
    id: 8,
    period: "2023 KPSS Lisans",
    topic: "Coğrafya",
    subTopic: "Türkiye'nin İklimi ve Bitki Örtüsü",
    question: "Akdeniz iklim bölgesinde kızılçam ormanlarının tahrip edilmesiyle oluşan kısa boylu, sert yapraklı, kuraklığa dayanıklı çalı topluluklarına 'maki' denir. Aşağıdakilerden hangisi maki türleri arasında yer almaz?",
    options: [
      "A) Zeytin",
      "B) Defne",
      "C) Zakkum",
      "D) Sandal",
      "E) Geven"
    ],
    answer: 4,
    explanation: "Geven, İç Anadolu Bölgesi'ndeki karasal iklim alanlarında görülen 'Bozkır (Step)' bitki örtüsünün tipik bir üyesidir. Zeytin, defne, zakkum, sandal, mersin, kocayemiş ve keçiboynuzu ise tipik Akdeniz maki türleridir.",
    lawRef: "ÖSYM KPSS Coğrafya — Türkiye'nin Bitki Örtüsü"
  },

  // VATANDAŞLIK VE ANAYASA
  {
    id: 9,
    period: "2024 KPSS Lisans",
    topic: "Vatandaşlık",
    subTopic: "1982 Anayasası — Yasama",
    question: "1982 Anayasası'na göre Türkiye Büyük Millet Meclisi (TBMM) üye tamsayısı ve milletvekili genel seçimlerinin kaç yılda bir yapıldığı seçeneği aşağıdakilerden hangisinde doğru verilmiştir?",
    options: [
      "A) 550 Üye — 4 Yıl",
      "B) 600 Üye — 5 Yıl",
      "C) 600 Üye — 4 Yıl",
      "D) 450 Üye — 5 Yıl",
      "E) 550 Üye — 5 Yıl"
    ],
    answer: 1,
    explanation: "2017 Anayasa Değişikliği ile TBMM milletvekili sayısı 550'den 600'e çıkarılmış ve TBMM genel seçimleri ile Cumhurbaşkanlığı seçimlerinin '5 yılda bir aynı gün' yapılması hükme bağlanmıştır (1982 Anayasası m.75 ve m.77).",
    lawRef: "1982 T.C. Anayasası — Madde 75 & 77 (Yasama Organı)"
  },
  {
    id: 10,
    period: "2024 KPSS Lisans",
    topic: "Vatandaşlık",
    subTopic: "Temel Hukuk Bilgisi",
    question: "Hukuk kurallarının diğer sosyal düzen kurallarından (din, ahlak, görgü) en temel ayırt edici özelliği aşağıdakilerden hangisidir?",
    options: [
      "A) Yazılı olması",
      "B) Devlet gücüne dayalı maddi yaptırımlı (müeyyideli) olması",
      "C) Toplum barışını hedeflemesi",
      "D) Soyut ve genel olması",
      "E) Sürekli olması"
    ],
    answer: 1,
    explanation: "Din, ahlak ve görgü kurallarının yaptırımı manevidir (ayıplanma, vicdan azabı, dışlanma). Hukuk kurallarını diğerlerinden ayıran en temel fark; arkasında 'Devlet Gücü' olan MADDİ YAPTIRIM (ceza, cebri icra, tazminat, iptal, hükümsüzlük) bulunmasıdır.",
    lawRef: "ÖSYM KPSS Vatandaşlık — Temel Hukuk Kavramları / Yaptırım Türleri"
  },
  {
    id: 11,
    period: "2023 KPSS Lisans",
    topic: "Vatandaşlık",
    subTopic: "1982 Anayasası — Yargı",
    question: "1982 Anayasası'na göre Anayasa Mahkemesi toplam kaç üyeden oluşur ve üyelerin görev süresi kaç yıldır?",
    options: [
      "A) 15 Üye — 12 Yıl",
      "B) 17 Üye — 12 Yıl",
      "C) 12 Üye — 9 Yıl",
      "D) 15 Üye — 9 Yıl",
      "E) 11 Üye — 6 Yıl"
    ],
    answer: 0,
    explanation: "2017 Anayasa değişikliği ile Askeri Yüksek Yargı kaldırılınca AYM üye sayısı 17'den 15'e düşürülmüştür. Üyeler 12 yıl için seçilir ve bir kimse iki defa Anayasa Mahkemesi üyesi seçilemez (Yaş haddi: 65).",
    lawRef: "1982 T.C. Anayasası — Madde 146 & 147 (Anayasa Mahkemesi)"
  },
  {
    id: 12,
    period: "2023 KPSS Lisans",
    topic: "Vatandaşlık",
    subTopic: "İdare Hukuku",
    question: "Aşağıdakilerden hangisi Türkiye'de Başkentin (Merkezin) taşradaki en yüksek mülki idare amiridir ve ilde Cumhurbaşkanı'nın temsilcisi sıfatıyla görev yapar?",
    options: [
      "A) Kaymakam",
      "B) Vali",
      "C) Belediye Başkanı",
      "D) İl Genel Meclisi Başkanı",
      "E) Defterdar"
    ],
    answer: 1,
    explanation: "Vali; ilde devletin, hükümetin ve doğrudan Cumhurbaşkanı'nın temsilcisidir. Cumhurbaşkanı kararıyla atanır ve il genelinde yetki genişliğine (merkeze sormadan karar alabilme) sahip tek mülki amirdir. Kaymakam ise sadece Cumhurbaşkanı'nın temsilcisidir (Devletin temsilcisi değildir) ve yetki genişliği yoktur.",
    lawRef: "İdare Hukuku — 5442 Sayılı İl İdaresi Kanunu"
  },

  // TÜRKÇE
  {
    id: 13,
    period: "2024 KPSS Lisans",
    topic: "Türkçe",
    subTopic: "Yazım Kuralları",
    question: "Aşağıdaki cümlelerin hangisinde büyük harflerin veya birleşik sözcüklerin yazımıyla ilgili bir yazım yanlışı vardır?",
    options: [
      "A) Türk Dil Kurumu Başkanlığına dilekçe ile başvurdu.",
      "B) Türkiye'nin kuzeydoğusunda şiddetli yağış bekleniyor.",
      "C) TBMM'nin 29 Ekim 1923 tarihindeki oturumu tarihi bir andı.",
      "D) Resmi Gazete'de yayımlanan yönetmelik yürürlüğe girdi.",
      "E) Bu yılki Antep Fıstığı rekoltesi üreticiyi sevindirdi."
    ],
    answer: 4,
    explanation: "Özel ada dahil olmayan tür ve cins isimleri küçük harfle başlar: 'Antep fıstığı', 'Van kedisi', 'Maraş dondurması', 'Hindistan cevizi', 'İngiliz anahtarı'. 'Fıstığı' kelimesinin baş harfi küçük yazılmalıdır.",
    lawRef: "TDK Yazım Kılavuzu — Büyük Harflerin Kullanımı"
  },
  {
    id: 14,
    period: "2023 KPSS Lisans",
    topic: "Türkçe",
    subTopic: "Cümlede Anlam ve Anlatım",
    question: "'Bir eserin kalıcılığı, yazarının çağını aşarak geleceğin insanına seslenebilmesinde ve insanlığın evrensel duygularına dokunmasında yatar.' Bu cümleden çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir?",
    options: [
      "A) Yalnızca kendi toplumunu anlatan yazarlar başarılı olur.",
      "B) Evrenselliği ve zamana meydan okumayı yakalayan eserler ölümsüzleşir.",
      "C) Sanatçı eserinde sade bir dil kullanmalıdır.",
      "D) Edebiyat toplumun aynası olmak zorundadır.",
      "E) Her yazar kendi döneminin sorunlarını yansıtmalıdır."
    ],
    answer: 1,
    explanation: "'Kalıcılık' (ölümsüzlük), 'çağını aşmak' (zamana meydan okumak) ve 'evrensel duygular' (bütün insanlığı ilgilendiren değerler) ifadeleri en doğrudan B seçeneğinde sentezlenmiştir.",
    lawRef: "ÖSYM KPSS Türkçe — Paragrafta Ana Fikir ve Yorum"
  },

  // MATEMATİK & MANTIK
  {
    id: 15,
    period: "2024 KPSS Lisans",
    topic: "Matematik",
    subTopic: "Sayı ve Kesir Problemleri",
    question: "Bir sınıftaki öğrenciler sıralara 2'şerli oturduklarında 5 öğrenci ayakta kalıyor. 3'erli oturduklarında ise 2 sıra boş kalıyor. Buna göre bu sınıfta toplam kaç öğrenci vardır?",
    options: [
      "A) 21",
      "B) 25",
      "C) 27",
      "D) 31",
      "E) 35"
    ],
    answer: 2,
    explanation: "Sıra sayısına 'x' diyelim. Öğrenci sayısı denklemi:\n2x + 5 = 3(x - 2)\n2x + 5 = 3x - 6\n5 + 6 = 3x - 2x\nx = 11 (Sıra sayısı 11'dir).\nÖğrenci sayısı = 2(11) + 5 = 22 + 5 = 27 öğrenci.",
    lawRef: "KPSS Matematik — Denklem Kurma ve Sıra Problemleri"
  },

  // GÜNCEL BİLGİLER & GENEL KÜLTÜR
  {
    id: 16,
    period: "2024 KPSS Lisans",
    topic: "Güncel Bilgiler",
    subTopic: "Uluslararası Kuruluşlar ve Kültür",
    question: "Birleşmiş Milletler Eğitim, Bilim ve Kültür Örgütü (UNESCO) Dünya Mirası Listesi'nde yer alan ve 'Tarihin Sıfır Noktası' olarak kabul edilen Neolitik Çağ arkeolojik alanı aşağıdakilerden hangisidir?",
    options: [
      "A) Çatalhöyük (Konya)",
      "B) Göbeklitepe (Şanlıurfa)",
      "C) Hattuşaş (Çorum)",
      "D) Efes (İzmir)",
      "E) Ani Ören Yeri (Kars)"
    ],
    answer: 1,
    explanation: "Şanlıurfa il sınırları içinde bulunan ve yaklaşık 12.000 yıl öncesine tarihlenen Göbeklitepe, dünyanın bilinen en eski anıtsal tapınak kompleksi olup UNESCO Dünya Mirası Listesi'nde 'Tarihin Sıfır Noktası' olarak anılmaktadır.",
    lawRef: "ÖSYM KPSS Güncel Bilgiler & Kültür Mirası"
  }
];
