# Komponen & Pola UI

Dokumen ini menjelaskan pola komponen yang jadi patokan, dengan gaya mengikuti referensi (top bar magenta, header sticky, section padding lega, footer 2-lapis).

## 1) Header (3 lapis)
**Acuan token:** lihat `components.header` di [design_system.json](design_system.json)

### A. Top Bar
- Background: `headerTopBg` (magenta)
- Konten umum:
  - Language switcher (EN/ID/SU)
  - Quick links dropdown
  - Link cepat (mis. SMile App, PPID)
- Height minimum: 30px

### B. Header Main
- Area logo + navigasi utama
- Height: 95px (normal), 70px saat sticky
- Logo:
  - width sekitar 208px
  - max-height 95px (normal), 70px (sticky)

### C. Header Bottom
- Background: `headerBottomBg` (`#f1f1f1`)
- Min height: 55px
- Cocok untuk submenu/kategori jika dibutuhkan.

## 2) Section (blok konten)
**Pola default:**
- Padding atas/bawah: 60px
- Background: putih

**Hero overlay (opsional):**
- Overlay indigo dengan opacity ~0.8 di atas gambar background.

## 3) Judul Section
Pola judul seperti di referensi:
- Alignment: center
- Style: bold
- Ada leading icon (contoh: `icon-menu`)
- Contoh teks: "LINK TERKAIT"

## 4) Card
- Surface putih
- Border tipis
- Shadow halus (jangan berat)
- Radius medium

## 5) Button
- Primary: background primary, text putih, radius pill
- Outline: border primary, text primary, radius pill
- Circle icon button: untuk aksi seperti back-to-top

## 6) Modul "Link Terkait"
Pola yang harus konsisten:
- Layout grid:
  - Desktop: 4 kolom
  - Mobile: 1 kolom
- Setiap item berupa logo + link
- Logo rata tengah; batas lebar logo sekitar 70% dari lebar kolom (supaya tidak mepet)

## 7) Footer
**Footer 1:** background putih (informasi/sitemap bila ada)

**Footer 2:**
- Background: `footerSecondaryBg` (indigo)
- Bisa memakai background-image motif (di referensi: `backsman.png`)

**Absolute footer:**
- Background: `pageBg` (magenta)
- Isi: link footer-nav uppercase + copyright

## 8) Back to Top
- Tombol fixed bawah
- Bentuk lingkaran, outline

## 9) Slider / Carousel (modern)
Tujuan: menampilkan highlight (mis. hero, agenda, berita unggulan) dengan UX yang bagus di mobile.

Patokan:
- **Mobile-first**: default 1 slide per view, boleh ada "peek" sedikit slide berikutnya.
- Interaksi utama: swipe/drag (touch).
- Kontrol:
  - Dots (indikator) wajib jelas.
  - Arrow boleh muncul di desktop/tablet, tapi jangan mengganggu di mobile.
- Aksesibilitas:
  - Harus bisa di-navigasi keyboard.
  - Elemen kontrol wajib punya aria-label.

Catatan: hindari autoplay default. Kalau nanti dipakai autoplay, harus bisa di-pause.

## 10) Glass surface (modern)
Tujuan: tampilan modern "glass" untuk card/panel di atas background foto/warna.

Patokan:
- Gunakan token `components.glass` dari `design_system.json` (surface alpha + border alpha + blur).
- Wajib dipakai di area yang aman untuk keterbacaan teks (kontras tetap prioritas).
- Di mobile, blur/efek tidak boleh mengorbankan performa; jaga penggunaan glass tidak berlebihan.

## 11) Animasi (landing page)
Animasi penting untuk landing page, tapi harus **ringan** dan **berfungsi** (memberi feedback / membantu memahami hierarki konten).

Pola yang dipakai:
- Micro-interaction:
  - Hover lift pada card (khusus device yang punya hover).
  - Press feedback pada button (scale down sedikit).
- Reveal on scroll:
  - Section/komponen masuk dengan transisi halus (fade + translateY kecil).
  - Boleh stagger untuk list/grid agar terlihat modern.

Aturan:
- Wajib mendukung `prefers-reduced-motion` (matikan reveal/stagger, sisakan perubahan state minimal).
- Hindari autoplay/animasi besar yang mengganggu baca konten.
