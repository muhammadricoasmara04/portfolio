export type ProjectType = {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tools: string;
};

export const projectData: ProjectType[] = [
  {
    title: "Galeri Investasi Edukasi LMS",
    description:
      "Website ini sebagai sarana edukasi dan pemberdayaan literasi keuangan digital bagi pemula melalui modul, simulasi investasi, dan integrasi dengan Galeri Investasi Edukasi BEI SMAN 1 Pelaihari",
    image: "/img/project/gie.png",
    link: "https://adrlmspelaihari.adrprogramming.com/",
    github: "https://github.com/muhammadricoasmara04/Galeri-Investasi-Edukasi",
    tools: " Framework Laravel, Tailwind CSS, Javascript, Mysql",
  },
  {
    title: "E-Registasi Maxima Web",
    description:
      "Aplikasi Web Terintegrasi untuk PIC HSE dalam Pendaftaran dan Monitoring Training K3 secara Efisien dan Tepat Waktu",
    image: "/img/project/e-regmaxima.png",
    link: "https://testing.maximagroup.co.id/",
    github: "https://github.com/muhammadricoasmara04/Maxima-Project-Activity",
    tools: " Framework Laravel, Tailwind CSS, Javascript, Mysql",
  },
  {
    title: "Presensi Bod 2 FHCI BUMN",
    description:
      "Aplikasi absensi berbasis web yang dirancang untuk mendukung proses absensi dengan memanfaatkan integraso fitur maps",
    image: "/img/project/presensifhci.png",
    link: "",
    github: "https://github.com/muhammadricoasmara04/presensibod-2",
    tools: " Framework Laravel,Tailwind CSS, Javascript, Mysql",
  },
  {
    title: "Manajemen Perpustakaan Museum Bahari",
    description:
      "Website ini digunakan untuk keperluan penyimpanan data buku yg terintegrasi pada database",
    image: "/img/project/museumbahari.png",
    link: "https://docs.google.com/document/d/1lnpSpl9CaPtKULQoIg5PDH5550qaCitb/edit?usp=drive_link&ouid=108445533521048196719&rtpof=true&sd=true",
    github: "",
    tools: " Framework Laravel, CSS, Javascript, Mysql",
  },
];
