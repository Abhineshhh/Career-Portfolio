"use client";
import { Github, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/components/constants/data";

// Tech colors mapping for colorful badges
const TECH_COLORS: Record<string, { bg: string; hover: string; text: string; hoverText: string }> = {
  // Languages
  "Java": { bg: "bg-orange-500/10", hover: "hover:bg-orange-500", text: "text-orange-600 dark:text-orange-400", hoverText: "hover:text-white" },
  "Kotlin": { bg: "bg-purple-500/10", hover: "hover:bg-purple-500", text: "text-purple-600 dark:text-purple-400", hoverText: "hover:text-white" },
  "Go": { bg: "bg-cyan-500/10", hover: "hover:bg-cyan-500", text: "text-cyan-600 dark:text-cyan-400", hoverText: "hover:text-white" },
  "Python": { bg: "bg-yellow-500/10", hover: "hover:bg-yellow-500", text: "text-yellow-600 dark:text-yellow-400", hoverText: "hover:text-black" },
  "TypeScript": { bg: "bg-blue-500/10", hover: "hover:bg-blue-500", text: "text-blue-600 dark:text-blue-400", hoverText: "hover:text-white" },
  "JavaScript": { bg: "bg-yellow-400/10", hover: "hover:bg-yellow-400", text: "text-yellow-500 dark:text-yellow-300", hoverText: "hover:text-black" },
  // Frameworks
  "Spring Boot": { bg: "bg-green-500/10", hover: "hover:bg-green-500", text: "text-green-600 dark:text-green-400", hoverText: "hover:text-white" },
  "Spring Data Redis": { bg: "bg-green-500/10", hover: "hover:bg-green-500", text: "text-green-600 dark:text-green-400", hoverText: "hover:text-white" },
  "Gin": { bg: "bg-cyan-500/10", hover: "hover:bg-cyan-500", text: "text-cyan-600 dark:text-cyan-400", hoverText: "hover:text-white" },
  "React": { bg: "bg-sky-500/10", hover: "hover:bg-sky-500", text: "text-sky-600 dark:text-sky-400", hoverText: "hover:text-white" },
  "Next.js": { bg: "bg-neutral-800/10", hover: "hover:bg-neutral-800", text: "text-neutral-700 dark:text-neutral-300", hoverText: "hover:text-white" },
  // Databases
  "Redis": { bg: "bg-red-500/10", hover: "hover:bg-red-500", text: "text-red-600 dark:text-red-400", hoverText: "hover:text-white" },
  "PostgreSQL": { bg: "bg-blue-600/10", hover: "hover:bg-blue-600", text: "text-blue-700 dark:text-blue-400", hoverText: "hover:text-white" },
  "MongoDB": { bg: "bg-green-600/10", hover: "hover:bg-green-600", text: "text-green-700 dark:text-green-400", hoverText: "hover:text-white" },
  // Tools & Concepts
  "Docker": { bg: "bg-blue-400/10", hover: "hover:bg-blue-500", text: "text-blue-500 dark:text-blue-400", hoverText: "hover:text-white" },
  "AWS": { bg: "bg-orange-400/10", hover: "hover:bg-orange-500", text: "text-orange-500 dark:text-orange-400", hoverText: "hover:text-white" },
  "TCP Sockets": { bg: "bg-indigo-500/10", hover: "hover:bg-indigo-500", text: "text-indigo-600 dark:text-indigo-400", hoverText: "hover:text-white" },
  "Concurrency": { bg: "bg-violet-500/10", hover: "hover:bg-violet-500", text: "text-violet-600 dark:text-violet-400", hoverText: "hover:text-white" },
  "WebSockets": { bg: "bg-emerald-500/10", hover: "hover:bg-emerald-500", text: "text-emerald-600 dark:text-emerald-400", hoverText: "hover:text-white" },
  "Stripe": { bg: "bg-purple-600/10", hover: "hover:bg-purple-600", text: "text-purple-700 dark:text-purple-400", hoverText: "hover:text-white" },
  "Socket Programming": { bg: "bg-rose-500/10", hover: "hover:bg-rose-500", text: "text-rose-600 dark:text-rose-400", hoverText: "hover:text-white" },
  "Multithreading": { bg: "bg-amber-500/10", hover: "hover:bg-amber-500", text: "text-amber-600 dark:text-amber-400", hoverText: "hover:text-black" },
};

const getTechStyle = (tech: string) => {
  return TECH_COLORS[tech] || { 
    bg: "bg-slate-500/10", 
    hover: "hover:bg-slate-500", 
    text: "text-slate-600 dark:text-slate-400",
    hoverText: "hover:text-white"
  };
};

export default function Projects() {
  return (
    <section className="py-10 border-t border-border/[0.03]" id="projects">
      <div className="flex flex-col gap-1 mb-8">
        <h2 className="text-xl font-semibold">featured projects.</h2>
        <p className="text-sm text-muted-foreground font-mono">things I&apos;ve built</p>
      </div>

      <div className="space-y-4">
        {PROJECTS.map((project, index) => (
          <div
            key={project.name}
            className="group relative"
          >
            {/* Main Card */}
            <div className="flex gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300">
              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Header with icon and title */}
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4 text-foreground/60" />
                  <h3 className="text-lg font-bold text-foreground group-hover:text-foreground/90 transition-colors">
                    {project.name}
                  </h3>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 rounded-md flex items-center justify-center text-muted-foreground hover:text-white hover:bg-[#333] dark:hover:bg-white dark:hover:text-[#333] transition-all duration-300 hover:scale-110"
                      aria-label="View source code"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  {index === 0 && (
                    <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-foreground/10 text-foreground/70 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      Latest
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const style = getTechStyle(tech);
                    return (
                      <span
                        key={tech}
                        className={`text-xs font-mono px-2.5 py-1 rounded-full ${style.bg} ${style.text} ${style.hover} ${style.hoverText} transition-all duration-300 cursor-default hover:scale-105`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
