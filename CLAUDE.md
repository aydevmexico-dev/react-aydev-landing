# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start Vite dev server (hot reload)
npm run build    # production build to dist/
npm run preview  # preview production build locally
```

No test runner or linter is configured. Restart `npm run dev` after editing `tailwind.config.js` — a running dev server can keep serving the old config.

## Architecture

Single-page React landing site for **aydevops.mx**, a Mexican custom software agency (Python/Django, payment gateways, AI agents, DevOps, mobile apps, monthly retainers). Built with Vite + React 18 + Tailwind CSS v3. No routing library — navigation is anchor-link based (`#inicio`, `#servicios`, `#igualas`, `#resultados`, `#contacto`).

**Component hierarchy:**

```
App → LandingPage → Navbar, Hero, Services, Retainer, Results, Contact, Footer
```

All components live flat in `src/components/`. SVG icons are centralized in `src/components/icons/ServiceIcons.jsx` and shared across sections.

**Data flow:** Each section owns its data as a module-level `const` array (e.g. `SERVICES` in `Services.jsx`, `PLANS` in `Retainer.jsx`, `METRICS`/`PROJECTS` in `Results.jsx`, `NEEDS` in `Contact.jsx`). There is no global state, context, or external data fetching.

**Shared modules:**
- `src/lib/contact.js` — WhatsApp number, email, `buildWhatsAppUrl(text?)` and `buildGmailUrl()`. Every CTA goes through it; don't hardcode `wa.me` links.
- `src/hooks/useInView.js` — IntersectionObserver that fires once.
- `src/components/Reveal.jsx` — scroll-reveal wrapper (`delay` prop for 60–80ms staggers). Put it on a wrapper, never on an element that also has a hover transform.

**Design tokens** (defined in `tailwind.config.js`):
- `deep` (`#110913`) — background
- `accent` (`#D5000B`) — red brand color, the only accent
- `muted` (`#A7A6AB`) — secondary text
- `shadow-glow` — red radial glow. Animate it via an overlay's `opacity`, not by transitioning `box-shadow`.
- `animate-enter` / `animate-enter-scale` / `animate-fade-in` / `animate-pulse-glow` — keyframe animations
- Timing functions are overridden: `ease-out` = `cubic-bezier(0.23, 1, 0.32, 1)`, `ease-in-out` = `cubic-bezier(0.77, 0, 0.175, 1)`, default `ease`. Also exposed as `--ease-out` / `--ease-in-out` in `index.css`.
- `future.hoverOnlyWhenSupported` is on: `hover:` only applies on devices with a fine pointer.

Custom CSS in `src/index.css`: `.text-gradient-name` (white-to-red gradient text), `.bg-grid` (Hero grid pattern), `.reveal` (scroll reveal), and the `prefers-reduced-motion` overrides.

**Motion rules** (from the Emil Kowalski skills in `.claude/skills/`): name transition properties (never `transition-all`), animate only `transform`/`opacity` (plus `filter` blur ≤ 2px for crossfades), keep UI transitions ≤ 300ms, use `active:scale-[0.97]` press feedback on pressables, and give every new animation a reduced-motion variant.

**Contact CTA:** Primary CTAs open WhatsApp (`5530662066`) with a prefilled message. The Contact section composes the message from the selected needs and company type.

**Assets:** Logo variants (`logo.png`, `logo_sn_brg.png`, `logo_sin_bg.png`) are used in different components — Navbar uses the no-background version, Hero and Footer use `logo.png`. Hero section embeds an `.mp4` video via Vite asset import.
