"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { useEffect } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    content: "+961 76 445 648",
  },
  {
    icon: <SiMinutemailer />,
    title: "Email",
    content: "rachwan.harb2023@gmail.com",
  },
  {
    icon: <HiLocationMarker />,
    title: "Address",
    content: "Beirut, Lebanon",
  },
];

const Contact = () => {
  // EmailJs
  const form = useRef();

  const submitForm = () => {
    emailjs
      .sendForm(
        "service_jzvgsv2",
        "template_c9ol4x8",
        form.current,
        "DFvdVgDxCJ4JZPDxA"
      )
      .then(
        (result) => {
          console.log("Message send");
        },
        (error) => {
          console.log("Message Failed");
        }
      );
  };

  useEffect(() => {
    document.title = "Contact - Rachwan Harb | Full-Stack Developer";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Get in touch with Rachwan Harb. Contact for inquiries, collaborations, or more information about his work."
      );
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <Head>
        <title>Contact Me - Rachwan Harb</title>
        <meta name="description" content="This is an awesome Next.js app" />
      </Head>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={submitForm}
              className="flex flex-col gap-6 p-[20px] sm:p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I am actively seeking job opportunities and ready to bring my
                expertise to your team. If you're looking for a dedicated
                front-end, back-end or full-stack developer with a passion for
                crafting elegant digital experiences, let's connect.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  name="firstname"
                  placeholder="Firstname"
                />
                <Input type="lastname" name="lastname" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email address" />
                <Input type="phone" name="phone" placeholder="Phone number" />
              </div>
              {/* TextArea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              <Button size="md" className="max-w-40" onClick={submitForm}>
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-base sm:text-xl">{item.content}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
