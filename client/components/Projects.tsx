import ProjectCard from "./ProjectCard";

export default function Projects() {
  
  const projects = [
    {
      title: "PlaylistAI",
      description:
        "A full-stack playlist generation platform leveraging Google Gemini to create personalized music collections based on natural language prompts.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fb28ead4654094ee8a40f228083810d8e%2Ffe08488b19df4a098c1279e06d6a2c73",
      imageAlt: "PlaylistAI Interface",
      link: "https://github.com/praneels2005/Spotify_Project",
      linkText: "View Source",
      technologies: ["React", "TypeScript", "Python", "Flask", "Gemini API"],
      highlights: [
        "Reduced generation latency by ~80% by implementing multi-threaded parallel processing",
        "Orchestrated Gemini AI to synthesize user data vectors into cohesive playlists",
        "OAuth2 flow handles custom UGC cover image uploads and real-time Spotify library synchronization."
      ],
  },
    {
      title: "Genomic Function and Mutation Impact Model",
      description:
        "Addresses the challenge of transforming raw genomic sequence data into structured, machine-learning–ready representations capable of supporting gene function classification and mutation impact analysis.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fb28ead4654094ee8a40f228083810d8e%2F834720ab027149cdad8dcf608b5c006a",
      imageAlt: "PCA Visualization",
      link: "https://github.com/praneels2005/Gene-Function-and-Mutation-Impact-Prediction-Model",
      linkText: "View Source",
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "Bio-Python"],
      highlights: [
        "Achieved 98% prediction on Gene functionlity",
        "Developed 100+ domain-specific features to improve classification interpretability",
        "Predicted mutation severity with 100% precision on high-impact variants"
      ],
    },
    {
      title: "Trading analytics & risk monitoring dashboard",
      description:
        "Trading analytics platform for deterministic P&L attribution, reconciliation, and portfolio-level risk analysis.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fb28ead4654094ee8a40f228083810d8e%2F45227ae48f6c49c3943b679b9a289141",
      imageAlt: "DSINetwork Dashboard",
      link: "https://tradeaudit.streamlit.app/",
      linkText: "View Live",
      technologies: ["Python", "Pandas", "Numpy", "Openpyxl", "Streamlit"],
      highlights: [
        "Deterministic P&L and risk analytics across 60+ traded tickers",
        "Hash-partitioned reconciliation engine scaling to 100× input volume",
        "Internal analytics tooling for rapid portfolio performance and risk exploration"
      ],
    },
  ];
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative bg-black py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Selected Work</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A collection of projects where I've engineered solutions to complex problems.
          </p>
        </div>
          <div className="space-y-20">
              <ProjectCard featured {...featured} />
              <div className="grid grid-cols-1 gap-12">
                  {rest.map((project, index) => (
                    <ProjectCard
                    key={index}
                    {...project}
                    reversed={index % 2 === 1}
                    />
                  ))}
            </div>
          </div>
      </div>
    </section>
  );
}
