import { projects } from "@/data/projects";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Your Name`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="px-8 md:px-24 py-24 max-w-4xl mx-auto">
            <Link
                href="/#projects"
                className="text-[var(--muted)] hover:text-[var(--accent)] transition text-sm font-mono"
            >
                ← Back to projects
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">{project.title}</h1>

            <div className="relative w-full h-80 md:h-[28rem] rounded-lg overflow-hidden mb-8">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="text-xs font-mono px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <p className="text-[var(--muted)] text-lg mb-8">{project.description}</p>

            <div className="flex gap-6 text-sm">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[var(--accent)] text-black font-medium rounded-md hover:opacity-90 transition"
                    >
                        View Live →
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-[var(--muted)] rounded-md hover:border-[var(--accent)] transition"
                    >
                        View Code →
                    </a>
                )}
            </div>
        </main>
    );
}