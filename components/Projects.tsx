import React from "react";
import {
  SiBootstrap,
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiJavascript,
  SiNodedotjs,
  SiExpo,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import Title from "./Title";
import Link from "next/link";
import { cn } from "../lib/utils";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Api Rick and Morty",
      description:
        "This project, developed as part of a development challenge, utilizes the Rick and Morty API to allow users to search for and view information about characters. The app includes a search field and three filters, with options to delete them and reset the search. Built with React, Vite, GraphQL, and TailwindCSS, the application offers a modern and responsive user interface. The project is deployed on Netlify for fast and efficient access.",
      tech: [SiReact, SiVite, SiTailwindcss, SiGraphql],
      link: "https://api-rickmorty-vite.netlify.app/",
      cover: "/web13.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/dev-challenge-rickymorty",
    },
    {
      title: "React Native Expo App",
      description:
        "This project, developed with React Native and Expo, utilizes the Metacritic API to display the highest-rated games. The app features dynamic routes and simple navigation, providing a smooth and enjoyable user experience. The user interface is designed with TailwindCSS, ensuring a modern and adaptive design.",
      tech: [TbBrandReactNative, SiExpo, SiTailwindcss],
      link: "https://github.com/MateoDonino/react-native-app",
      cover: "/web12.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/react-native-app",
    },
    {
      title: "Lutin Studio",
      description:
        "This project, developed as a freelance assignment, involved creating a website promoting NFTs (non-fungible tokens) for a client from Chile. The development team comprised two Web Developers and two Graphic Designers UX/UI, working collaboratively to achieve a modern and engaging design. The website is built using HTML5, CSS, React, Vite, and Bootstrap, ensuring responsiveness and user-friendliness. The project is hosted on Vercel for optimal performance and accessibility",
      tech: [SiHtml5, SiCss3, SiReact, SiVite, SiBootstrap],
      link: "https://lutin-varelacristianfacundo.vercel.app/",
      cover: "/web14.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/VarelaCristianFacundo/lutin",
    },
    {
      title: "Node.js Aplication",
      description:
        "This is a practical example or tutorial of Node.js (JavaScript on the server) where we will create a simple web application to understand how to install modules like Express.js and how to use it to build multi-page applications. We will also learn to add CSS styles and frameworks like Bootstrap 5 by serving static files. This tutorial will cover best practices for structuring your application and managing dependencies.",
      tech: [SiJavascript, SiCss3, SiNodedotjs],
      link: "https://nodejs-project-chyw.onrender.com/",
      cover: "/web15.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/nodejs-project",
    },
  ];

  return (
    <section id="projects" className="flex flex-col items-center">
      <Title
        text={"Projects 🗂️"}
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index} target={project.target}>
              <div
                className={cn(
                  "p-2 rounded-2xl border-double border-8 border-black",
                  project.background
                )}
              >
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5 bg-black bg-opacity-85 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>

              <div className="text-center mt-5 cursor-default ">
                {project.description}
              </div>

              <div className="flex justify-center mt-5 hover:scale-110 transition-all">
                <Link href={project.github} target="_blank">
                  <button
                    type="button"
                    className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-zinc-900 me-2 mb-2"
                  >
                    <svg
                      className="w-5 h-5 me-2"
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
                    Visit GitHub Repository
                  </button>
                </Link>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

/*

"use client";
import React from "react";
import {
  SiBootstrap,
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiGithub,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";
import { FaCode } from "react-icons/fa6";

export default function Projects() {
  const projects = [
    {
      title: "Api Rick and Morty",
      tech: [SiReact, SiVite, SiTailwindcss, SiGraphql],
      link: "https://dev-challenge-rickymorty.vercel.app/",
      cover: "/web1.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/dev-challenge-rickymorty",
    },
    {
      title: "Lutin Studio",
      tech: [SiHtml5, SiCss3, SiReact, SiVite, SiBootstrap],
      link: "https://lutin-varelacristianfacundo.vercel.app/",
      cover: "/web4.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/VarelaCristianFacundo/lutin",
    },
    {
      title: "Portfolio Web",
      tech: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://porfolio-nextjs-eight.vercel.app/",
      cover: "/web7.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/porfolio-nextjs",
    },
    {
      title: "Portfolio Web",
      tech: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://porfolio-nextjs-eight.vercel.app/",
      cover: "/web7.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/porfolio-nextjs",
    },
    {
      title: "Portfolio Web",
      tech: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://porfolio-nextjs-eight.vercel.app/",
      cover: "/web7.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/porfolio-nextjs",
    },
  ];

  const [visibleProjects, setVisibleProjects] = React.useState(4);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleProjects(4);
  };

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text={"Proyectos 🗂️"}
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.slice(0, visibleProjects).map((project, index) => {
          return (
            <Link href={project.link} key={index} target={project.target}>
              <div className={cn("p-2 rounded-2xl", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5 bg-black bg-opacity-85 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
              <Link href={project.github} target="_blank">
                <p className="mt-3 flex flex-row gap-2 text-xl justify-center hover:text-green-500">
                  Codigo en GitHub <SiGithub className="mt-1 w-5 h-5" />
                </p>
              </Link>
            </Link>
          );
        })}
      </div>
      {visibleProjects < projects.length && (
        <div className="mt-5 flex justify-center">
          <button
            className="border rounded-lg  px-4 py-2 text-xl hover:text-green-500"
            onClick={handleShowMore}
          >
            Mostrar Más
          </button>
        </div>
      )}
      {visibleProjects > 4 && (
        <div className="flex justify-center">
          <button
            className="border rounded-md px-4 py-2 text-xl hover:text-green-500"
            onClick={handleShowLess}
          >
            Ver Menos
          </button>
        </div>
      )}
    </div>
  );
}

*/
