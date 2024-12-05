"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import ProjectSliderBtn from "@/components/ProjectSliderBtn";
import { useEffect } from "react";

const projects = [
  {
    num: "01",
    title: "Confluence",
    description:
      "Confluence Business-Influencer Connection Platform is a comprehensive online platform that facilitates connections between businesses and influencers. ",
    stack: [{ name: "MERN stack" }, { name: "Next.js" }],
    image: "/assets/projects/Confluence.png",
    live: "https://confluence-client.vercel.app/",
    github: "https://www.linkedin.com/in/rachwan-harb/details/projects/",
  },
  {
    num: "02",
    title: "Global-Fairy",
    description:
      "Global Fairy E-commerce Website is an online marketplace for branded products, designed to enhance user shopping experiences.",
    stack: [{ name: "MERN stack" }],
    image: "/assets/projects/Global-Fairy.png",
    live: "https://main--frolicking-dolphin-4c4df9.netlify.app/",
    github: "https://www.linkedin.com/in/rachwan-harb/details/projects/",
  },
  {
    num: "03",
    title: "AlMonla-LLC",
    description:
      "Al-Monla E-commerce Website is a robust platform for car-related products, developed with advanced e-commerce features and team collaboration.",
    stack: [{ name: "MERN stack" }],
    image: "/assets/projects/Monla-LLC.png",
    live: "https://monla-llc.vercel.app/",
    github: "https://www.linkedin.com/in/rachwan-harb/details/projects/",
  },
  {
    num: "04",
    title: "CashFlow-360",
    description:
      "CashFlow360 Fintech Financial Tracking is an application focused on efficient financial management and tracking for users.",
    stack: [{ name: "MERN stack" }],
    image: "/assets/projects/CashFlow-360.png",
    live: "",
    github: "https://www.linkedin.com/in/rachwan-harb/details/projects/",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  useEffect(() => {
    document.title = "Projects - Rachwan Harb | Full-Stack Developer";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Discover the projects developed by Rachwan Harb, showcasing skills in full-stack development and innovative web solutions."
      );
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          className="object-cover"
                          fill
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* Slider buttons */}
              <ProjectSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
