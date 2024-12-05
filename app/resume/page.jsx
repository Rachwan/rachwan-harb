"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiApollographql,
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Developed a comprehensive skill set through hands-on web development projects, both in team settings and individual contributions.",
  items: [
    {
      company: "Independent Contractor • Freelance (Remote)",
      position: "Full-Stack Web Developer",
      duration: "March 2024 - Present",
    },
    {
      company: "Edways • Internship (Remote)",
      position: "Full-Stack Web Developer",
      duration: "August 2024 - October 2024",
    },
    {
      company: "Codi Tech • Full Time (On-site)",
      position: "Full-Stack Web Developer",
      duration: "August 2023 - March 2024",
    },
    {
      company: "Cisco Networking Academy • Full Time (On-site)",
      position: "Technician",
      duration: "March 2023 - May 2023",
    },
  ],
};

const about = {
  title: "About me",
  description:
    "Front-end developer with a strong background in the MERN stack, Next.js, TypeScript, GraphQL, Redux, Material-UI, TailwindCSS, Agile methodologies, and with a solid understanding of back-end development using Node.js.",
  info: [
    {
      name: "Name:",
      value: "Rachwan Harb",
    },
    {
      name: "Nationality:",
      value: "Lebanese",
    },
    {
      name: "Phone:",
      value: `+961 76 445 648`,
    },
    {
      name: "Email:",
      value: "rachwan.harb2023@gmail.com",
    },
    {
      name: "Experience:",
      value: "1 Year",
    },
    // {
    //   name: "Freelance:",
    //   value: "Available",
    // },
    {
      name: "LinkedIn:",
      value: "Rachwan Harb",
    },
    {
      name: "Languages:",
      value: "English",
    },
    {
      name: "Location:",
      value: "Beirut",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Completed rigorous training in computer science and web development, building a strong foundation for front-end and back-end development.",
  items: [
    {
      institution: "Lebanese University Faculty of Science",
      degree: "Computer Science / Bachelor's Degree",
      duration: "September 2022 - July 2024",
    },
    {
      institution: "Lebanese University Faculty of Engineering",
      degree: "Computer Engineering / Coursework",
      duration: "September 2019 - June 2022",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Proficient in modern web technologies, I continually update my expertise in front-end and back-end development.",
  skillList: [
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <GrGraphQl />,
      name: "GraphQL",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
  ],
};
const Resume = () => {
  useEffect(() => {
    document.title = "Resume - Rachwan Harb | Front-End Developer";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "View the resume of Rachwan Harb, including skills, education, about me, and experience in front-end software engineering."
      );
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            {/* content */}
            <div className="min-h-[70vh] w-full">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>

              {/* education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* about */}
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">{item.name}</span>
                          <span className="text-base sm:text-lg">
                            {item.value}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};
export default Resume;
