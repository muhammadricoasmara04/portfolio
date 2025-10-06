// components/Project.tsx

import React from "react";
import { projectData } from "../utils/data";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div id="project" className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#14142a] w-full h-auto px-4 py-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white inline-block bg-white/10 border border-white/20 px-6 py-3 rounded-xl backdrop-blur-md shadow">
          Proyek
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-2">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
            tools={project.tools}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
