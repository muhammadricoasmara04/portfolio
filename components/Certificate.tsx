"use client";
import { CertificateData } from "@/utils/datacertificated";
import React from "react";
import CertificateCard from "./CertificateCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Certificate = () => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="bg-gradient-to-r from-[#56CCF2] to-[#2F80ED] w-full h-auto px-4 py-4">
      <h1 className="text-3xl font-bold text-white text-center mb-2">
        Sertifikat
      </h1>

      <div className="slider-container p-6">
        <Slider {...settings}>
          {CertificateData.map((certificate, index) => (
            <CertificateCard
              key={index}
              title={certificate.title}
              image={certificate.image}
              link={certificate.link}
              author={certificate.author}
              exp={certificate.exp}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Certificate;
