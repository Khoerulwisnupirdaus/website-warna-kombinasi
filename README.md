# Architectural Color Specifier Pro

Enterprise Suite untuk Spesifikasi Warna Arsitektur, Formulasi Rasio 60-30-10, Visualisasi Ruang 3D Real-Time, dan Evaluasi Kontras WCAG 2.2.

---

## Ikhtisar Sistem

Architectural Color Specifier Pro adalah platform analitis untuk arsitek, desainer interior, dan konsultan tata warna. Sistem ini dirancang untuk menyusun, memvalidasi, dan mensimulasikan skema warna ruang berdasarkan prinsip optik fisik, standar reflektansi cahaya (LRV), serta harmoni spasial.

---

## Fitur Utama

### 1. Katalog Palet Arsitektural Komprehensif
- Formulasi rasio 60-30-10: Dinding Utama (60%), Dinding Aksen (30%), Lisplang & Plafon (10%).
- Penentuan peruntukan spesifik: Kamar Tidur Utama, Fasad Eksterior Modern, Ruang Tamu, Pantri, Studio Kerja, dan Kamar Mandi/Spa.
- Metrik kolorimetri mendalam: Nilai HEX, RGB, HSL, dan Light Reflectance Value (LRV) per swatch.
- Evaluasi kontras kepatuhan aksesibilitas visual WCAG 2.2 (AAA / AA).

### 2. Studio Elevasi & Visualizer 3D WebGL Real-Time
- Engine render berbasis Three.js dengan pencahayaan PBR fisik (*Physically Based Rendering*).
- 3 Model Ruang 3D:
  - Kamar Tidur Utama (*Interior Minimalis dengan Slat Akustik dan Drop Tray Ceiling*)
  - Fasad Villa Modern (*Eksterior Kantilever 2 Lantai dengan Paving dan Overhang Roof*)
  - Ruang Tamu & TV Slat (*Interior Kontemporer dengan Panel Fluted Wall*)
- Simulasi Suhu Warna Kelvin:
  - Alami Siang Hari (5500K)
  - Sore / Horizon (3200K)
  - Warm White (2700K)
  - Cool White (4000K)
  - Nocturnal / Aksen
- Pilihan Tekstur Permukaan: Matte Doff, Satin Sheen, dan Semi-Gloss.
- Navigasi Kamera: Kontrol Orbit 3D, Presets (Arsitek, Frontal, 45 Sudut, Isometrik), dan Tur Otomatis 360 Derajat.

### 3. Studio Latar Belakang Abstrak Generatif
- Sistem latar belakang dinamis berbasis multi-layer radial mesh gradients.
- 8 Tema Kurasi Arsitektural: Obsidian Gold, Emerald Velvet, Nordic Twilight, Terracotta Bauhaus, Cyber Amethyst, Titanium Monochrome, Deep Abyssal, dan Dusk Crimson.
- 4 Mode Komposisi Seni: Fluid Mesh, Topografi Kontur, Prisma Refraksi Kaca, dan Geometri Asimetris.
- Algoritma generator acak instan untuk menghasilkan perpaduan koordinat dan warna unik tanpa aset bitmap statis.

### 4. Kalkulator Roda Warna HSL & Estimator Volume Cat
- Analisis harmoni kromatik: Monokromatik, Analog, Komplementer, Triadik, dan Tetradik.
- Estimator kebutuhan volume cat arsitektural berdasarkan standar ASTM D2805 dengan daya sebar emulsi akrilik.
- Ruang penyimpanan (*Vault*) palet kustom berbasis penyimpanan lokal browser (LocalStorage).

---

## Struktur Berkas

```
website-warna-kombinasi/
├── index.html          # Markup struktural aplikasi dan panel kontrol
├── style.css           # Desain antarmuka, variabel sistem, dan grid arsitektural
├── app.js              # Logika aplikasi, state store, dan routing tab
├── arch3d.js           # Engine 3D WebGL Three.js dan scene builders
├── three.min.js        # Library render 3D Three.js (r128 lokal)
├── OrbitControls.js    # Kontrol kamera interaktif Three.js lokal
├── .gitignore          # Konfigurasi pengabaian berkas sistem
└── README.md           # Dokumentasi teknis proyek
```

---

## Petunjuk Penggunaan

1. Klon repositori ini ke komputer lokal Anda:
   ```bash
   git clone https://github.com/Khoerulwisnupirdaus/architectural-color-specifier.git
   ```
2. Buka berkas `index.html` langsung pada browser modern (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari).
3. Tidak memerlukan dependensi backend, node server, atau konfigurasi build tambahan.
