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
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "../lib/utils";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Api Rick and Morty",
      description:
        "The Rick and Morty API that allows users to search for and view information about characters. It includes a search field and three filters, as well as the ability to delete them and reset the search. Website developed with React, Vite, Graphql and Tailwind, deployed on Vercel.",
      tech: [SiReact, SiVite, SiTailwindcss, SiGraphql],
      link: "https://dev-challenge-rickymorty.vercel.app/",
      cover: "/web1.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/dev-challenge-rickymorty",
    },
    {
      title: "Lutin Studio",
      description:
        "As a freelance project, I created a Website promoting NFTs (non-fungible tokens) for a client from Chile. The team consisted of two Graphic Designers and Two Web Developers. Website developed with Html5, CSS, React, Vite, Bootstrap, deployed on Vercel.",
      tech: [SiHtml5, SiCss3, SiReact, SiVite, SiBootstrap],
      link: "https://lutin-varelacristianfacundo.vercel.app/",
      cover: "/web4.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/VarelaCristianFacundo/lutin",
    },
    {
      title: "Node.js Aplication",
      description:
        "A simple web application with Node.js that allows us to navigate from page to page. The interface is lightweight and fast, designed for users seeking efficient and straightforward navigation. Website developed with Javascript, Css3, and Node.js, deployed on Render.",
      tech: [SiJavascript, SiCss3, SiNodedotjs],
      link: "https://nodejs-project-chyw.onrender.com/",
      cover: "/web2.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/nodejs-project",
    },
    {
      title: "Portfolio Web",
      description:
        "Yes, this same project. A web portfolio with my resume, where users can find my projects and also interact to download my CV, visit my LinkedIn, Github, and more. Website developed with React, Next.js, Typescript, and Tailwind, deployed on Vercel.",
      tech: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://porfolio-nextjs-eight.vercel.app/",
      cover: "/web7.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/porfolio-nextjs",
    },
  ];

  return (
    <section id="projects" className="py-10 p-5 sm:p-0">
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

              <div className="text-center mt-2 cursor-default">
                {project.description}
              </div>

              <Link href={project.github} target="_blank">
                <p className="mt-3 flex flex-row gap-2 text-xl justify-center hover:text-green-500 hover:scale-110 transition-all">
                  GitHub Code <SiGithub className="mt-1 w-5 h-5" />
                </p>
              </Link>
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
