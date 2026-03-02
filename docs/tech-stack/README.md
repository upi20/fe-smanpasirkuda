# Tech Stack (Target Implementasi)

Target: website baru dibuat sebagai **SPA statis** (hasil build hanya berupa file statis yang bisa di-*view* via hosting/CDN).

## Ringkasan
- Framework: **Vue 3**
- Build tool: **Vite**
- Bahasa: **TypeScript**
- Styling: **Tailwind CSS**
- Output: **Static SPA** (`dist/`)

## Alasan pilihan
- Vue 3 + Vite: build cepat, DX bagus, output statis mudah dideploy.
- TypeScript: konsistensi & mengurangi bug (terutama untuk UI state + data model).
- Tailwind: konsistensi UI cepat (diikat ke token/pattern dari `docs/konsep/`).

## Prinsip implementasi
- Semua styling mengacu ke design system: `docs/konsep/design_system.json` + dokumen pendamping.
- Tidak ada SSR / server runtime. Semua harus bisa jalan sebagai file statis.
- Routing adalah client-side (SPA). Hosting wajib support fallback ke `index.html`.
- Mobile-first performance: lazy-load aset di bawah fold dan kompres gambar.
- Accessibility: keyboard navigation, focus visible, alt text, reduced motion.

## Paket inti (recommended baseline)
- `vue` (Vue 3)
- `vue-router` (routing SPA)
- `pinia` (state management ringan; opsional jika state kecil)
- `tailwindcss`, `postcss`, `autoprefixer`
- `typescript`

## Tooling (recommended)
- Lint/format:
  - `eslint` + `eslint-plugin-vue`
  - `prettier` (atau tetap ESLint saja; pilih salah satu sebagai source of truth formatting)
- Type checking:
  - `vue-tsc`

## Build output
- Command: `npm run build` (Vite)
- Output folder: `dist/`
- Tipe deploy: upload isi `dist/` ke static hosting (Nginx, Netlify, Vercel static, Cloudflare Pages, GitHub Pages, S3, dll)

## Hosting notes untuk SPA
Karena SPA, URL selain `/` harus diarahkan balik ke `index.html`.
- Netlify: `_redirects` → `/* /index.html 200`
- Nginx: `try_files $uri $uri/ /index.html;`
- Cloudflare Pages: SPA fallback setting (atau `_redirects`)

## Non-goals
- Tidak ada backend di repo ini (kecuali nanti diputuskan untuk CMS/API).
- Tidak menargetkan WordPress theme conversion; fokus implementasi frontend sesuai konsep.
