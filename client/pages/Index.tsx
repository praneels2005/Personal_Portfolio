import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-black">
        <p>© {new Date().getFullYear()} Praneel Pothukanuri. All rights reserved.</p>
      </footer>
    </div>
  );
}
