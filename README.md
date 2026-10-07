# Lansattic

Custom Shopify theme for Lansattic jewelry, built on Prestige by Maestrooo.

## Local preview

```sh
shopify theme dev --store 9mvz1j-wm.myshopify.com
```

GitHub stores the theme code. Deploy to Shopify separately.

The base theme and imagery retain their original licensing terms.

## Phase 1 content editing

Open the unpublished Lansattic theme in Shopify's theme editor. Each homepage
section can be edited, reordered, hidden, or removed using the normal controls.

- **Homepage images and text:** select Lansattic Hero, Founder story, or Brand
  world. Upload an image using its image picker to override the included photo.
  The Hero has separate desktop/mobile images and positioning controls.
- **Collections:** edit products, collection descriptions, and images in Shopify
  Products → Collections. Homepage collection cards also have image pickers in
  the theme editor. Empty collection destinations are automatically omitted from
  the custom header, homepage collection cards, and footer.
- **Navigation:** edit the existing header link and mega-menu blocks in the theme
  editor. Footer groups accept a Shopify navigation menu; when none is selected,
  edit their fallback links using one `Label|URL` per line.
- **Customer Care:** edit the corresponding page template in the theme editor.
  The published Shopify Page must use that template. Edit Privacy Policy and
  Terms in Shopify's policy settings.
- **Journal:** create posts in Shopify's Blog posts area, choose the Journal blog,
  add an article image and text, and publish. Published articles appear on the
  Journal page and in the homepage Journal section automatically.
- **SEO:** Theme settings → Homepage SEO controls the homepage title/description.
  Theme settings → Social sharing selects the default sharing image. The Favicon
  setting overrides the included Lansattic monogram. Shopify serves the sitemap
  and default robots file.

The theme normalizes the retired store name in displayed product descriptions
and metadata. The original product records still need a narrow branding update
in Shopify Admin; the theme does not rewrite catalog data.

The privacy-policy display also removes an empty telephone prompt. Update the
policy in Shopify Admin to remove `please call  or` from the contact sentence.

## Phase 1 verification — 4 October 2026

Review the **unpublished** theme at
https://lansattic.com/?preview_theme_id=130612330568.

- Applied the three supplied photographs: maker-at-work hero, hands wearing jade
  in the founder section, and jewelry tray in Jade & Heritage.
- Checked 447 product records for Chinese text and known placeholder/legacy
  branding patterns. Found 116 descriptions containing the retired brand name;
  their storefront display and metadata now use Lansattic.
- Checked 136 rendered destinations, including those 116 product pages: HTTP
  200, valid JSON-LD, no detected Chinese text, known demo phrases, retired brand
  name, or Liquid errors. Also checked the privacy opt-out destination.
- Checked ten representative page types at 1440px and 390px: no horizontal
  overflow, broken loaded images, or empty hrefs. Homepage also checked at 320px
  and 768px. Screenshots and machine-readable results are in `qa/phase-1/`.
- Verified desktop/mobile menu opening and closing, omission of empty Sacred
  Beads links, availability filtering, and the price-sort route.
- Added a product to an isolated test cart, opened Shopify Checkout successfully,
  and cleared the cart. No order or payment was submitted.
- Verified Contact form fields and native endpoint, and newsletter endpoint and
  invalid-email validation. Message delivery and subscriber confirmation were
  not tested.
- Verified homepage SEO title/description, canonical, favicon and sharing image.
  Sitemap and default robots respond successfully; no whole-site disallow rule.
- Final Shopify Theme Check: 0 errors, 10 existing nonblocking warnings.

### Remaining account-level work

The draft is not published. Theme access was available, but Admin API product,
menu and policy editing was not authenticated. The underlying 116 product
records and privacy-policy telephone prompt still need their narrow cleanup in
Shopify Admin, even though the draft renders corrected text. The Five Elements
collection naming is normalized by the theme; use **Five Elements** in the
collection's Admin title as well. The supplied Instagram and Pinterest links
are configured in the local theme's social media settings and footer.

Gmail was confirmed uninstalled during this session. No email thread was read
or sent. The review used the supplied brief, attached reference, and exact
original images found in the Downloads folder.

## Link verification — 5 October 2026

- Checked 133 existing internal destinations across navigation, collections,
  products, customer care, policies and the footer. Browser retries resolved
  automated-request rate limits and the account authentication redirect.
- Materials menu links now search for the named materials instead of opening
  all products. Verified products on all five material destinations.
- Each Five Elements card opens the existing Five Elements collection. The
  five explanatory element blocks were removed from that collection at the
  client’s request. The unlinked `/pages/five-elements` route does not exist
  in Shopify; navigation uses the existing collection.
- Homepage intentions remain visible as labels with one explicit
  **Explore Five Elements** button. The header's Intentions column displays
  Calm, Grounding, Balance, Clarity, Vitality and Connection, as requested in
  the menu reference. Each currently opens the existing Five Elements
  collection; edit the header mega-menu block to assign individual destinations
  when their product collections are ready.
- Verified mobile navigation, filters, the Add to cart button and Checkout;
  cleared the isolated test cart. No order was placed.
- Instagram and Pinterest reached the correct profiles. Etsy blocked automated
  access, so its shop links were preserved and require a manual check.
- Newsletter email validation and the native customer form are correct. The
  authorized signup test stopped at Shopify hCaptcha before submission; signup
  and confirmation email delivery remain unverified.
- Theme Check: 0 errors, 10 existing warnings. Browser evidence is saved in the
  ignored `qa/link-audit/` directory. Changes are in the unpublished draft.

## Requested shopping updates — 6 October 2026

The unpublished draft has both Etsy shops under Our Etsy Shops, with Pearl Jewelry
for Lansattic and Jade & Jadeite Jewelry for Studio Libra Art. The four populated
homepage collection cards use two desktop columns.

All six intentions and five element cards have separate collection destinations.
The five element cards link directly to Wood, Fire, Earth, Metal, and Water.
Until an intention destination has storefront products, its card automatically opens the
populated Five Elements collection (or All Products if Five Elements is empty).
Adding products to the corresponding intention collection activates its dedicated link
without another theme upload. The header intentions use the same safeguard.

In the theme editor, open **Featured jewelry** to select and order individual
products, choose a fallback collection, and change the number displayed. Selected
products take priority; otherwise the section displays products from the chosen
collection. Images, names, and prices use the theme's standard product cards.

Uploaded only the nine files needed for these changes to draft theme
130612330568. Theme Check passed with zero errors and eight existing warnings.
Desktop preview confirmed the two-by-two collection grid, both Etsy descriptions,
six clickable intentions, five element links, and four real products with prices.

Created Calm, Grounding, Balance, Clarity, Vitality, Connection, Wood, Fire,
Earth, Metal, and Water in Shopify Admin as collections ready for product
selection. Collection IDs are recorded in `qa/requested-shopping-updates/collections.json`.
Mobile preview also passed with no horizontal overflow or Liquid errors.

## Section spacing — 7 October 2026

Native theme sections and custom homepage, reviews, story, journal, collection
story and footer sections share responsive spacing variables. Section padding is
64px on desktop/tablet and 32px below 750px; heading-to-content gaps are 32px
and 24px respectively. About chapter spacing remains editable on desktop.
Removed extra story/About wrapper padding that compounded the section gaps.

Uploaded the changed theme files to unpublished draft 130612330568. Theme Check
passed with zero errors and eight existing warnings. Preview browser checks and
screenshots are stored locally in the ignored `qa/spacing-2026-10-07/` folder.
