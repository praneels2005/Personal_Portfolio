import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/5">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
            Praneel.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block text-white hover:text-gray-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <a
              href="/#projects"
              className="block text-white hover:text-gray-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="/#skills"
              className="block text-white hover:text-gray-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="/#contact"
              className="block text-white hover:text-gray-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
