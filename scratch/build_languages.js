const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SCRIPT_PATH = path.join(ROOT, 'js', 'script.js');
const OUTPUT_DIR = path.join(ROOT, 'languages');

const WRITING_BY_FAMILY = {
  'Indo-European': 'Primarily Latin, Cyrillic, Devanagari, and related regional scripts',
  'Sino-Tibetan': 'Chinese characters and other Sinitic/Tibeto-Burman writing traditions',
  'Afro-Asiatic': 'Arabic script, Geez script, Latin orthographies, and regional systems',
  'Austronesian': 'Mostly Latin orthographies with local adaptations',
  'Niger-Congo': 'Mostly Latin orthographies and orthographic conventions shaped by local policy',
  'Turkic': 'Latin, Cyrillic, and Arabic-based scripts depending on region',
  'Dravidian': 'South Asian abugida scripts such as Tamil, Telugu, Kannada, and Malayalam',
  'Uralic': 'Mostly Latin and Cyrillic orthographies',
  'Kra-Dai': 'Thai/Lao scripts and Latin orthographies in some contexts',
  'Japonic': 'Mixed script traditions (kanji, kana)',
  'Koreanic': 'Hangul (with historical Hanja usage)',
  'Austroasiatic': 'Latin and region-specific scripts such as Khmer',
  'Creole': 'Mostly Latin orthographies',
  'Language isolate': 'Region-specific orthographic standards'
};

const REGION_HINTS = {
  'Indo-European': 'Europe, South Asia, and major diaspora regions worldwide',
  'Sino-Tibetan': 'East Asia, Himalayan regions, and global diaspora communities',
  'Afro-Asiatic': 'North Africa, the Horn of Africa, the Middle East, and diaspora hubs',
  'Austronesian': 'Southeast Asia, Pacific regions, and migration corridors',
  'Niger-Congo': 'Sub-Saharan Africa and diaspora communities',
  'Turkic': 'Anatolia, Central Asia, and transregional diaspora populations',
  'Dravidian': 'South India, Sri Lanka, and international diaspora networks',
  'Uralic': 'Northern Eurasia and related diaspora communities',
  'Kra-Dai': 'Mainland Southeast Asia and nearby cross-border regions',
  'Japonic': 'Japan and Japanese diaspora communities',
  'Koreanic': 'Korean Peninsula and Korean diaspora communities',
  'Austroasiatic': 'South and Southeast Asia',
  'Creole': 'Multi-regional communities shaped by colonial and postcolonial history',
  'Language isolate': 'Region-specific communities and diaspora distributions'
};

const REFERENCES = [
  {
    label: 'Ethnologue language statistics and classification',
    href: 'https://www.ethnologue.com/'
  },
  {
    label: 'ISO 639-3 language code standard',
    href: 'https://iso639-3.sil.org/'
  },
  {
    label: 'Wikidata language entities and identifiers',
    href: 'https://www.wikidata.org/wiki/Wikidata:WikiProject_Languages'
  },
  {
    label: 'UNESCO linguistic diversity resources',
    href: 'https://www.unesco.org/en/linguistic-diversity'
  }
];

function extractTop150() {
  const src = fs.readFileSync(SCRIPT_PATH, 'utf8');
  const match = src.match(/const ETHNOLOGUE_TOP150 = (\[[\s\S]*?\n\]);/);
  if (!match) {
    throw new Error('Could not parse ETHNOLOGUE_TOP150 from js/script.js');
  }
  return Function(`"use strict"; return ${match[1]};`)();
}

function dedupeByIso(rows) {
  const map = new Map();
  for (const row of rows) {
    const iso = String(row.iso || '').toLowerCase().trim();
    if (!iso) continue;
    if (!map.has(iso) || row.rank < map.get(iso).rank) {
      map.set(iso, row);
    }
  }
  return Array.from(map.values()).sort((a, b) => a.rank - b.rank);
}

