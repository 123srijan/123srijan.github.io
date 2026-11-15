# Advertising plan for GameBox Arcade

Google AdSense is the primary ad plan. Playgama remains a separate, secondary source for partner games. The catalog has four reserved banner spaces (top, two breaks in the long list, and bottom). The game pages each have one reserved space below recommendations or below the mini-game board, at least 150 pixels from active play. These are placeholders: they do not request ads or earn revenue yet. No other ad network is connected.

## After AdSense approves the site

1. In AdSense, create a **display ad unit** for the site and copy the exact code Google provides. The site already loads the AdSense library for publisher `ca-pub-3642224896936056`, but does not yet have a real ad-unit ID in the page markup.
2. Add generated unit code to selected reserved placements: `adsenseHomeTop`, the two catalog inline slots, `adsenseHomeBottom`, or `adsensePlayerBelow`. Do not guess an ad slot number or alter Google's generated code. Start with fewer placements, then compare revenue per session, viewability, and game play retention before expanding.
3. Keep ads clearly labeled and visually separate from game cards and controls. Do not ask visitors to click ads, point at them with graphics, use pop-ups/pop-unders, or automatically refresh them.
4. Confirm that your publisher ID in `ads.txt` matches the AdSense account. Add another seller line only when an approved provider gives you its exact authorized-seller record.
5. Check AdSense **Sites** and **Policy center** for approval and policy status. Check impressions and earnings in the account that owns the publisher ID.

Game pages have no ad beside, above, or over the game. Their reserved units are below the recommendations or mini-game instructions with a 155-pixel gap. Google strongly recommends keeping content ads at least 150 pixels from a game or removing them from gameplay pages. The recommendation rails remain game links, not ad units.

## Adding another network later

Google allows non-Google ads on the same page as AdSense, subject to Google's policies and your other provider's contract. The page still cannot show more ads than content. A second provider must approve the website and supply its real unit code and seller details before it can run. Nothing else is connected yet. To protect the game experience, use ordinary display banners only; avoid pop-under, forced push prompts, and redirects.

## Other options to consider

- [**Google Ad Manager yield management**](https://support.google.com/adsense/answer/152693?hl=en) is the closest fit for keeping Google as the priority: eligible Google-certified networks can compete for ad units. This requires setting up the relevant Google publisher products and is not switched on by these placeholders.
- [**Ezoic**](https://support.ezoic.com/kb/article/getting-started-ezoics-requirements) generally requires 250,000 monthly active users for new publishers, though an Incubator may help smaller sites. Check its current terms and decide whether its ad stack fits your preference before applying.
- [**Playwire**](https://www.playwire.com/faq) specializes in publisher monetization and rewarded video, but currently lists 500,000 monthly page views for websites and says AdSense cannot run on the site alongside its script. That makes it a later option only if you are willing to replace the on-site AdSense setup.
- Some low-entry networks offer pop-under or push-notification formats. I do not recommend those for this arcade: Google disallows AdSense on sites that trigger pop-unders, and interruptions can hurt player trust.

For the original HTML5 games, [Google's H5 Games Ads program](https://support.google.com/adsense/answer/9959170?hl=en) supports optional rewarded ads and interstitials at natural breaks. It requires program participation and its Ad Placement API. If approved, a player should choose a reward ad, and it should never appear during active gameplay.

More empty boxes do not create income. Revenue depends on approval, eligible visitors, impressions, geography, advertiser demand, and policy compliance; no amount is guaranteed. Never click your own ads or ask anyone else to click them.

References: [Google ad placement policies](https://support.google.com/adsense/answer/1346295?hl=en), [AdSense on game play pages](https://support.google.com/adsense/answer/2768340?hl=en), [Google ads.txt guide](https://support.google.com/adsense/answer/12171612?hl=en), and [Google: using other ad networks](https://support.google.com/adsense/answer/9728?hl=en).
