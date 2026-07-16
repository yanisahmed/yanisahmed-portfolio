import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section id="projects" className="px-8 md:px-24 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}