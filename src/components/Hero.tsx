"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-24 max-w-5xl mx-auto">
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[var(--accent)] font-mono text-sm md:text-base tracking-widest uppercase mb-4"
            >
                Frontend Developer
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-7xl font-bold leading-tight mb-6"
            >
                Hi, I'm Your Name.
                <br />
                I build things for the web.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mb-8"
            >
                I craft fast, accessible, and visually engaging web experiences —
                currently exploring Next.js and modern frontend architecture.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4"
            >
                <a
                    href="#projects"
                    className="px-6 py-3 bg-[var(--accent)] text-black font-medium rounded-md hover:opacity-90 transition"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border border-[var(--muted)] rounded-md hover:border-[var(--accent)] transition"
                >
                    Contact Me
                </a>
            </motion.div >
        </section >
    );
}