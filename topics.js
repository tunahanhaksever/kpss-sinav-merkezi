/**
 * KPSS Genel Yetenek & Genel Kültür Kapsamlı Müfredat Ders Kitapçığı
 * ÖSYM ve MEB Standartlarında Tarih, Coğrafya, Vatandaşlık, Türkçe, Matematik ve Güncel Bilgiler
 */

const KPSS_TOPICS = [
  // 1. TARİH
  {
    id: "tarih",
    title: "1. KPSS Tarih (İslamiyet Öncesi, Osmanlı, İnkılap Tarihi & Çağdaş)",
    icon: "📜",
    summary: "27 Soruluk KPSS Tarih özetleri: Türk-İslam, Osmanlı Kültür Medeniyet, Siyasi Tarih, Kurtuluş Savaşı ve Atatürk İlkeleri.",
    content: `
      <h3>📌 1. İslamiyet Öncesi Türk Tarihi</h3>
      <ul>
        <li><strong>Kut Anlayışı:</strong> Yönetme yetkisinin Gök Tanrı tarafından hanedanın erkek üyelerine verildiğine inanılmasıdır. Ülkenin hanedanın ortak malı sayılması sık taht kavgalarına ve devletlerin kısa ömürlü olmasına yol açmıştır.</li>
        <li><strong>İkili Teşkilat:</strong> Doğu (Kutsal merkez - Kağan) ve Batı (Yabgu - Hanedan üyesi) yönetimi.</li>
        <li><strong>Kurultay (Toy / Kengeş):</strong> Devlet işlerinin görüşüldüğü danışma meclisidir. Hatun da kurultaya katılırdı.</li>
      </ul>

      <h3>📌 2. Osmanlı Devleti Kültür ve Medeniyeti</h3>
      <ul>
        <li><strong>Divan-ı Hümayun Üyeleri:</strong>
          <br>• <em>Seyfiye (Kılıç Ehli - Yönetim/Askerlik):</em> Sadrazam, Vezirler, Kaptan-ı Derya, Yeniçeri Ağası.
          <br>• <em>İlmiye (Din/Hukuk/Eğitim):</em> Şeyhülislam, Kazasker (Kadı ve müderris atar, Divan'da davalara bakar).
          <br>• <em>Kalemiye (Bürokrasi/Maliye):</em> Defterdar (Maliye), Nişancı (Padişah tuğrası çeker, fethedilen toprakları Tahrir Defteri'ne kaydeder), Reisülküttab (Dışişleri).
        </li>
        <li><strong>Toprak Sistemi:</strong> Mülk Arazi (Öşri, Haraci) ve Miri Arazi (Dirlik, Mukataa, Paşmaklık, Ocaklık, Yurtluk, Malikane, Vakıf).</li>
      </ul>

      <h3>📌 3. Kurtuluş Savaşı ve İnkılap Tarihi</h3>
      <ul>
        <li><strong>Genelgeler ve Kongreler:</strong>
          <br>• <em>Havza Genelgesi:</em> İzmir'in işgali protesto edildi, milli bilinç uyandırıldı.
          <br>• <em>Amasya Genelgesi:</em> Kurtuluş Savaşı'nın amacı, gerekçesi ve yöntemi ilk kez açıklandı.
          <br>• <em>Erzurum Kongresi:</em> Toplanış bölgesel, kararlar ulusal. İlk kez milli sınırlardan (Misak-ı Milli) ve manda-himaye reddinden bahsedildi.
          <br>• <em>Sivas Kongresi:</em> Bütün cemiyetler tek çatı altında (Anadolu ve Rumeli Müdafaa-i Hukuk) birleştirildi.
        </li>
      </ul>
    `
  },

  // 2. COĞRAFYA
  {
    id: "cografya",
    title: "2. KPSS Coğrafya (Türkiye'nin Fiziki, Beşeri ve Ekonomik Coğrafyası)",
    icon: "🗺️",
    summary: "18 Soruluk KPSS Coğrafya: Dağlar, ovalar, platolar, akarsular, iklim, nüfus, madenler ve sanayi.",
    content: `
      <h3>📌 1. Türkiye'nin Jeopolitik ve Fiziki Özellikleri</h3>
      <ul>
        <li><strong>Mutlak (Matematik) Konum:</strong> 36°-42° Kuzey paralelleri, 26°-45° Doğu meridyenleri. Kuzey Yarımküre'de ve Orta Kuşak'ta (Dört mevsim belirgin, Akdeniz iklimi, Batı rüzgarları, Cephe yağışları).</li>
        <li><strong>Türkiye'nin Dağları:</strong>
          <br>• <em>Kıvrım Dağları:</em> Kuzey Anadolu Dağları (Kaçkarlar, Küre, Ilgaz) ve Toroslar (Aladağlar, Bolkarlar).
          <br>• <em>Kırık Dağları (Horst-Graben):</em> Ege'de Kaz, Madra, Yunt, Bozdağlar, Aydın Dağları, Menteşe Dağları ve Amanos (Nur) Dağları.
          <br>• <em>Volkanik Dağlar:</em> İç Anadolu (Erciyes, Hasan, Melendiz, Karadağ, Karacadağ), Doğu Anadolu (Ağrı, Tendürek, Süphan, Nemrut), Ege (Kula volkanları).
        </li>
      </ul>

      <h3>📌 2. Madenler ve Sanayi Tesisleri</h3>
      <ul>
        <li><strong>Demir:</strong> Sivas (Divriği), Malatya (Hekimhan, Hasançelebi). İşletme: Karabük, Ereğli (Kömür/Enerji kaynağı), İskenderun (Liman/Ulaşım).</li>
        <li><strong>Bakır:</strong> Kastamonu (Küre), Artvin (Murgul), Diyarbakır (Ergani), Elazığ (Maden). İşletme: Samsun ve Artvin.</li>
        <li><strong>Boksit (Alüminyum):</strong> Konya (Seydişehir), Antalya (Akseki).</li>
      </ul>
    `
  },

  // 3. VATANDAŞLIK VE ANAYASA
  {
    id: "vatandaslik",
    title: "3. KPSS Vatandaşlık ve Anayasa Hukuku (1982 Anayasası & İdare)",
    icon: "⚖️",
    summary: "9 Soru Anayasa + 6 Soru Güncel: Temel Hukuk, Yasama, Yürütme, Yargı, İdare Hukuku ve Mahalli İdareler.",
    content: `
      <h3>📌 1. Temel Hukuk Bilgisi ve Yaptırım Türleri</h3>
      <ul>
        <li><strong>Hukuki Yaptırımlar:</strong> Ceza, Cebri İcra (Zorla yerine getirme), Tazminat (Maddi/Manevi), İptal (İdari işlemin yargıca bozulması), Hükümsüzlük (Yokluk, Butlan, Askıda Hükümsüzlük).</li>
      </ul>

      <h3>📌 2. 1982 Anayasası Devlet Organları</h3>
      <ul>
        <li><strong>Yasama (TBMM):</strong> 600 milletvekili. Seçimler 5 yılda bir yapılır. Milletvekili seçilme yaşı 18'dir.</li>
        <li><strong>Yürütme (Cumhurbaşkanı):</strong> 5 yıllığına seçilir, en fazla 2 defa seçilebilir. Aday olabilmek için 40 yaşını doldurmuş ve yükseköğrenim mezunu olmak gerekir.</li>
        <li><strong>Yargı (Yüksek Mahkemeler):</strong> Anayasa Mahkemesi (15 üye, 12 yıl), Yargıtay (Adli yargı temyiz), Danıştay (İdari yargı temyiz), Uyuşmazlık Mahkemesi (Adli ve idari yargı uyuşmazlıkları).</li>
      </ul>

      <h3>📌 3. İdare Hukuku (Merkezden & Yerinden Yönetim)</h3>
      <ul>
        <li><strong>Merkeze Bağlı Taşra:</strong> İl İdaresi (Vali, İl İdare Şube Başkanları, İl İdare Kurulu), İlçe İdaresi (Kaymakam).</li>
        <li><strong>Mahalli İdareler (Yerel Yönetim):</strong> İl Özel İdaresi, Belediye, Büyükşehir Belediyesi, Köy.</li>
      </ul>
    `
  },

  // 4. TÜRKÇE
  {
    id: "turkce",
    title: "4. KPSS Türkçe (Dilbilgisi, Anlam Bilgisi & Sözel Mantık)",
    icon: "📖",
    summary: "30 Soruluk Türkçe: Paragraf taktikleri, sözcükte/cümlede anlam, yazım-noktalama, ses bilgisi, cümle öğeleri ve sözel mantık.",
    content: `
      <h3>📌 1. Paragraf ve Anlam Çözümleme Taktikleri</h3>
      <ul>
        <li>Önce soru kökünü okuyun ('değinilmemiştir', 'çıkarılamaz' gibi olumsuz ifadelere dikkat edin).</li>
        <li>Ana düşünce genellikle paragrafın ilk veya son cümlesinde özetlenir.</li>
      </ul>

      <h3>📌 2. Kritik Yazım Kuralları</h3>
      <ul>
        <li>'ki' ve 'de' Bağlacının Yazımı: Cümleden çıkarıldığında anlam bozulmuyorsa bağlaçtır ve ayrı yazılır.</li>
        <li>Büyük Harfler: Kurum, kuruluş ve kurul adlarına gelen ekler kesme işaretiyle ayrılmaz (Örn: 'Türk Dil Kurumuna', 'Bakanlar Kurulunun').</li>
      </ul>
    `
  },

  // 5. MATEMATİK & SAYISAL MANTIK
  {
    id: "matematik",
    title: "5. KPSS Matematik, Geometri & Sayısal Mantık",
    icon: "📐",
    summary: "30 Soruluk Matematik: Temel kavramlar, basamak kavramı, OBEB-OKEK, rasyonel sayılar, problemler ve sayısal mantık.",
    content: `
      <h3>📌 1. Sayı ve Kesir Problemleri Stratejileri</h3>
      <ul>
        <li>Bilinmeyen sayısı kadar denklem kurulur. Parça-bütün ilişkilerinde paydaların ekoku alınarak bilinmeyene değer vermek işlem kolaylığı sağlar.</li>
      </ul>
      <h3>📌 2. Yüzde, Kâr-Zarar ve Karışım Problemleri</h3>
      <ul>
        <li>Maliyet fiyatına daima '100x' denilerek başlanması hesaplama hızını artırır.</li>
      </ul>
    `
  },

  // 6. GÜNCEL BİLGİLER
  {
    id: "guncel",
    title: "6. KPSS Güncel Bilgiler & Genel Kültür",
    icon: "🌍",
    summary: "Uluslararası kuruluşlar (BM, NATO, AB, ŞİÖ, Türk Devletleri Teşkilatı), UNESCO mirasları, Nobel ödülleri ve önemli olaylar.",
    content: `
      <h3>📌 1. Uluslararası Kuruluşlar ve Merkezleri</h3>
      <ul>
        <li><strong>Birleşmiş Milletler (BM):</strong> New York</li>
        <li><strong>NATO:</strong> Brüksel (Belçika)</li>
        <li><strong>UNESCO:</strong> Paris (Fransa)</li>
        <li><strong>Dünya Sağlık Örgütü (WHO):</strong> Cenevre (İsviçre)</li>
        <li><strong>Türk Devletleri Teşkilatı (TDT):</strong> İstanbul</li>
      </ul>
    `
  }
];
