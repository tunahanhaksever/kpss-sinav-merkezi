const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const pdfMap = [
  { file: '../benzersor-kpss-tarih-ders-notlari-2026.pdf', subject: 'KPSS 2026 Tarih Külliyatı', icon: '📜', id: 'tarih' },
  { file: '../benzersor-kpss-cografya-ders-notlari-2026.pdf', subject: 'KPSS 2026 Coğrafya Külliyatı', icon: '🗺️', id: 'cografya' },
  { file: '../benzersor-kpss-vatandaslik-ders-notlari-2026.pdf', subject: 'KPSS 2026 Vatandaşlık & Anayasa Hukuku', icon: '⚖️', id: 'vatandaslik' },
  { file: '../benzersor-kpss-guncel-bilgiler-ders-notlari-2026.pdf', subject: 'KPSS 2026 Güncel Bilgiler & Genel Kültür', icon: '🌍', id: 'guncel' },
  { file: '../benzersor-kpss-turkce-ders-notlari-2026.pdf', subject: 'KPSS 2026 Türkçe & Sözel Mantık', icon: '📖', id: 'turkce' },
  { file: '../benzersor-kpss-matematik-ders-notlari-2026.pdf', subject: 'KPSS 2026 Matematik & Sayısal Mantık', icon: '📐', id: 'matematik' },
  { file: '../benzersor-kpss-geometri-ders-notlari-2026.pdf', subject: 'KPSS 2026 Geometri Notları', icon: '📏', id: 'geometri' }
];

function cleanText(text) {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[^\S\r\n]{2,}/g, ' ')
    .trim();
}

function formatToHtml(rawText, title) {
  const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
  let html = `<h3>📌 ${title} — 2026 ÖSYM Tam Müfredat Rehberi</h3>`;
  let currentSection = '';
  let inList = false;

  for (let i = 0; i < Math.min(lines.length, 300); i++) {
    const line = lines[i];
    if (line.length < 3) continue;

    // Check if line looks like a header (all caps, starts with number, or keyword)
    if (line.length < 60 && (line === line.toUpperCase() && /[A-ZĞÜŞİÖÇ]/.test(line) || /^(BÖLÜM|ÜNİTE|\d+\.|\*|KONU)/i.test(line))) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h4 style="color:var(--accent-brass); margin-top:14px; border-bottom:1px solid var(--border-subtle); padding-bottom:4px;">${escapeHtml(line)}</h4>`;
    } else if (/^[•\-\*]|\d+\)/.test(line)) {
      if (!inList) { html += '<ul style="margin: 8px 0; padding-left: 20px; line-height: 1.7;">'; inList = true; }
      html += `<li>${escapeHtml(line.replace(/^[•\-\*]\s*|\d+\)\s*/, ''))}</li>`;
    } else {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<p style="margin: 6px 0; line-height: 1.6;">${escapeHtml(line)}</p>`;
    }
  }

  if (inList) html += '</ul>';
  return html;
}

function escapeHtml(s) {
  return (s || '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m]));
}

async function buildEncyclopedia() {
  console.log('Building comprehensive 2026 KPSS encyclopedia from PDF books...');
  const topicsArray = [];

  for (const item of pdfMap) {
    if (fs.existsSync(item.file)) {
      console.log(`Processing ${item.subject}...`);
      const buf = fs.readFileSync(item.file);
      const parser = new PDFParse(new Uint8Array(buf));
      const textObj = await parser.getText();
      const rawText = cleanText(typeof textObj === 'string' ? textObj : (textObj.text || JSON.stringify(textObj)));

      const summary = `2026 KPSS ${item.subject} resmi hazırlık notu: ${rawText.length.toLocaleString('tr-TR')} karakterlik zengin konu külliyatı.`;
      const contentHtml = formatToHtml(rawText, item.subject);

      topicsArray.push({
        id: item.id,
        title: item.subject,
        icon: item.icon,
        summary: summary,
        content: contentHtml
      });
    }
  }

  const outputJs = `/**
 * KPSS Akademisi — 2026 Tam Kapsamlı GY-GK PDF Ders Notları Külliyatı
 * 7 Temel Ders: Tarih, Coğrafya, Vatandaşlık, Güncel Bilgiler, Türkçe, Matematik, Geometri
 */

const KPSS_TOPICS = ${JSON.stringify(topicsArray, null, 2)};
`;

  fs.writeFileSync('topics.js', outputJs, 'utf8');
  console.log('Saved comprehensive topics.js successfully!');
}

buildEncyclopedia();
