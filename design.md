# easypaisa Landing Design System

This document captures the visual system used by the current landing page so future screens feel native to the product instead of looking like separate campaigns.

## Brand Direction

- Tone: modern, optimistic, financially trustworthy, fast, human.
- Personality: soft fintech, not harsh enterprise banking.
- Visual balance: clean structure with expressive motion and rounded surfaces.
- Core contrast: deep ink and dark brand blocks against mint, cream, and white surfaces.

## Color System

Use semantic tokens first. Do not introduce raw colors unless the existing system cannot express the need.

### Core Tokens

Defined in `src/styles.css`:

- `--mint`: `oklch(0.92 0.045 155)`
- `--mint-deep`: `oklch(0.55 0.12 158)`
- `--ink`: `oklch(0.18 0.02 160)`
- `--cream`: `oklch(0.985 0.008 90)`
- `--background`: `oklch(0.985 0.008 90)`
- `--foreground`: `oklch(0.18 0.02 160)`
- `--card`: `oklch(1 0 0)`
- `--primary`: `oklch(0.18 0.02 160)`
- `--primary-foreground`: `oklch(0.985 0.008 90)`
- `--secondary`: `oklch(0.92 0.045 155)`
- `--muted`: `oklch(0.95 0.01 155)`
- `--muted-foreground`: `oklch(0.45 0.02 160)`
- `--accent`: `oklch(0.55 0.12 158)`
- `--border`: `oklch(0.88 0.02 155)`
- `--ring`: `oklch(0.55 0.12 158)`

### Usage Rules

- `primary` / `ink`: use for strong sections, footer, dark CTA blocks, and primary buttons.
- `mint`: use for hero backgrounds, supportive highlights, chips, badges, and positive energy.
- `mint-deep`: use for emphasized words, icons, accents, and gradient depth.
- `cream` / `background`: use for default page canvas and soft neutral sections.
- `white` cards: use for modular information blocks layered on soft backgrounds.
- Avoid overly saturated neon accents or unrelated blues/purples unless tied to media content already in use.

### Surface Patterns

- Light hero surface: mint background with white translucent blobs.
- Default section surface: cream or white.
- Dark emphasis surface: `primary` with mint-tinted glow overlays.
- Cards: mostly white or dark ink with soft shadow and large radius.

## Typography

### Fonts

- Primary display font: `Avantt`
- Primary body font: `Avantt`

Both display and body intentionally use the same family; hierarchy is created through weight, size, spacing, and surface contrast.

### Type Character

- Headlines: bold or semibold, slightly tightened tracking, direct wording.
- Body copy: clear, compact, readable, not overly editorial.
- Labels / eyebrows: uppercase, wide tracking, semibold.

### Approximate Scale Used on Landing

- Hero H1: `text-[50px] md:text-[74px]`
- Major section H2: `text-[38px] md:text-[50px]`
- Large spotlight H2: `text-[38px] md:text-[62px]`
- Card titles: `text-[26px]` to `text-[32px]`
- Body copy: `text-lg` to `text-xl`
- Eyebrows: `text-sm` or tightly spaced custom small sizes
- Small UI labels: `text-xs` to `text-sm`

### Typography Rules

- Keep headings short and rhythmic.
- Use one emphasized word or phrase in mint-deep when needed.
- Prefer sentence case in body and title case only when it improves scannability.
- Avoid long multi-line dense paragraphs; break information into compact blocks.

## Shape Language

- Base radius token: `1rem`
- Common card radius: `rounded-3xl`
- Large feature panels: `rounded-[2.5rem]` or similar oversized radius
- Buttons: pill-shaped `rounded-full`
- Floating popups: `rounded-xl` or `rounded-2xl`

### Shape Principles

- Edges should feel soft and premium, not sharp.
- Main panels should look touchable and product-like.
- Use oversized curvature more often than square geometry.

## Layout System

### Container

- Primary content width: `max-w-7xl`
- Default horizontal padding: `px-6`
- Most sections are centered in the viewport with generous whitespace.

### Vertical Rhythm

- Standard section spacing: `py-24`
- Internal card padding: `p-8`, `p-10`, `p-12`, or `p-14` depending on emphasis.
- Use larger spacing before major transitions like showcase sections and sticky scroll moments.

### Common Section Structures

