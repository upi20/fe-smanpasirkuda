# Build & Deploy (Static SPA)

## Build
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview build lokal: `npm run preview`

Output build ada di folder `dist/`.

## SPA routing requirement
Karena pakai client-side routing, server/hosting harus fallback semua route ke `index.html`.

### Nginx (contoh)
```
location / {
  try_files $uri $uri/ /index.html;
}
```

### Netlify
Buat file `public/_redirects`:
```
/* /index.html 200
```

### Cloudflare Pages
- Pilih mode SPA fallback ke `index.html`, atau gunakan `_redirects` seperti Netlify.

## Cache headers (rekomendasi umum)
- `index.html`: cache pendek (karena entrypoint)
- `assets/*`: cache panjang + immutable (Vite biasanya fingerprinted)

## Performance notes
- Pastikan gambar besar (hero/banner) sudah terkompresi sebelum deploy.
- Untuk gambar di bawah fold: gunakan lazy-load.
- Cegah CLS: pastikan image punya ukuran/ratio.

## Tidak ada server runtime
Semua fitur harus jalan tanpa proses server (kecuali konsumsi API eksternal jika nanti ditambahkan).
