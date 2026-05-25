# Dunkin Bucket Locations Finder

Static MVP for the rising keyword `dunkin bucket locations`.

Live Cloudflare Pages URL: https://dunkin-bucket-finder.pages.dev/

## What it does

- Accepts a ZIP code or city.
- Opens the right Google Maps search for nearby Dunkin stores.
- Generates a copyable store call script.
- Shows market-specific tips for large metro areas.
- Includes placeholder ad slots for Adsterra or another ad network.

## Local preview

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Cloudflare Pages deploy

```bash
npx wrangler pages deploy . --project-name=dunkin-bucket-finder
```

Run the command from this directory.
