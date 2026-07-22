# Design QA

- Source visual truth: `/var/folders/q4/7yzhpk0x0pb1qwrq__ggz2kw0000gn/T/codex-clipboard-f40b56ab-e09e-4a0b-9d77-d12d9c865b09.png`
- Local implementation: `http://localhost:3000/`
- Desktop viewport: 1280 × 720
- Mobile viewport: 390 × 844
- States checked: homepage hero, About, Selected Work, Microsoft Storage Cabinet modal, mobile hero
- Implementation screenshots:
  - `/Users/xiaohuihui/Desktop/开到茶花个人网站/design-qa-title-hero.png`
  - `/Users/xiaohuihui/Desktop/开到茶花个人网站/design-qa-title-about.png`
  - `/Users/xiaohuihui/Desktop/开到茶花个人网站/design-qa-title-work.png`
  - `/Users/xiaohuihui/Desktop/开到茶花个人网站/design-qa-title-modal.png`
  - `/Users/xiaohuihui/Desktop/开到茶花个人网站/design-qa-title-mobile.png`
- Combined focused comparison: `/Users/xiaohuihui/Desktop/开到茶花个人网站/design-qa-title-comparison.png`

## Full-view comparison evidence

The source is a cropped editorial heading specimen rather than a complete page, so the full-page check evaluates whether the same two-line hierarchy is carried consistently through the existing portfolio layout. The hero keeps centered alignment; About, Selected Work, Capabilities, Contact, and the project modal retain their established left alignment. The surrounding navigation, imagery, spacing system, and dark visual language remain unchanged.

## Focused region comparison evidence

The combined comparison places the source title and the final About title in one image. Both use a regular sans-serif first line followed immediately by a high-contrast serif italic second line. The implementation uses Cormorant Garamond Italic at weight 500, preserves the site’s muted second-line color token, and follows the source’s tight line rhythm. A focused region is necessary because the source contains only typography, not a full layout.

## Required fidelity surfaces

- Fonts and typography: Plus Jakarta Sans remains the regular lead face; Cormorant Garamond Italic is used for every second line. Weight, slant, letter spacing, line height, casing, and two-line hierarchy were checked in-browser. About now reads `Meet the mind / Behind the work` to match the casing rule used by the other title-case headings.
- Spacing and layout rhythm: the two lines remain visually connected without collision. Existing section alignment and surrounding margins are preserved. The 390 px hero keeps both title lines fully inside the viewport.
- Colors and tokens: the portfolio’s existing white and muted-gray heading palette is preserved. The reference’s orange is treated as source-specific color, while the requested typographic structure is matched.
- Image quality and assets: no image assets were changed or replaced. Existing cover and project-detail images remain sharp and correctly cropped.
- Copy and content: all title copy is English. The Microsoft modal title is `Microsoft Storage Cabinet / Smart Cabinet Design` and the About casing is consistent with the rest of the portfolio.

## Findings

- No actionable P0, P1, or P2 issues remain.
- No horizontal document overflow was detected at 1280 × 720 or 390 × 844.
- Browser console errors and warnings: none.

## Comparison history

1. Initial desktop pass: hero, About, Selected Work, and modal titles matched the requested two-line structure and alignment.
2. User feedback: About used all caps while comparable title-case headings did not. Fix: changed it to `Meet the mind / Behind the work`. Post-fix evidence: `design-qa-title-about.png` and `design-qa-title-comparison.png`.
3. Mobile pass found a P2 crop: `Design products that` extended about 5 px beyond the left edge at 390 px. Fix: added an explicit lead-line wrapper and reduced the mobile hero title to `10.8vw`. Post-fix evidence: the lead line is 365.5 px wide inside the 390 px viewport, with no document overflow; see `design-qa-title-mobile.png`.

## Primary interactions tested

- Navigation links scroll to the intended sections.
- Microsoft Storage Cabinet opens as the existing full-page modal.
- The modal opens from keyboard focus with Enter.
- The modal closes with Escape and returns the page to the non-modal state.

## Implementation checklist

- [x] Two-line editorial title system applied to every major title.
- [x] Banner centered; remaining title alignments preserved.
- [x] English title copy and About casing verified.
- [x] Desktop and mobile rendering checked.
- [x] Production build passed.

## Follow-up polish

- No blocking polish remains.

final result: passed
