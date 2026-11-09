# Project Log

Catatan ini mendokumentasikan setiap perubahan, keputusan arsitektur, dan perkembangan proyek homepage GitHub Pages.

## [2026-11-09] - Sinkronisasi Penuh ke GitHub dan Normalisasi Remote

### Hasil Pengunggahan (Git Push)
- Seluruh kode proyek, basis data JSON, berkas JavaScript, gaya CSS, dan dokumentasi telah berhasil dipush ke repositori GitHub `https://github.com/wh-sugiharto/wh-sugiharto.github.io.git` pada branch `main`.
- Remote origin telah disetel ke URL resmi tanpa anomali karakter. Status working tree saat ini bersih (clean) dan sinkron dengan origin/main.

### Langkah Aktivasi GitHub Pages
1. Buka repositori `https://github.com/wh-sugiharto/wh-sugiharto.github.io` di peramban.
2. Masuk ke menu **Settings** > **Pages**.
3. Pastikan bagian **Build and deployment** > **Source** memilih opsi **Deploy from a branch**.
4. Pilih branch `main` dan folder `/ (root)`, lalu klik tombol **Save**.
5. Situs dapat diakses langsung pada alamat publik: `https://wh-sugiharto.github.io`.

## [2026-11-09] - Berhasil Push ke GitHub dan Catatan Penamaan Repositori

### Status Push
- Pengunggahan seluruh kode proyek berhasil dilakukan ke repositori remote `https://github.com/wh-sugiharto/wh-sugiharto.github.io..git` pada branch `main`.
- Seluruh berkas (antarmuka Bootstrap, basis data JSON, logika JavaScript, dan dokumentasi) kini telah tersedia di GitHub.

### Catatan Penting Terkait Konvensi GitHub Pages
- Repositori remote saat ini memiliki nama dengan tanda titik di akhir: `wh-sugiharto.github.io.`.
- Agar situs dapat diakses langsung pada domain utama `https://wh-sugiharto.github.io` (bukan sub-path atau mengalami galat rute), disarankan untuk mengubah nama repositori di menu Settings GitHub menjadi `wh-sugiharto.github.io` (tanpa tanda titik).

## [2026-11-09] - Verifikasi Remote Repository dan Pengujian Lokal

### Temuan Verifikasi Remote GitHub
- Melakukan verifikasi HTTP terhadap repositori tujuan: profil `https://github.com/wh-sugiharto` berstatus aktif (HTTP 200), namun repositori `wh-sugiharto.github.io` belum dibuat di GitHub (HTTP 404).
- Mencatat bahwa repositori perlu dibuat terlebih dahulu di GitHub dengan nama persis `wh-sugiharto.github.io` (tanpa tanda titik di akhir nama repositori) dengan visibilitas Public agar fitur GitHub Pages aktif otomatis.
- Menyediakan instruksi pengujian lokal via `python3 -m http.server` untuk meninjau tampilan di peramban sebelum push.

## [2026-11-09] - Personalisasi Profil dan Penambahan Fitur Dinamis Beranda

### Pembaruan Profil & Konfigurasi Repositori
- Memperbarui identitas akademik pada `data/profile.json` dengan data Dr. Ir. Wibowo Harry Sugiharto, S.Kom., M.Kom. dari Universitas Muria Kudus (UMK).
- Menghubungkan profil dengan tautan GitHub resmi (`https://github.com/wh-sugiharto`) dan repositori `wh-sugiharto.github.io`.
- Mengonfigurasi `git remote origin` ke `https://github.com/wh-sugiharto/wh-sugiharto.github.io.git`.
- Menyesuaikan topik perkuliahan pada `data/courses.json` ke ranah Internet of Things (IoT), Jaringan Komputer, dan Pembelajaran Mesin.
- Menyesuaikan proyek skripsi mahasiswa bimbingan pada `data/theses.json` ke topik telemetri sensor lingkungan, LoRa, dan pemantauan kualitas air.
- Menyesuaikan publikasi penelitian pada `data/research.json` ke bidang IoT dan penilaian kualitas air (Water Quality Index).

### Peningkatan Antarmuka Beranda
- Menambahkan skrip `js/home.js` yang secara otomatis menampilkan ringkasan publikasi unggulan terbaru, mata kuliah aktif, dan skripsi mahasiswa terkini langsung di `index.html`.
- Menambahkan dukungan penanganan wadah foto avatar pada `js/common.js`.
- Memastikan tidak ada penggunaan em dash atau simbol panah pada seluruh markup dan teks sesuai aturan penulisan.

## [2026-11-09] - Pembuatan Struktur Lengkap dan Antarmuka Bootstrap

### Keputusan Arsitektur
- Menggunakan Bootstrap 5.3 CDN dan Bootstrap Icons untuk tata letak yang bersih, standar akademis, dan mudah diakses di berbagai perangkat.
- Mengadopsi format basis data statis berbasis JSON pada direktori `data/` agar pembaruan data dapat dilakukan secara instan melalui commit GitHub tanpa membutuhkan proses build atau kompilasi server.
- Memberikan komentar kode dalam bahasa Indonesia dan memastikan seluruh label antarmuka pengguna disajikan dalam bahasa Inggris.

### Berkas yang Dibuat
1. **Basis Data JSON (`data/`)**:
   - `data/profile.json`: Profil pribadi, afiliasi, kontak, dan tautan profil akademik (GitHub, Google Scholar, ORCID).
   - `data/courses.json`: Daftar mata kuliah yang diampu, kode, semester, silabus, dan tautan repositori kuliah.
   - `data/theses.json`: Proyek tugas akhir atau skripsi mahasiswa bimbingan, abstrak, dan tautan repositori mahasiswa.
   - `data/research.json`: Daftar publikasi makalah penelitian yang dikelompokkan berdasarkan topik, dilengkapi tautan DOI, naskah PDF, repositori kode, dan kutipan BibTeX.
2. **Logika dan Skrip JavaScript (`js/`)**:
   - `js/common.js`: Pemuatan profil bersama dan sinkronisasi status menu navigasi aktif.
   - `js/courses.js`: Rendering daftar kuliah, pencarian dinamis, dan filter status semester.
   - `js/theses.js`: Rendering data skripsi mahasiswa, filter tahun, filter status pengerjaan, dan pencarian kata kunci.
   - `js/research.js`: Rendering publikasi yang dikelompokkan berdasarkan topik atau tahun, pencarian, dan fitur salin BibTeX.
   - `js/home.js`: Rendering sorotan terbaru pada beranda.
3. **Gaya dan Tata Letak (`css/`)**:
   - `css/style.css`: Penyesuaian tipografi, kartu profil, badge topik, dan kotak kutipan BibTeX.
4. **Halaman HTML**:
   - `index.html`: Beranda dengan ringkasan bio profil dan navigasi cepat ke tiga menu utama.
   - `courses.html`: Halaman menu utama 1 untuk perkuliahan yang diampu.
   - `theses.html`: Halaman menu utama 2 untuk proyek skripsi bimbingan dan repositori mahasiswa.
   - `research.html`: Halaman menu terbaik 3 untuk publikasi penelitian yang dikelompokkan.
5. **Dokumentasi**:
   - `README.md`: Panduan struktur repositori, konfigurasi aktivasi GitHub Pages, dan tata cara pembaruan data.