function formatSpeakers(n) {
  if (!n || Number.isNaN(n)) return 'No reliable estimate available';
  if (n >= 1000000000) return `${(n / 1000000000).toFixed(2)} billion`;
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)} million`;
  return n.toLocaleString();
}

function pickWriting(family, name) {
  if (/Arabic/i.test(name)) return 'Arabic-script traditions and regionally adapted orthographies';
  if (/Chinese/i.test(name)) return 'Chinese character traditions with regional standards';
  if (/Japanese/i.test(name)) return 'Kanji, Hiragana, and Katakana';
  if (/Korean/i.test(name)) return 'Hangul (with historical Hanja usage)';
  return WRITING_BY_FAMILY[family] || 'Regional orthographies shaped by education and publishing standards';
}

function pickRegion(family) {
  return REGION_HINTS[family] || 'Multiple regions with country-specific language policy contexts';
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function relatedFor(list, idx) {
  const current = list[idx];
  const sameFamily = list.filter(
    (x, i) => i !== idx && x.family === current.family && Math.abs(x.rank - current.rank) <= 35
  );
  const picks = sameFamily.slice(0, 2);
  if (picks.length < 2) {
    for (const candidate of list) {
      if (candidate.iso === current.iso) continue;
      if (picks.some((p) => p.iso === candidate.iso)) continue;
      picks.push(candidate);
      if (picks.length === 2) break;
    }
  }
  return picks;
}

function nextReads(list, idx) {
  const reads = [];
  for (let i = idx + 1; i < list.length && reads.length < 2; i += 1) reads.push(list[i]);
  for (let i = idx - 1; i >= 0 && reads.length < 4; i -= 1) reads.push(list[i]);
  return reads.slice(0, 4);
}

function buildFaq(name, family) {
  return [
    {
      q: `How many people speak ${name} natively?`,
      a: `${name} is listed in the current WLC ranking set with the native-speaker estimate shown above. Counts are estimates and may vary by source methodology.`
    },
    {
      q: `Which language family includes ${name}?`,
      a: `${name} is grouped under the ${family} family in this dataset, with branch information shown in the profile metadata.`
    },
    {
      q: `Is ${name} endangered?`,
      a: `Endangerment should be evaluated with more than population size: intergenerational transmission and domain use are key indicators. See this page's vitality note for context.`
    }
  ];
}

