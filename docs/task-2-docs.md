# Task 2: SVG Stripe Animation

The SVG stripes use `fill` (solid shapes). To avoid modifying the SVG source I used `clipPath` with `inset()`, which creates a reveal effect:

- `inset(0 100% 0 0)` — fully clipped (hidden)
- `inset(0 0% 0 0)` — no clipping (visible)

Animating the right inset from 100% → 0% reveals the shape left-to-right.
