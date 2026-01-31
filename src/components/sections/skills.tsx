import Image from "next/image";

// Skill icons mapping to skillicons.dev icon names
const SKILL_ICONS = [
  "java", "kotlin", "python", "go", "typescript", "javascript", "c", "cpp",
  "spring", "hibernate", "fastapi",
  "react",
  "postgresql", "mysql", "mongodb", "redis",
  "git", "github", "docker", "postman",
  "vscode", "linux", "windows"
];

const Skills = () => {
  // Build the skillicons.dev URL with all icons
  const iconsParam = SKILL_ICONS.join(",");
  const skillIconsUrl = `https://skillicons.dev/icons?i=${iconsParam}&theme=light`;
  
  return (
    <section className="py-10 border-t border-border/[0.03]" id="skills">
      <div className="flex flex-col gap-1 mb-8">
        <h2 className="text-xl font-semibold text-foreground">technologies & tools.</h2>
        <p className="text-sm text-muted-foreground font-mono">my tech stack</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Image
          src={skillIconsUrl}
          alt="Skills"
          width={960}
          height={48}
          unoptimized
        />
      </div>
    </section>
  );
};

export default Skills;

