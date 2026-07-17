"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="border border-[var(--muted)]/30 rounded-lg overflow-hidden hover:border-[var(--accent)] transition group"
        >
            <Link href={`/projects/${project.slug}`}>
                <div className="relative w-full h-48">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition duration-300"
                    />
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-[var(--muted)] mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="text-xs font-mono px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>

            <div className="px-6 pb-6 flex gap-4 text-sm">
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition">
                        Live →
                    </a>
                )}
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition">
                        Code →
                    </a>
                )}
            </div>
        </motion.div>
    );
}