# VV Signature Candles — Next.js website

Responsive Next.js recreation of the VV Signature Candles 2026 catalogue.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
npm start
```

The project is ready to import into Vercel.

## Content

- Product information and imagery are based on the supplied 2026 VV Signature catalogue.
- WhatsApp CTA: +57 310 460 4446
- Instagram: @vvsignaturec

## Main files

- `app/page.tsx` — page composition
- `app/globals.css` — visual styling and responsive layout
- `data/products.ts` — product catalogue data
- `components/ProductCard.tsx` — reusable product section
- `components/Header.tsx` — responsive navigation
