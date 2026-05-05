# Polypure Documents

Phase 1 of a professional PWA document app for Polypure. The app is prepared for creating quotations, invoices, and money receipts in later phases.

## Tech Stack

- React + Vite
- Tailwind CSS
- React Router
- Vite PWA plugin
- GitHub Pages deployment scripts

## Project Structure

```text
public/
  icons/
src/
  components/
  data/
  layouts/
  pages/
  styles/
  utils/
```

## Routes

- Dashboard
- Customers
- Items
- Quotations
- Invoices
- Money Receipts
- Document History
- Settings

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

The Vite base path defaults to `/polypure-documents/`. If the repository name is different, set it before building:

```bash
VITE_BASE_PATH=/your-repository-name/ npm run build
```

Deploy with:

```bash
npm run deploy
```
