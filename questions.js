/**
 * KPSS Akademisi — Genişletilmiş GY-GK Soru Külliyatı & Kilit Noktalar Arşivi
 * ÖSYM Lisans, Önlisans & Ortaöğretim Müfredatı (Tarih, Coğrafya, Vatandaşlık, Türkçe, Matematik, Güncel)
 */

const KPSS_QUESTION_BANK = [
  // ================= TARİH SORULARI =================
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
    keyPoint: "📌 KİLİT BİLGİ: Kut inancı ve hanedan ortak mülkiyeti 'Veraset Belirsizliği' yaratır ve taht kavgalarına neden olur. Töre ise hükümdarın yetkilerini sınırlandırarak adaleti sağlar.",
    trapWarning: "⚠️ ÖSYM TUZAĞI: Töre yıkılışa değil, devlet düzeninin korunmasına hizmet eder.",
    explanation: `I. ve II. öncüller doğrudan veraset krizine ve parçalanmaya yol açmıştır. Töre kuralları ise kanun üstünlüğünü simgeler.`,
    lawRef: "ÖSYM KPSS Tarih — Türk Devlet Teşkilatı"
  },
  {
    id: 2,
    period: "2024 KPSS Lisans",
    topic: "Tarih",
    subTopic: "Kurtuluş Savaşı Kongreler Dönemi",
    type: "oncullu",
    question: `Mustafa Kemal Paşa'nın liderliğinde toplanan Erzurum Kongresi'nde alınan;\n\nI. 'Milli sınırlar içinde vatan bir bütündür, bölünemez.'\nII. 'Kuva-yı Millîye'yi amil, irade-i millîyeyi hakim kılmak esastır.'\nIII. 'Manda ve himaye kabul edilemez.'\n\nkararlarından hangileri **milli egemenliğe (halk iradesine)** dayalı yeni bir devlet düzeninin kurulacağının açık göstergesidir?`,
    options: [
      "A) Yalnız I",
      "B) Yalnız II",
      "C) Yalnız III",
      "D) I ve II",
      "E) II ve III"
    ],
    answer: 1,
    keyPoint: "📌 KİLİT BİLGİ: 'İrade-i Milliye' = Halkın Egemenliği (Cumhuriyet). 'Vatanın Bölünmezliği' ve 'Manda-Himayenin Reddi' ise Milli Bağımsızlık (Dışa karşı bağımsızlık) ile ilgilidir.",
    trapWarning: "⚠️ ÖSYM TUZAĞI: Milli Bağımsızlık ile Milli Egemenlik kavramlarını birbirine karıştırmayın!",
    explanation: `Yalnızca II. öncül yönetim şeklinin halk iradesine dayanacağını belirterek rejim değişikliğinin sinyalini vermiştir.`,
    lawRef: "ÖSYM KPSS Tarih — Kongreler Dönemi / Kavram Ayrımı"
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
    keyPoint: "📌 KİLİT BİLGİ: İlmiye sınıfı Türk-Müslüman kökenli ve medrese mezunu olmak zorundadır (Kazasker, Şeyhülislam, Kadı, Müderris). Sadrazam ise devşirme kökenli de olabilen Seyfiye (Kılıç) sınıfıdır.",
    trapWarning: "⚠️ ÖSYM TUZAĞI: Kazasker askeri değil, adliye ve eğitim işlerine bakan yüksek yargıçtır.",
    explanation: `Kazasker ve Şeyhülislam İlmiye sınıfındandır. Sadrazam ise Seyfiye (yönetim-askeriye) sınıfının başıdır.`,
    lawRef: "ÖSYM KPSS Tarih — Divan Teşkilatı"
  },
  {
    id: 4,
    period: "2023 KPSS Lisans",
    topic: "Tarih",
    subTopic: "Kurtuluş Savaşı Muharebeler Dönemi",
    type: "klasik",
    question: `Kurtuluş Savaşı'nda TBMM Hükümeti'nin kazandığı I. İnönü Zaferi sonrasında İtilaf Devletleri Sevr Antlaşması'nı yumuşatarak kabul ettirmek amacıyla TBMM'yi ilk kez resmi olarak aşağıdaki konferanslardan hangisine davet etmiştir?`,
    options: [
      "A) Londra Konferansı (1921)",
      "B) Lozan Barış Konferansı (1922)",
      "C) Paris Barış Konferansı (1919)",
      "D) San Remo Konferansı (1920)",
      "E) Mudanya Konferansı (1922)"
    ],
    answer: 0,
    keyPoint: "📌 KİLİT BİLGİ: I. İnönü Zaferi'nin dış politikadaki en büyük sonucu TBMM'nin İtilaf Devletlerince resmen tanındığı LONDRA KONFERANSI'dır (Bekir Sami Bey katılmıştır).",
    trapWarning: "⚠️ ÖSYM TUZAĞI: İtilaf Devletleri ikilik çıkarmak için İstanbul Hükümeti'ni de davet etmiş, ancak Tevfik Paşa 'Söz milletin asıl temsilcisi olan TBMM heyetinedir' demiştir.",
    explanation: `I. İnönü Zaferi sonrası toplanan Londra Konferansı ile TBMM uluslararası alanda hukuken tanınmıştır.`,
    lawRef: "ÖSYM KPSS Tarih — I. İnönü Muharebesi ve Diplomatik Sonuçları"
  },
  {
    id: 5,
    period: "2022 KPSS Lisans",
    topic: "Tarih",
    subTopic: "Atatürk İlkeleri ve İnkılap Tarihi",
    type: "oncullu",
    question: `Cumhuriyet Dönemi'nde gerçekleştirilen;\n\nI. Aşar vergisinin kaldırılması (1925),\nII. Tevhid-i Tedrisat Kanunu ile eğitimin birleştirilmesi (1924),\nIII. Soyadı Kanunu ile unvan ve lakapların yasaklanması (1934)\n\ninkılaplarından hangileri doğrudan **Halkçılık ilkesi** doğrultusunda toplumda ayrıcalıkları kaldırıp eşitlik sağlama amacına yöneliktir?`,
    options: [
      "A) Yalnız I",
      "B) Yalnız III",
      "C) I ve II",
      "D) I ve III",
      "E) I, II ve III"
    ],
    answer: 4,
    keyPoint: "📌 KİLİT BİLGİ: Halkçılık = Eşitlik, ayrıcalıksız toplum, sosyal adalet ve halkın refahıdır. Aşar köylüyü rahatlatmış, Tevhid-i Tedrisat eğitimde fırsat eşitliği vermiş, Soyadı Kanunu zümre ayrıcalıklarını silmiştir.",
    trapWarning: "⚠️ ÖSYM TUZAĞI: Bu üç inkılap da Halkçılık ilkesinin en klasik ve temel sınav sorularıdır.",
    explanation: `Her üç inkılap da doğrudan kanun önünde eşitliği ve sosyal adaleti sağladığından Halkçılık ilkesidir.`,
    lawRef: "ÖSYM KPSS Tarih — Atatürk İlkeleri"
  },

  // ================= COĞRAFYA SORULARI =================
  {
    id: 6,
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
    keyPoint: "📌 KİLİT BİLGİ: Teke-Taşeli = Karstik (Kireçtaşı/Kalker), Erzurum-Kars = Lav Örtüsü, Çatalca-Kocaeli = Aşınım Peneplen, Obruk-Cihanbeyli-Haymana = Yatay Duruşlu (Tabaka Düzlüğü).",
    trapWarning: "⚠️ ÖSYM TUZAĞI: Erzurum-Kars platosunda yaz yağışları nedeniyle çayır ve büyükbaş mera hayvancılığı yaygındır.",
    explanation: `Verilen üç eşleştirme de Türkiye jeomorfolojisine göre %100 doğrudur.`,
    lawRef: "ÖSYM KPSS Coğrafya — Türkiye Platoları"
  },
  {
    id: 7,
    period: "2024 KPSS Lisans",
    topic: "Coğrafya",
    subTopic: "Madenler ve Enerji Kaynakları",
    type: "klasik",
    question: `Dünya rezervlerinin yaklaşık %72'si Türkiye'de bulunan; Balıkesir (Bigadiç, Susurluk), Bursa (Mustafakemalpaşa), Kütahya (Emet) ve Eskişehir (Seyitgazi)'de çıkarılan stratejik maden aşağıdakilerden hangisidir?`,
    options: [
      "A) Boksit (Alüminyum)",
      "B) Bor Mineralleri",
      "C) Bakır",
      "D) Krom",
      "E) Barit"
    ],
    answer: 1,
    keyPoint: "📌 KİLİT BİLGİ: Bor madeninin şifresi 'B-İ-B-E-K'tir (Balıkesir, Bursa, Eskişehir, Kütahya). İşleme tesisi Bandırma'dadır (Liman ve Ulaşım avantajı).",
    trapWarning: "⚠️ ÖSYM TUZAĞI: Bor madeni roket/jet yakıtı, cam ve deterjan sanayisinde kullanılır.",
    explanation: `Dünya rezerv lideri olduğumuz maden Bor'dur.`,
    lawRef: "ÖSYM KPSS Coğrafya — Madenler"
  },
  {
    id: 8,
    period: "2023 KPSS Lisans",
    topic: "Coğrafya",
    subTopic: "Türkiye'de Sanayi Tesislerinin Kuruluşu",
    type: "oncullu",
    question: `Türkiye'de bir sanayi tesisinin kuruluş yeri belirlenirken hammadde, enerji kaynağı veya ulaşım kolaylığı belirleyici olmaktadır.\n\nBuna göre;\nI. Karabük Demir-Çelik Fabrikası ➔ Enerji kaynağına (Taş kömürü) yakınlık,\nII. Seydişehir Alüminyum Tesisleri ➔ Hammaddeye (Boksit) yakınlık,\nIII. Samsun Bakır İşletmesi ➔ Ulaşım (Liman) kolaylığı\n\ngerekçelendirmelerinden hangileri **doğrudur**?`,
    options: [
      "A) Yalnız I",
      "B) I ve II",
      "C) I ve III",
      "D) II ve III",
      "E) I, II ve III"
    ],
    answer: 4,
    keyPoint: "📌 KİLİT BİLGİ: Karabük'te demir çıkmaz (Taş kömürü enerjisi vardır). Samsun'da bakır çıkmaz (Liman vardır). Seydişehir'de ise doğrudan Boksit madeni çıkarılır.",
    trapWarning: "⚠️ ÖSYM TUZAĞI: İskenderun Demir-Çelik Fabrikası da hammaddeye değil, LİMAN/ULAŞIM avantajına dayalı kurulmuştur.",
    explanation: `Tüm eşleştirmeler ve kuruluş gerekçeleri doğrudur.`,
    lawRef: "ÖSYM KPSS Coğrafya — Sanayinin Kuruluş Koşulları"
  },

  // ================= VATANDAŞLIK / ANAYASA SORULARI =================
  {
    id: 9,
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
    keyPoint: "📌 KİLİT BİLGİ: 2017 Anayasa değişikliği ile Bakanlar Kurulu ve Başbakanlık kalktığı için GENSORU ve SÖZLÜ SORU anayasadan tamamen kaldırılmıştır. Halen geçerli olanlar: Meclis Araştırması, Genel Görüşme, Meclis Soruşturması ve Yazılı Soru.",
    trapWarning: "⚠️ ÖSYM TUZAĞI: Yazılı soru milletvekilleri tarafından Cumhurbaşkanı Yardımcıları ve Bakanlara sorulur (Cumhurbaşkanına soru sorulamaz!).",
    explanation: `Gensoru 2017'de kalkmıştır. I, II ve III halen anayasada yer alan meclis denetim yollarıdır.`,
    lawRef: "1982 T.C. Anayasası — Madde 98"
  },
  {
    id: 10,
    period: "2024 KPSS Lisans",
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
    keyPoint: "📌 KİLİT BİLGİ: Sayıştay ile Danıştay'ın vergi uyuşmazlığında DANIŞTAY kararı geçerlidir. Sayıştay kararları Anayasa Mahkemesi'ne temyize gitmez.",
    trapWarning: "⚠️ ÖSYM TUZAĞI: İnkılap kanunlarının anayasaya aykırılığı iddia edilemez.",
    explanation: `I, II ve III AYM'nin görevleridir. IV. öncül yanlıştır.`,
    lawRef: "1982 T.C. Anayasası — Madde 148"
  },
  {
    id: 11,
    period: "2023 KPSS Lisans",
    topic: "Vatandaşlık",
    subTopic: "İdare Hukuku & Taşra Teşkilatı",
    type: "klasik",
    question: `Aşağıdakilerden hangisi Türkiye'de Başkentin (Merkezin) taşradaki en yüksek mülki idare amiridir, ilde doğrudan Cumhurbaşkanı'nın temsilcisi sıfatıyla görev yapar ve yetki genişliğine sahiptir?`,
    options: [
      "A) Kaymakam",
      "B) Vali",
      "C) Büyükşehir Belediye Başkanı",
      "D) İl Genel Meclisi Başkanı",
      "E) Defterdar"
    ],
    answer: 1,
    keyPoint: "📌 KİLİT BİLGİ: Vali = Devletin ve Cumhurbaşkanı'nın temsilcisidir; yetki genişliği (merkeze sormadan acil karar alma) vardır. Kaymakam = Yalnızca Cumhurbaşkanı'nın temsilcisidir; yetki genişliği YOKTUR.",
    trapWarning: "⚠️ ÖSYM TUZAĞI: Kaymakam devletin değil, yalnızca hükümetin/Cumhurbaşkanı'nın temsilcisidir.",
    explanation: `Vali, ilde yetki genişliğine sahip en yüksek mülki amirdir.`,
    lawRef: "5442 Sayılı İl İdaresi Kanunu"
  },

  // ================= TÜRKÇE SORULARI =================
  {
    id: 12,
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
    keyPoint: "📌 KİLİT BİLGİ: 'Taşımak' fiili şimdiki zaman kipi (-yor) almış basit yapılı bir fiildir. Birleşik fiil olabilmesi için (kurallı birleşik, yardımcı eylemle kurulan veya anlamca kaynaşmış) iki fiilin/sözcüğün birleşmesi gerekir.",
    trapWarning: "⚠️ ÖSYM TUZAĞI: 'Yürürken' (-ken) eki zarf fiildir.",
    explanation: `I. cümlenin yüklemi birleşik fiil değil, basit yapılı çekimli fiildir.`,
    lawRef: "ÖSYM KPSS Türkçe — Dilbilgisi"
  },
  {
    id: 13,
    period: "2023 KPSS Lisans",
    topic: "Türkçe",
    subTopic: "Yazım Kuralları (TDK)",
    type: "klasik",
    question: `Aşağıdaki cümlelerin hangisinde büyük harflerin veya birleşik sözcüklerin yazımıyla ilgili bir yazım yanlışı vardır?`,
    options: [
      "A) Türk Dil Kurumu Başkanlığına dilekçe ile başvurdu.",
      "B) Türkiye'nin kuzeydoğusunda şiddetli yağış bekleniyor.",
      "C) TBMM'nin 29 Ekim 1923 tarihindeki oturumu tarihi bir andı.",
      "D) Resmi Gazete'de yayımlanan yönetmelik yürürlüğe girdi.",
      "E) Bu yılki Antep Fıstığı rekoltesi üreticiyi sevindirdi."
    ],
    answer: 4,
    keyPoint: "📌 KİLİT BİLGİ: Özel ada dahil olmayan tür, cins ve ürün adları küçük harfle yazılır: Antep fıstığı, Van kedisi, Maraş dondurması, Hindistan cevizi, İngiliz anahtarı.",
    trapWarning: "⚠️ ÖSYM TUZAĞI: 'Resmi Gazete' istisnadır ve 'Gazete' kelimesi büyük harfle yazılır.",
    explanation: `'Antep fıstığı' ifadesinde fıstık kelimesi küçük harfle başlamalıdır.`,
    lawRef: "TDK Yazım Kılavuzu"
  },

  // ================= MATEMATİK & SAYISAL MANTIK =================
  {
    id: 14,
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
    keyPoint: "📌 KİLİT BİLGİ: Çift kuvvetli terimler (c²) daima pozitiftir (+). Bu nedenle a · (+) > 0 ise a > 0 olmak zorundadır. a pozitif ise a · b < 0'dan b < 0, b + c = 0'dan c > 0 olur.",
    trapWarning: "⚠️ ÖSYM TUZAĞI: Eşitsizlik sorularında önce çift üslü sayıdan başlayıp işaretini garantileyin!",
    explanation: `Adım adım çözümle a (+), b (-), c (+) bulunur. I, II ve III kesinlikle doğrudur.`,
    lawRef: "ÖSYM KPSS Matematik — Eşitsizlikler"
  },

  // ================= GÜNCEL BİLGİLER =================
  {
    id: 15,
    period: "2024 KPSS Lisans",
    topic: "Güncel Bilgiler",
    subTopic: "Kültür Mirası ve Arkeoloji",
    type: "klasik",
    question: `UNESCO Dünya Mirası Listesi'nde yer alan ve 'Tarihin Sıfır Noktası' olarak kabul edilen dünyanın en eski anıtsal tapınak yerleşimi aşağıdakilerden hangisidir?`,
    options: [
      "A) Çatalhöyük (Konya)",
      "B) Göbeklitepe (Şanlıurfa)",
      "C) Hattuşaş (Çorum)",
      "D) Efes (İzmir)",
      "E) Ani Ören Yeri (Kars)"
    ],
    answer: 1,
    keyPoint: "📌 KİLİT BİLGİ: Şanlıurfa Göbeklitepe yaklaşık M.Ö. 10.000 (12.000 yıl önce) inşa edilmiş olup yerleşik hayattan önce de tapınak yapıldığını kanıtlayan 'Tarihin Sıfır Noktası'dır.",
    trapWarning: "⚠️ ÖSYM TUZAĞI: Çatalhöyük ilk şehir yerleşmesidir; Göbeklitepe ise ilk tapınak/inanç merkezidir.",
    explanation: `Göbeklitepe, UNESCO Dünya Mirası Listesi'nde yer alan en eski tapınak kompleksidir.`,
    lawRef: "ÖSYM KPSS Güncel Bilgiler"
  }
];
