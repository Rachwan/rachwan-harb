"use client";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
// import Head from "next/head";

const services = [
  {
    num: "01",
    title: "Front-End Development",
    description:
      "Specializing in modern frameworks like React.js, Next.js, and Redux, I create responsive, high-performance interfaces that provide an exceptional user experience. My designs are visually appealing and highly functional, ensuring a seamless and intuitive user journey.",
    href: "#",
  },
  {
    num: "02",
    title: "Back-End Integration",
    description:
      "I offer back-end development services using Node.js to build scalable and efficient server-side applications. By integrating robust APIs and databases, I ensure smooth interaction between front-end and back-end, guaranteeing optimal performance and reliability.",
    href: "#",
  },
  {
    num: "03",
    title: "E-Commerce Solutions",
    description:
      "With a passion for e-commerce, I build customized online platforms that are secure, user-friendly, and optimized for conversions. My solutions cover all aspects of an e-commerce website, helping you showcase products and grow your business effectively.",
    href: "#",
  },
  {
    num: "04",
    title: "Agile Methodologies",
    description:
      "Adopting Agile methodologies, I manage projects efficiently to ensure timely delivery and adaptability to changes. By breaking down projects into manageable tasks and maintaining clear communication, ensuring the final product meets and exceeds expectations.",
    href: "#",
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Services - Rachwan Harb | Front-end Developer";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Explore the services offered by Rachwan Harb, including Front-End Development, Back-End Integration, E-Commerce Solutions and Agile Methodologies."
      );
  }, []);

  return (
    <>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-1 flex-col justify-center gap-6 group"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white
                    group-hover:bg-accent transition-all duration-500 flex
                    justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  {/* title */}
                  <h2
                    className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500"
                  >
                    {service.title}
                  </h2>
                  {/* description */}
                  <p className="text-white/60">{service.description}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
