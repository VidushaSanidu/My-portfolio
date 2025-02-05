import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 pt-20 gap-4  relative"
    >
      {/* About My Services Section */}
      <div className=" p-8 rounded-xl mb-12">
        <h3 className="text-2xl font-bold text-white mb-6">
          How I Can Help You ?
        </h3>
        <p className="text-[#ADB7BE] leading-7">
          As a software engineer specializing in both traditional and AI
          development, I transform complex challenges into elegant solutions.
          With expertise in cutting-edge technologies, I offer comprehensive
          development services that bridge conventional software engineering
          with artificial intelligence.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h4 className="text-xl text-white font-semibold mb-3">
              Core Services
            </h4>
            <ul className="text-[#ADB7BE] list-disc pl-5 space-y-2">
              <li>Custom Software Development</li>
              <li>Full-Stack Web Applications</li>
              <li>System Optimization & Scaling</li>
              <li>Technical Consultation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold mb-3">
              AI Expertise
            </h4>
            <ul className="text-[#ADB7BE] list-disc pl-5 space-y-2">
              <li>Machine Learning Integration</li>
              <li>AI Model Development</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision Solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className=" p-8 rounded-xl ">
        <h3 className="text-2xl font-bold text-white mb-6">
          Let&apos;s Connect
        </h3>
        <p className="text-[#ADB7BE] mb-6">
          I&apos;m actively seeking new opportunities in both software
          development and AI projects. Whether you need technical expertise,
          have a project in mind, or just want to discuss technology, I&apos;m
          always eager to connect!
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:justify-between items-center">
          <div className="socials flex gap-4 items-center">
            <Link
              href="https://github.com/VidushaSanidu"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <a
              href="mailto:vidushsanidu07@gmail.com"
              className="hover:opacity-80 transition-opacity"
            >
              <EnvelopeIcon fill="white" className="h-10 w-10" />
            </a>
            <Link
              href="https://linkedin.com/in/vidusha-sanidu-867a84214"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                height={10}
                width={10}
                src={LinkedinIcon}
                alt="Linkedin Icon"
              />
            </Link>
          </div>
        </div>
        <div className="pt-4">
          <a href="https://www.buymeacoffee.com/vidushaSanidu">
            <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=vidushaSanidu&button_colour=BD5FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" />
          </a>
        </div>
      </div>

      {/* Background gradient */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
    </section>
  );
};

export default EmailSection;
