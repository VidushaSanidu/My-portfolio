"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "IT Center Web Application",
    description:
      "Complete Dashboard for student, staff, and course registration and management, with reservation booking system for the IT Center University of Peradeniya.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Xanvia/IT-Center-MainWeb-Frontend.git",
    previewUrl: "https://it-center-main-web-frontend.vercel.app",
  },
  {
    id: 2,
    title: "BisDos",
    description:
      "Application for The BisDos, which enable managing your own NFC bussiness Cards with a portfolio and other functionalities.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hashLahiru/BisDos-FE.git",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Binary AI Trading Bot | Xanvia",
    description:
      "Trading Bot with the ChatGpt Integration for the derive platform.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Xanvia/Binary-AI-Trading-Bot.git",
    previewUrl: "https://panratrade.com",
  },
  {
    id: 4,
    title: "Simple Student Living | Xanvia",
    description:
      "Property renting automating application with digital signing process.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Xanvia/Rental_service.git",
    previewUrl: "https://ssl-portal.leedswebdeveloper.com/auth/signin",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
