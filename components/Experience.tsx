"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "./Title";

export default function Experience() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
      >
        {" "}
        <div className="max-w-5xl mx-auto px-8">
          <Title
            text={"Experience 🧑🏻‍💼"}
            className="flex flex-col items-center justify-center rotate-6"
          />
        </div>
        <ul className=" mt-16 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle"></div>
            <div className="timeline-start mb-5 ">
              <div className="text-xl font-bold">
                Internship in the Commercial Area of Movistar Telefónica
              </div>
              <div className="text-lg text-green-500">MOVISTAR TELEFÓNICA</div>
              <time className="text-sm">January - June 2019</time>
              <div className="text-[#ADB7BE] text-justify">
                <p className=" mt-1 ">
                  · I was in charge of supervising and controlling stock at
                  various physical sales points in the city of Santa Fe.
                </p>
                <p className=" mt-2">
                  · Efficient teamwork, responsibility, and excellent
                  communication.
                </p>
                <p className=" mt-2">· Excellent customer service.</p>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end mb-10 mt-5">
              <div className="text-xl font-bold">Frontend Web Developer</div>
              <div className="text-lg text-green-500">LUTIN STUDIOS</div>
              <time className="text-sm">August - November 2022</time>
              <div className="text-[#ADB7BE] text-justify">
                <p className="mt-1">
                  · I collaborated on a Freelance project for a client from
                  Chile. It involved creating a promotional NFT (Non-Fungible
                  Tokens) Website.
                </p>
                <p className="mt-2">
                  · Development andesign of the user interface using
                  technologies such as HTML, CSS, ReactJS, and Bootstrap.
                </p>
                <p className="mt-2">
                  · The teamwork consisted of two Graphic Designers and two Web
                  Developers. Excellent communication and collaboration.
                </p>
              </div>
              <Link
                href="https://lutin-varelacristianfacundo.vercel.app/"
                target="_blank"
                className=" mt-3 flex gap-2 items-center"
              >
                <p>Website</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 hover:scale-125 transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
              <Link
                href="https://github.com/VarelaCristianFacundo/lutin"
                target="_blank"
                className=" mt-1 flex gap-2 items-center"
              >
                <p>Github Code</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 hover:scale-125 transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
            </div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
