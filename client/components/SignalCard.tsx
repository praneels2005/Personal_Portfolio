import { motion } from "motion/react";
import { ReactNode } from "react";

interface SignalCardProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

export default function SignalCard({ title, children, delay = 0 }: SignalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-colors will-change-transform"
    >
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">{title}</h3>
      {children}
    </motion.div>
  );
}
