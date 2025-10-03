// components/ProjectCard.tsx

import React from "react";
import Image from "next/image";
import { ProjectType } from "../utils/data";
import ButtonLink from "./ButtonLink";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const ProjectCard: React.FC<ProjectType> = ({
  title,
  description,
  image,
  link,
  github,
  tools,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-[300px] hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-[180px]">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4 text-gray-800">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <p className="text-[10px] text-gray-500">Stack:{tools}</p>
        <div className="flex mt-4">
          {github && (
            <ButtonLink
              href={github}
              label=""
              icon={<BsGithub className="w-5 h-5" />}
              target="_blank"
              className="w-10 h-10 flex justify-center ml-2"
            />
          )}
          {link && (
            <ButtonLink
              href={link}
              label=""
              icon={<BsLink45Deg className="w-5 h-5" />}
              target="_blank"
              className="w-10 h-10 flex justify-center ml-2"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
