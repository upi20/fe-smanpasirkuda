# Performance (Mobile-first)

Tujuan: landing page terasa cepat di device mobile, terutama pada koneksi lambat.

## Prinsip
- Optimalkan yang paling terasa: **gambar**, **font**, **bundle JS**, dan **interaksi scroll**.
- Default harus cepat tanpa mengandalkan device high-end.

## Lazy-load (wajib)
### Gambar (img)
- Gunakan `loading="lazy"` untuk gambar di bawah fold.
- Untuk gambar di atas fold (hero/cover utama): jangan lazy, tapi pastikan ukuran file tetap kecil.
- Selalu set `width` dan `height` (atau ratio) untuk mencegah layout shift (CLS).
- Gunakan `srcset`/responsive image jika tersedia.

### Iframe / embed
- Semua iframe non-kritis harus lazy-load.

### Komponen berat
- Gunakan dynamic import / route-level code splitting untuk halaman/modul yang jarang dibuka.

## Asset & gambar
- Format: prioritaskan WebP/AVIF (dengan fallback jika perlu).
- Kompres gambar sebelum masuk repo atau di pipeline build.
- Hindari background image besar untuk mobile; sediakan versi lebih kecil.

## JS & CSS
- Hindari library berat jika bisa dilakukan dengan CSS/Tailwind.
- Untuk slider: pilih library ringan atau implement minimal.
- Batasi animasi scroll: gunakan transform/opacity (lebih murah daripada layout changes).

## Checklist cepat
- [ ] Hero image terkompresi dan ukurannya masuk akal
- [ ] Semua gambar di bawah fold pakai `loading="lazy"`
- [ ] Semua gambar punya ukuran/ratio untuk cegah CLS
- [ ] Route-level code splitting aktif
- [ ] Animasi menghormati `prefers-reduced-motion`
