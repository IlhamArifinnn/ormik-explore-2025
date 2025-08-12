// types/coreteam.ts
export interface CoreTeamMember {
  division: string;
  description: string;
  image: string;
}

export const ORMIK_DATES = {
  pra: new Date("2025-09-08T00:00:00"),
  day1: new Date("2025-09-15T00:00:00"),
  day2: new Date("2025-09-16T00:00:00"),
  day3: new Date("2025-09-20T00:00:00"),
};

export const CORETEAM: CoreTeamMember[] = [
  {
    division: "Steering Committee",
    description:
      "Bertugas memberikan arahan strategis, memastikan seluruh kegiatan berjalan sesuai visi dan misi ORMIK.",
    image: `/assets/coreteam/sc.png`,
  },
  {
    division: "Project Officer",
    description:
      "Memimpin pelaksanaan kegiatan ORMIK dan mengawasi semua divisi agar berjalan efektif.",
    image: `/assets/coreteam/po.png`,
  },
  {
    division: "Sekretaris",
    description:
      "Mengelola administrasi, surat-menyurat, dan dokumentasi kegiatan ORMIK.",
    image: `/assets/coreteam/sekre.png`,
  },
  {
    division: "Bendahara",
    description:
      "Mengatur dan mengawasi pengelolaan keuangan kegiatan ORMIK secara transparan.",
    image: `/assets/coreteam/bendahara.png`,
  },
  {
    division: "Public Relations",
    description:
      "Menjalin komunikasi dan hubungan baik dengan pihak internal dan eksternal.",
    image: `/assets/coreteam/pr.png`,
  },
  {
    division: "Liaison Officer (LO)",
    description:
      "Menjadi penghubung antara panitia dengan pihak-pihak tertentu untuk kelancaran acara.",
    image: `/assets/coreteam/lo.png`,
  },
  {
    division: "Event",
    description:
      "Mengatur konsep, alur acara, dan memastikan setiap rangkaian berjalan lancar.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Media",
    description:
      "Mengelola dokumentasi foto, video, dan publikasi visual kegiatan ORMIK.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Kreatif",
    description:
      "Bertanggung jawab pada desain, dekorasi, dan konsep kreatif kegiatan.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Kedisiplinan",
    description:
      "Menjaga ketertiban dan kedisiplinan peserta selama kegiatan berlangsung.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Mentor",
    description:
      "Membimbing dan mendampingi peserta dalam memahami materi dan lingkungan kampus.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Logistik",
    description:
      "Mengatur kebutuhan perlengkapan dan memastikan semua peralatan tersedia.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Konsumsi",
    description:
      "Menyiapkan dan mendistribusikan makanan dan minuman untuk peserta dan panitia.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Medis",
    description:
      "Memberikan pertolongan pertama dan memastikan kesehatan peserta.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "IT Support",
    description:
      "Menyediakan dukungan teknis dan memastikan kelancaran sistem IT selama acara.",
    image: "https://placehold.co/428x285",
  },
];
