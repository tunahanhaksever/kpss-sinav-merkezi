/**
 * KPSS Hafıza Şifreleri & Görsel Kodlama Rehberi
 * Tarih, Coğrafya ve Vatandaşlık Derslerinin Efsanevi Kısaltmaları
 */

var KPSS_MNEMONICS = [
  // TARİH ŞİFRELERİ
  {
    id: "m_tarih_balkan",
    topic: "Tarih",
    title: "🎖️ Balkan Antantı'na Katılan Devletler (1934)",
    badge: "Tarih Şifresi",
    code: "TAYYAR (Türkiye, Yunanistan, Yugoslavya, Romanya)",
    visualBox: `
      <div class="schema-box">
        <div class="schema-title gold">🎖️ 1934 BALKAN ANTANTI ÜYELERİ</div>
        <div class="schema-grid-4">
          <div class="schema-pill"><strong>T</strong><span>Türkiye</span></div>
          <div class="schema-pill"><strong>Y</strong><span>Yunanistan</span></div>
          <div class="schema-pill"><strong>Y</strong><span>Yugoslavya</span></div>
          <div class="schema-pill"><strong>R</strong><span>Romanya</span></div>
        </div>
        <div style="font-size: 11.5px; color: #ef4444; margin-top: 6px;">⚠️ <strong>Dikkat:</strong> Bulgaristan ve Arnavutluk İtalya baskısı/revizyonizm sebebiyle katılmamıştır!</div>
      </div>
    `,
    explanation: `Batı sınırını güvenceye almak için kurulmuştur. Şifresi <strong>T-A-Y-Y-A-R</strong>'dır. Bulgaristan Ege'ye inmek istediği için, Arnavutluk ise İtalya tehdidi yüzünden katılmamıştır.`
  },
  {
    id: "m_tarih_sadabat",
    topic: "Tarih",
    title: "🕌 Sadabat Paktı'na Katılan Devletler (1937)",
    badge: "Tarih Şifresi",
    code: "İ-İ-A-T veya SABAH Formülü (İran, Irak, Afganistan, Türkiye)",
    visualBox: `
      <div class="schema-box">
        <div class="schema-title blue">🕌 1937 SADABAT PAKTI ÜYELERİ</div>
        <div class="schema-grid-4">
          <div class="schema-pill"><strong>İ</strong><span>İran (Tahran)</span></div>
          <div class="schema-pill"><strong>İ</strong><span>Irak</span></div>
          <div class="schema-pill"><strong>A</strong><span>Afganistan</span></div>
          <div class="schema-pill"><strong>T</strong><span>Türkiye</span></div>
        </div>
        <div style="font-size: 11.5px; color: #ef4444; margin-top: 6px;">⚠️ <strong>Sınav Tuzağı:</strong> Suriye, Hatay meselesi yüzünden bu pakta KATILMAMIŞTIR!</div>
      </div>
    `,
    explanation: `Doğu sınırını güvenceye almak için İtalya'nın Habeşistan'ı işgali üzerine Tahran'daki Sadabat Sarayı'nda imzalanmıştır. Suriye katılmamıştır.`
  },
  {
    id: "m_tarih_mudanya",
    topic: "Tarih",
    title: "⚔️ Mudanya Ateşkesi ile Savaşsız Kurtarılan Yerler",
    badge: "Tarih Şifresi",
    code: "T-İ-D (Doğu Trakya, İstanbul, Boğazlar)",
    visualBox: `
      <div class="schema-box">
        <div class="schema-title green">⚔️ SAVAŞ YAPILMADAN KURTARILAN YERLER</div>
        <div class="schema-grid-3">
          <div class="schema-pill"><strong>T</strong><span>Doğu Trakya</span></div>
          <div class="schema-pill"><strong>İ</strong><span>İstanbul</span></div>
          <div class="schema-pill"><strong>B</strong><span>Boğazlar Bölgesi</span></div>
        </div>
      </div>
    `,
    explanation: `Büyük Taarruz'dan sonra 11 Ekim 1922'de imzalanan Mudanya Ateşkes Antlaşması ile Doğu Trakya, İstanbul ve Boğazlar tek kurşun atılmadan diplomatik zaferle devralınmıştır (Refet Bele teslim almıştır).`
  },

  // COĞRAFYA ŞİFRELERİ
  {
    id: "m_cog_bakir",
    topic: "Coğrafya",
    title: "⛏️ Türkiye'de Bakır Çıkarılan Merkezler",
    badge: "Maden Şifresi",
    code: "K-A-D-E-R Formülü",
    visualBox: `
      <div class="schema-box">
        <div class="schema-title gold">⛏️ BAKIR HAVZALARI (KADER)</div>
        <div class="schema-grid-5">
          <div class="schema-pill"><strong>K</strong><span>Kastamonu (Küre)</span></div>
          <div class="schema-pill"><strong>A</strong><span>Artvin (Murgul)</span></div>
          <div class="schema-pill"><strong>D</strong><span>Diyarbakır (Ergani)</span></div>
          <div class="schema-pill"><strong>E</strong><span>Elazığ (Maden)</span></div>
          <div class="schema-pill"><strong>R</strong><span>Rize (Çayeli)</span></div>
        </div>
      </div>
    `,
    explanation: `Türkiye'de bakırın çıkarıldığı en önemli yataklar <strong>K-A-D-E-R</strong> formülüyle kodlanır. İşletme tesisleri ise Samsun (Liman/Ulaşım) ve Artvin Murgul'dadır.`
  },
  {
    id: "m_cog_bor",
    topic: "Coğrafya",
    title: "💎 Türkiye'de Bor Mineralleri Çıkarılan Yerler",
    badge: "Maden Şifresi",
    code: "B-İ-B-E-K Formülü",
    visualBox: `
      <div class="schema-box">
        <div class="schema-title blue">💎 DÜNYA REZERV LİDERİ BOR (BİBEK)</div>
        <div class="schema-grid-4">
          <div class="schema-pill"><strong>B</strong><span>Balıkesir (Bigadiç/Susurluk)</span></div>
          <div class="schema-pill"><strong>B</strong><span>Bursa (M.Kemalpaşa)</span></div>
          <div class="schema-pill"><strong>E</strong><span>Eskişehir (Seyitgazi)</span></div>
          <div class="schema-pill"><strong>K</strong><span>Kütahya (Emet)</span></div>
        </div>
      </div>
    `,
    explanation: `Dünya rezervlerinin %72'si Türkiye'dedir. İşleme fabrikası Bandırma'dadır (Ulaşım ve liman avantajı).`
  },
  {
    id: "m_cog_karstik",
    topic: "Coğrafya",
    title: "💧 Türkiye'nin Karstik Gölleri",
    badge: "Coğrafya Şifresi",
    code: "S-A-L-K-E (Salda, Avlan, Kovada, Kestel, Elmalı)",
    visualBox: `
      <div class="schema-box">
        <div class="schema-title green">💧 KARSTİK ÇÖKÜNTÜ GÖLLERİ (SALKE)</div>
        <div class="schema-grid-5">
          <div class="schema-pill"><strong>S</strong><span>Salda Gölü</span></div>
          <div class="schema-pill"><strong>A</strong><span>Avlan Gölü</span></div>
          <div class="schema-pill"><strong>L</strong><span>Linyit / Suğla</span></div>
          <div class="schema-pill"><strong>K</strong><span>Kestel Gölü</span></div>
          <div class="schema-pill"><strong>E</strong><span>Elmalı Gölü</span></div>
        </div>
      </div>
    `,
    explanation: `Kalker ve kireçtaşının erimesiyle oluşan göllerdir. Akdeniz Göller Yöresi'nde (Teke ve Taşeli çevresi) toplanmıştır.`
  },

  // VATANDAŞLIK / ANAYASA ŞİFRELERİ
  {
    id: "m_vat_mahkemeler",
    topic: "Vatandaşlık",
    title: "⚖️ 1982 Anayasası'na Göre Yüksek Mahkemeler (4 Tane)",
    badge: "Anayasa Şifresi",
    code: "A-D-Y-U (Anayasa, Danıştay, Yargıtay, Uyuşmazlık)",
    visualBox: `
      <div class="schema-box">
        <div class="schema-title purple">⚖️ 4 ADET YÜKSEK MAHKEME</div>
        <div class="schema-grid-4">
          <div class="schema-pill"><strong>A</strong><span>Anayasa Mahkemesi</span></div>
          <div class="schema-pill"><strong>D</strong><span>Danıştay</span></div>
          <div class="schema-pill"><strong>Y</strong><span>Yargıtay</span></div>
          <div class="schema-pill"><strong>U</strong><span>Uyuşmazlık Mahkemesi</span></div>
        </div>
        <div style="font-size: 11.5px; color: #ef4444; margin-top: 6px;">⚠️ <strong>Sınav Tuzağı:</strong> Sayıştay ve HSK Yüksek Mahkeme DEĞİLDİR! Askeri Yargıtay/AYİM 2017'de KALDIRILMIŞTIR!</div>
      </div>
    `,
    explanation: `1982 Anayasası'nda sadece 4 yüksek mahkeme kalmıştır: Anayasa Mahkemesi, Danıştay, Yargıtay ve Uyuşmazlık Mahkemesi. Sayıştay hesap inceleme merciidir.`
  },
  {
    id: "m_vat_cogunluklar",
    topic: "Vatandaşlık",
    title: "🗳️ TBMM Anayasa Değişikliği ve Karar Sayıları",
    badge: "Anayasa Şifresi",
    code: "301 (Salt) | 360 (Referandum 3/5) | 400 (Doğrudan 2/3)",
    visualBox: `
      <div class="schema-box">
        <div class="schema-title gold">🗳️ MECLİS KRİTİK OY SAYILARI (600 VEKİL)</div>
        <div class="schema-grid-3">
          <div class="schema-pill"><strong>301</strong><span>Salt Çoğunluk (Genel Af / Soruşturma Açma)</span></div>
          <div class="schema-pill"><strong>360 (3/5)</strong><span>Anayasa Değişikliği (Zorunlu Referanduma Gider)</span></div>
          <div class="schema-pill"><strong>400 (2/3)</strong><span>Doğrudan Onay (Cumhurbaşkanı dilerse referanduma sunar)</span></div>
        </div>
      </div>
    `,
    explanation: `TBMM toplam 600 milletvekilinden oluşur. Anayasa değişikliği teklifi için en az 200 vekil (1/3) imzası gerekir.`
  }
];

if (typeof window !== "undefined") { window.KPSS_MNEMONICS = KPSS_MNEMONICS; }
