const fs = require('fs');

// Mock browser
const dom = {};
const getEl = (id) => {
  if (!dom[id]) dom[id] = { innerHTML: '', textContent: '', style: {}, classList: { add(){}, remove(){}, contains(){ return false; } }, appendChild(){}, addEventListener(){} };
  return dom[id];
};

global.window = {
  speechSynthesis: null,
  scrollTo(){},
  addEventListener(evt, cb){ cb(); }
};
global.document = {
  getElementById: getEl,
  querySelectorAll(){ return []; },
  createElement(tag){ return { className: '', innerHTML: '', textContent: '', style: {}, classList: { add(){}, remove(){} }, appendChild(){}, onclick: null }; }
};
global.localStorage = {
  getItem(){ return null; },
  setItem(){}
};

// Load dependencies
eval(fs.readFileSync('questions.js', 'utf8'));
eval(fs.readFileSync('topics.js', 'utf8'));
eval(fs.readFileSync('mnemonics.js', 'utf8'));

// Load index.html script
const html = fs.readFileSync('index.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];

try {
  eval(script);
  console.log('✅ ALL SCRIPTS EXECUTED WITH ZERO ERRORS!');
} catch (e) {
  console.error('❌ ERROR IN SCRIPT:', e);
}
