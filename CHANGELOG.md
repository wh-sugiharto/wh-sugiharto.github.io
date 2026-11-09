# Project Log

Catatan ini mendokumentasikan setiap perubahan, keputusan arsitektur, dan perkembangan proyek homepage GitHub Pages.

## [2026-11-09] - Pembaruan Artikel Terbit Baru Q1 di Discover Sustainability

### Sinkronisasi Publikasi (`data/research.json`, `cv.html`, `_agent/logs/CV_DrWibowo.md`)
- Menambahkan artikel jurnal yang baru terbit: "Forecasting Urban Carbon Monoxide Concentrations Using a Hybrid ResNet Transformer with STL Decomposition" pada jurnal *Discover Sustainability* (Springer Nature), DOI: `10.1007/s43621-026-05283-2`.
- Mengklasifikasikannya ke dalam domain `Air` dengan status kuartil Scopus `Q1`.
- Memperbarui daftar publikasi pada CV web (`cv.html`) serta dokumen CV internal (`_agent/logs/CV_DrWibowo.md`) dengan memindahkannya dari status naskah dalam telaah ke daftar artikel jurnal terbit resmi.
- Melakukan push pembaruan pada kedua repositori: `_research` dan `wh-sugiharto.github.io`.

## [2026-11-09] - Penambahan Lencana Kuartil Scopus (Q1, Q2, Q3, Q4, No-Q) pada Publikasi

### Peningkatan Visual dan Pencarian Publikasi (`data/research.json`, `js/research.js`)
- Menambahkan atribut `quartile` pada seluruh 15 publikasi di `data/research.json`:
  - Jurnal Springer Nature / Nature Portfolio ditetapkan sebagai `Q1` (Scientific Reports, Discover Artificial Intelligence, Discover Sustainability), kecuali Discover Water sebagai `No-Q`.
  - Mathematical Modelling of Engineering Problems (MMEP) ditetapkan sebagai `Q2`.
  - Instrumentation Mesure Métrologie (I2M) dan Ingénierie des Systèmes d'Information (ISI) ditetapkan sebagai `Q3`.
  - Seluruh prosiding konferensi (JPCS, AER, E3S) ditetapkan sebagai `Q4`.
- Menampilkan lencana kuartil bergradasi warna elegan tepat di samping tombol aksi DOI dan BibTeX pada setiap kartu publikasi (`js/research.js`).
- Memperluas filter pencarian publikasi agar pengguna dapat menyaring makalah secara langsung dengan mengetikkan tingkat kuartil (misalnya "Q1", "Q2").

## [2026-11-09] - Penyelarasan Nomenklatur Domain Riset (Water, Air, Land)

### Penyempurnaan Tampilan dan Data Riset (`research.html`, `data/research.json`, `js/research.js`)
- Menyederhanakan penamaan pilar riset pada prolog `research.html` menjadi `1. Water`, `2. Air`, dan `3. Land` sesuai preferensi pengguna.
- Menyelaraskan seluruh kategori pada basis data `data/research.json` dan urutan pengelompokan di `js/research.js` agar seragam menggunakan label `Water`, `Air`, dan `Land`.
- Mengunggah seluruh pembaruan ke repositori remote GitHub.

## [2026-11-09] - Penambahan Prolog Penelitian dan Kategorisasi Portofolio 3 Domain (Water, Air, Land)

### Penataan Halaman Riset (`research.html`)
- Menambahkan kartu prolog di atas daftar publikasi yang menegaskan fokus penelitian utama: Internet of Things (IoT), monitoring lingkungan, dan asesmen kualitas lingkungan.
- Merangkum 3 pilar riset dalam kartu terstruktur yang bersih:
  1. **Water (Air)**: Telemetri sungai, pemodelan kurva sub-indeks, evaluasi fisikokimia (pH, DO, BOD, TDS, suhu, kekeruhan), serta perumusan deterministik Edge-IoT Water Quality Index (IoT-WQI).
  2. **Air (Udara)**: Jaringan sensor terdistribusi karbon monoksida (CO), Interval Type-2 Fuzzy Logic, dan regresi Time-Series Visibility Graph untuk peramalan polutan udara perkotaan.
  3. **Land**: Penginderaan jauh satelit, deteksi deforestasi hutan Amazon, dan kerangka kerja spasial hibrida Vision Transformer serta Graph Neural Network (ViT-GNN).

### Pembaruan Basis Data dan Logika Penyaringan (`data/research.json`, `js/research.js`)
- Mengklasifikasikan seluruh 15 publikasi ke dalam 3 kategori standar: `Water (Air)` (9 publikasi), `Air (Udara)` (4 publikasi), dan `Land` (2 publikasi).
- Memperbarui algoritma pengelompokan dan dropdown filter di `js/research.js` agar secara konsisten mengurutkan domain riset sesuai prioritas utama: Water (Air), disusul Air (Udara), lalu Land.

## [2026-11-09] - Sinkronisasi Penulisan Nama Penulis Publikasi Sesuai CV

### Pembaruan Basis Data Publikasi (`data/research.json`)
- Menyesuaikan penulisan nama penulis pada seluruh 15 entri publikasi di `data/research.json` secara presisi mengikuti format resmi pada CV (`_agent/logs/CV_DrWibowo.md`).
- Format penulisan kini menggunakan `Sugiharto, W.H.` beserta singkatan rekan penulis resmi (seperti `Prasetijo, A.B.`, `Susanto, H.`, `Bardadi, A.`, atau `et al.`) tanpa improvisasi nama panjang.

## [2026-11-09] - Penyederhanaan Halaman Beranda (Negative Space & Fokus Portofolio)

### Penataan Tata Letak Beranda (`index.html`)
- Mengubah judul kartu menu pertama menjadi `Courses` agar selaras dengan materi ajar.
- Menghapus bagian sorotan teknis redundan dan catatan database di bagian bawah kolom beranda untuk memberikan ruang bernafas yang lapang dan fokus visual yang jelas pada 3 menu utama (Courses, Supervised Theses, dan Research).
- Menyinkronkan seluruh perubahan ke branch `main` repositori GitHub.

## [2026-11-09] - Pembatalan Perubahan Desain Editorial (Revert)

### Pemulihan Status Kerja
- Membatalkan perubahan desain layout editorial dan mengembalikan tata letak sesuai pilihan pengguna.
- Menyinkronkan seluruh berkas lokal ke repositori remote GitHub.

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
