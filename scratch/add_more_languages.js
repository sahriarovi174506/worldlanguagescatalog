const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LANG_DIR = path.join(ROOT, 'languages');
const SOURCE_JSON = path.join(__dirname, 'wikidata_400.json');
const TARGET_NEW_COUNT = 150;

if (!fs.existsSync(LANG_DIR)) {
  fs.mkdirSync(LANG_DIR, { recursive: true });
}

if (!fs.existsSync(SOURCE_JSON)) {
  throw new Error('Missing scratch/wikidata_400.json. Run the Wikidata fetch step first.');
}

const existingIsos = new Set(
  fs
    .readdirSync(LANG_DIR)
    .filter((f) => f.endsWith('.html'))
    .map((f) => f.replace(/\.html$/i, '').toLowerCase())
);

const rows = JSON.parse(fs.readFileSync(SOURCE_JSON, 'utf8')).results.bindings.map((b) => ({
  name: (b.langLabel && b.langLabel.value ? b.langLabel.value : '').trim(),
  iso: (b.iso && b.iso.value ? b.iso.value : '').trim().toLowerCase(),
  speakers: b.speakers && b.speakers.value ? Number(b.speakers.value) : null
}));

const manualMustInclude = [
  { name: 'Rangpuri', iso: 'rkt', speakers: null },
  { name: 'Sylheti', iso: 'syl', speakers: 16000000 },
  { name: 'Chittagonian', iso: 'ctg', speakers: 13000000 }
];

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function spk(v) {
  if (!v || Number.isNaN(v)) return 'No stable published estimate available in this build dataset';
  if (v >= 1000000000) return `${(v / 1000000000).toFixed(2)} billion`;
  if (v >= 1000000) return `${(v / 1000000).toFixed(1)} million`;
  return v.toLocaleString();
}

function htmlFor(row) {
  const canonical = `https://worldlanguagescatalog.vercel.app/languages/${row.iso}.html`;
  const title = `${row.name} Language Profile | World Languages Catalog`;
  const description = `${row.name} language profile with ISO code, speaker estimate context, regional usage notes, and reference links.`;
  const speakersText = spk(row.speakers);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <link rel="stylesheet" href="../css/styles.css">
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"${esc(
    row.name
  )} language profile","url":"${canonical}"}</script>
</head>
<body>
  <nav class="nav-header">
    <div class="nav-container">
      <a href="../index.html" class="logo-link">
        <img src="../img/favicon.svg" alt="WLC Logo" class="logo-img">
        <span class="logo-text">WLC</span>
      </a>
      <button class="mobile-menu-btn" aria-label="Toggle Menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      <div class="nav-links">
        <a href="../index.html">Full Catalog</a>
        <a href="../ranking.html">Ranking</a>
        <a href="../about.html">About</a>
        <a href="../diversity.html">Diversity</a>
        <a href="../contact.html">Contact</a>
      </div>
    </div>
  </nav>

  <main class="lang-article" style="max-width: 980px; margin: 0 auto; padding: 7rem 1.2rem 3rem;">
    <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: var(--muted); margin-bottom: 1.6rem;">
      <a href="../index.html">Home</a> &gt; <a href="../index.html">Languages</a> &gt; <span aria-current="page">${esc(
        row.name
      )}</span>
    </nav>

    <header>
      <h1>${esc(row.name)} Language Guide</h1>
      <p style="color: var(--text-dim); line-height: 1.8;">ISO 639-3 code: <strong>${row.iso.toUpperCase()}</strong></p>
    </header>

    <section class="info-card" style="margin-top: 1.5rem;">
      <h2 style="margin-bottom: 0.7rem;">Native Speakers Estimate</h2>
      <p style="color: var(--text-dim); line-height: 1.8;">${esc(
        row.name
      )} appears in the expanded WLC language set. Current estimate context: ${esc(speakersText)}.</p>
    </section>

    <section class="info-card" style="margin-top: 1rem;">
      <h2 style="margin-bottom: 0.7rem;">Overview</h2>
      <p style="color: var(--text-dim); line-height: 1.8;">This page is part of the expanded language-subpage rollout. It exists to improve crawlable depth and language-specific discoverability in search.</p>
    </section>

    <section class="info-card" style="margin-top: 1rem;">
      <h2 style="margin-bottom: 0.7rem;">References</h2>
      <ul style="padding-left: 1.2rem; color: var(--text-dim); line-height: 1.8;">
        <li><a href="https://www.ethnologue.com/" target="_blank" rel="noopener">Ethnologue</a></li>
        <li><a href="https://iso639-3.sil.org/" target="_blank" rel="noopener">ISO 639-3</a></li>
        <li><a href="https://www.wikidata.org/wiki/Wikidata:WikiProject_Languages" target="_blank" rel="noopener">Wikidata Languages Project</a></li>
      </ul>
    </section>
  </main>

  <footer>
    <div class="footer-content">
      <div class="footer-nav">
        <a href="../index.html">Full Catalog</a>
        <a href="../ranking.html">Ranking</a>
        <a href="../about.html">About</a>
        <a href="../diversity.html">Diversity</a>
        <a href="../faq.html">FAQ</a>
        <a href="../contact.html">Contact</a>
      </div>
      <p>&copy; 2026 World Languages Catalog. Language profile page for ${esc(row.name)}.</p>
    </div>
  </footer>
  <script src="../js/script.js" defer></script>
</body>
</html>`;
}

function normalizePool(inputRows) {
  const seen = new Set();
  const pool = [];
  for (const row of inputRows) {
    if (!row.iso || !/^[a-z]{3}$/.test(row.iso)) continue;
    if (!row.name || row.name.length < 2) continue;
    if (seen.has(row.iso)) continue;
    seen.add(row.iso);
    pool.push(row);
  }
  return pool;
}

const pool = normalizePool(rows);
const selected = [];

for (const forced of manualMustInclude) {
  if (!existingIsos.has(forced.iso) && !selected.find((x) => x.iso === forced.iso)) {
    selected.push(forced);
  }
}

for (const row of pool) {
  if (selected.length >= TARGET_NEW_COUNT) break;
  if (existingIsos.has(row.iso)) continue;
  if (selected.find((x) => x.iso === row.iso)) continue;
  selected.push(row);
}

if (selected.length < TARGET_NEW_COUNT) {
  throw new Error(`Could only select ${selected.length} new pages, needed ${TARGET_NEW_COUNT}.`);
}

for (const row of selected.slice(0, TARGET_NEW_COUNT)) {
  const outPath = path.join(LANG_DIR, `${row.iso}.html`);
  fs.writeFileSync(outPath, htmlFor(row), 'utf8');
}

const checkList = ['syl', 'ctg', 'rkt'];
for (const iso of checkList) {
  const p = path.join(LANG_DIR, `${iso}.html`);
  if (!fs.existsSync(p)) {
    const forced = manualMustInclude.find((x) => x.iso === iso) || { iso, name: iso.toUpperCase(), speakers: null };
    fs.writeFileSync(p, htmlFor(forced), 'utf8');
  }
}

console.log(`Added ${TARGET_NEW_COUNT} additional language pages.`);
console.log(`Forced inclusion check: syl=${fs.existsSync(path.join(LANG_DIR, 'syl.html'))}, ctg=${fs.existsSync(path.join(LANG_DIR, 'ctg.html'))}, rkt=${fs.existsSync(path.join(LANG_DIR, 'rkt.html'))}`);
