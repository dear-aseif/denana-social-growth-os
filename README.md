# Denana Social Growth OS

Aplikasi internal untuk merencanakan konten sosial media DenanavBeauty Salon.

## Phase 1

Prototype HTML sudah dimigrasikan ke struktur Next.js App Router dengan TypeScript dan Tailwind CSS. Fokus Phase 1 adalah halaman **Rencana Konten** untuk membuat, membaca, dan menyiapkan kalender konten Instagram/Facebook.

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` untuk melihat aplikasi.

## Struktur Utama

- `app/` — App Router entrypoint, layout global, dan styling global.
- `components/` — Komponen UI reusable seperti sidebar, header, planner, kartu konten, kalender, empty state, dan button.
- `data/` — Sample generated content untuk Phase 1.
- `types/` — TypeScript types untuk data konten.

## Catatan Phase 2

Tombol generate, copy, edit, dan export masih berupa placeholder visual. Phase berikutnya dapat menambahkan integrasi AI, penyimpanan konten, dan fitur export nyata tanpa mengubah struktur UI utama.
