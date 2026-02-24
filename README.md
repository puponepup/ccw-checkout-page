# Figma import — `48:5` (Body)

- **Source**: [Figma design](https://www.figma.com/design/H38kUYNapFNHqyinc0nVbR/Untitled?node-id=48-5)
- **File key**: `H38kUYNapFNHqyinc0nVbR`
- **Node**: `48:5` (`Body`)
- **What this is**: A BuyGoods-style secure checkout page layout (nav + main 2-column checkout + footer), sized around a 960px container.

## Assets downloaded

All assets were exported into `assets/`:

- `assets/banner_Np2-1ebdb2.png` (banner image) — 1114×371
- `assets/prbox_tbx-619251.png` (product/offer box image) — 1086×349
- `assets/badge-60-day-56586a.png` (badge) — 104×100
- `assets/buygoods-logo-black.svg` (logo) — 100×23

## High-level structure (node tree)

- `Body` (column, centered, white background, bottom padding 24)
  - `Section` (fixed width 960)
    - `baner_Np2.jpg` (image frame)
  - `Nav` (row, full width, white, shadow)
    - `Container` (row, space-between, padding 4×12)
      - `buygoods-logo-black.svg`
      - “Having trouble ?” + `Contact us` link
  - `Main` (fixed width 960, padding 0×12)
    - Timer line: “YOUR ORDER IS RESERVED FOR: 14:54”
    - Two-column area (960 wide)
      - Left article (560 wide): Secure checkout header + form card (light gray, 15px radius, subtle shadow) + primary button (blue)
      - Right article (400 wide): order summary / borders / product image box
    - Guarantee block with badge + centered text
  - `Footer` (full width, white, shadow)
    - Terms list + copyright small print

## Key colors (from styles)

- **White**: `#FFFFFF`
- **Primary link/button blue**: `#2986B8`
- **Text “Shark”**: `#212529`
- **Light background**: `#F8F9FA`
- **Borders**: `#DDDDDD` (card stroke), `#DEE2E6` (section dividers)

## Typography (from styles)

This design uses **SF Pro** plus **Font Awesome 5 Free** for the lock icon.

- **Top helper text** (“Having trouble ?”): SF Pro 19.4px, weight 400, centered
- **Link** (“Contact us”): SF Pro 13.7px, weight 400, left-aligned, blue
- **Timer line**: SF Pro 32px, weight 400, uppercase, centered, line-height 1.5
- **Guarantee paragraph**: SF Pro 12.8px, weight 400, centered

## Layout notes (from auto-layout)

- Common container width is **960px**.
- `Nav` applies horizontal padding of **240px** (full-bleed bar, centered content).
- Main content area is a fixed **960px** two-column split: **560px** left + **400px** right.
- Card styling (checkout form container): light gray fill + 1px border + subtle upward shadow + **15px radius**.