- Hero: 2-column split on desktop, stacked on mobile.
- Trust band: single horizontal ticker.
- Feature grids: 3-column desktop, stacked mobile.
- Showcase sections: 2-column split with product visualization + narrative.
- Sticky storytelling sections: full-height pinned container with animated layers.

### Responsive Guidance

- Mobile should preserve the same visual tone, not degrade into plain stacked text.
- Reduce element widths before removing supporting UI.
- Floating elements should reposition, not disappear, unless they truly block usability.
- Preserve generous spacing, but tighten widths and radii slightly where needed.

## Motion Language

Motion is a core part of the brand. It should feel smooth, confident, and slightly playful.

### Motion Characteristics

- Easing often uses soft, premium curves like `[0.22, 1, 0.36, 1]`.
- Movement is primarily vertical reveals, subtle scaling, soft floating, and marquee drift.
- Animations should feel intentional, not decorative noise.

### Common Motion Patterns

- Reveal-up entrances for text and blocks.
- Hover lift for cards.
- Small scale-up for buttons and call-to-action elements.
- Floating blob backgrounds with slow drift.
- Sticky scroll-driven transitions for product demos.
- Sequential popups around product visuals.

### Motion Rules

- Prefer 1 clear motion idea per section.
- Do not animate every object equally.
- Large objects move slowly; micro-elements can be faster.
- Always keep readability ahead of animation novelty.

## Core Components

### Header

- Light translucent background with blur.
- Rounded menu pills.
- Minimal, app-like navigation chrome.

### Buttons

- Primary button: dark ink background with light text.
- Secondary button: white or translucent white on mint surfaces.
- Accent button: mint fill with ink text on dark sections.

### Cards

- White, mint, or dark ink surfaces.
- Large radius and shadow.
- Titles should be concise and bold.
- Icons use mint-deep or white depending on contrast.

### Product Showcases

- The product itself should be central, often inside phone-like framing or large media modules.
- Supporting popups should orbit around the product, not sit in random corners.

### Footer

- Dark brand block using `primary`.
- Inverted logo.
- Generous spacing and clear text hierarchy.

## Imagery Style

- Use aspirational but grounded Pakistani lifestyle imagery.
- Product visuals should feel tactile and real, not sterile mockups only.
- When mixing photography and UI, keep the UI clean and the photography warm.

## Screen Design Rules For Future Work

When designing a new screen, follow these defaults unless the screen has a specific reason not to.

### Composition

- Start with a strong hero statement or utility-first title.
- Use one primary focal area per screen.
- Support the focal area with 2 to 8 secondary cues, not dozens of competing accents.

### Surfaces

- Alternate between cream, white, mint, and dark sections to create rhythm.
- Avoid long runs of flat white without contrast breaks.

### UI Details

- Use pill buttons, large rounded cards, soft borders, and subtle shadows.
- Keep icons simple and consistent.
- Use mint and mint-deep as the main accent family.

### Content Tone

- Keep copy direct and benefit-led.
- Emphasize speed, simplicity, trust, control, and reward.
- Avoid institutional banking jargon.

## Do / Don’t

### Do

- Use semantic color tokens.
- Keep shapes soft and oversized.
- Maintain large, bold section headlines.
- Use motion to support storytelling.
- Design mobile layouts intentionally rather than hiding half the experience.

### Don’t

- Introduce generic SaaS blue gradients.
- Use sharp rectangles or cramped forms.
- Overload one section with too many equal-priority elements.
- Make new screens feel more corporate than the landing page.
- Replace the mint + ink + cream palette with unrelated themes.

## Starter Recipe For New Screens

Use this structure as a default:

1. Background: cream or mint section.
2. Container: `max-w-7xl px-6 py-24`.
3. Eyebrow: uppercase mint-deep label.
4. Headline: `text-[38px] md:text-[50px]` semibold or stronger.
5. Body: `text-lg` or `text-xl` muted copy.
6. Primary CTA: dark pill button.
7. Supporting module: white or dark rounded card with shadow.
8. Motion: one reveal, one hover behavior, and one ambient animated accent if useful.

## Source Of Truth

This document is derived from:

- `src/styles.css`
- `src/routes/index.tsx`
- `src/components/site/Header.tsx`
- `src/components/site/Footer.tsx`
- `src/components/site/ScrollVideoReveal.tsx`

Update this file whenever the landing page’s core visual system changes.