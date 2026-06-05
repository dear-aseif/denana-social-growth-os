# Denana Social Growth OS

Aplikasi internal untuk merencanakan konten sosial media DenanavBeauty Salon.

## Phase 1

Homepage Next.js sekarang mengikuti prototype final `Denana_Social_Growth_OS (7).html`: navigasi Home, Profil Brand, Rencana Campaign, dan Rencana Konten dalam satu app entry. Fokus konten dibatasi untuk **Facial Treatment only**: Microdermabrasion, Hydra Peel, dan totok wajah.

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` untuk melihat aplikasi.

## Fitur Utama

- Profil Brand editable dengan default value DenanavBeauty Salon dan penyimpanan localStorage.
- Rencana Campaign editable dengan campaign period, awareness goal, Instagram, dan Facebook.
- Rencana Konten 30 hari dengan table editable, filter pillar/format, copy calendar, export CSV, regenerate content, detail modal, dan draft localStorage.
- Styling putih dan gold dengan sticky header, layout bersih, dan table lebar untuk halaman Rencana Konten.

## Catatan Phase 2

Phase 1 belum memakai autentikasi, database, atau AI API. Struktur state dan localStorage sudah siap untuk diganti dengan API, penyimpanan permanen, dan generator AI pada fase berikutnya.
