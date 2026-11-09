# Project Log

Catatan ini mendokumentasikan setiap perubahan, keputusan arsitektur, dan perkembangan proyek homepage GitHub Pages.

## [2026-11-09] - Perombakan Desain Minimalis Akademis & Negative Space

### Refactoring Tata Letak Editorial (Menghilangkan Kesan Card-in-Card AI)
- Mengeliminasi kontainer kartu bertingkat (`card profile-card`, `card item-card`, lencana ikon berlingkar, dan kartu catatan sistem) yang sebelumnya memberi kesan kaku ala template generator AI.
- Menerapkan konsep *negative space* (ruang bernafas) sejati ala situs personal akademisi universitas riset dunia (Stanford/MIT style):
  - Mengatur batas lebar baca optimal (`max-width: 880px`) melalui kelas `.reading-container` agar garis mata nyaman.
  - Meningkatkan *line-height* menjadi 1.7-1.8 untuk teks deskripsi dan biodata.
  - Mengubah seluruh tampilan daftar publikasi, mata kuliah, dan skripsi bimbingan menjadi format artikel editorial (`.editorial-item`) tanpa batas kartu tebal.
  - Menghilangkan bilah pencarian yang terbungkus kotak abu-abu tebal dan menggantinya dengan input bersih minimalis.
- Menyinkronkan seluruh halaman (`index.html`, `courses.html`, `theses.html`, `research.html`, `cv.html`, `404.html`) ke dalam bahasa visual yang tenang dan lapang.

## [2026-11-09] - Penambahan Peta Situs (Sitemap) dan Halaman Fallback 404

### Peningkatan Ketahanan dan Pengindeksan Web
- Menambahkan `sitemap.xml` yang mendaftarkan seluruh rute publik situs (`index.html`, `courses.html`, `theses.html`, `research.html`, dan `cv.html`) untuk memudahkan crawler mesin pencari (Google Scholar, Bing, DuckDuckGo).
- Menambahkan halaman fallback `404.html` berdesain Bootstrap 5.3 yang serasi dengan tautan kembali ke beranda saat pengunjung mengakses URL yang salah.

## [2026-11-09] - Penyesuaian Mata Kuliah yang Diampu (1 Repo, 2 MK)

### Pembaruan Data Perkuliahan (`data/courses.json`)
- Menyesuaikan data perkuliahan sesuai informasi aktual yang diampu pada repositori tunggal `https://github.com/wh-sugiharto/emb_sys_umk`:
  1. **IFE307 - Embedded System**: 2 SKS, Tipe Teori. Tautan modul: `https://github.com/wh-sugiharto/emb_sys_umk/blob/main/IFE307_Embedded_System`.
  2. **IFE309 - Praktikum Embedded System**: 2 SKS, Tipe Praktikum. Tautan modul: `https://github.com/wh-sugiharto/emb_sys_umk/blob/main/IFE309_Praktikum_Embedded_System`.
- Menambahkan atribut `credits` (SKS) dan `type` (Theory / Laboratory) serta merender badge informasi tersebut pada halaman `courses.html` dan ringkasan beranda `index.html`.
- Menyediakan tombol aksi ganda: tautan langsung ke folder materi masing-masing MK dan tautan ke repositori induk `emb_sys_umk`.

## [2026-11-09] - Pembaruan Tautan Profil Akademik ke Scopus

### Perubahan Tautan Eksternal
- Mengganti tautan Scholar pada kartu profil di `index.html` menjadi tautan resmi Scopus Author: `https://www.scopus.com/pages/authors/57210989011`.
- Memperbarui `data/profile.json` dengan atribut `scopus` dan menyesuaikan logika pemuatan tautan di `js/common.js`.
- Menambahkan rujukan Scopus ID (`57210989011`) pada tajuk dokumen di halaman `cv.html`.

## [2026-11-09] - Pembuatan Halaman CV Akademik dan Perlindungan Privasi

### Penambahan Halaman CV (`cv.html`)
- Membuat halaman kurikulum vitae lengkap (`cv.html`) berdasarkan dokumen profil akademik `_agent/logs/CV_DrWibowo.md`.
- Mengimplementasikan tata letak cetak ramah PDF menggunakan `@media print` sehingga pengunjung dapat langsung mencetak atau menyimpan CV ke PDF melalui tombol "Print / Save as PDF".
- Menambahkan tautan menu "CV" pada navbar seluruh halaman situs (`index.html`, `courses.html`, `theses.html`, `research.html`, dan `cv.html`).

### Kebijakan Privasi dan Anti-Spam
- Mengganti simbol `@` pada tampilan alamat email menjadi `wibowo.harrys [at] umk.ac.id` untuk mencegah pemindaian otomatis oleh web scraper atau spam bot.
- Menyembunyikan nomor telepon pribadi sepenuhnya sesuai permintaan privasi pengguna.
- Menambahkan interaksi ramah pengguna pada tombol email di profil beranda: mengeklik tombol akan menyalin email bersih ke papan klip tanpa mengekspos tautan `mailto:` mentah.

### Sinkronisasi Basis Data Publikasi
- Memperbarui `data/research.json` dengan 15 publikasi nyata dari CV (termasuk publikasi pada *Scientific Reports* Nature Portfolio, Springer *Discover AI*, *Discover Sustainability*, dan prosiding konferensi).

## [2026-11-09] - Verifikasi Situs Live di GitHub Pages (HTTP 200)

### Hasil Deployment Publik
- Situs akademik telah berstatus aktif dan dapat diakses publik pada domain utama: `https://wh-sugiharto.github.io` (HTTP/2 200).
- Seluruh endpoint halaman dan data telah teruji berhasil dimuat:
  - Beranda (`index.html`): HTTP 200
  - Perkuliahan (`courses.html`): HTTP 200
  - Skripsi Bimbingan (`theses.html`): HTTP 200
  - Penelitian (`research.html`): HTTP 200
  - Basis Data Statis (`data/profile.json`, `data/courses.json`, `data/theses.json`, `data/research.json`): HTTP 200
- Seluruh sistem pencarian dinamis, filter kategori atau status, dan fitur ekspor BibTeX siap digunakan secara mandiri.
