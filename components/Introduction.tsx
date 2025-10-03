import React from "react";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Introduction = () => {
  return (
    <div className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#14142a] w-full h-auto flex flex-col md:flex-row items-center md:items-start px-4 py-8 gap-8">
      <div className="flex flex-col ml-10">
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-sm overflow-hidden shadow-lg">
          <Image
            src="/img/rico-profile.png"
            alt="Picture of the author"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
          <ButtonLink
            href="https://www.linkedin.com/in/muhammad-ricoasmara"
            label=""
            icon={<BsLinkedin className="w-5 h-5" />}
            target="_blank"
            className="mt-4 w-10 h-10 flex justify-center"
          />
          <ButtonLink
            href="https://github.com/muhammadricoasmara04"
            label=""
            icon={<BsGithub className="w-5 h-5" />}
            target="_blank"
            className="mt-4 w-10 h-10 flex justify-center ml-2"
          />
          <ButtonLink
            href="mailto:ricoasmara496@gmail.com"
            label=""
            icon={<BsEnvelopeAt className="w-5 h-5" />}
            target="_blank"
            className="mt-4 w-10 h-10 flex justify-center ml-2"
          />
          <ButtonLink
            href="https://wa.me/6285780004039?text=Hallo%2C%20saya%20tertarik%20dengan%20profile%20anda%20sebagai%20junior%20fullstack%20developer%2C%20apakah%20saya%20dapat%20berdiskusi%20lebih%20lanjut%20%3F"
            label=""
            icon={<BsWhatsapp className="w-5 h-5" />}
            target="_blank"
            className="mt-4 w-10 h-10 flex justify-center ml-2"
          />
        </div>
      </div>

      {/* Perkenalan Diri */}
      <div
        className="text-white font-sans max-w-4xl"
        style={{ textAlign: "justify" }}
      >
        <h1 className="text-[24px] md:text-[42px]">
          Hallo, Saya Muhammad Ricoasmara
        </h1>
        <h2 className="text-[20px] md:text-[24px] text-[#00FFE0]">
          Junior Fullstack Developer
        </h2>
        <p className="mt-4">
          Seorang Junior Fullstack Developer dengan pengalaman 1 tahun dalam
          pengembangan web menggunakan Laravel dan MySQL. Saya terbiasa
          menangani pengembangan aplikasi dari sisi frontend maupun backend,
          serta memahami alur kerja pengembangan sistem secara menyeluruh.
        </p>
        <p className="mt-2">
          Saat ini, saya sedang memperluas kemampuan saya dengan mempelajari
          Next.js untuk membangun aplikasi web yang lebih modern dan responsif.
          Dengan semangat belajar dan perhatian terhadap kualitas kode, saya
          berkomitmen untuk terus berkembang dan memberikan solusi yang efektif
          serta efisien dalam setiap proyek yang saya kerjakan.
        </p>
        <div className="resume mt-4">
          <ButtonLink
            href="/files/cv.pdf"
            icon={<HiDownload className="w-5 h-5 mr-2" />}
            label="Download CV"
            download
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
