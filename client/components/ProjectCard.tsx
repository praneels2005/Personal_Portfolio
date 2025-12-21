import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  linkText: string;
  technologies: string[];
  highlights: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  link,
  linkText,
  technologies,
  highlights,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start border-b border-white/5 pb-12 last:border-0 will-change-transform"
    >
      {/* Image Section */}
      <div className="lg:col-span-5 order-2 lg:order-1">
        <div className="relative group overflow-hidden rounded-xl">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium flex items-center gap-2 hover:underline"
            >
              {linkText} <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col h-full">
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
          {description}
        </p>

        <div className="mb-8">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Outcomes</h4>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                <Check size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-white/5 text-gray-400 text-xs font-medium rounded border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
