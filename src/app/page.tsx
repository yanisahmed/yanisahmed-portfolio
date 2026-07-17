import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import { projects } from "@/data/projects";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yanis Ahmed | Freelance Web Developer",
  description:
    "I am a freelance web developer specializing in building modern, responsive websites and web applications. I have experience with a variety of technologies and frameworks, including React, Next.js, and Tailwind CSS.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />

      <section id="projects" className="px-8 md:px-24 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}