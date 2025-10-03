export type ProjectType = {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
};

export const projectData: ProjectType[] = [
  {
    title: "E-Registasi Maxima Web",
    description:
      "Aplikasi Web Terintegrasi untuk PIC HSE dalam Pendaftaran dan Monitoring Training K3 secara Efisien dan Tepat Waktu",
    image: "/img/project/e-regmaxima.png",
    link: "https://testing.maximagroup.co.id/",
    github: "https://github.com/muhammadricoasmara04/Maxima-Project-Activity",
  },
  {
    title: "Presensi Bod 2 FHCI BUMN",
    description: "Aplikasi Web untuk absensi LMS BOD2 menggunakan fitur maps ",
    image: "/img/inventori.png",
    link: "https://testing.co.id",
    github: "",
  },
  
];
