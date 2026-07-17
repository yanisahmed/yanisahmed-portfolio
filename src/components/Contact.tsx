"use client";

import { submitContactForm } from "@/app/actions";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(formData: FormData) {
        setStatus("submitting");
        const result = await submitContactForm(formData);

        if (result.success) {
            setStatus("success");
        } else {
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="px-8 md:px-24 py-24 max-w-3xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold mb-12"
            >
                Get in Touch
            </motion.h2>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                action={handleSubmit}
                className="space-y-6"
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-mono text-[var(--muted)] mb-2">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full bg-transparent border border-[var(--muted)]/40 rounded-md px-4 py-3 focus:border-[var(--accent)] focus:outline-none transition"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-mono text-[var(--muted)] mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-transparent border border-[var(--muted)]/40 rounded-md px-4 py-3 focus:border-[var(--accent)] focus:outline-none transition"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-mono text-[var(--muted)] mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full bg-transparent border border-[var(--muted)]/40 rounded-md px-4 py-3 focus:border-[var(--accent)] focus:outline-none transition resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="px-6 py-3 bg-[var(--accent)] text-black font-medium rounded-md hover:opacity-90 transition disabled:opacity-50"
                >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                    <p className="text-green-400 text-sm">Thanks! I'll get back to you soon.</p>
                )}
                {status === "error" && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                )}
            </motion.form>
        </section>
    );
}