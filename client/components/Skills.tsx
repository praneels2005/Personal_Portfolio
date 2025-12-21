import SkillCard from "./SkillCard";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      description: "Building fast, accessible, design-system-driven interfaces.",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "Figma"],
    },
    {
      category: "Backend",
      description: "Architecting scalable, secure, and high-performance server-side systems.",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "Python"],
    },
    {
      category: "AI & Data",
      description: "Training, evaluating, and deploying ML models for real-world use.",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
    },
    {
      category: "DevOps & Tools",
      description: "Streamlining deployment pipelines and managing cloud infrastructure.",
      skills: ["AWS", "Docker", "Kubernetes", "Streamlit", "Git", "GitHub Actions", "Linux", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="relative bg-black py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Technical Expertise</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A curated list of technologies I use to build products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((group, index) => (
            <SkillCard
              key={index}
              index={index}
              title={group.category}
              description={group.description}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
