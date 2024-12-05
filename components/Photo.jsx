"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* IMG */}
      <motion.div>
        <motion.div
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
          }}
        >
          <Image
            src="/assets/Rachwan_Harb-transformed.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-full"
          />
        </motion.div>
      </motion.div>
      {/* Circle */}
      <motion.svg
        className="w-[298px] xl:w-[494px] h-[298px] xl:h-[501px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="https://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "20 10 0 0" }}
          animate={{
            strokeDasharray: ["10 120 20 20", "12 25 100 100", "6 250 30 30"],
            rotate: [60, 300],
          }}
          // initial={{ strokeDasharray: "24 10 0 0" }}
          // animate={{
          //   strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
          //   rotate: [120, 360],
          // }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
