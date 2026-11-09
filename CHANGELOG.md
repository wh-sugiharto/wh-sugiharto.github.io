# Project Log

Catatan ini mendokumentasikan setiap perubahan, keputusan arsitektur, dan perkembangan proyek homepage GitHub Pages.

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
3. **Gaya dan Tata Letak (`css/`)**:
   - `css/style.css`: Penyesuaian tipografi, kartu profil, badge topik, dan kotak kutipan BibTeX.
4. **Halaman HTML**:
   - `index.html`: Beranda dengan ringkasan bio profil dan navigasi cepat ke tiga menu utama.
   - `courses.html`: Halaman menu utama 1 untuk perkuliahan yang diampu.
   - `theses.html`: Halaman menu utama 2 untuk proyek skripsi bimbingan dan repositori mahasiswa.
   - `research.html`: Halaman menu utama 3 untuk publikasi penelitian yang dikelompokkan.
5. **Dokumentasi**:
   - `README.md`: Panduan struktur repositori, konfigurasi aktivasi GitHub Pages, dan tata cara pembaruan data.
