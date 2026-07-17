export default function Footer() {
    return (
        <footer className="px-8 md:px-24 py-12 border-t border-[var(--muted)]/20 text-center text-[var(--muted)] text-sm font-mono">
            <p>© {new Date().getFullYear()} Yanis Ahmed. Freelance Web Developer</p>
        </footer>
    );
}