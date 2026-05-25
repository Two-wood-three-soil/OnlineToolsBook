# Google Search Console Setup

Search Console verification requires a token from the Google account that will own the properties. These static sites are ready for URL-prefix verification by either HTML file upload or meta tag.

Recommended flow:
1. Open Google Search Console.
2. Add a URL-prefix property for each URL below.
3. Choose HTML file verification.
4. Put each downloaded verification file in that site's root directory.
5. Redeploy that site to Cloudflare Pages.
6. Click Verify, then submit the sitemap URL.

Properties:
- https://costco-holiday-hours-checker.pages.dev/ -> submit sitemap: https://costco-holiday-hours-checker.pages.dev/sitemap.xml
- https://scary-movie-popcorn-bucket.pages.dev/ -> submit sitemap: https://scary-movie-popcorn-bucket.pages.dev/sitemap.xml
- https://first-light-release-date.pages.dev/ -> submit sitemap: https://first-light-release-date.pages.dev/sitemap.xml
- https://netflix-cancellation-tracker.pages.dev/ -> submit sitemap: https://netflix-cancellation-tracker.pages.dev/sitemap.xml
- https://from-episode-release-checker.pages.dev/ -> submit sitemap: https://from-episode-release-checker.pages.dev/sitemap.xml
- https://enhanced-games-watch-checker.pages.dev/ -> submit sitemap: https://enhanced-games-watch-checker.pages.dev/sitemap.xml
- https://the-boroughs-cast-finder.pages.dev/ -> submit sitemap: https://the-boroughs-cast-finder.pages.dev/sitemap.xml
- https://jack-ryan-ghost-war-cast.pages.dev/ -> submit sitemap: https://jack-ryan-ghost-war-cast.pages.dev/sitemap.xml
- https://apple-card-airpods-promo.pages.dev/ -> submit sitemap: https://apple-card-airpods-promo.pages.dev/sitemap.xml

Existing deployed site also to add:
- https://dunkin-bucket-finder.pages.dev/ -> submit sitemap: https://dunkin-bucket-finder.pages.dev/sitemap.xml
