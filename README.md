# BakerLand Cafe — Shopify Theme

Single-page Shopify Online Store 2.0 theme for **BakerLand Cafe** in Sugar Land, TX. Built by OAT Marketing 2026-06-04.

The current site state shows that the cafe is **open in-store** and **online ordering is coming soon**. Layout is a warm, photography-driven single page inspired by the Xocora bakery WP theme aesthetic.

## What's in the box

- `layout/theme.liquid` — base layout, fonts, meta, asset hookup
- `templates/index.json` — Online Store 2.0 home template that wires up the sections
- `sections/` — modular Liquid sections (header, hero, about, gallery, visit, coming-soon, footer) + the `header-group.json` / `footer-group.json` section groups
- `assets/theme.css` — warm cream + cocoa + raspberry + honey palette, Fraunces serif headlines, Inter body, motion + reduced-motion handling
- `assets/theme.js` — IntersectionObserver scroll reveals, sticky header behavior
- `assets/photo_*.{webp,jpg}` — real BakerLand pastry case photography (scraped from Google Maps 2026-06-04, 8 stills resized for web)
- `config/settings_schema.json` — theme settings (cafe name, phone, address, hours, map URL — all editable from the Shopify customizer)

## Cafe facts baked into the theme (from Google Maps, 2026-06-04)

- **Name:** BakerLand Cafe
- **Address:** 14021 Southwest Fwy, Suite 409A, Sugar Land, TX 77478
- **Phone:** (346) 391-5051
- **Hours:** Open daily, 6 AM – 12 AM (per the owner's review replies)
- **Rating:** 4.5★ across 312 reviews
- **Positioning:** Halal-friendly cafe, Turkish-style baklava + pastries, terrace seating, late-night sweets

All of those are wired through `settings_data.json` so they can be edited in the Shopify Customizer without touching code.

## Sections, top to bottom

1. **Header** — sticky brand mark + nav + call CTA
2. **Hero** — full-bleed pastry photo with overlay, big serif headline, 4.5★ social proof, hours summary, dual CTA (Plan a visit · phone)
3. **About** — story copy + 3-stat block + two-photo collage
4. **Gallery** — 8-tile grid of real pastry case photography
5. **Visit Us** — address card + phone card + hours card + Google Maps embed
6. **Coming Soon** — email-capture form (Shopify `/contact` endpoint) for online-ordering launch notifications
7. **Footer** — brand mark + contact lines

Plus a mobile sticky call-CTA fixed at the bottom of small screens.

## Deploy this theme to a Shopify store

This repo is a working Online Store 2.0 theme. Two ways to deploy:

**Option A — Shopify CLI (recommended):**

```bash
# Authenticate once
shopify login --store your-store.myshopify.com

# From inside this repo
shopify theme push --unpublished --json
```

The first push uploads as a new unpublished theme. Subsequent pushes update the same theme.

**Option B — GitHub integration:**

In Shopify Admin → Online Store → Themes → Add theme → "Connect from GitHub", point at `OATMax/bakerland` on the `main` branch. Shopify will pull and auto-update on every push.

## What's intentionally NOT in the build

- No checkout / cart / product templates — the store is in-store-only right now. We added a stub at `templates/index.json` only; if Max enables product sales later, the standard Shopify product/collection templates can be added.
- No multi-language locale files beyond `en.default.json` — easy to add later.
- No analytics/tracking — Max will configure Shopify Analytics or GA4 through the admin separately.

## Editing copy

Most copy is exposed in the customizer via section settings:
- Hero eyebrow / headline / sub / CTA label → `sections/hero.liquid` schema
- About paragraphs → `sections/about.liquid` schema
- Coming-soon heading + body → `sections/coming-soon.liquid` schema
- Phone / address / hours / map URL → global theme settings (settings_schema.json)

Anything not in a setting is hard-coded in the section file; one edit, one push, one save.

— Built by OAT Marketing, 2026-06-04.
