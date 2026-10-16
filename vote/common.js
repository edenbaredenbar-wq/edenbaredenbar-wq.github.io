/* Shared code for the host screen (host.html) and the student phones (index.html).
   - connect(): talks to Firebase, or to a "demo" database inside this browser
     when config.js hasn't been filled in yet.
   - small helpers: flags, Hebrew text, room codes, the D'Hondt method. */

import {
  initializeApp, getDatabase, ref, set, get, update, remove, onValue,
  serverTimestamp, connectDatabaseEmulator
} from './vendor/firebase.js';

const params = new URLSearchParams(location.search);

/* ------------------------------------------------------------------ */
/*  Backend                                                            */
/* ------------------------------------------------------------------ */

function readConfig() {
  try {
    // eslint-disable-next-line no-undef
    return typeof firebaseConfig !== 'undefined' ? firebaseConfig : null;
  } catch (e) {
    return null;
  }
}

/** What state is config.js in? 'ok' | 'empty' | 'nodb' */
export function configState() {
  const c = readConfig();
  if (!c || !c.apiKey) return 'empty';
  if (!c.databaseURL) return 'nodb';
  return 'ok';
}

export function connect() {
  const cfg = readConfig();
  const emulator = params.get('emulator');          // for testing only, e.g. ?emulator=127.0.0.1:9000
  if (params.has('demo')) return demoBackend();
  if (emulator) {
    return firebaseBackend({ apiKey: 'test', projectId: 'demo-vote', databaseURL: 'https://demo-vote-default-rtdb.firebaseio.com' }, emulator);
  }
  if (configState() === 'ok') return firebaseBackend(cfg, null);
  return demoBackend();
}

const errorHandlers = [];
export function onBackendError(fn) { errorHandlers.push(fn); }
function reportError(err) {
  console.warn('[vote] database error:', err);
  errorHandlers.forEach(fn => { try { fn(err); } catch (e) { /* ignore */ } });
}

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))
  ]);
}

function firebaseBackend(cfg, emulator) {
  const app = initializeApp(cfg);
  const db = getDatabase(app);
  if (emulator) {
    const [host, port] = emulator.split(':');
    connectDatabaseEmulator(db, host, Number(port));
  }
  const write = p => p.catch(err => { reportError(err); throw err; });
  return {
    mode: 'firebase',
    projectId: cfg.projectId || '',
    set: (path, value) => write(set(ref(db, path), value)),
    update: (path, value) => write(update(ref(db, path), value)),
    remove: path => write(remove(ref(db, path))),
    get: path => withTimeout(get(ref(db, path)), 10000).then(s => s.val()),
    on: (path, cb) => onValue(ref(db, path), snap => cb(snap.val()), reportError),
    onConnection: cb => onValue(ref(db, '.info/connected'), snap => cb(!!snap.val())),
    now: () => serverTimestamp()
  };
}

/* Demo mode: a tiny database kept in this browser's localStorage. Tabs on the
   same computer see each other's changes, which is enough to rehearse. */
