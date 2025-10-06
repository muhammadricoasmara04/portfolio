"use client";
import { CertificateData } from "@/utils/datacertificated";
import React, { useEffect, useState } from "react";
import CertificateCard from "./CertificateCard";
import dynamic from "next/dynamic";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import slider dengan SSR dimatikan
const SlickSlider = dynamic(() => import("react-slick"), { ssr: false });

const Certificate = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // set awal sesuai layar client
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const getSlidesToShow = () => {
    if (width < 480) return 1;
    if (width < 768) return 2;
    if (width < 1024) return 3;
    return 4;
  };
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: getSlidesToShow(),
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  if (width === 0) return null;
  return (
    <div className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#14142a] w-full h-auto px-4 py-4">
      <div className="text-center mb-8">
        <h1 id="certificate" className="text-3xl md:text-4xl font-bold text-white inline-block bg-white/10 border border-white/20 px-6 py-3 rounded-xl backdrop-blur-md shadow">
          Sertifikat
        </h1>
      </div>

      <div className="slider-container p-6">
        <SlickSlider key={width} {...settings}>
          {CertificateData.map((certificate, index) => (
            <div key={index} className="px-2 md:px-3 lg:px-4">
              {" "}
              {/* kasih padding antar slide */}
              <CertificateCard
                title={certificate.title}
                image={certificate.image}
                link={certificate.link}
                author={certificate.author}
                exp={certificate.exp}
              />
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default Certificate;
