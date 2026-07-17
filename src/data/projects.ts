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
        slug: "project-one",
        title: "Project One",
        description: "A short, punchy description of what this project does and the problem it solves.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        image: "/projects/project-one.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project-one",
    },
    {
        slug: "project-two",
        title: "Project Two",
        description: "Another project description, focused on what makes it interesting or technically notable.",
        tech: ["React", "Node.js", "PostgreSQL"],
        image: "/projects/project-one.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project-two",
    },
];