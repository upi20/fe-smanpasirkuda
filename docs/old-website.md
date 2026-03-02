# Inventaris Fitur Old Website (SMAN 1 Pasirkuda)

Dokumen ini merangkum **fitur & modul konten** yang ada pada old website (hasil mirror di folder `old-website/`). Fokusnya **bukan implementasi teknis**, melainkan apa saja yang tersedia untuk pengunjung dan apa saja jenis kontennya.

Sumber utama:
- Beranda: [../old-website/smansatupasirkuda.sch.id/index.html](../old-website/smansatupasirkuda.sch.id/index.html)
- Folder mirror: `old-website/smansatupasirkuda.sch.id/`

## 1) Ringkasan Platform

- Website menggunakan **Schoolmedia CMS** (terlihat dari footer “Designed by schoolmedia” dan pola URL modul).
- Pola umum halaman konten: **Listing → Detail**, dengan elemen engagement (share/reaksi/komentar) pada halaman detail.
- Banyak komponen sidebar bersifat **widget dinamis** (data diambil dari endpoint JSON seperti `*/ajax.json`).

## 2) Navigasi & Struktur Menu

Header menyediakan menu dropdown (utama):

- **Beranda**: Berita, Galeri, Video
- **Profil**: Tentang Sekolah, Visi dan Misi, Kepala Sekolah, Prestasi Sekolah, Peminatan
- **Data**: Sarpras, Guru, Stap TU, Siswa
- **Informasi**: Pengumuman, Agenda Kegiatan, Jadwal Pelajaran, Jadwal Ujian, Ekstrakurikuler, Unduhan
- **OSIS**: Tentang OSIS, Pengurus OSIS, Bidang Kegiatan
- **Opini**: Guru, Siswa
- **Aplikasi** (tautan eksternal ekosistem Schoolmedia): Jejaring Schoolmedia, Event, JA, MAU, Testonline, Tryout, Bahanajar, Biz, Scoin, News, Pitakon, Kuesioner, PPDB
- **Link** (tautan eksternal pendidikan): Rumah Belajar, Portal BOS, Ujian Nasional, Kemdikbud, DitPSMA
- Tombol **Login** via **SSO Schoolmedia**

## 3) Fitur Global (Lintas Halaman)

### Header
- **Sticky header** (tetap di atas saat scroll).
- Identitas sekolah: logo, nama sekolah, tagline.
- Nama/tagline memakai mekanisme marquee saat overflow (teks kepanjangan).

### Running Text / Pengumuman Bar
- Ada banner berjalan di paling atas dengan isi pesan pengumuman.
	- Pada mirror saat ini muncul pesan peringatan terkait pembayaran layanan.

### Footer
- Kontak sekolah (email, telepon, alamat).
- Ikon sosial media: Instagram, Facebook, YouTube.

### Utilitas UI
- Tombol **Back to top**.
- Tampilan responsif (mobile menu).

## 4) Modul Beranda (Homepage)

Beranda menampilkan ringkasan beberapa modul utama:

### Slider/Carousel
- Slider gambar (beberapa slide) dengan judul/caption.

### Shortcut Profil
- Tiga kartu cepat: **Visi Misi**, **Kepala Sekolah**, **Tentang Sekolah**.

### Berita (ringkas)
- Menampilkan beberapa berita terbaru (grid) + tombol “Lihat Berita Lainnya”.

### Guru (ringkas)
- Menampilkan daftar guru/staf tertentu (nama + jabatan) dalam format slider.

### Agenda (ringkas)
- Menampilkan beberapa agenda (tanggal + judul) + tombol “Lihat Agenda Lainnya”.

### Foto Galeri (ringkas)
- Slider foto.
- Klik foto membuka **modal “Detail Foto”**.

## 5) Modul Konten: Listing & Detail

Bagian ini mendeskripsikan tipe konten yang sifatnya “publikasi” (artikel/media) dan umumnya memiliki halaman list dan detail.

