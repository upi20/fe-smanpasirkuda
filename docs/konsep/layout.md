# Layout & Spacing Rules

## Mobile-first (wajib)
- Desain default ditargetkan untuk layar kecil dulu.
- Naikkan layout/kolom/spacing dengan breakpoint (progressive enhancement).
- Pastikan komponen nyaman disentuh:
  - Target sentuh minimum ~44px untuk tombol/ikon penting.
  - Jarak antar link/tombol jangan terlalu rapat.

## Animasi (landing)
- Default animasi harus tetap halus di mobile (hindari animasi berat saat scroll).
- Reveal on scroll boleh dipakai untuk section penting, tapi:
  - jangan semua elemen dianimasikan bersamaan
  - durasi sedang, jarak gerak kecil
  - wajib hormati `prefers-reduced-motion`

## Container
- Gunakan container lebar standar (seperti pola WordPress/Flatsome): konten tidak full-bleed kecuali section tertentu.
- Tujuan: keterbacaan dan konsistensi antar halaman.

## Grid
- Default konten listing gunakan grid responsif.
- Pola yang dipastikan dari referensi:
  - Breakpoint mobile max: 549px
  - Contoh grid: 4 kolom di desktop, 1 kolom di mobile (lihat modul "Link Terkait").

Catatan implementasi:
- Mulai dari 1 kolom di mobile, naikkan jadi 2/3/4 kolom di layar lebih besar.
- Hindari grid rapat di mobile (lebih baik card full-width dan readable).

## Spacing
Baseline spacing yang dipakai berulang:
- Section padding: 60px (atas & bawah)
- Skala spacing rekomendasi (px): 4, 8, 12, 16, 24, 32, 48, 60

## Header heights
- Top bar min-height: 30px
- Header main height: 95px
- Header main sticky: 70px
- Header bottom min-height: 55px

## Shape divider
Beberapa section di referensi memakai shape divider.
- Height yang muncul di snapshot: 150px

## Aturan implementasi
- Hindari variasi spacing acak per halaman.
- Jika butuh spacing baru (mis. 72px), tambahkan dulu sebagai token (agar konsisten).
