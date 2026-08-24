/**
 * KPSS Akademisi — ÖSYM Standartlarında Gerçek Öncüllü Soru Havuzu
 * Tarih, Coğrafya, Vatandaşlık, Türkçe, Matematik & Güncel Bilgiler
 */

const KPSS_QUESTION_BANK = [
  // TARİH — ÖNCÜLLÜ SORULAR
  {
    id: 1,
    period: "2024 KPSS Lisans",
    topic: "Tarih",
    subTopic: "İlk Türk Devletleri Teşkilatı",
    type: "oncullu",
    question: `İslamiyet öncesi Türk devletlerinde görülen;\n\nI. Ülke topraklarının hanedanın ortak malı sayılması,\nII. Hükümdara yönetme yetkisinin Gök Tanrı tarafından verildiğine (Kut) inanılması,\nIII. Devleti yöneten kağanın 'Töre' kurallarına uyma zorunluluğunun bulunması\n\ndurumlarından hangileri taht kavgalarının çıkmasında ve devletlerin kısa sürede parçalanmasında **doğrudan etkili** olmuştur?`,
    options: [
      "A) Yalnız I",
      "B) Yalnız II",
      "C) I ve II",
      "D) I ve III",
      "E) I, II ve III"
    ],
    answer: 2,
    explanation: `💡 **ÖSYM Çözüm Analizi:**\n• **I. Öncül (Doğru):** Ülke hanedanın ortak malı sayıldığı için her erkek hanedan üyesi tahtta hak iddia etmiş ve bu durum doğrudan taht kavgalarına yol açmıştır.\n• **II. Öncül (Doğru):** Kut anlayışının kan bağıyla tüm erkek çocuklara geçtiğine inanılması, kimin tahta geçeceğinin kesin olmamasına (veraset belirsizliği) neden olmuştur.\n• **III. Öncül (Yanlış):** Töre kurallarına uyulması hükümdarın keyfi yönetimini sınırlandıran, adaleti sağlayan bir unsurdur; parçalanmaya yol açmaz.`,
    lawRef: "ÖSYM KPSS Tarih — Türk Devlet Teşkilatı ve Veraset Sistemi"
  },
  {
    id: 2,
    period: "2024 KPSS Lisans",
    topic: "Tarih",
    subTopic: "Kurtuluş Savaşı Kongreler Dönemi",
    type: "oncullu",
    question: `Mustafa Kemal Paşa'nın liderliğinde toplanan Erzurum Kongresi'nde alınan;\n\nI. 'Milli sınırlar içinde vatan bir bütündür, bölünemez.'\nII. 'Kuva-yı Millîye'yi amil, irade-i millîyeyi hakim kılmak esastır.'\nIII. 'Manda ve himaye kabul edilemez.'\n\nkararlarından hangileri **milli egemenliğe (halk iradesine)** dayalı yeni bir devlet düzeninin kurulacağının açık bir göstergesidir?`,
    options: [
      "A) Yalnız I",
      "B) Yalnız II",
      "C) Yalnız III",
      "D) I ve II",
      "E) II ve III"
    ],
    answer: 1,
    explanation: `💡 **ÖSYM Çözüm Analizi:**\n• **II. Öncül (Milli Egemenlik):** 'İrade-i milliyeyi hakim kılmak' ifadesi, padişah/saray iradesi yerine milletin egemenliğinin geçerli olacağını ilan eder. Bu doğrudan rejim ve milli egemenlikle ilgilidir.\n• **I ve III. Öncüller (Milli Bağımsızlık):** Vatanın bölünmezliği ve manda-himayenin reddi 'milli bağımsızlık' (dış güçlere karşı bağımsız olma) ile ilgilidir, milli egemenlik (iç yönetim şekli) ile değil.`,
    lawRef: "ÖSYM KPSS Tarih — Erzurum Kongresi / Milli Egemenlik vs Bağımsızlık Ayrımı"
  },
  {
    id: 3,
    period: "2023 KPSS Lisans",
    topic: "Tarih",
    subTopic: "Osmanlı Devleti Kültür ve Medeniyeti",
    type: "oncullu",
    question: `Osmanlı Devleti'nde Divan-ı Hümayun'da görev yapan;\n\nI. Kazasker,\nII. Şeyhülislam,\nIII. Sadrazam\n\nyetkililerinden hangileri **İlmiye sınıfı** mensubu olup din, hukuk ve eğitim işlerinden sorumludur?`,
    options: [
      "A) Yalnız I",
      "B) Yalnız II",
      "C) I ve II",
      "D) I ve III",
      "E) I, II ve III"
    ],
    answer: 2,
    explanation: `💡 **ÖSYM Çözüm Analizi:**\n• **Kazasker ve Şeyhülislam:** Medrese çıkışlı olup Türk-Müslüman kökenli 'İlmiye' sınıfına mensuptur. Kazasker kadı ve müderris atamalarını yapar, davalara bakar; Şeyhülislam ise fetva makamıdır.\n• **Sadrazam:** Yönetim ve askeriye ile ilgili 'Seyfiye (Kılıç Ehli)' sınıfının başıdır.`,
    lawRef: "ÖSYM KPSS Tarih — Osmanlı Divan Teşkilatı ve Sınıflar"
  },
  {
    id: 4,
    period: "2023 KPSS Lisans",
    topic: "Tarih",
    subTopic: "Atatürk İlkeleri ve İnkılap Tarihi",
    type: "oncullu",
    question: `Cumhuriyet Dönemi'nde gerçekleştirilen;\n\nI. Aşar vergisinin kaldırılması (1925),\nII. Tevhid-i Tedrisat Kanunu ile eğitimin birleştirilmesi (1924),\nIII. Soyadı Kanunu ile unvan ve lakapların yasaklanması (1934)\n\ninkılaplarından hangileri doğrudan **Halkçılık ilkesi** doğrultusunda toplumda eşitlik sağlama amacı taşır?`,
    options: [
      "A) Yalnız I",
      "B) Yalnız III",
      "C) I ve II",
      "D) I ve III",
      "E) I, II ve III"
    ],
    answer: 4,
    explanation: `💡 **ÖSYM Çözüm Analizi:**\n• **Aşar Vergisinin Kaldırılması:** Köylü üzerindeki ağır vergi yükünü kaldırarak ekonomik eşitlik sağlamıştır.\n• **Tevhid-i Tedrisat:** Kız-erkek ve zengin-fakir ayrımı olmadan herkese eşit eğitim hakkı tanımıştır.\n• **Soyadı Kanunu:** Paşa, ağa, bey gibi ayrıcalıklı unvanları kaldırarak kanun önünde eşitlik sağlamıştır. Her üç inkılap da doğrudan Halkçılık ilkesidir.`,
    lawRef: "ÖSYM KPSS Tarih — Atatürk İlkeleri ve Eşitlik İlkesi"
  },

  // COĞRAFYA — ÖNCÜLLÜ SORULAR
  {
    id: 5,
    period: "2024 KPSS Lisans",
    topic: "Coğrafya",
    subTopic: "Türkiye'nin Jeomorfolojisi ve Platoları",
    type: "oncullu",
    question: `Türkiye'nin platoları ve oluşum türleri ile ilgili olarak;\n\nI. Teke ve Taşeli Platoları ➔ Karstik Plato,\nII. Erzurum - Kars Platosu ➔ Lav (Volkanik) Platosu,\nIII. Çatalca - Kocaeli Platosu ➔ Aşınım (Peneplen) Platosu\n\neşleştirmelerinden hangileri **doğrudur**?`,
    options: [
      "A) Yalnız I",
      "B) I ve II",
      "C) I ve III",
      "D) II ve III",
      "E) I, II ve III"
    ],
    answer: 4,
    explanation: `💡 **ÖSYM Çözüm Analizi:**\n• **I. Karstik:** Teke ve Taşeli kireçtaşı (kalker) erimesiyle oluşan karstik platolardır.\n• **II. Lav:** Erzurum-Kars ve Ardahan volkanik lav örtülerinden oluşan yüksek lav platolarıdır.\n• **III. Aşınım:** Çatalca-Kocaeli aşınarak deniz seviyesine yaklaşmış peneplen (aşınım) platosudur. Verilen üç eşleştirme de %100 doğrudur.`,
    lawRef: "ÖSYM KPSS Coğrafya — Türkiye'nin Yer Şekilleri ve Platolar"
  },
  {
    id: 6,
    period: "2024 KPSS Lisans",
    topic: "Coğrafya",
    subTopic: "Türkiye'nin Madenleri ve Sanayisi",
    type: "oncullu",
    question: `Türkiye'de bir sanayi tesisinin kuruluş yeri belirlenirken 'hammaddeye yakınlık' veya 'enerji kaynağına yakınlık' faktörleri belirleyici olmaktadır.\n\nBuna göre;\nI. Karabük Demir-Çelik Fabrikası ➔ Enerji kaynağına (Taş kömürü) yakınlık,\nII. Seydişehir Alüminyum Tesisleri ➔ Hammaddeye (Boksit) yakınlık,\nIII. Samsun Bakır İşletmesi ➔ Ulaşım (Liman) kolaylığı\n\ngerekçelendirmelerinden hangileri **doğrudur**?`,
    options: [
      "A) Yalnız I",
      "B) I ve II",
      "C) I ve III",
      "D) II ve III",
      "E) I, II ve III"
    ],
    answer: 4,
    explanation: `💡 **ÖSYM Çözüm Analizi:**\n• **Karabük:** Demir madeni çıkmaz; ancak Zonguldak taş kömürüne (enerji kaynağı) yakın olduğu için kurulmuştur.\n• **Seydişehir:** Konya Seydişehir'de zengin Boksit madeni çıktığı için hammaddeye yakın kurulmuştur.\n• **Samsun:** Bakır madeni çıkmaz; deniz yoluyla Artvin ve Kastamonu'dan gelen cevherin işlenip ihraç edilmesi için liman/ulaşım avantajıyla kurulmuştur.`,
    lawRef: "ÖSYM KPSS Coğrafya — Türkiye'de Sanayi Tesislerinin Kuruluş Yeri Faktörleri"
  },

  // VATANDAŞLIK / ANAYASA — ÖNCÜLLÜ SORULAR
  {
    id: 7,
    period: "2024 KPSS Lisans",
    topic: "Vatandaşlık",
    subTopic: "1982 Anayasası — Yasama Denetimi",
    type: "oncullu",
    question: `1982 Anayasası'nda 2017 yılında yapılan anayasa değişiklikleri sonrasında TBMM'nin bilgi edinme ve denetim yolları arasında;\n\nI. Meclis Araştırması,\nII. Genel Görüşme,\nIII. Yazılı Soru,\nIV. Gensoru\n\naraçlarından hangileri **halen yer almaktadır**?`,
    options: [
      "A) I ve II",
      "B) I, II ve III",
      "C) I, III ve IV",
      "D) II, III ve IV",
      "E) I, II, III ve IV"
    ],
    answer: 1,
    explanation: `💡 **ÖSYM Çözüm Analizi:**\n• **2017 Anayasa Değişikliği Kritik Bilgisi:** Parlamenter sistemden Cumhurbaşkanlığı Hükümet Sistemine geçilmesiyle hükümetin meclise karşı siyasi sorumluluğu olan **GENSORU** ve **GÖREV ZARARI (Sözlü Soru)** anayasadan tamamen kaldırılmıştır!\n• **Halen Geçerli Olanlar:** Meclis Araştırması, Genel Görüşme, Meclis Soruşturması ve Yazılı Soru (Milletvekillerinin CB Yardımcıları ve Bakanlara yönelttiği 15 günlük yazılı soru).`,
    lawRef: "1982 T.C. Anayasası — Madde 98 (TBMM'nin Bilgi Edinme ve Denetim Yolları)"
  },
  {
    id: 8,
    period: "2023 KPSS Lisans",
    topic: "Vatandaşlık",
    subTopic: "1982 Anayasası — Yargı Organı",
    type: "oncullu",
    question: `1982 Anayasası'na göre Anayasa Mahkemesi'nin görev ve yetkileriyle ilgili olarak;\n\nI. Kanunların, Cumhurbaşkanlığı kararnamelerinin ve TBMM İçtüzüğünün anayasaya uygunluğunu denetlemek,\nII. Siyasi partilerin kapatılması davalarına bakmak,\nIII. Bireysel başvuruları karara bağlamak,\nIV. Sayıştay'ın vergi konusundaki kararlarına karşı yapılan temyiz başvurularını incelemek\n\nhükümlerinden hangileri **doğrudur**?`,
    options: [
      "A) I ve II",
      "B) I, II ve III",
      "C) I, III ve IV",
      "D) II, III ve IV",
      "E) I, II, III ve IV"
    ],
    answer: 1,
    explanation: `💡 **ÖSYM Çözüm Analizi:**\n• **I, II ve III:** Anayasa Mahkemesi'nin asli görevleridir.\n• **IV. Öncül (Tuzak):** Sayıştay ile Danıştay'ın vergi konularındaki kararları uyuşmazsa **DANIŞTAY'IN** kararı esas alınır (AYM değil!). Sayıştay kararlarının temyizi Anayasa Mahkemesi'ne gitmez.`,
    lawRef: "1982 T.C. Anayasası — Madde 148 (Anayasa Mahkemesi'nin Görev ve Yetkileri)"
  },

  // TÜRKÇE — ÖNCÜLLÜ SORULAR
  {
    id: 9,
    period: "2024 KPSS Lisans",
    topic: "Türkçe",
    subTopic: "Cümle Analizi ve Dilbilgisi",
    type: "oncullu",
    question: `(I) Bozkırın ortasında yükselen bu antik kent, geçmişin izlerini bugüne taşıyor. (II) Taş döşeli caddelerde yürürken rüzgârın fısıltısını duyabiliyorsunuz. (III) Kazı alanındaki her buluntu, arkeologların heyecanını bir kat daha artırıyor. (IV) Güneş batarken sütunların gölgeleri vadiye doğru uzanıyor.\n\nNumaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?`,
    options: [
      "A) I. cümlenin yüklemi birleşik fiildir.",
      "B) II. cümlede zarf-fiil (ulaç) kullanılmıştır.",
      "C) III. cümlede tamlayanı sıfat almış isim tamlaması vardır.",
      "D) IV. cümlede yönelme durumu eki almış sözcük bulunmaktadır.",
      "E) I. cümle kurallı ve fiil cümlesidir."
    ],
    answer: 0,
    explanation: `💡 **ÖSYM Çözüm Analizi:**\n• **A Seçeneği (Yanlış):** I. cümlenin yüklemi 'taşıyor' sözcüğüdür. 'Taşımak' fiili şimdiki zaman kipi (-yor) almış basit yapılı bir fiildir, birleşik fiil değildir.\n• **B Seçeneği:** 'yürürken' sözcüğü -ken ekiyle türetilmiş bir zarf-fiildir.\n• **C Seçeneği:** 'arkeologların heyecanı' (isim tamlaması), 'her buluntu' (sıfat tamlaması).\n• **D Seçeneği:** 'vadi-ye' yönelme (-e/-a) durum ekidir.`,
    lawRef: "ÖSYM KPSS Türkçe — Dilbilgisi ve Cümle Çözümlemesi"
  },

  // MATEMATİK & SAYISAL MANTIK
  {
    id: 10,
    period: "2024 KPSS Lisans",
    topic: "Matematik",
    subTopic: "Sayısal Mantık & Eşitsizlik",
    type: "oncullu",
    question: `a, b ve c gerçel sayıları için;\n• a · b < 0\n• b + c = 0\n• a · c² > 0\n\nbilgileri veriliyor. Buna göre;\nI. a > 0\nII. b < 0\nIII. c > 0\n\nifadelerinden hangileri **kesinlikle doğrudur**?`,
    options: [
      "A) Yalnız I",
      "B) Yalnız II",
      "C) I ve II",
      "D) I ve III",
      "E) I, II ve III"
    ],
    answer: 4,
    explanation: `💡 **ÖSYM Çözüm Analizi:**\n1. 'c²' çift kuvvet olduğu için c ≠ 0 iken daima pozitiftir. a · c² > 0 olduğundan **a > 0 (Pozitif)** olmak zorundadır (I. öncül kesinlikle doğru).\n2. a · b < 0 ve a pozitif olduğuna göre **b < 0 (Negatif)** olmak zorundadır (II. öncül kesinlikle doğru).\n3. b + c = 0 eşitliğinden c = -b olur. b negatif olduğuna göre **c > 0 (Pozitif)** olmak zorundadır (III. öncül kesinlikle doğru).\nSonuç: I, II ve III kesinlikle doğrudur.`,
    lawRef: "ÖSYM KPSS Matematik — Eşitsizlikler ve İşaret Analizi"
  }
];
