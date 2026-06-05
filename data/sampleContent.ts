import type { ContentItem, PlannerMetric } from "@/types/content";

export const plannerMetrics: PlannerMetric[] = [
  {
    label: "Total Konten",
    value: "12",
    helper: "Rencana minggu ini",
  },
  {
    label: "Siap Posting",
    value: "8",
    helper: "Caption sudah final",
  },
  {
    label: "Perlu Review",
    value: "4",
    helper: "Butuh cek ulang",
  },
];

export const sampleContent: ContentItem[] = [
  {
    id: 1,
    date: "Senin, 12 Februari",
    day: "Senin",
    time: "09.00 WIB",
    platform: "Instagram",
    category: "Before After",
    title: "Transformasi Hair Coloring Natural Brown",
    caption:
      "Cantik itu dimulai dari rambut yang sehat dan warna yang sesuai dengan karakter kamu. Ini hasil transformasi warna rambut natural brown untuk tampilan yang lebih fresh, elegan, dan tetap soft.",
    hashtags: ["#DenanavBeautySalon", "#HairColoring", "#SalonBekasi"],
    status: "Siap Posting",
    color: "gold",
  },
  {
    id: 2,
    date: "Selasa, 13 Februari",
    day: "Selasa",
    time: "13.00 WIB",
    platform: "Instagram & Facebook",
    category: "Edukasi",
    title: "Tips Merawat Rambut Setelah Coloring",
    caption:
      "Setelah coloring, rambut butuh perhatian ekstra. Gunakan shampoo khusus rambut berwarna, hindari keramas terlalu sering, dan rutin hair mask agar warna tetap cantik lebih lama.",
    hashtags: ["#TipsRambut", "#HairCare", "#DenanaTips"],
    status: "Draft",
    color: "cream",
  },
  {
    id: 3,
    date: "Rabu, 14 Februari",
    day: "Rabu",
    time: "16.00 WIB",
    platform: "Facebook",
    category: "Promo",
    title: "Promo Valentine Treatment Package",
    caption:
      "Rayakan hari kasih sayang dengan me time di DenanavBeauty Salon. Nikmati paket treatment rambut dan styling untuk tampil lebih percaya diri sepanjang minggu.",
    hashtags: ["#PromoSalon", "#ValentineBeauty", "#MeTime"],
    status: "Perlu Review",
    color: "rose",
  },
  {
    id: 4,
    date: "Kamis, 15 Februari",
    day: "Kamis",
    time: "10.00 WIB",
    platform: "Instagram",
    category: "Testimoni",
    title: "Cerita Customer Setelah Hair Spa",
    caption:
      "Terima kasih sudah mempercayakan perawatan rambut di DenanavBeauty Salon. Rambut terasa lebih lembut, ringan, dan mudah diatur setelah hair spa rutin.",
    hashtags: ["#TestimoniCustomer", "#HairSpa", "#SalonDenana"],
    status: "Siap Posting",
    color: "green",
  },
  {
    id: 5,
    date: "Jumat, 16 Februari",
    day: "Jumat",
    time: "19.00 WIB",
    platform: "Instagram & Facebook",
    category: "Inspirasi",
    title: "Inspirasi Model Rambut Weekend",
    caption:
      "Weekend waktunya tampil beda. Pilih styling rambut yang simple, rapi, dan cocok untuk acara keluarga, hangout, atau dinner santai.",
    hashtags: ["#InspirasiRambut", "#WeekendLook", "#BeautySalon"],
    status: "Draft",
    color: "gold",
  },
  {
    id: 6,
    date: "Sabtu, 17 Februari",
    day: "Sabtu",
    time: "11.00 WIB",
    platform: "Instagram",
    category: "Behind The Scene",
    title: "Proses Blow Dry di DenanavBeauty Salon",
    caption:
      "Behind the scene dari proses blow dry yang bikin rambut terlihat lebih bervolume, halus, dan ready untuk aktivitas seharian.",
    hashtags: ["#BehindTheScene", "#BlowDry", "#DenanavBeautySalon"],
    status: "Siap Posting",
    color: "cream",
  },
];
