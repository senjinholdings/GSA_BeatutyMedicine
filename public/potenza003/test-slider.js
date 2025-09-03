// 簡易スモークテスト: banner-slider 初期化と拡大モーダル呼び出しの確認
const fs = require('fs');
const path = require('path');

// 1) app.js から initializeBannerSliders と createAndShowModal を抽出
const appJsPath = path.join(__dirname, 'app.js');
const src = fs.readFileSync(appJsPath, 'utf8');

function extractFunction(name) {
  const start = src.indexOf(`function ${name}(`);
  if (start < 0) throw new Error(`${name} not found`);
  let i = start;
  // find matching braces
  const firstBrace = src.indexOf('{', start);
  let depth = 0;
  for (let j = firstBrace; j < src.length; j++) {
    const ch = src[j];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        i = j + 1;
        break;
      }
    }
  }
  return src.slice(start, i);
}

const initFnCode = extractFunction('initializeBannerSliders');
const modalFnCode = extractFunction('createAndShowModal');

// 2) 最小限のDOMモックを作成
function makeClassList() {
  const set = new Set();
  return {
    add: (c) => set.add(c),
    remove: (c) => set.delete(c),
    contains: (c) => set.has(c),
    toString: () => Array.from(set).join(' '),
  };
}

function makeEl(classNames = '') {
  const listeners = {};
  const el = {
    style: {},
    dataset: {},
    attributes: {},
    classList: makeClassList(),
    children: [],
    parent: null,
    innerHTML: '',
    addEventListener: (type, fn) => {
      listeners[type] = listeners[type] || [];
      listeners[type].push(fn);
    },
    click: () => { (listeners['click'] || []).forEach((f) => f({ target: el })); },
    setAttribute: (k, v) => { el.attributes[k] = String(v); },
    getAttribute: (k) => el.attributes[k],
    appendChild: (child) => { child.parent = el; el.children.push(child); },
    remove: () => { if (el.parent) el.parent.children = el.parent.children.filter(c => c !== el); },
    querySelector: (sel) => el.querySelectorAll(sel)[0] || null,
    querySelectorAll: (sel) => {
      // 極簡易: .class と tag と子孫のみ対応
      const results = [];
      const isClass = sel.startsWith('.');
      const cls = isClass ? sel.slice(1) : sel;
      const visit = (node) => {
        if (node === el) {
          // root 自身は判定しない
        }
        if (isClass) {
          if (node._classes && node._classes.has(cls)) results.push(node);
        } else {
          // tag は未使用箇所のためスキップ
        }
        node.children.forEach(visit);
      };
      visit(el);
      return results;
    },
    _setClasses: (cs) => {
      el._classes = new Set();
      cs.split(/\s+/).filter(Boolean).forEach(c => { el._classes.add(c); el.classList.add(c); });
    },
  };
  el._setClasses(classNames);
  return el;
}

// スライダーDOM構築
const root = makeEl('root');
const slider = makeEl('banner-slider');
slider.dataset.initialized = '0';
const container = makeEl('slider-container');
const counter = makeEl('slider-counter');
const prev = makeEl('slider-nav slider-prev');
const next = makeEl('slider-nav slider-next');
const expand = makeEl('slider-expand');
const wrapper = makeEl('slider-wrapper');
const track = makeEl('slider-track');
const dotsWrap = makeEl('slider-dots');

function makeSlide(active) {
  const slide = makeEl(`slider-slide${active ? ' active' : ''}`);
  const img = makeEl();
  img.tagName = 'IMG';
  // モーダルに渡るURL
  img.src = `https://example.com/${Math.random().toString(36).slice(2)}.webp`;
  // 画像クラスに反応させるため、簡易queryで見つけられるように保持
  img.querySelectorAll = () => [];
  img.addEventListener = (t, f) => { img._click = f; };
  img.click = () => { img._click && img._click({ target: img }); };
  slide.appendChild(img);
  return slide;
}

// 3スライド
const slides = [makeSlide(true), makeSlide(false), makeSlide(false)];
slides.forEach(s => track.appendChild(s));

// 3ドット
for (let i = 0; i < 3; i++) {
  const d = makeEl(`slider-dot${i === 0 ? ' active' : ''}`);
  d.setAttribute('data-index', String(i));
  dotsWrap.appendChild(d);
}

container.appendChild(counter);
container.appendChild(prev);
container.appendChild(wrapper);
wrapper.appendChild(track);
container.appendChild(next);
container.appendChild(expand);
slider.appendChild(container);
slider.appendChild(dotsWrap);
root.appendChild(slider);

// document モック
let modalInserted = false;
let mockModal = null;

const documentMock = {
  querySelectorAll: (sel) => {
    if (sel === '.banner-slider') return [slider];
    if (sel === '.slider-slide') return slides;
    if (sel === '.slider-dot') return dotsWrap.children;
    return [];
  },
  querySelector: (sel) => {
    if (sel === '.banner-modal') return mockModal;
    return null;
  },
  addEventListener: () => {},
  body: {
    insertAdjacentHTML: (_pos, html) => {
      if (html.includes('banner-modal')) {
        modalInserted = true;
        // 最低限の要素を持つモーダルを構築
        const makeBtn = (cls) => ({
          style: {}, addEventListener: () => {}, classList: makeClassList(),
          _setClasses: () => {},
        });
        const dots = [0,1,2].map(() => ({ addEventListener: () => {} }));
        mockModal = {
          remove: () => { mockModal = null; },
          addEventListener: () => {},
          querySelector: (sel) => {
            if (sel === '.banner-modal-image') return { src: '' };
            if (sel === '.banner-modal-counter') return { textContent: '' };
            if (sel === '.banner-modal-close') return makeBtn('banner-modal-close');
            if (sel === '.banner-modal-prev') return makeBtn('banner-modal-prev');
            if (sel === '.banner-modal-next') return makeBtn('banner-modal-next');
            if (sel === '.banner-modal-dots') return { style: {} };
            return null;
          },
          querySelectorAll: (sel) => {
            if (sel === '.banner-modal-dot') return dots;
            return [];
          }
        };
      }
    }
  }
};

global.document = documentMock;

// 3) 関数を評価
eval(initFnCode);
eval(modalFnCode);

// 4) 初期化して挙動を確認
initializeBannerSliders();

// nextボタンでアクティブ変更、expandでモーダル挿入を確認
next.click();
expand.click();

if (!modalInserted) {
  console.error('NG: モーダルHTMLが挿入されていません');
  process.exit(1);
}

console.log('OK: スライダー初期化とモーダル挿入を確認');
