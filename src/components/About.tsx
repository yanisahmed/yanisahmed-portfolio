"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="px-8 md:px-24 py-24 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold mb-12"
            >
                About Me
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-64 md:h-full rounded-lg overflow-hidden"
                >
                    <Image
                        src="/profile.jpg"
                        alt="Your Name"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="md:col-span-2 text-[var(--muted)] text-lg space-y-4"
                >
                    <p>
                        I'm Yanis Ahmed, a web developer with over 10 years of experience building websites and digital solutions for clients worldwide. With a background in Computer Science and Engineering and a strong foundation in frontend development, I became passionate about full-stack development because I enjoy turning ideas into complete, functional applications.
                    </p>
                    <p>
                        I'm always eager to learn new technologies and build scalable, user-friendly solutions that solve real-world problems.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}