// components/Project.tsx

import React from "react";
import { projectData } from "../utils/data";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="bg-gradient-to-r from-[#56CCF2] to-[#2F80ED] w-full h-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Project</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
