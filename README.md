# Samuel Untu — Frontend Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS v4.

## Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** — theme via `@theme` di `globals.css`, tanpa `tailwind.config.js`
- **pnpm** — package manager
- **react-icons v5** — ikon

## Getting Started

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build for production
pnpm build
```

## Features

- Dark / Light mode toggle (default dark)
- Responsive layout
- Smooth scroll navigation
- Animasi fade-in pada Hero section

## Notes

- Dark mode menggunakan class strategy — toggle class `dark` di `<html>`
- Import alias `@` mengarah ke folder `src/`
- Opacity modifier Tailwind (`text-text/50`) tidak reliable untuk custom `@theme` token — gunakan `stone-*` sebagai alternatif