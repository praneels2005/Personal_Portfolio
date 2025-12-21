import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-6">Get in Touch</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:praneels2005@gmail.com" 
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg">praneels2005@gmail.com</span>
              </a>

              <a 
                href="tel:609-955-0219" 
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="text-lg">609-955-0219</span>
              </a>

              <div className="pt-8 flex gap-4">
                <a
                  href="https://www.linkedin.com/in/praneel-pothukanuri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white transition-colors border border-white/10 rounded-full hover:bg-white/5"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/praneels2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white transition-colors border border-white/10 rounded-full hover:bg-white/5"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none"
                  placeholder="Hello..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-all"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
