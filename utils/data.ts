export type ProjectType = {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tools:string;
};

export const projectData: ProjectType[] = [
  {
    title: "E-Registasi Maxima Web",
    description:
      "Aplikasi Web Terintegrasi untuk PIC HSE dalam Pendaftaran dan Monitoring Training K3 secara Efisien dan Tepat Waktu",
    image: "/img/project/e-regmaxima.png",
    link: "https://testing.maximagroup.co.id/",
    github: "https://github.com/muhammadricoasmara04/Maxima-Project-Activity",
    tools:"Framework Laravel, Tailwind CSS, Javascript"
  },
  {
    title: "Presensi Bod 2 FHCI BUMN",
    description: "Aplikasi Web untuk absensi LMS BOD2 menggunakan fitur maps ",
    image: "/img/inventori.png",
    link: "https://testing.co.id",
    github: "",
    tools:"test",
  },
  {
    title: "Manajemen Perpustakaan Museum Bahari",
    description: "Website ini digunakan untuk keperluan penyimpanan data buku yg terintegrasi pada database",
    image: "/img/inventori.png",
    link: "https://testing.co.id",
    github: "",
    tools:"test",
  },
  
];
