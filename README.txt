MORVEE HOTELS - REDESIGNED HOMEPAGE
====================================

FOLDERS
- single-file/index.html : everything (HTML + CSS + JS) in ONE file. Easiest to upload.
- split/                 : same site separated into index.html, css/style.css, js/main.js
                           (easier for developers to edit).
Use ONE of the two, not both.

HOW TO PUBLISH
1. Upload index.html (and the css/ and js/ folders if you use the split version)
   to the website root, replacing the current index.html. Keep a backup first.
2. The page already points to the original images on the live site:
   assets/hero-brand.jpg, hotel-alipur.jpg, hero-durgapur.jpg, kolkata1.jpg,
   durgapur-city.jpg. They are loaded from https://www.morveehotels.com/assets/
   so keep your existing assets/ folder on the server.
   If the images ever fail to load, a gradient background is shown instead.
3. All links (hotel pages, booking.html, 360 virtual tours, policies, maps,
   phone and email) are the same as the original site.

NOTES
- Google Fonts (Cormorant Garamond, Jost) load from the internet.
- The booking form fields are visual only; "Check Availability" opens
  booking.html. Connect the date/guest fields to your booking engine if needed.
- Animations switch off automatically for visitors with "reduce motion" enabled.
- Hosting on a different domain? The image and link URLs are absolute, so they
  still work; change them if you move the assets.
