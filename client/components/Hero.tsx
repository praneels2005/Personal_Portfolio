import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import LiquidEther from "@/components/LiquidEther";
import TextType from './TextType'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* 🌊 Liquid Ether Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-black to-black pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8 w-full pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            <TextType
              text={["Hi, I'm Praneel Pothukanuri", "I design and build thoughtful digital products"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-4 font-light">
            Computer Science & Data Science Student at Rutgers University.
          </p>

          <p className="text-base text-gray-500 mb-10 max-w-xl leading-relaxed">
            Specializing in full-stack development and AI integration.
            I build scalable, user-centric applications that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <a
              href="https://cdn.builder.io/o/assets%2Fb28ead4654094ee8a40f228083810d8e%2Fff0d7ba382074268a565711cd9aa4288?alt=media&token=ce95d13a-87ae-4a38-bc2c-58b1db5ac73e&apiKey=b28ead4654094ee8a40f228083810d8e"
              target="_blank"
              className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all"
            >
              View Resume
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/praneels2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-white transition-colors border border-white/10 rounded-full hover:bg-white/5"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/praneel-pothukanuri/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-white transition-colors border border-white/10 rounded-full hover:bg-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 text-gray-300 hover:text-white font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
