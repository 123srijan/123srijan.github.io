# Partner games and ad networks

## More Playgama games

The site uses the Playgama partner catalog export with the CLID from the signed-in partner account. The catalog now contains 311 entries: the original 61 plus 250 more from the account's full catalog export. Each card opens the game through GameBox's own player page, and the game itself is served by Playgama.

To keep the catalog current, sign in at [Playgama Widgets](https://widgets.playgama.com/), download the catalog while signed in so the partner CLID is included, then replace `playgama-games.json` with the selected export. The site only supports HTTPS games on its approved Playgama/game hosts.

## Apply for another game catalog

GameDistribution offers game URLs for partner sites and publisher integrations. To request access, use its [digital publishers page](https://www.gamedistribution.com/publishers/). The company reviews publisher applications. If approved, use only its supplied catalog/feed and publisher integration code. The current site does not yet contain GameDistribution titles because we do not have an approved account, feed, or publisher ID for this site.

Do not share passwords or accept partner terms on anyone else's behalf. A publisher account, account-specific IDs, and approval are required before another provider's games can be added and monetized.

## Add a second display-ad provider alongside AdSense

The site has reserved placements for a second display-ad provider:

- `thirdPartyAdHome` on the game catalog
- `thirdPartyAdLeft` and `thirdPartyAdRight` beside the player
- `thirdPartyAdBottom` below the player

These are placeholders until a provider approves the site and issues exact unit code. One option is an [Adsterra Publisher](https://adsterra.com/banner-ads/) banner or native-banner unit. After approval, copy the generated unit code and add it to a placement. Do not use pop-under or redirect formats for this arcade.

Only add the provider's exact authorized seller record to `ads.txt` when it supplies one; keep the existing Google record. Do not guess a publisher ID or seller line. Check terms for the game partner before showing a separate display ad beside a partner-hosted game.

Google permits non-Google ads on the same page as AdSense, but all ads must follow Google policies and contractual restrictions, and ad content must not outweigh page content. See [Google's guidance on using other ad networks with AdSense](https://support.google.com/adsense/answer/9728?hl=en) and its [AdSense program policies](https://support.google.com/adsense/answer/48182?hl=en-EN).
