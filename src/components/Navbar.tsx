"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--background)]/70 border-b border-[var(--muted)]/20">
            <nav className="max-w-6xl mx-auto px-8 md:px-24 py-4 flex justify-between items-center">
                <Link href="/" className="font-mono font-bold text-[var(--accent)]">
                    YourName.dev
                </Link>

                <div className="flex gap-6 text-sm font-mono">
                    <Link href="/#about" className="hover:text-[var(--accent)] transition">About</Link>
                    <Link href="/#projects" className="hover:text-[var(--accent)] transition">Projects</Link>
                    <Link href="/#skills" className="hover:text-[var(--accent)] transition">Skills</Link>
                    <Link href="/#contact" className="hover:text-[var(--accent)] transition">Contact</Link>
                </div>
            </nav>
        </header>
    );
}