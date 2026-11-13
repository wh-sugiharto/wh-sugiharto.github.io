# Project Log

Catatan ini mendokumentasikan setiap perubahan, keputusan arsitektur, dan perkembangan proyek homepage GitHub Pages.

## [2026-11-13] - Pembaruan CV Web, SDGs Focus, dan Perapihan Data Scopus

### Pembaruan CV Web & Profil (`cv.html`, `index.html`, `js/common.js`, `data/profile.json`, `assets/`)
- Menyematkan foto profil baru pada `assets/profile_photo.jpg` (`764x1024 px`), mengisi `avatarUrl` di `data/profile.json`, mengganti placeholder pada `#cv-photo-container` (`cv.html`, diperbesar ke `150x195 px`) dan `#profile-avatar-container` (`index.html`, diperbesar ke `160x160 px`) agar langsung tampil baik melalui HTTP maupun pratinjau file lokal, serta menambahkan `object-position: 50% 15%` dan `bg-white` di `js/common.js` agar framing bagian atas kepala tetap proporsional.
- Menambahkan bagian `Document & Citation Trends (Scopus)` tepat di atas `Selected Publications` pada `cv.html` dengan tata letak dua kolom (`col-sm-5` metrik ringkas: `59` Citations by 54 documents, `17` Documents, `3` h-index; `col-sm-7` grafik `assets/document_citation_trends.png` berukuran kompak `max-width: 460px`).
- Menambahkan ikon domain `Water`, `Air`, dan `Land` (`bi-water`, `bi-wind`, `bi-geo-alt`) pada kartu `Research Focus` di `cv.html`.
- Mengunduh 19 ikon PNG berwarna SDG dari `logos.aiesec.org/sdgs` ke `assets/sdgs/` serta menyematkan ikon ukuran `72x72 px` pada kolom terpisah untuk 5 baris terstruktur (`SDG 6`, `SDG 11`, `SDG 3`, `SDG 15`, dan `SDG 9`) agar perataan tabel `SDGs Focus` di `cv.html` seragam, sekaligus memperbesar ikon `Water`, `Air`, dan `Land` pada `Research Focus` ke ukuran `fs-4`.
- Mengelompokkan bagian publikasi `cv.html` menjadi `Selected Publications` berdasarkan domain `1. Water` (7 jurnal, 2 prosiding), `2. Air` (4 jurnal, 1 prosiding), dan `3. Land` (2 jurnal) dalam urutan tahun terbaru menurun, dengan pemisahan sub-bagian `Journal Articles` dan `Conference Proceedings` serta blok `Manuscripts Under Review / With Editor`.
- Menerapkan Opsi A untuk label peringkat publikasi pada `cv.html`: menampilkan lencana `Q1`, `Q2`, `Q3` hanya pada jurnal berkuartil, menggunakan label `Journal Article` untuk jurnal tanpa kuartil (*Discover Water*), label `Conference Proceeding` untuk prosiding konferensi, serta mencetak tebal tahun terbit setelah nama penulis (`<strong>(YYYY)</strong>`).
- Menambahkan tata letak header dua kolom pada `cv.html` yang memuat wadah foto profil (`#cv-photo-container`), Email, ORCID, Scopus ID (`57210989011`), serta badge metrik `Scopus h-index: 3` dan `Peer-Reviewed Journal Articles: 13` berukuran `fs-6`.
- Mengganti bagian `Research Interests` menjadi `Research Focus` dengan narasi profil netral yang tetap mempertahankan kata kunci metode AI/ML serta tiga pilar riset (`1. Water`, `2. Air`, `3. Land`).
- Menambahkan bagian `SDGs Focus` (`SDG 6`, `SDG 11 & SDG 3`, `SDG 15`, `SDG 9`) yang diturunkan secara terukur dari abstrak publikasi pada `_agent/logs/scopus_wibowo.csv`.
- Menambahkan gelar profesi `Ir. (Professional Engineer)` pada bagian `Academic Qualifications` di `cv.html` (`Universitas Katolik Widya Mandala, Surabaya, Indonesia`, bidang `Electrical and Informatics Engineering`, tahun `2025`) dalam urutan kronologis menurun tepat di bawah `Ph.D.`, sekaligus menyesuaikan lebar kolom tabel (`22%`, `41%`, `24%`, `13%`).
- Mengubah bagian `Employment` menjadi `Employment & Academic Appointments` untuk mencantumkan jabatan `Head of Laboratory` (`Department of Informatics Engineering, Universitas Muria Kudus, Indonesia`, `2025 - Present`), `Lecturer` (`2016 - Present`), serta posisi `Visiting Early Career Researcher (ECR)` di University of Adelaide, Australia melalui program ASEAN Research Collaboration Project (IEIF / RMIT Asia Hub, 2025).
- Merombak bagian `Research Experience` di `cv.html` menjadi 5 proyek terstruktur lintas tiga domain (`Water`, `Air`, `Land`) yang memfokuskan narasi pada bidang riset, metode, serta tautan DOI seluruh 16 publikasi terpilih (tanpa klaim angka mentah) dan status naskah `RF-PGA` (*With Editor*), serta memperbarui tabel `Grants and Awards`.
- Menambahkan informasi pendanaan hibah dalam estimasi USD yang dicetak tebal (`<strong>~USD ...</strong>`) pada `Research Experience` (Proyek 1, 2, dan 3) serta kolom `Funding (USD Est.)` tabel `Grants and Awards` di `cv.html` tanpa mencantumkan peran, menggunakan kurs rata-rata historis per tahun penerimaan: `PKPT Competitive Research Grant` (`~USD 30,350` dari pagu total 2019-2020 `IDR 435.5M`), `IEIF ECR Placement Fellowship` (`~USD 12,900` dari `AU$ 20,000` tahun 2025), serta `International Collaboration Research Grant` UMK (`~USD 2,430` dari `IDR 40.0M` tahun 2025), lengkap dengan catatan kaki metode konversi kurs.
- Merombak tabel `Technical Skills` di `cv.html` dari 6 baris menjadi 5 kategori terstruktur yang lebih berbasis bukti riset dan pengajaran IoT (`Programming & Web`, `AI/ML & Mathematical Modeling`, `Architectures & Signal/Graph Methods`, `Optimization, XAI & Validation`, serta `Embedded Systems & Edge IoT`), menghapus baris redundan `Research Domains` serta `HuggingFace Transformers`, menampakkan metode khas publikasi Q1 (`IT2FCM`, `Curve Fitting`, `AHP`, `TSVG`, `STL Decomposition`, `Spatial Cross-Validation`, `Friedman, McNemar`), serta menggabungkan 4 butir afiliasi IEEE menjadi 1 butir ringkas pada `Professional Affiliations`.
- Menyeragamkan ukuran font tabel CV dan daftar afiliasi pada `cv.html` (Opsi 1): menambahkan kelas `small` ke seluruh tabel (`Academic Qualifications`, `Employment & Academic Appointments`, `Grants and Awards`, `Technical Skills`, dan `Language Proficiency`, menyamai tabel `SDGs Focus`) serta memakai `ps-3 small` dengan `mb-1` pada `Professional Affiliations` agar hierarki tipografi terhadap `.pub-item` dan `.cv-pub-stream` konsisten.
- Memperbarui gaya cetak `@media print` untuk tautan (`a`) di `cv.html` dari `#000000` tanpa garis bawah menjadi biru lebih muda (`#3b82f6` dengan garis bawah halus `#93c5fd` dan `text-underline-offset: 2px`) agar tautan `ORCID`, `Scopus ID`, dan `DOI` tetap terlihat jelas saat di-print atau disimpan sebagai PDF.
- Menambahkan dukungan pengisian foto profil otomatis ke `#cv-photo-container` pada `js/common.js` ketika `avatarUrl` di `data/profile.json` tersedia.

### Sinkronisasi Internal dan Data Scopus (`_agent/logs/scopus_wibowo.csv`, `_agent/logs/CV_DrWibowo.md`, `_agent/changelog.md`)
- Merapikan `_agent/logs/scopus_wibowo.csv` dari 45 kolom menjadi 28 kolom terstruktur dengan 19 baris publikasi terurut kronologis menurun, memperbaiki pergeseran kolom, membersihkan artefak `#` dan em dash, serta menambahkan kolom `Quartile`, `Stream`, dan `SDGs`.
- Menyelaraskan `_agent/logs/CV_DrWibowo.md` dengan pembaruan pada `cv.html` dan mencatat perubahan di `_agent/changelog.md`.

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
