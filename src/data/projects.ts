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
        slug: "project-two",
        title: "Project Two",
        description: "Another project description, focused on what makes it interesting or technically notable.",
        tech: ["React", "Node.js", "PostgreSQL"],
        image: "/projects/project-one.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project-two",
    },
];