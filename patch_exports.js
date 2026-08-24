const fs = require('fs');

// Patch mnemonics.js
let mCode = fs.readFileSync('mnemonics.js', 'utf8');
mCode = mCode.replace(/^const KPSS_MNEMONICS =/m, 'var KPSS_MNEMONICS =');
if (!mCode.includes('window.KPSS_MNEMONICS')) {
  mCode += '\nif (typeof window !== "undefined") { window.KPSS_MNEMONICS = KPSS_MNEMONICS; }\n';
}
fs.writeFileSync('mnemonics.js', mCode, 'utf8');
console.log('Patched mnemonics.js');

// Patch topics.js
let tCode = fs.readFileSync('topics.js', 'utf8');
tCode = tCode.replace(/^const KPSS_TOPICS =/m, 'var KPSS_TOPICS =');
if (!tCode.includes('window.KPSS_TOPICS')) {
  tCode += '\nif (typeof window !== "undefined") { window.KPSS_TOPICS = KPSS_TOPICS; }\n';
}
fs.writeFileSync('topics.js', tCode, 'utf8');
console.log('Patched topics.js');
