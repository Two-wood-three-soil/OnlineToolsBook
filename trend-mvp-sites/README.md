# Trend MVP Sites

Generated static MVP sites for rising-search single-keyword opportunities.

| Site | Project | Cloudflare URL |
|---|---|---|
| Costco Memorial Day Hours Checker | `costco-holiday-hours-checker` | https://costco-holiday-hours-checker.pages.dev/ |
| Scary Movie 6 Popcorn Bucket Tracker | `scary-movie-popcorn-bucket` | https://scary-movie-popcorn-bucket.pages.dev/ |
| 007 First Light Release Date Watch | `first-light-release-date` | https://first-light-release-date.pages.dev/ |
| Netflix Show Cancellations 2026 Tracker | `netflix-cancellation-tracker` | https://netflix-cancellation-tracker.pages.dev/ |
| From Season 4 Episode 6 Release Time Checker | `from-episode-release-checker` | https://from-episode-release-checker.pages.dev/ |
| Enhanced Games Where to Watch Checker | `enhanced-games-watch-checker` | https://enhanced-games-watch-checker.pages.dev/ |
| The Boroughs Cast and Character Finder | `the-boroughs-cast-finder` | https://the-boroughs-cast-finder.pages.dev/ |
| Jack Ryan Ghost War Cast Finder | `jack-ryan-ghost-war-cast` | https://jack-ryan-ghost-war-cast.pages.dev/ |
| Apple Card AirPods Promo Calculator | `apple-card-airpods-promo` | https://apple-card-airpods-promo.pages.dev/ |

Each site is static HTML/CSS/JS and includes robots, sitemap, privacy page, Cloudflare headers, and ad placeholders.

## Deploy

```bash
npx wrangler pages project create <slug> --production-branch=main
npx wrangler pages deploy trend-mvp-sites/sites/<slug> --project-name=<slug> --branch=main
```

These MVPs were deployed manually with Wrangler because the Cloudflare Pages projects are not linked to a Git provider yet.
