export type Project = {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
};

export const projects: Project[] = [
    {
        slug: "cv-builder",
        title: "CV Builder",
        description:
            "A modern, easy-to-use CV builder that helps job seekers create professional resumes in minutes. Customize your details, organize your experience, and export a polished PDF without the hassle of manual formatting.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/projects/cv-builder.png",
        liveUrl: "https://buildmycv-pro.vercel.app/",
        githubUrl: "https://github.com/yanisahmed/buildmycv",
    },
    {
        slug: "multilingual-flashcard-app",
        title: "Multilingual Flashcard App",
        description: "A flashcard app for learning vocabulary across multiple languages. Create custom decks, flip cards with native pronunciation, and track your progress with spaced repetition so new words actually stick. Switch between languages instantly and study anywhere, on any device.",
        tech: ["React", "Node.js", "PostgreSQL"],
        image: "/projects/multilingual-flashcards.jpg",
        liveUrl: "https://linguaflash-pro.vercel.app/",
        githubUrl: "https://github.com/yanisahmed/multilanguage-flashcard",
    },
];