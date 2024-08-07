"use client";
import React from "react";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import ScrollToTopBottom from "../components/ScrollToTop";

export default function page() {
  return (
    <section className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-green-500 dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />

          <HeroSection />
        </div>

        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>

      <div className="max-w-7xl mx-auto p-5">
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
      <div>
        <ScrollToTopBottom />
      </div>
    </section>
  );
}
