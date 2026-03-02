# Accessibility (A11y)

Tujuan: website bisa dipakai nyaman oleh semua pengguna (keyboard, screen reader, low vision), terutama di mobile.

## Prinsip
- Semantic HTML dulu, ARIA hanya jika diperlukan.
- Semua interaksi harus bisa lewat keyboard.
- Fokus harus terlihat jelas.

## Struktur & semantic
- Gunakan heading berurutan (H1 → H2 → H3...).
- Gunakan landmark: `header`, `nav`, `main`, `footer`.
- Jangan pakai `div` untuk button/link interaktif.

## Keyboard & focus
- Semua komponen interaktif (button, link, input, kontrol slider) wajib:
  - bisa di-tab
  - bisa di-activate via Enter/Space sesuai perannya
  - punya focus ring yang terlihat

## Gambar
- Semua gambar bermakna wajib punya `alt` yang deskriptif.
- Gambar dekoratif: `alt=""`.

## Warna & kontras
- Pastikan kontras teks cukup terhadap background.
- Jangan mengandalkan warna saja untuk menyampaikan status (mis. error/sukses).

## Motion
- Hormati `prefers-reduced-motion`.
- Hindari animasi yang terlalu agresif (terutama yang memicu pusing).

## Slider/Carousel
- Kontrol wajib punya `aria-label`.
- Pastikan slide bisa diakses keyboard.
- Hindari autoplay default; jika autoplay ada, harus bisa pause.

## Form (jika ada)
- Input wajib punya label.
- Pesan error harus jelas dan terhubung ke field.

## Checklist cepat
- [ ] Tab order logis, fokus terlihat
- [ ] Semua icon button ada label (aria-label)
- [ ] Alt text benar
- [ ] Reduced motion disupport
