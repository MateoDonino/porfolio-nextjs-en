"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MovingBorderBtn } from "../components/ui/moving-border";
import { motion } from "framer-motion";
import { GrCopy } from "react-icons/gr";
export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("mateodonino@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy email address:", error);
    }
  };

  return (
    <section className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-8 text-center lg:text-left">
        <h1 className=" lg:text-5xl font-bold">
          Nice to meet you!👋🏻 <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Mateo"}
          </span>
        </h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
        >
          {" "}
          <div className="relative flex flex-row bg-gray-900 h-8 w-[250px] rounded-[30px]">
            <span className="flex flex-col justify-center text-white grow-[1] max-w-[90%] text-center text-sm ">
              mateodonino@gmail.com
            </span>
            <div className="w-[15%] bg-indigo-600 rounded-r-2xl">
              <div onClick={handleCopy}>
                <GrCopy className="w-5 h-5 mt-1.5 ml-2 cursor-pointer hover:scale-125 transition-all" />
              </div>
              {copied && (
                <p className="mt-3.5 font-semibold text-green-500">Copied!</p>
              )}
            </div>
          </div>
        </motion.div>

        <p className="md:w-96 text-md text-gray-300">
          {
            "I am a Web Developer, specializing in Frontend development, I can create custom websites and web applications using the latest available technologies and frameworks that suit your specific needs. I can advise you on selecting the best technology for your project, analyze requirements, and plan development. Feel free to take a look at my CV! There, you can find all my details, education, and certifications."
          }
        </p>
        <hr className="invisible" />
        <hr className="invisible" />
        <hr className="invisible" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5 }}
      >
        <div className=" relative">
          <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
            <div className="flex gap-3 translate-x-8">
              <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
              <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
            </div>
            <div className="flex gap-3 -translate-x-8">
              <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
              <div className="w-32 h-32 rounded-full bg-green-500"></div>
            </div>
            <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
          </div>
          <div className="absolute bottom-5 sm:botton-14 left-0 sm:-left-10 hover:scale-110 transition-all">
            <Link
              href="https://drive.google.com/file/d/1atpkCXhpfMqMjNAN9Ug-DNQkwasWNRD6/view?usp=drive_link"
              target="_blank"
            >
              <MovingBorderBtn
                borderRadius="0.5rem"
                className="p-3 font-semibold"
              >
                <p>📑 Check out my CV!</p>
              </MovingBorderBtn>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
