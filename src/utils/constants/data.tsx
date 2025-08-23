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
      "Steering Committee bertanggung jawab mengendalikan seluruh proses kegiatan, mulai dari tahap perencanaan hingga evaluasi akhir, guna memastikan kegiatan berjalan sesuai tujuan dan harapan.",
    image: `/assets/coreteam/sc.png`,
  },
  {
    division: "Project Officer",
    description:
      "Individu yang memegang tanggung jawab penuh atas pelaksanaan kegiatan ORMIK. Project Officer bertugas mengawasi secara langsung seluruh elemen di bawahnya, antara lain Sekretaris, Bendahara, dan divisi-divisi lainnya.",
    image: `/assets/coreteam/po.png`,
  },
  {
    division: "Sekretaris",
    description:
      "Membantu Project officer dalam menjalankan fungsi administrasi, dengan tanggung jawab utama meliputi pengelolaan dokumen, surat-menyurat, proposal, serta pembuatan notulen rapat.",
    image: `/assets/coreteam/sekre.png`,
  },
  {
    division: "Bendahara",
    description:
      "Bendahara bertugas untuk menyusun rencana anggaran, mencatat transaksi keuangan, dan membuat laporan pertanggungjawaban keuangan, serta berkoordinasi dengan pihak Kemahasiswaan terkait dana kegiatan.",
    image: `/assets/coreteam/bendahara.png`,
  },
  {
    division: "Event",
    description:
      "Bertanggung jawab atas perencanaan, koordinasi, dan pelaksanaan seluruh rangkaian acara ORMIK, termasuk acara puncak.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Media",
    description:
      "Bertugas untuk memproduksi, mengelola, dan mengabadikan seluruh momen kegiatan ORMIK dalam bentuk dokumentasi serta memastikan seluruh kebutuhan visual dan desain terpenuhi.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Liaison Officer (LO)",
    description:
      "Divisi ini akan berkomunikasi dengan publik eksternal maupun internal kampus. LO juga bertindak sebagai contact person bagi pihak internal maupun eksternal. Serta membantu briefing pihak internal maupun eksternal.",
    image: `/assets/coreteam/lo.png`,
  },
  {
    division: "Public Relations",
    description:
      "Bertanggung jawab untuk mengelola komunikasi, membangun citra positif, serta menjalin hubungan antara ORMIK dengan eksternal di lingkup STT NF.",
    image: `/assets/coreteam/pr.png`,
  },
  {
    division: "Kreatif",
    description:
      "Divisi Kreatif bertugas menciptakan suasana acara yang menarik, interaktif, dan berkesan melalui berbagai elemen hiburan, visual, dan partisipatif.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Logistik",
    description:
      "Bertanggung jawab untuk mengatur seluruh kebutuhan perlengkapan, peralatan, dan sarana prasarana yang diperlukan dalam mendukung kelancaran kegiatan ORMIK.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Konsumsi",
    description:
      "Bertugas untuk menyiapkan menu makanan, camilan, serta menjadwalkan waktu makan selama kegiatan ORMIK. Divisi ini juga harus mampu mengatur persediaan makanan dengan cermat untuk memastikan kelancaran acara.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Mentor",
    description:
      "Bertugas untuk membimbing, mengarahkan, mendampingi, dan memberikan dukungan kepada peserta ORMIK selama kegiatan berlangsung.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Kedisiplinan",
    description:
      "Bertugas memastikan seluruh rangkaian kegiatan ORMIK berjalan dengan tertib, tepat waktu, dan sesuai aturan yang telah ditetapkan.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "Medis",
    description:
      "Bertugas untuk memastikan keselamatan dan kesehatan seluruh peserta dan panitia selama kegiatan ORMIK berlangsung.",
    image: "https://placehold.co/428x285",
  },
  {
    division: "IT Support",
    description:
      "Fokus utama divisi ini mencakup instalasi perangkat, live streaming, serta pengawasan terhadap tiga objek utama, komputer, software, dan sistem jaringan (network).",
    image: "https://placehold.co/428x285",
  },
];
