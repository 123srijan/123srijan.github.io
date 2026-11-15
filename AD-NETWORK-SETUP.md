# Add another ad network

GameBox now has clearly marked slots ready for a second display-ad provider:

- `thirdPartyAdHome` on the game catalog
- `thirdPartyAdLeft` and `thirdPartyAdRight` beside the game player
- `thirdPartyAdBottom` beneath the game player

These slots remain placeholders until a provider approves the site and gives you its exact ad-unit code. No guessed publisher IDs or third-party scripts are installed.

## Suggested setup: Adsterra banner or native banner

1. Create/sign in to an Adsterra **Publisher** account and add `123srijan.github.io` as a website.
2. Request a standard Banner or Native Banner unit and wait for approval.
3. In the publisher dashboard, use **Get code** for that exact unit. Prefer a regular display unit; avoid pop-under or redirect formats for this game site.
4. Keep the provider's code unchanged and add it to one of the matching `thirdPartyAd…` slots. If you want help, provide the code they generated for the slot (never send your password or account login).
5. Add the provider's exact authorized-seller record to `ads.txt` only when the provider gives you that record. Keep the existing Google line.
6. Review the result on desktop and mobile, then check both providers' reports for impressions and earnings.

Google says non-Google ads can run on the same page as AdSense ads, subject to its publisher policies and contractual terms. Keep ads clearly separate from game controls and ensure ads do not outweigh the page's useful content. For partner-hosted games, check the game partner's terms before placing a separate ad beside that game.

## What you need before ads can appear

The site slots are only placements. The ad provider must approve your site and issue the actual unit code. Until then, the slots display an `ADVERTISEMENT` label and do not request or serve ads.

References: [Adsterra publisher banner setup](https://adsterra.com/banner-ads/), [Google: using other ad networks with AdSense](https://support.google.com/adsense/answer/9728?hl=en), and [Google ads.txt guide](https://support.google.com/adsense/answer/12171612?hl=en).
