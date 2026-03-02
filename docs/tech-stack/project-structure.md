# Project Structure (Vue + TS + Tailwind)

Struktur yang disarankan untuk menjaga konsistensi dan memudahkan scaling.

## Struktur folder
- `src/`
  - `app/` — bootstrap aplikasi (router, pinia, global styles)
  - `pages/` — halaman (route-level)
  - `layouts/` — layout global (mis. Default layout dengan header/footer)
  - `components/` — komponen reusable
    - `ui/` — komponen UI atomik (Button, Card, Badge, etc)
    - `sections/` — blok section besar (Hero, LinkTerkait, Footer2, dll)
  - `features/` — modul domain (berita, galeri, pengumuman, dll) berisi components + types + services
  - `assets/` — assets statis
  - `styles/` — file Tailwind entry + utilities tambahan
  - `types/` — type definitions bersama
  - `lib/` — helper murni (format date, fetch wrapper, dsb)

## Konvensi
- Komponen UI generik harus bebas dari domain.
- Komponen domain (mis. BeritaCard) taruh di `features/berita/`.
- Layout bertanggung jawab untuk header/footer + spacing section default.

## Tailwind + Design System
- Token dari `docs/konsep/design_system.json` jadi acuan.
- Implementasi praktis:
  - warna utama masuk ke `tailwind.config` sebagai semantic keys (mis. `brand.primary`, `semantic.headerTopBg`).
  - jangan pakai hex langsung di template.
