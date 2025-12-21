import FadeContent from './FadeContent';
import SignalCard from './SignalCard';

export default function About() {
  const coursework = {
    core: ["Data Structures & Algorithms", "Principles of Programming Languages", "Computer Architecture", "Database Systems"],
    math: ["Linear Algebra", "Discrete Structures"],
    data: ["Introduction to Data Science", "Data 101"]
  };

  return (
    <section id="about" className="relative bg-black py-32 px-6 lg:px-8 scroll-mt-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column - Narrative (65%) */}
          <div className="lg:col-span-7 space-y-8">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <h2 className="text-3xl font-bold text-white tracking-tight">About Me</h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mt-6 font-medium">
                Full-stack engineer with a strong foundation in data science and intelligent systems.
              </p>

              <div className="space-y-6 text-lg text-gray-400 leading-relaxed mt-8">
                <p>
                  I am a Computer Science and Data Science student at Rutgers University. My work sits at the intersection of full-stack engineering and artificial intelligence, where I focus on building tools that are both powerful and accessible.
                </p>

                <p>
                  I approach problems with a <span className="text-white font-medium">product mindset</span> — writing code is just one part of the equation. I care deeply about the end-user experience, system architecture, and the long-term maintainability of what I build.
                </p>

                <p>
                  My real education happens when I'm building. Whether it's optimizing cloud infrastructure or deploying machine learning models to the edge, I focus on creating efficient, reliable solutions that solve real problems.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Principles I Build By</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Design for users first
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Optimize for clarity over cleverness
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Build for maintainability
                  </li>
                </ul>
              </div>
            </FadeContent>
          </div>

          {/* Right Column - Signals (35%) */}
          <div className="lg:col-span-5 space-y-6">
            <SignalCard title="Education" delay={0.1}>
              <div>
                <h4 className="text-lg font-medium text-white">Rutgers University</h4>
                <p className="text-gray-400 text-sm mt-1">B.S. Computer Science & Data Science</p>
                <div className="flex items-center gap-3 mt-3 text-sm text-gray-500">
                  <span>2023 — 2027</span>
                  <span className="w-1 h-1 rounded-full bg-gray-700" />
                  <span className="text-gray-300 font-medium">GPA: 3.9/4.0</span>
                </div>
              </div>
            </SignalCard>

            <SignalCard title="Relevant Coursework" delay={0.2}>
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-gray-500 mb-2 block">Core CS</span>
                  <div className="flex flex-wrap gap-2">
                    {coursework.core.map((course, index) => (
                      <span key={index} className="px-2.5 py-1 bg-white/5 text-gray-300 text-xs rounded border border-white/5 hover:border-white/20 hover:text-white transition-colors cursor-default">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-gray-500 mb-2 block">Math & Theory</span>
                  <div className="flex flex-wrap gap-2">
                    {coursework.math.map((course, index) => (
                      <span key={index} className="px-2.5 py-1 bg-white/5 text-gray-300 text-xs rounded border border-white/5 hover:border-white/20 hover:text-white transition-colors cursor-default">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-gray-500 mb-2 block">Data & ML</span>
                  <div className="flex flex-wrap gap-2">
                    {coursework.data.map((course, index) => (
                      <span key={index} className="px-2.5 py-1 bg-white/5 text-gray-300 text-xs rounded border border-white/5 hover:border-white/20 hover:text-white transition-colors cursor-default">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SignalCard>

            <SignalCard title="Honors" delay={0.3}>
              <div>
                <h4 className="text-base font-medium text-white">Upsilon Pi Epsilon</h4>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  International Honor Society for the Computing and Information Disciplines
                </p>
              </div>
            </SignalCard>
          </div>
        </div>
      </div>
    </section>
  );
}
