# Palette (Acuan Referensi)

## Brand
- Primary: `#e61562`
- Primary (top bar): `#e8065d`
- Primary (page / absolute footer bg): `#e81064`
- Secondary (footer-2): `#343689`
- Indigo overlay (hero overlay base): `#161466` dengan opacity ~`0.797`

## Neutral
- Surface: `#ffffff`
- Surface alt (header-bottom): `#f1f1f1`
- Text utama: `#0a0a0a`

## Mapping pemakaian (semantic)
Gunakan mapping semantic ini daripada memilih warna langsung:
- `headerTopBg` → `#e8065d`
- `headerBottomBg` → `#f1f1f1`
- `footerSecondaryBg` → `#343689`
- `pageBg` → `#e81064`
- `link` → `#e61562`

## Aturan sederhana
- Background primary/secondary wajib pakai teks putih (token `textOnPrimary` / `textOnSecondary`).
- Jangan bikin warna baru di komponen. Kalau butuh varian baru, tambahkan ke `design_system.json` dulu.
