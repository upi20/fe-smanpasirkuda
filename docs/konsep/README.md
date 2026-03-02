# Konsep Design System

Folder ini adalah **patokan desain** untuk website SMAN 1 Pasir Kuda, dengan acuan visual dari snapshot referensi: `referensi/sman1bdg.sch.id/index.html`.

## Tujuan
- Menyatukan **warna, tipografi, spacing, dan pola komponen** supaya implementasi konsisten.
- Mempermudah iterasi: perubahan warna/komponen cukup lewat token.
- Mengutamakan **mobile-first & responsive** sebagai baseline UX.

## Prinsip utama
- Mobile-first: desain default untuk layar kecil, lalu ditingkatkan untuk tablet/desktop.
- Modern UI secukupnya: gunakan pola **Slider/Carousel** dan **Glass surface** hanya ketika menambah kualitas UX (bukan dekorasi berlebihan).

## Sumber Kebenaran (Source of Truth)
- Token utama: [design_system.json](design_system.json)

## Cara Pakai (Ringkas)
- Saat develop, **jangan hardcode warna**: pakai token semantic (mis. `color.semantic.headerTopBg`).
- Komponen global (header/footer/section) wajib ikut pola di dokumen ini.

## Dokumen di folder ini
- [design_system.json](design_system.json) — token + definisi komponen global.
- [components.md](components.md) — pola komponen yang harus dipakai (header, section, card, button, footer).
- [layout.md](layout.md) — aturan layout: container, grid, spacing section, breakpoint.
- [palette.md](palette.md) — ringkasan palette & pemakaian.
- [typography.md](typography.md) — aturan font & heading.
- [motion.md](motion.md) — aturan animasi/motion untuk landing page (micro-interactions + reveal + reduced motion).

## Catatan penting
Snapshot referensi memuat beberapa link tersembunyi/spam di bagian footer. Itu bukan bagian desain; abaikan total saat implementasi.
