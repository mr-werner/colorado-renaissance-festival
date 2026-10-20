# Colorado Renaissance Festival — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://coloradorenaissance.com/ (Larkspur, CO).
Preview: https://crf.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

This is a custom build for the festival, not the shared concept layout: a heraldic look built from the festival's shield logo, pennant garlands, a parchment "proclamation" scroll and a jubilee banner for the 50th season. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `colorado-renaissance-festival` (framework: Vite). Pushes to `main` deploy automatically once the repo is connected.
Domain `crf.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional):

| Variable | Purpose |
|---|---|
| `VITE_CONCEPT_END_DATE` | Countdown end date in the concept widget (2026-11-24) |
| `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` | Live Google rating (`api/google-reviews.js`); not used on the page |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | "Send a raven" form emails (`api/contact.js`). Without them the form shows a demo message |

The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## What changed from the current site

- **One current season everywhere.** The current homepage banner thanks visitors for 2026 and points to June 2027, but its meta description still advertises June 13 to August 2, 2026, the body still says "Celebrating 49 Years", and the General Information page still shows the 2017 season with 2017 ticket prices. The concept speaks about the 50th season in one voice.
- **Plan-your-visit up front.** Location, I-25 exits, hours, tickets, free King Soopers parking with the shuttle, rain-or-shine and no-pets policies sit in six cards near the top instead of on separate pages.
- **A reason to come back now.** With tickets "currently unavailable", the old site has no next step. The concept's main call to action is "Notify me when tickets open", feeding a form (or newsletter list) so the off-season builds a list for the 50th.
- **Empty counters removed.** The "Years of Experience / Happy Visitors / Expert Vendors / Special Events" counters on the current homepage show no numbers; the concept drops them.
- **Social links.** The current Facebook and Instagram icons link nowhere. The concept only shows X (@corenfest) until the real URLs are confirmed.
- Kept: the shield logo, sponsor logos (King Soopers, Pepsi, Coors Light, FOX31, Circle K, iHeartMedia, Sunbelt Rentals, CBS Colorado), the Entertainment / Food & Drynk / Artisans structure with all 12 artisan categories, and their own performer and food photos (hotlinked from their site).

## Owner should confirm

- Brand colors: the crimson, gold, forest and royal palette is a heraldic starting point; match it to the shield logo's exact colors.
- 2027 dates, hours (10:00 a.m. to 6:30 p.m. and the 5:00 p.m. box office close come from the older General Information page) and ticket prices.
- I-25 exits 172/173 and the shuttle, handicap and RV parking details (from the General Information page).
- That King Soopers still sponsors parking and sells tickets for 2027, and that all eight sponsors are current.
- The Facebook and Instagram URLs (empty on the current site).
- Whether to keep "Notify me" as a contact form or connect it to the festival's newsletter tool.
- Photos are hotlinked from coloradorenaissance.com for the demo and should be re-hosted (and refreshed with 2026 photos) before launch.
