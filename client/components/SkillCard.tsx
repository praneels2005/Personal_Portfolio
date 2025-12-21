import { motion } from "motion/react";

interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
  index: number;
}

export default function SkillCard({ title, description, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-[transform,border-color] duration-300 hover:-translate-y-1 bg-white/5 will-change-transform"
    >
      <h3 className="font-semibold text-white mb-2 text-xl">{title}</h3>
      <p className="text-sm text-gray-400 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-sm border border-white/10 text-gray-300 hover:border-white/30 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
