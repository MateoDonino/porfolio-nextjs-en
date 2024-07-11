"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "./Title";
import { TfiWorld } from "react-icons/tfi";

export default function Experience() {
  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
      >
        {" "}
        <div className="max-w-7xl mx-auto px-8">
          <Title
            text={"Experience 💼"}
            className="flex flex-col items-center justify-center rotate-6"
          />
        </div>
        <ul className=" mt-14 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle"></div>
            <div className="timeline-start mb-5 ">
              <div className="text-2xl font-bold">
                Internship in the Commercial Area of Movistar Telefónica
              </div>
              <div className="text-lg text-green-500">MOVISTAR TELEFÓNICA</div>
              <time className="text-sm">January - June 2019</time>
              <div className="text-[#ADB7BE] text-md text-justify">
                <p className=" mt-1 ">
                  · I was in charge of supervising and controlling stock at
                  various physical sales points in the city of Santa Fe.
                </p>
                <p className=" mt-2">
                  · Efficient teamwork, responsibility, and excellent
                  communication.
                </p>

                <p className=" mt-2">
                  · Worked closely with cross-functional teams to ensure
                  alignment on objectives and deliverables.
                </p>
                <p className=" mt-2">
                  · Participated in regular team meetings to discuss goals,
                  progress, and challenges, fostering a collaborative
                  environment.
                </p>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end mb-10 mt-5">
              <div className="text-2xl font-bold">Frontend Web Developer</div>
              <div className="text-lg text-green-500">LUTIN STUDIOS</div>
              <time className="text-sm">August - November 2022</time>
              <div className="text-[#ADB7BE] text-md text-justify border-l-green-500 ">
                <p className="mt-1">
                  · I collaborated on a Freelance project for a client from
                  Chile. It involved creating a promotional NFT (Non-Fungible
                  Tokens) Website.
                </p>
                <p className="mt-2">
                  · Development and design of the user interface using
                  technologies such as HTML, CSS, ReactJS, and Bootstrap.
                </p>
                <p className="mt-2">
                  · The teamwork consisted of two Graphic Designers and two Web
                  Developers. Excellent communication and collaboration.
                </p>
                <p className="mt-2">
                  · Effective Communication. Throughout the project, I
                  maintained open channels of communication with my team
                  members. We regularly discussed progress, challenges, and
                  ideas, ensuring everyone was on the same page.
                </p>
                <p className="mt-2">
                  · Excelent Adaptability and Flexibility, as the project
                  evolved, we remained flexible. We adjusted our approach when
                  necessary, accommodating changes in requirements or unexpected
                  obstacles.
                </p>
              </div>
              <div className="mt-5">
                <Link
                  href="https://lutin-varelacristianfacundo.vercel.app/"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-neutral-900 me-2 mb-2"
                  >
                    <TfiWorld className="w-4 h-4 me-2" />
                    Visit Website
                  </button>
                </Link>

                <Link
                  href="https://github.com/VarelaCristianFacundo/lutin"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-neutral-900 me-2 mb-2"
                  >
                    <svg
                      className="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Visit Github Repository
                  </button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
