import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils"; // Assuming you have the standard Shadcn utility
import { ArrowUpRight, Github, Globe } from "lucide-react";

type BentoItemProps = {
  title: string;
  description: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  tech?: string[];
  href?: string;
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  tech,
  href,
}: BentoItemProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
    >
      {/* The Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/bento:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10">
        {header}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 flex items-center gap-2">
          {icon}
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>

        {/* Tech Stack Tags */}
        {tech && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t) => (
              <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-300">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover Action Link */}
      {href && (
        <a href={href} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 opacity-0 group-hover/bento:opacity-100 transition-opacity">
          <ArrowUpRight className="w-5 h-5 text-neutral-400" />
        </a>
      )}
    </div>
  );
};