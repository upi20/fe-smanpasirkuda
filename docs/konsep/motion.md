# Motion / Animation

Tujuan motion di landing page:
- Memberi feedback (klik/hover) dan memperjelas urutan konten.
- Membuat tampilan modern tanpa mengganggu keterbacaan.

## Prinsip
- Mobile-first: animasi harus ringan dan tidak menghambat scroll.
- Gunakan animasi kecil, konsisten, dan berulang (micro-interactions).
- Hindari autoplay berlebihan (terutama untuk slider).

## Pola yang disarankan
Rujukan token/pattern ada di `components.animation` pada `design_system.json`.

### 1) Hover lift (device dengan hover)
- Untuk card/cta: naik sedikit + shadow halus atau scale kecil.

### 2) Press feedback
- Untuk button: scale turun sedikit saat pressed.

### 3) Reveal on scroll
- Untuk section penting: fade in + translateY kecil.
- Untuk list/grid: boleh stagger ringan.

## Aksesibilitas: prefers-reduced-motion (wajib)
Jika user memilih reduced motion:
- Matikan reveal + stagger.
- Sisakan perubahan state minimal (mis. perubahan warna/underline).
- Jangan gunakan animasi loop.

## Guardrails
- Jangan animasikan layout besar yang memicu reflow berat.
- Animasi harus tetap nyaman pada device low-end.
