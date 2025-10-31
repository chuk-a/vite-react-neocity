# Heating System Design (Vite + React)

A dynamic, responsive website for a modern heating system company.

## Features
- Vite + React + React Router (Home, About, Contact)
- TailwindCSS with custom brand theme and fonts (Inter, Poppins)
- Contact form wired for Formspree via `VITE_FORMSPREE_ENDPOINT`
- Ready for Vercel deployment (`vercel.json` included)

## Local Setup
```bash
npm install
npm install react-router-dom
cp .env.example .env   # then set VITE_FORMSPREE_ENDPOINT
npm run dev
```
Open http://localhost:5173

## Contact Form (Formspree)
1. Create a form at https://formspree.io/ (get your Form ID).
2. Set `.env`:
   ```
   VITE_FORMSPREE_ENDPOINT="https://formspree.io/f/xxxxxxxx"
   ```
3. Restart dev server.

## Deployment (Vercel)
- Option A: Connect GitHub repo in Vercel, accept defaults:
  - Build Command: `npm run build`
  - Output: `dist`
- Option B: CLI:
  ```bash
  npm i -g vercel
  vercel
  ```

## Customize
- Update theme in `tailwind.config.js` (colors, fonts).
- Replace content and structure in `src/pages/*` and `src/components/*`.
- Add images in `/public` and reference as `/your-image.png`.