### 5.1 Berita
- Listing: [../old-website/smansatupasirkuda.sch.id/berita.html](../old-website/smansatupasirkuda.sch.id/berita.html)
	- Kartu/list berisi judul, tanggal, ringkasan, thumbnail.
	- Mendukung **pagination**.
- Detail: contoh file di folder `old-website/smansatupasirkuda.sch.id/berita/`
	- Menampilkan konten lengkap + metadata (tanggal).
	- Ada **view count** (ikon mata) dan placeholder jumlah komentar.
	- **Bagikan**: Facebook, WhatsApp, Twitter, LinkedIn, Email.
	- **Reaksi**: Suka / Tidak Suka.
	- **Komentar**: form komentar dengan batas karakter + informasi moderasi (komentar menunggu moderator).
	- Sidebar widget (dinamis): misalnya Prestasi/Opini/Agenda/Berita (variasi antar halaman).

### 5.2 Prestasi
- Listing: [../old-website/smansatupasirkuda.sch.id/prestasi.html](../old-website/smansatupasirkuda.sch.id/prestasi.html)
	- Item berisi judul, tanggal, tingkat juara (mis. Juara 1), dan level (mis. Kabupaten) + ringkasan.
- Detail: contoh [../old-website/smansatupasirkuda.sch.id/prestasi/dakwah-pentas-pai.html](../old-website/smansatupasirkuda.sch.id/prestasi/dakwah-pentas-pai.html)
	- Pola engagement sama seperti detail Berita (share/reaksi/komentar/view count).

### 5.3 Agenda Kegiatan
- Listing: [../old-website/smansatupasirkuda.sch.id/agenda.html](../old-website/smansatupasirkuda.sch.id/agenda.html)
	- Item berisi judul, tanggal/waktu, ringkasan.
	- Mendukung pagination.
- Detail: ada di folder `old-website/smansatupasirkuda.sch.id/agenda/`

### 5.4 Galeri
- Listing (galeri utama): [../old-website/smansatupasirkuda.sch.id/galeri.html](../old-website/smansatupasirkuda.sch.id/galeri.html)
- Detail album/foto: ada di folder `old-website/smansatupasirkuda.sch.id/galeri/`
	- Pada beranda, foto dibuka lewat **modal detail**.
	- Secara umum galeri menampilkan foto + judul/deskripsi.

### 5.5 Video
- Listing: [../old-website/smansatupasirkuda.sch.id/video.html](../old-website/smansatupasirkuda.sch.id/video.html)
- Detail: ada di folder `old-website/smansatupasirkuda.sch.id/video/`
	- Menampilkan video (embed) + pola engagement (share/reaksi/komentar) serupa berita.

### 5.6 Ekstrakurikuler
- Listing: [../old-website/smansatupasirkuda.sch.id/ekstrakurikuler.html](../old-website/smansatupasirkuda.sch.id/ekstrakurikuler.html)
	- Menampilkan daftar ekskul (mis. PMR, Badminton) dengan gambar dan deskripsi.
- Detail: contoh
	- [../old-website/smansatupasirkuda.sch.id/ekstrakurikuler/eskul-pmr.html](../old-website/smansatupasirkuda.sch.id/ekstrakurikuler/eskul-pmr.html)
	- [../old-website/smansatupasirkuda.sch.id/ekstrakurikuler/eskul-badminton.html](../old-website/smansatupasirkuda.sch.id/ekstrakurikuler/eskul-badminton.html)

### 5.7 Pengumuman
- Listing: [../old-website/smansatupasirkuda.sch.id/pengumuman.html](../old-website/smansatupasirkuda.sch.id/pengumuman.html)
	- Pada snapshot mirror ini muncul **empty state**: “Belum ada Pengumuman”.
	- Sidebar widget tetap ada (dinamis).

### 5.8 Unduhan
- Listing: [../old-website/smansatupasirkuda.sch.id/unduhan.html](../old-website/smansatupasirkuda.sch.id/unduhan.html)
	- Pada snapshot mirror ini muncul **empty state**: “Belum ada Unduhan”.
	- Secara fungsi, modul ini ditujukan untuk file download (PDF/DOC/ZIP, dsb).

