# Amit & Peul — Wedding Invitation

A mobile-first, static wedding invitation website with an animated envelope, Bengali-inspired ornaments, countdown, venue links, and calendar downloads. This is a standalone app at `/Users/rif/Desktop/workspace/wedding-invitation`; the ApnaSalon Android project is a separate sibling directory.

## Requirements and commands

Install Node.js 20 or later. Open a terminal in this folder:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. The preview envelope, events, countdown, map links, and calendar downloads work during development.

Run feature tests and create a static production build:

```bash
npm test
npm run build
npm run preview
```

The generated site is in `dist/`. `npm run build` runs the strict TypeScript build before Vite creates the static files.

## Editing event information

All event copy and details live in `src/data/weddingData.ts`:

- Names, English invitation copy, Bengali invocation, family names, timezone, occasion.
- Event title, `YYYY-MM-DD` date, display time, 24-hour local start hour/minute.
- Venue name and address.
- Optional verified map search/directions URLs, Google Maps embed URL, and coordinates. When coordinates are provided, they are used for the map pin, directions, and map preview.
- `publicUrl` can be set to a known HTTPS deployment URL to override automatic detection.

The provided invitation events are December 13 and 14, 2026 in `Asia/Kolkata`. For another event time, update both its display `time` and 24-hour `startHour`/`startMinute`; countdown and calendar exports use the 24-hour values. The calendar export currently reserves a two-hour event duration.

### Map links and embeds

When coordinates are provided for an event, its map pin, directions destination, and embedded preview use those exact coordinates and need no API key. Otherwise, search and directions links are generated from the venue/address. To use verified direct links, set `googleMapsSearchUrl` and/or `googleMapsDirectionsUrl` on that event; to provide a specific embed, set a valid HTTPS Google Maps embed URL (`googleMapsEmbedUrl`). Confirm pins with the hosts before travelling.

## Calendar files

Each **Add to Calendar** action downloads an `.ics` event with `Asia/Kolkata` timezone, venue, description, and public invitation URL. It can be opened/imported by Google Calendar, Apple Calendar, and other calendar apps.

## Free GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` runs tests, builds the site, sets absolute social preview URLs, and deploys to GitHub Pages whenever changes are pushed to `main`.

1. Create a GitHub account and a **public** repository named exactly `amit-peul-wedding`.
2. Open a terminal in the `wedding-invitation` directory and initialize/push this standalone website project:

   ```bash
   git init
   git add .
   git commit -m "Add Amit and Peul wedding invitation"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/amit-peul-wedding.git
   git push -u origin main
   ```

3. In the GitHub repository, open **Settings → Pages** and choose **GitHub Actions** as the build/deployment source.
4. Open **Actions**, enable workflows if asked, then watch **Deploy wedding invitation**. Future pushes to `main` redeploy automatically.
5. For a repository named `amit-peul-wedding`, the public URL will be:

   ```text
   https://YOUR_USERNAME.github.io/amit-peul-wedding/
   ```

   GitHub Actions derives both the Vite project base path and public metadata URL from the repository owner/name, so no username is hardcoded. If you choose another repository name, the deployed URL follows that name.
6. Open the Actions deployment link (or **Settings → Pages**) and test the public URL on desktop and a mobile phone. Check that the page loads over HTTPS and links include the repository path.

GitHub Pages is a free static hosting option. Another free-tier static host can be used by running `npm run build` and deploying `dist/`, but its public origin should be HTTPS for sharing/QR and preview links.

## Social preview image / WhatsApp preview

The source social image is `public/og-invitation.svg`, an original 1200×630 SVG, exported as the optimized `public/og-invitation.jpg` used by social previews. The deployment workflow creates absolute Open Graph/Twitter image URLs in `dist/index.html`. WhatsApp and social crawlers may cache an older preview; wait for recrawl or share a fresh URL with a harmless query-string version after an image change. Verify the deployed `og:image` points to the actual hosted image.

## Design and accessibility

React, TypeScript, Vite, and Lucide are the only runtime dependencies. Artwork is original inline SVG/CSS. Event times use Asia/Kolkata with native date APIs. Scroll reveal and envelope animation respect `prefers-reduced-motion`; the site supports keyboard focus, semantic section navigation, and mobile safe areas.

## Testing checklist

- `npm test` checks event date/time conversion, countdown behavior, venue search/directions links, calendar timezone, and local-public URL handling.
- `npm run build` type-checks and builds the site.
- On a deployed phone URL, open the envelope, navigate sections, try Maps, create both `.ics` files, and verify no horizontal overflow at common mobile widths.