function demoBackend() {
  const KEY = 'electionVote.demoDB';
  const listeners = new Set();
  let tree = load();

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(tree)); } catch (e) { /* private mode */ }
    notify();
  }
  const parts = p => p.split('/').filter(Boolean);
  const clone = v => (v === undefined || v === null) ? null : JSON.parse(JSON.stringify(v));
  function getAt(path) {
    let node = tree;
    for (const k of parts(path)) {
      if (node === null || typeof node !== 'object') return null;
      node = node[k];
    }
    return node === undefined ? null : node;
  }
  function setAt(path, value) {
    const keys = parts(path);
    let node = tree;
    for (const k of keys.slice(0, -1)) {
      if (node[k] === null || typeof node[k] !== 'object') node[k] = {};
      node = node[k];
    }
    const last = keys[keys.length - 1];
    if (value === null || value === undefined) delete node[last];
    else node[last] = clone(value);
  }
  function notify() { listeners.forEach(l => l()); }
  window.addEventListener('storage', e => {
    if (e.key === KEY) { tree = load(); notify(); }
  });

  return {
    mode: 'demo',
    projectId: '',
    set: (path, value) => { setAt(path, value); save(); return Promise.resolve(); },
    update: (path, obj) => {
      Object.keys(obj).forEach(k => setAt(path + '/' + k, obj[k]));
      save();
      return Promise.resolve();
    },
    remove: path => { setAt(path, null); save(); return Promise.resolve(); },
    get: path => { tree = load(); return Promise.resolve(clone(getAt(path))); },
    on: (path, cb) => {
      let last;
      const check = () => {
        const v = getAt(path);
        const s = JSON.stringify(v);
        if (s !== last) { last = s; cb(clone(v)); }
      };
      listeners.add(check);
      setTimeout(check, 0);
      return () => listeners.delete(check);
    },
    onConnection: cb => { setTimeout(() => cb(true), 0); return () => {}; },
    now: () => Date.now()
  };
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/** Escape text, and wrap any Hebrew inside it so it reads right-to-left. */
export function heText(s) {
  return esc(s).replace(/[֐-׿]+(?:[\s\-"'״׳]+[֐-׿]+)*/g,
    m => `<bdi class="he" dir="rtl" lang="he">${m}</bdi>`);
}

/** Firebase may return arrays as objects ({0: .., 1: ..}); always give back an array. */
export function toArray(v) {
  if (Array.isArray(v)) return v;
  if (v && typeof v === 'object') {
    return Object.keys(v).sort((a, b) => a - b).map(k => v[k]);
  }
  return [];
}

export function randomId(len = 10) {
  const chars = 'abcdefghijkmnpqrstuvwxyz23456789';
  let out = '';
  const arr = new Uint32Array(len);
  (window.crypto || window.msCrypto).getRandomValues(arr);
  for (let i = 0; i < len; i++) out += chars[arr[i] % chars.length];
  return out;
}

/** 4 letters, no look-alikes (no I, O, L). */
export function makeRoomCode() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ';
  let out = '';
  for (let i = 0; i < 4; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

export function cleanCode(s) {
  return String(s || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4);
}

/** Each phone gets one anonymous random id, so it can only vote once per question. */
export function getPlayerId(perTab) {
  const KEY = 'electionVote.pid';
  // In demo mode every tab is its own "phone", so practice tabs can each vote.
  const store = perTab ? sessionStorage : localStorage;
  try {
    let id = store.getItem(KEY);
    if (!id) { id = 'p' + randomId(12); store.setItem(KEY, id); }
    return id;
  } catch (e) {
    if (!window.__pid) window.__pid = 'p' + randomId(12);
    return window.__pid;
  }
}

/** The student page's address, e.g. https://site/vote/?room=ABCD */
export function playerUrl(code) {
  const base = new URL('./', location.href);
  base.search = '';
  base.hash = '';
  return code ? `${base.href}?room=${code}` : base.href;
}

export function playerUrlShort() {
  const u = new URL('./', location.href);
  return (u.host + u.pathname).replace(/\/$/, '');
}

/* ------------------------------------------------------------------ */
/*  Flags (drawn as SVG so they also show on Windows, which has no     */
/*  flag emoji)                                                         */
/* ------------------------------------------------------------------ */

function usFlagSvg() {
  const h = 20 / 13;
  let s = '<svg class="flag" viewBox="0 0 38 20" aria-hidden="true"><rect width="38" height="20" fill="#fff"/>';
  for (let i = 0; i < 13; i += 2) s += `<rect y="${(i * h).toFixed(3)}" width="38" height="${h.toFixed(3)}" fill="#B22234"/>`;
  s += `<rect width="15.2" height="${(7 * h).toFixed(3)}" fill="#3C3B6E"/>`;
  for (let r = 0; r < 9; r++) {
    const y = 0.6 + r * 1.2;
    const n = r % 2 === 0 ? 6 : 5;
    for (let c = 0; c < n; c++) {
      const x = (r % 2 === 0 ? 1.27 : 2.53) + c * 2.53;
      s += `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="0.42" fill="#fff"/>`;
    }
  }
  return s + '</svg>';
}

function ilFlagSvg() {
  return '<svg class="flag" viewBox="0 0 220 160" aria-hidden="true">' +
    '<rect width="220" height="160" fill="#fff"/>' +
    '<rect y="15" width="220" height="25" fill="#0038B8"/>' +
    '<rect y="120" width="220" height="25" fill="#0038B8"/>' +
    '<g fill="none" stroke="#0038B8" stroke-width="5.5">' +
    '<polygon points="110,47 138.6,96.5 81.4,96.5"/>' +
    '<polygon points="110,113 138.6,63.5 81.4,63.5"/></g></svg>';
}

function bothSvg() {
  return '<span class="flag-pair">' + usFlagSvg() + ilFlagSvg() + '</span>';
}

export const FLAG = { usa: usFlagSvg(), israel: ilFlagSvg(), both: bothSvg() };

export const ANSWERS = {
  usa: { label: 'USA', he: 'ארה״ב' },
  israel: { label: 'Israel', he: 'ישראל' },
  both: { label: 'Both', he: 'שתיהן' }
};
export const ANSWER_KEYS = ['usa', 'israel', 'both'];

/** Colors for the Round 2 "parties". */
export const PARTY_COLORS = [
  { bg: '#E63946', fg: '#fff' },
  { bg: '#1F6FEB', fg: '#fff' },
  { bg: '#F2A900', fg: '#1b1b1b' },
  { bg: '#16A085', fg: '#fff' },
  { bg: '#8E44AD', fg: '#fff' },
  { bg: '#F06292', fg: '#1b1b1b' },
  { bg: '#2E7D32', fg: '#fff' },
  { bg: '#795548', fg: '#fff' }
];

/* ------------------------------------------------------------------ */
/*  The D'Hondt method (what Israel uses to turn votes into seats)     */
/* ------------------------------------------------------------------ */

/**
 * votes: [12, 7, 3, ...]   seats: 20   thresholdPct: 10
 * Returns { total, passed: [bool], seats: [n] }.
 * Parties under the threshold get 0 seats; the seats are then handed out one
 * at a time to whichever remaining party has the highest votes / (seats won + 1).
 */
export function dhondt(votes, seats, thresholdPct) {
  const total = votes.reduce((a, b) => a + b, 0);
  const passed = votes.map(v => total > 0 && v > 0 && v * 100 >= thresholdPct * total - 1e-9);
  const won = votes.map(() => 0);
  if (!passed.some(Boolean)) return { total, passed, seats: won };
  for (let s = 0; s < seats; s++) {
    let best = -1, bestQ = -1;
    votes.forEach((v, i) => {
      if (!passed[i]) return;
      const q = v / (won[i] + 1);
      if (q > bestQ || (q === bestQ && v > votes[best])) { bestQ = q; best = i; }
    });
    won[best]++;
  }
  return { total, passed, seats: won };
}
