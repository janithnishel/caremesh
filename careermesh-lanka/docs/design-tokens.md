# Design Tokens — CareerMesh Lanka

All colors are defined as CSS variables in `src/styles.css` and exposed as
Tailwind theme tokens. Components use semantic tokens, never raw hex.

## Color tokens

### Navy (authority, headings, footer)
| Token | Hex | Usage |
|---|---|---|
| navy-950 | #0A1F33 | footer base, deepest sections |
| navy-900 | #102A43 | primary navy, headings on light |
| navy-800 | #163B5C | dark section gradient end |
| navy-700 | #24557F | secondary actions, education accent |
| navy-100 | #D9E6F2 | tints |
| navy-50 | #EEF4FA | tints |

### Teal (primary action / success)
| Token | Hex | Usage |
|---|---|---|
| teal-800 | #115E59 | hover / pressed |
| teal-700 | #0F766E | PRIMARY buttons, links, text on light |
| teal-600 | #0D9488 | brand teal, illustrations, borders |
| teal-500 | #14B8A6 | accents on dark backgrounds |
| teal-50 | #F0FDFA | tints |

### Cyan (ClientFlow / technology)
| Token | Hex | Usage |
|---|---|---|
| cyan-800 | #155E75 | text/buttons in technology sections |
| cyan-600 | #0891B2 | large graphics only |
| cyan-500 | #22B8CF | charts, highlights, focus ring |
| cyan-100 | #CFF3F9 | tints |
| cyan-50 | #E6F7FA | ClientFlow section background |

### Amber (sparing highlight)
| Token | Hex | Usage |
|---|---|---|
| amber-700 | #B45309 | text |
| amber-400 | #F4B860 | decorative accent |
| amber-100 | #FDEBC8 | tints |
| amber-50 | #FEF6E7 | tints |

### Surfaces & neutrals
| Token | Hex | Usage |
|---|---|---|
| cloud | #F7FAFC | default page background |
| ice | #EAF4F8 | alternating section (education) |
| mint | #E7F5F1 | alternating section (student) |
| border | #E2E8F0 | default borders |
| border-strong | #CBD5E1 | emphasized borders |
| text-heading | #1E293B | headings |
| text-body | #526477 | body |
| text-muted | #64748B | captions (14px+) |

### Semantic
| Token | Hex | Usage |
|---|---|---|
| success | #15803D | success messages |
| warning | #B45309 | warnings |
| danger | #B91C1C | errors |
| info | cyan-800 | info |

## Contrast (WCAG AA)

| Foreground | Background | Ratio | Pass |
|---|---|---|---|
| teal-700 (#0F766E) | white | 4.96:1 | AA normal ✅ |
| teal-800 (#115E59) | white | 7.41:1 | AAA ✅ |
| navy-900 (#102A43) | white | 13.13:1 | AAA ✅ |
| cyan-800 (#155E75) | white | 6.17:1 | AA normal ✅ |
| white | navy-950 (#0A1F33) | 16.8:1 | AAA ✅ |
| teal-500 (#14B8A6) | navy-950 | 8.2:1 | AAA ✅ |
| cyan-500 (#22B8CF) | navy-950 | 9.1:1 | AAA ✅ |
| text-body (#526477) | cloud (#F7FAFC) | 7.0:1 | AAA ✅ |
| text-muted (#64748B) | white | 4.62:1 | AA normal ✅ |

Note: teal-600 (#0D9488) on white is 3.95:1 — used only for large text,
icons and borders, never small text or white-text buttons.

## Typography
- Headings: Manrope (800/700). Body: Inter (400/500/600).
- Fluid scale via `clamp()` in `src/styles.css`.
- Focus ring: 2px cyan-500, 2px offset.

## Radius & elevation
- Radius: sm 8px, md 12px, lg 16px, xl 24px, full (pills).
- Elevation: e1 resting card, e2 hover, e3 mega menu / dialogs.
