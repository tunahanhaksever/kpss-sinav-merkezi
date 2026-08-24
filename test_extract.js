const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const pdfMap = [
  { file: '../benzersor-kpss-tarih-ders-notlari-2026.pdf', subject: 'Tarih', icon: '📜' },
  { file: '../benzersor-kpss-cografya-ders-notlari-2026.pdf', subject: 'Coğrafya', icon: '🗺️' },
  { file: '../benzersor-kpss-vatandaslik-ders-notlari-2026.pdf', subject: 'Vatandaşlık', icon: '⚖️' },
  { file: '../benzersor-kpss-guncel-bilgiler-ders-notlari-2026.pdf', subject: 'Güncel Bilgiler', icon: '🌍' },
  { file: '../benzersor-kpss-turkce-ders-notlari-2026.pdf', subject: 'Türkçe', icon: '📖' },
  { file: '../benzersor-kpss-matematik-ders-notlari-2026.pdf', subject: 'Matematik', icon: '📐' },
  { file: '../benzersor-kpss-geometri-ders-notlari-2026.pdf', subject: 'Geometri', icon: '📏' }
];

async function extractAll() {
  console.log('Extracting text from all 2026 KPSS PDF books...');
  const result = {};

  for (const item of pdfMap) {
    if (fs.existsSync(item.file)) {
      const buf = fs.readFileSync(item.file);
      const parser = new PDFParse(new Uint8Array(buf));
      const textObj = await parser.getText();
      const rawText = typeof textObj === 'string' ? textObj : (textObj.text || JSON.stringify(textObj));
      result[item.subject] = {
        icon: item.icon,
        rawLength: rawText.length,
        sample: rawText.substring(0, 1000)
      };
      console.log(`✓ ${item.subject}: ${rawText.length} characters extracted.`);
    } else {
      console.warn(`File not found: ${item.file}`);
    }
  }
}

extractAll();
