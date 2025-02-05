"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc grid grid-cols-2 pl-2">
        <div className="col-1">
          <li>Next.js</li>
          <li>Nest.js</li>
          <li>React.js</li>
          <li>Express.js</li>
        </div>
        <div className="col-1">
          <li>SQL</li>
          <li>MongoDB</li>
          <li>TypeScript</li>
          <li>Python</li>
        </div>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>A/L : Ananda College - Colombo 10</li>
        <li>BSc(sp) in Computer Science : University of Peradeniya</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Kick Start Weekend - 1st place</li>
        <li>Manthra (CTF) - 6th place</li>
        <li>Mini Hackathon (Data Science) - Top 15</li>
        <li>BashAway (Bash Script) - Top 20</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8  xl:gap-16 sm:py-20">
        <Image
          alt="about"
          src="/images/about-image.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate full-stack developer currently working at Xanvia,
            where I specialize in building efficient and scalable web
            applications. With strong expertise in Node.js-based applications, I
            excel at designing and implementing backend systems that seamlessly
            integrate with robust frontends.
            <br />
            <br /> As a final-year Computer Science undergraduate, I am deeply
            interested in cutting-edge technologies, particularly Artificial
            Intelligence and Blockchain. I actively explore these fields to stay
            updated with the latest trends and innovations, aiming to integrate
            them into real-world solutions.
            <br /> My goal is to continue growing as a developer while
            contributing to meaningful projects that bridge the gap between
            modern technology and impactful applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Achievments{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