## 6) Modul Data (Struktural: Filter, Tabel, Detail)

Modul “Data” berbeda dari konten artikel; lebih berupa dataset sekolah dengan filter.

### 6.1 Sarpras (Sarana & Prasarana)
- Listing: [../old-website/smansatupasirkuda.sch.id/sarpras.html](../old-website/smansatupasirkuda.sch.id/sarpras.html)
	- Daftar fasilitas (nama, ukuran/dimensi, dsb) + tombol lihat detail.
	- Pagination.
- Detail: contoh [../old-website/smansatupasirkuda.sch.id/sarpras/laboratorium-fisika-14.html](../old-website/smansatupasirkuda.sch.id/sarpras/laboratorium-fisika-14.html)
	- Tabel atribut (jenis, ukuran, kondisi, indeks).
	- Tab **Sarana** dan **Prasarana** (pada mirror terlihat memuat data secara dinamis / “Loading…”).

### 6.2 Guru
- Halaman: [../old-website/smansatupasirkuda.sch.id/guru.html](../old-website/smansatupasirkuda.sch.id/guru.html)
	- Filter **Tahun Ajaran**.
	- Pengaturan jumlah item per halaman.
	- Daftar/pagination (konten tampak diload dinamis).

### 6.3 Siswa
- Halaman: [../old-website/smansatupasirkuda.sch.id/siswa.html](../old-website/smansatupasirkuda.sch.id/siswa.html)
	- Modul “Daftar Rombongan Belajar per Tahun Ajaran”.
	- Filter: Tahun Ajaran, Kelas, Peminatan.
	- Tabel ringkasan jumlah siswa (L/P) per rombel + kolom detail.

### 6.4 Stap TU
- Halaman: [../old-website/smansatupasirkuda.sch.id/stap-tu.html](../old-website/smansatupasirkuda.sch.id/stap-tu.html)
	- Pada snapshot mirror ini muncul **empty state**: “Belum Ada Konten”.

## 7) Modul Informasi Akademik (Jadwal)

### 7.1 Jadwal Pelajaran
- Halaman: [../old-website/smansatupasirkuda.sch.id/jadwal-pelajaran.html](../old-website/smansatupasirkuda.sch.id/jadwal-pelajaran.html)
	- Filter: Tahun Ajaran, Kelas, Semester, Peminatan, Rombongan Belajar.
	- Tombol aksi “Filter”.
	- Empty state: “Belum ada Jadwal Pelajaran… Gunakan filter…”.
	- Ada **modal “Detail Mata Pelajaran”**.

### 7.2 Jadwal Ujian
- Halaman: [../old-website/smansatupasirkuda.sch.id/jadwal-ujian.html](../old-website/smansatupasirkuda.sch.id/jadwal-ujian.html)
	- Filter seperti jadwal pelajaran + tambahan filter “Nama Ujian” (mis. UTS/UAS/US).
	- Empty state: “Belum ada Jadwal Ujian… Gunakan filter…”.

## 8) Modul Profil

### 8.1 Tentang Sekolah
- Halaman: [../old-website/smansatupasirkuda.sch.id/tentang-sekolah.html](../old-website/smansatupasirkuda.sch.id/tentang-sekolah.html)
	- Konten narasi (rich text).
	- Bagian **Lokasi sekolah** dengan container peta (`mapSekolah`).

### 8.2 Visi dan Misi
- Halaman: [../old-website/smansatupasirkuda.sch.id/visi-misi.html](../old-website/smansatupasirkuda.sch.id/visi-misi.html)
	- Menampilkan teks Visi/Misi (rich text).

### 8.3 Kepala Sekolah
- Halaman: [../old-website/smansatupasirkuda.sch.id/kepala-sekolah.html](../old-website/smansatupasirkuda.sch.id/kepala-sekolah.html)
	- Sambutan kepala sekolah (konten narasi).
	- Foto kepala sekolah + nama/jabatan.
	- Nomor kontak (pada snapshot terlihat sebagai teks).