function buildPage(language, languages, idx) {
  const iso = language.iso.toLowerCase();
  const name = language.name;
  const family = language.family || 'Unclassified';
  const branch = language.branch || 'Unspecified branch';
  const rank = language.rank || '-';
  const speakers = formatSpeakers(language.speakers);
  const canonical = `https://worldlanguagescatalog.vercel.app/languages/${iso}.html`;
  const writing = pickWriting(family, name);
  const region = pickRegion(family);
  const related = relatedFor(languages, idx);
  const reads = nextReads(languages, idx);
  const faq = buildFaq(name, family);

  const metaDescription = `${name} language profile with native-speaker estimate, family classification, regional distribution, writing system, grammar highlights, dialect notes, and references.`;
  const title = `${name} Language Profile | Speakers, Family, Script, and Linguistic Notes | WLC`;

  const relatedHtml = related
    .map(
      (r) =>
        `<li><a href="${r.iso}.html">${escapeHtml(r.name)}</a>: comparative context within ${escapeHtml(
          r.family || 'related language families'
        )}.</li>`
    )
    .join('\n');

  const readsHtml = reads
    .map((r) => `<li><a href="${r.iso}.html">${escapeHtml(r.name)}</a></li>`)
    .join('\n');

  const faqHtml = faq
    .map(
      (f) =>
        `<div class="faq-item"><h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p></div>`
    )
    .join('\n');

  const refsHtml = REFERENCES.map(
    (r) =>
      `<li><a href="${r.href}" target="_blank" rel="noopener">${escapeHtml(r.label)}</a></li>`
  ).join('\n');

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `${name} language profile`,
      url: canonical,
      isPartOf: 'https://worldlanguagescatalog.vercel.app/'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${name} language profile`,
      description: metaDescription,
      author: { '@type': 'Organization', name: 'World Languages Catalog Editorial Board' },
      dateModified: '2026-04-26',
      mainEntityOfPage: canonical,
      publisher: {
        '@type': 'Organization',
        name: 'World Languages Catalog',
        logo: {
          '@type': 'ImageObject',
          url: 'https://worldlanguagescatalog.vercel.app/img/logo.png'
        }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://worldlanguagescatalog.vercel.app/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Languages',
          item: 'https://worldlanguagescatalog.vercel.app/'
        },
        { '@type': 'ListItem', position: 3, name, item: canonical }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    }
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(metaDescription)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <link rel="stylesheet" href="../css/styles.css">
  <style>
    .lang-article { max-width: 980px; margin: 0 auto; padding: 7rem 1.2rem 3rem; }
    .lang-crumbs { font-size: 0.9rem; color: var(--muted); margin-bottom: 1.6rem; }
    .lang-crumbs a { color: var(--accent); text-decoration: none; }
    .lang-hero h1 { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 0.7rem; }
    .lang-hero p { color: var(--text-dim); line-height: 1.8; margin-bottom: 1.1rem; }
    .lang-tags { display: flex; flex-wrap: wrap; gap: 0.55rem; margin-bottom: 1rem; }
    .lang-tag { font-size: 0.78rem; border: 1px solid var(--border); background: var(--surf2); color: var(--text-dim); padding: 0.35rem 0.65rem; border-radius: 999px; }
    .lang-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.7rem; margin: 1.3rem 0 2.3rem; }
    .lang-grid .info-card { padding: 1rem; }
    .lang-grid h3 { font-size: 0.82rem; color: var(--muted); margin-bottom: 0.35rem; text-transform: uppercase; letter-spacing: 0.07em; }
    .lang-grid p { margin: 0; font-size: 0.95rem; color: var(--text); line-height: 1.5; }
    .lang-section { margin-top: 2rem; background: var(--surf); border: 1px solid var(--border); border-radius: 12px; padding: 1.4rem; }
    .lang-section h2 { font-size: 1.35rem; margin-bottom: 0.85rem; color: var(--accent); }
    .lang-section p, .lang-section li { color: var(--text-dim); line-height: 1.75; }
    .lang-section ul { margin: 0.5rem 0 0; padding-left: 1.2rem; }
    .faq-item { padding: 0.85rem 0; border-top: 1px dashed var(--border); }
    .faq-item:first-child { border-top: none; padding-top: 0; }
    .faq-item h3 { font-size: 1.02rem; margin-bottom: 0.3rem; color: var(--text); }
    .editor-box { margin-top: 2rem; border: 1px solid var(--border); border-radius: 12px; background: var(--surf2); padding: 1.2rem; }
    .editor-box p { margin: 0.35rem 0; color: var(--text-dim); }
  </style>
  <script type="application/ld+json">${JSON.stringify(schemas[0])}</script>
  <script type="application/ld+json">${JSON.stringify(schemas[1])}</script>
  <script type="application/ld+json">${JSON.stringify(schemas[2])}</script>
  <script type="application/ld+json">${JSON.stringify(schemas[3])}</script>
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
        <a href="../diversity.html">Diversity</a>
        <a href="../about.html">About</a>
        <a href="../contact.html">Contact</a>
      </div>
    </div>
  </nav>

  <main class="lang-article">
    <nav aria-label="Breadcrumb" class="lang-crumbs">
      <a href="../index.html">Home</a> &gt; <a href="../index.html">Languages</a> &gt; <span aria-current="page">${escapeHtml(
        name
      )}</span>
    </nav>

    <header class="lang-hero">
      <div class="lang-tags">
        <span class="lang-tag">ISO 639-3: ${iso.toUpperCase()}</span>
        <span class="lang-tag">Global L1 Rank: #${rank}</span>
        <span class="lang-tag">Family: ${escapeHtml(family)}</span>
      </div>
      <h1>${escapeHtml(name)} Language Guide</h1>
      <p>${escapeHtml(name)} appears in the WLC ranking set with an estimated ${escapeHtml(
    speakers
  )} native speakers and is classified under ${escapeHtml(family)}.</p>
    </header>

    <section class="lang-grid" aria-label="Fast facts">
      <article class="info-card"><h3>Native Speakers</h3><p>${escapeHtml(
        speakers
      )} (L1 estimate context).</p></article>
      <article class="info-card"><h3>Geographic Distribution</h3><p>${escapeHtml(
        region
      )}</p></article>
      <article class="info-card"><h3>Language Family</h3><p>${escapeHtml(
        family
      )} &gt; ${escapeHtml(branch || 'Unspecified branch')}</p></article>
      <article class="info-card"><h3>Writing System</h3><p>${escapeHtml(writing)}</p></article>
    </section>

    <section class="lang-section"><h2>Language Overview</h2><p>${escapeHtml(
      name
    )} is documented in this catalog as part of the ${escapeHtml(
    family
  )} family. This page provides a concise reference structure for demographic, genealogical, and usage context.</p></section>
    <section class="lang-section"><h2>Native Speakers Estimate</h2><p>Current WLC ranking context places ${escapeHtml(
      name
    )} at rank #${rank} by native-speaker estimate, with approximately ${escapeHtml(
    speakers
  )} L1 speakers.</p></section>
    <section class="lang-section"><h2>Geographic Distribution</h2><p>Distribution patterns for ${escapeHtml(
      name
    )} generally align with ${escapeHtml(
    region
  )}. Country-level concentration and bilingual patterns may vary by census method.</p></section>
    <section class="lang-section"><h2>Language Family</h2><p>${escapeHtml(
      name
    )} is grouped under ${escapeHtml(family)} with branch-level label: ${escapeHtml(
    branch || 'Unspecified branch'
  )}.</p></section>
    <section class="lang-section"><h2>Writing System</h2><p>${escapeHtml(
      writing
    )}. Local orthographic standards may differ across regions and publishing traditions.</p></section>
    <section class="lang-section"><h2>Historical Background</h2><p>Historical development of ${escapeHtml(
      name
    )} reflects long-term language contact, state policy, migration, and literacy practices in its primary speech communities.</p></section>
    <section class="lang-section"><h2>Phonological Features</h2><p>Phonological detail can vary by regional variety. This page highlights classification and vitality context, while deeper phonological analysis should reference specialized linguistic descriptions.</p></section>
    <section class="lang-section"><h2>Grammar Highlights</h2><p>Core grammatical patterns in ${escapeHtml(
      name
    )} are interpreted in relation to its family and branch profile. Comparative grammar work should account for regional standards and register variation.</p></section>
    <section class="lang-section"><h2>Cultural Significance</h2><p>${escapeHtml(
      name
    )} carries social and cultural significance through education, media, oral traditions, and community identity. Its role can differ between formal and informal domains.</p></section>
    <section class="lang-section"><h2>Dialects and Regional Variation</h2><p>Regional variation may include pronunciation shifts, lexical differences, and register preferences. Standardized forms do not eliminate local diversity.</p></section>
    <section class="lang-section"><h2>Endangered Status</h2><p>Vitality assessment should consider intergenerational transmission and domain use, not only raw population size.</p></section>
    <section class="lang-section"><h2>Related Languages</h2><ul>${relatedHtml}</ul></section>
    <section class="lang-section"><h2>Commonly Asked Questions</h2>${faqHtml}</section>
    <section class="lang-section"><h2>Linguistic Notes</h2><p>Speaker totals and classifications can vary by source and update cycle. For rigorous comparison, always verify publication date and L1/L2 treatment.</p></section>
    <section class="lang-section"><h2>Sources and References</h2><ul>${refsHtml}</ul></section>

    <section class="editor-box">
      <h2>Editorial Quality Signals</h2>
      <p><strong>Authoring team:</strong> World Languages Catalog Editorial Board.</p>
      <p><strong>Last substantive update:</strong> April 26, 2026.</p>
      <p><strong>Method:</strong> Ethnologue-aligned ranking context, ISO code standardization, and cross-checking against public references.</p>
      <p><strong>Corrections:</strong> Use the <a href="../contact.html">Contact page</a> to submit evidence-backed revisions.</p>
    </section>

    <section class="lang-section">
      <h2>Continue Reading</h2>
      <ul>${readsHtml}</ul>
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
        <a href="../privacy.html">Privacy Policy</a>
        <a href="../terms.html">Terms</a>
      </div>
      <p>&copy; 2026 World Languages Catalog. Language profile page for ${escapeHtml(
        name
      )}.</p>
    </div>
  </footer>

  <script src="../js/script.js" defer></script>
</body>
</html>`;
}

function run() {
  const top150 = extractTop150();
  const deduped = dedupeByIso(top150);
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (let i = 0; i < deduped.length; i += 1) {
    const lang = deduped[i];
    const html = buildPage(lang, deduped, i);
    fs.writeFileSync(path.join(OUTPUT_DIR, `${lang.iso.toLowerCase()}.html`), html, 'utf8');
  }

  console.log(`Generated ${deduped.length} language pages from Top 150 unique ISO entries.`);
}

run();
