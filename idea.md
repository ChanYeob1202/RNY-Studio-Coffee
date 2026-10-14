# RNY Coffee Studio: Next Features

Planned additions to the site, in build order. Each one says what it is, why it matters, how it fits the current code, and how we'll measure it.

**Current baseline:** about 4.5k visitors and 2.4k+ "Order Online" clicks (~53%), tracked with the GA4 event `order_online_click` in `src/components/hero/Hero.jsx`.

---

## 1. Sticky "Order Now" button on mobile

### What
A fixed bar at the bottom of the screen on phones with one "Order Now" button that opens Toast. It stays visible while the visitor scrolls through About, Coffee, Location and Contact.

### Why
- Right now the only order button is in the hero. Once a visitor scrolls past it, they have to scroll back up to order.
- Most café visitors are on phones, so this targets our strongest number directly.
- It's the cheapest feature here, and the result is easy to measure.

### How
- New component: `src/components/order/StickyOrderButton.jsx`, rendered once in `App.js`.
- Show it on mobile only (`md:hidden`), using `fixed bottom-0 inset-x-0 z-40`. The navbar already uses `z-50`, so the bar stays below it.
- **Hide it while the hero is on screen,** so two order buttons never show at once. Use an `IntersectionObserver` on the hero element, which `sectionRefs.current['home']` in `App.js` already points to.
- Add bottom padding for the iPhone home indicator: `pb-[env(safe-area-inset-bottom)]`.
- Add bottom padding to the footer too, so the bar never covers the footer links.
- **Share the tracking code.** Move `trackOrderClick` out of `Hero.jsx` into `src/utils/analytics.js` and give it a `label` parameter. The hero then sends `hero_order_now` and the sticky bar sends `sticky_mobile_order`.
- **Add UTM tags to the Toast link,** for example `?utm_source=website&utm_medium=sticky_bar`, so Toast's reports can show which orders came from the site. Keep the Toast URL in one constant, so the hero and the sticky bar can't get out of sync.

### Measure
- GA4: compare the number of `order_online_click` events labelled `hero_order_now` with those labelled `sticky_mobile_order`.
- Success: total order clicks go up compared with the 2.4k baseline, and not just shift from the hero to the sticky bar.

### Effort
About half a day.

---

## 2. Google reviews section

### What
A "What people are saying" section between **Our Coffee** and **Location**. It shows the Google star rating, review count, 3–6 short review quotes and two buttons: "See all reviews on Google" and "Leave a review."

### Why
- New visitors trust other customers more than our own description.
- The "Leave a review" link helps grow the number of Google reviews, which also helps the café show up in Google Maps and local search results.

### How: two phases

**Phase A (start here): curated, static**
- New section: `src/sections/reviews/Reviews.jsx`.
- Pick 3–6 real reviews from the café's Google listing and put them in a small data array: first name, star rating, short quote and date.
- Link to the Google listing for "See all reviews."
- "Leave a review" uses Google's write-review link: `https://search.google.com/local/writereview?placeid=<PLACE_ID>`.
- Add a "Reviews" item to `navItems` in `App.js`. Navbar and Footer will show it automatically, because they render from that list.
- Pros: no API key, no cost, no extra script, so it doesn't slow the page. Con: someone updates it by hand every month or two.

**Phase B (later, optional): live data**
- Fetch the rating and reviews from the Google Places API through a **Netlify Function**, so the API key never reaches the browser. Cache the response for about 24 hours.
- Follow Google's display rules: show reviewer attribution and Google branding, and don't store review text longer than the terms allow.
- Avoid paid third-party review widgets. They add heavy scripts, which would undo the earlier performance work.

### Measure
- GA4 events: `review_see_all_click` and `leave_review_click`.
- Track the Google review count each month, before and after launch.

### Effort
Phase A: half a day. Phase B: one to two days.

---

## 3. Careers / job application page

### What
A page at `/careers` with open positions (e.g. Barista, Shift Lead) and an application form. The owner gets an email for each application, and every application is also saved in one place.

### Why
- Cafés hire often. Right now applicants have to walk in or send a DM.
- A shareable link (`rnycoffee.../careers`) can go in the Instagram bio, on Indeed or on a QR code in the café window.
- It saves the owner time, which is easy to explain when discussing pay.

### How
- **Routing:** `react-router-dom` is already installed but not used yet. Wrap the app in `BrowserRouter` in `src/index.js`, keep the current one-page site at `/` and add `/careers`. `netlify.toml` already sends every path to `index.html`, so `/careers` will work when someone opens it directly.
- New page: `src/pages/careers/Careers.jsx`, with a "Careers" link in the Footer. Probably leave it out of the main navbar so the navbar stays focused on customers.
- **Form backend: Netlify Forms (recommended) instead of EmailJS.**
  - Applications are saved in the Netlify dashboard as well as emailed, so nothing is lost if an email goes to spam.
  - It supports **résumé file uploads**. EmailJS attachments are limited.
  - It includes spam filtering and a honeypot field.
  - It needs no API keys in the frontend.
  - Because this is a React app, Netlify needs a hidden copy of the form in `public/index.html` to detect it, and the React form must submit the field `form-name`.
- **Form fields:** name, email, phone, position, which days and shifts they can work, earliest start date, experience, "Why RNY?" and résumé (optional, PDF, 5 MB or less).
- **Validation:** required fields, a valid email address and phone number, a file type and size check, and a friendly success message after submitting.
- **Accessibility:** labels on every input, an error message under each invalid field, and a form that works with only a keyboard.

### Ask the owner before building
- Which positions are open, and is hiring ongoing or seasonal?
- **Pay range.** California requires a pay scale in job postings for employers with 15 or more employees, and listing pay gets more applicants anyway.
- Which email address should receive applications?
- Is there an equal-opportunity line or other hiring wording they want on the page?

### Privacy
- Collect only what's needed. Never ask for SSN, date of birth or ID numbers on the form.
- Delete old applications from Netlify regularly, for example after 6 months.

### Measure
- Number of applications a month (Netlify dashboard).
- GA4: `careers_page_view` and `job_application_submit`.
- Ask the owner: hours saved, and how many hires came through the page.

### Effort
One to two days.

---

## Build order

| # | Feature | Effort | Main metric |
|---|---|---|---|
| 1 | Sticky mobile order button | ~0.5 day | More order clicks |
| 2 | Google reviews (Phase A) | ~0.5 day | Review clicks, review count |
| 3 | Careers page | 1–2 days | Applications a month |

## Cleanup to do alongside
- Restore the deleted `public/` images, which are still in use (`git restore public/`).
- `src/components/order/Order.jsx` isn't used in `App.js`. Either use it as an `/order` page now that routing is coming, or delete it.
- `@emailjs/browser` is installed but not used. Remove it if Netlify Forms covers our needs.
