# World Languages Catalog (WLC)

Production-ready static site for exploring ranked and cataloged world languages, with live Wikidata integration plus curated Ethnologue top-ranking data.

## Project Structure

- `index.html`: full language catalog page
- `ranking.html`: top 150 ranking page
- `css/styles.css`: site styles
- `js/script.js`: data loading, sorting, filtering, rendering, modal logic
- `data/descriptions.json`: curated language descriptions
- `img/`: logos, favicon, icons
- `robots.txt`: crawler rules
- `sitemap.xml`: search engine URL index
- `site.webmanifest`: PWA/web app metadata

## Local Run

Use a local static server (recommended so fetch works correctly):

```bash
# example (Node)
npx serve .
```

Then open:

- `http://localhost:3000/` (or the port shown)

## Publish + Google Search Console Checklist

Before going live, update these placeholders with your real domain:

1. `index.html`
   - `canonical`, `og:url`, `og:image`, `twitter:image`, `alternate hreflang`
2. `ranking.html`
   - `canonical`, `og:url`, `og:image`, `twitter:image`, `alternate hreflang`
3. `robots.txt`
   - `Sitemap: https://YOUR-DOMAIN/sitemap.xml`
4. `sitemap.xml`
   - all `<loc>` URLs to your real domain

Then complete Search Console:

1. Add property in Google Search Console using your final domain.
2. Use **HTML meta tag verification**:
   - Replace `PASTE_GOOGLE_SEARCH_CONSOLE_TOKEN_HERE` in both HTML files.
3. Deploy site.
4. In Search Console, submit:
   - `https://YOUR-DOMAIN/sitemap.xml`
5. Request indexing for:
   - `/`
   - `/ranking.html`

## Data Sources

- Ethnologue 29th Edition (2026): https://www.ethnologue.com/
- Wikidata SPARQL: https://query.wikidata.org/
- ISO 639-3: https://iso639-3.sil.org/