### 8.4 Peminatan
- Halaman: [../old-website/smansatupasirkuda.sch.id/peminatan.html](../old-website/smansatupasirkuda.sch.id/peminatan.html)
	- Pada snapshot mirror ini muncul **empty state**: “Belum ada Peminatan”.

## 9) Modul OSIS

### 9.1 Tentang OSIS
- Halaman: [../old-website/smansatupasirkuda.sch.id/tentang-osis.html](../old-website/smansatupasirkuda.sch.id/tentang-osis.html)
	- Konten panjang (rich text) berisi penjelasan OSIS.
	- Ada sidebar widget dinamis.

### 9.2 Pengurus OSIS
- Halaman: [../old-website/smansatupasirkuda.sch.id/pengurus-osis.html](../old-website/smansatupasirkuda.sch.id/pengurus-osis.html)
	- Pada snapshot mirror ini muncul **empty state**: “Belum ada Pengurus”.

### 9.3 Bidang Kegiatan / Kegiatan OSIS
- Halaman: [../old-website/smansatupasirkuda.sch.id/kegiatan-osis.html](../old-website/smansatupasirkuda.sch.id/kegiatan-osis.html)
	- Layout konten + sidebar widget dinamis.
	- Pada snapshot mirror ini bagian konten utama terlihat minim/tidak terisi.

## 10) Modul Opini

### 10.1 Opini Guru
- Halaman: [../old-website/smansatupasirkuda.sch.id/opini-guru.html](../old-website/smansatupasirkuda.sch.id/opini-guru.html)
	- Pada snapshot mirror ini muncul **empty state**: “Belum ada opini”.
	- Sidebar widget dinamis: Agenda, Prestasi.

### 10.2 Opini Siswa
- Halaman: [../old-website/smansatupasirkuda.sch.id/opini-siswa.html](../old-website/smansatupasirkuda.sch.id/opini-siswa.html)
	- Pada snapshot mirror ini muncul **empty state**: “Belum ada opini”.
	- Sidebar widget dinamis: Agenda, Prestasi.

## 11) Pola Widget Sidebar (Konten Terkait)

Di banyak halaman (listing maupun detail), sidebar menampilkan konten terkait yang dimuat dinamis, misalnya:

- Opini Guru/Siswa
- Prestasi Sekolah
- Berita Sekolah
- Agenda Sekolah

Indikasinya berupa request ke endpoint JSON seperti:
- `opini-guru/ajax.json`
- `opini-siswa/ajax.json`
- `prestasi/ajax.json`
- `berita/ajax.json`
- `agenda/ajax.json`

Jika data kosong, widget biasanya menampilkan pesan “Belum Ada …”.

## 12) Fitur Interaksi di Halaman Detail (Engagement)

Pada beberapa halaman detail konten (Berita/Prestasi/Video, dan kemungkinan modul lain yang serupa), tersedia:

- **Statistik tayang** (view count).
- **Bagikan** ke beberapa platform.
- **Reaksi**: Suka / Tidak Suka.
- **Komentar**:
	- Form input komentar dengan batas karakter.
	- Pesan sukses + pesan “komentar dalam tahap moderator”.
	- Empty state komentar (“Belum ada komentar…”).

## 13) Catatan Kondisi Konten (Snapshot Ini)

Pada hasil mirror yang ada sekarang, beberapa modul tampak tersedia tetapi belum memiliki data (empty state), contohnya:

- Pengumuman, Unduhan
- Opini Guru/Siswa
- Peminatan
- Pengurus OSIS
- Stap TU
- Jadwal Pelajaran & Jadwal Ujian (mengandalkan filter; saat ini kosong)

Ini penting untuk dicatat saat redesign: modulnya ada, namun kontennya (atau datanya) belum diisi/aktif pada saat snapshot diambil.

