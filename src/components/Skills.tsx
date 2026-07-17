"use client";

import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <section id="skills" className="px-8 md:px-24 py-24 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold mb-12"
            >
                Skills
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
                {skills.map((group, i) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="border border-[var(--muted)]/30 rounded-lg p-6"
                    >
                        <h3 className="text-[var(--accent)] font-mono text-sm uppercase tracking-widest mb-4">
                            {group.category}
                        </h3>
                        <ul className="space-y-2">
                            {group.items.map((item) => (
                                <li key={item} className="text-[var(--foreground)]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}