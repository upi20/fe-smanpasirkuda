# Dependencies (Baseline)

Daftar ini bukan `package.json`, tapi patokan paket yang sebaiknya dipakai.

## Runtime
- Vue: `vue`
- Router: `vue-router`
- State (opsional): `pinia`

## Build & Styling
- Vite: `vite`
- Vue plugin: `@vitejs/plugin-vue`
- Tailwind: `tailwindcss`
- PostCSS: `postcss`
- Autoprefixer: `autoprefixer`

## TypeScript
- `typescript`
- `vue-tsc`

## Tooling
- ESLint:
  - `eslint`
  - `eslint-plugin-vue`
  - `@typescript-eslint/parser`
  - `@typescript-eslint/eslint-plugin`
- Prettier (opsional tapi umum): `prettier`

## Opsional (modern UI)
Dipakai hanya jika dibutuhkan oleh desain (mis. slider modern di beranda).
- Slider/Carousel:
  - `embla-carousel-vue` (ringan, kontrol tinggi)
  - atau `swiper` (fitur lengkap)
- Motion/animation:
  - `@vueuse/motion` (reveal/transition utilities)

## Opsional (quality)
- A11y linting (opsional): `eslint-plugin-vuejs-accessibility`
- Image optimization (opsional): plugin imagemin untuk Vite (gunakan hanya jika pipeline dibutuhkan)

## Catatan
- Tambahkan library UI tambahan hanya kalau benar-benar perlu; targetnya desain dikontrol oleh Tailwind + token.
