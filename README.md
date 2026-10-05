# KROMA &bull; Studio Warna Arsitektur &amp; Simulasi 3D

Platform eksplorasi kombinasi warna arsitektur, simulasi ruang 3D real-time, dan kalkulator harmoni warna.

---

## Fitur Utama

### 1. Katalog Kombinasi Warna Arsitektur
- Pilihan palet warna untuk kamar tidur, fasad eksterior, ruang tamu, dapur, dan ruang kerja.
- Panduan rasio 60-30-10: Dinding Utama (60%), Dinding Aksen (30%), Lisplang & Plafon (10%).
- Salin kode warna HEX dengan sekali klik.
- Pengujian langsung ke simulasi ruang 3D.

### 2. Simulasi Ruang 3D Real-Time
- Tiga model ruang interaktif: Kamar Tidur Utama, Fasad Villa Modern, dan Ruang Tamu Kontemporer.
- Pengaturan suhu pencahayaan alami: Siang Hari (5500K), Sore Hangat (3200K), dan Malam Rileks (2700K).
- Kontrol kamera: Perspektif 3D bebas, Tampak Depan, Sudut 45 Derajat, dan Tur Putar 360 Derajat.
- Pilihan tekstur permukaan dinding: Matte Doff, Satin Lembut, dan Semi-Gloss.

### 3. Latar Belakang Abstrak Generatif
- Kanvas seni abstrak ambient interaktif berbasis HTML5 Canvas.
- Beragam nuansa warna mewah (Obsidian Gold, Emerald Velvet, Nordic Twilight, Terracotta Earth, dan lainnya).
- Tombol *Generate Nuansa* untuk transisi atmosferik secara instan.

### 4. Roda Harmoni Kromatik & Estimasi Cat
- Penelusuran kombinasi Monokromatik, Analog, Komplementer, dan Triadik.
- Estimator kebutuhan volume cat dinding dan plafon berdasarkan dimensi ruangan.
- Penyimpanan palet kustom langsung di browser (LocalStorage).

---

## Struktur Proyek

```
website-warna-kombinasi/
├── index.html          # Halaman utama aplikasi
├── style.css           # Desain antarmuka dan sistem visual obsidian
├── app.js              # Logika katalog, kanvas ambient, dan interaksi
├── arch3d.js           # Engine 3D WebGL Three.js
├── three.min.js        # Library render 3D Three.js lokal
├── OrbitControls.js    # Kontrol kamera interaktif lokal
├── .gitignore          # Pengabaian berkas sistem
└── README.md           # Dokumentasi proyek
```

---

## Menjalankan Proyek

Buka berkas `index.html` langsung di browser modern tanpa memerlukan instalasi dependensi tambahan.
