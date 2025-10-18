import { CertificateType } from "@/utils/datacertificated";
import React from "react";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const CertificateCard: React.FC<CertificateType> = ({
  title,
  image,
  link,
  author,
 exp,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-[280px] hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-[180px]">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4 text-gray-900">
        <h3 className="text-[16px] font-semibold mb-2 text-center">{title}</h3>
        <p className="text-[14px] mb-4 text-gray-600">{author}</p>
        <p className="text-[10px] text-gray-500 ">expired: {exp}</p>
        <div className="flex mt-4">
            {link &&(
                <ButtonLink
                href={link}
                label=""
                 icon={<BsFileEarmarkPdfFill className="w-5 h-5"/>}
                target="_blank"
                className="w-10 h-10 flex justify-center ml-2"
                />
            )}
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
