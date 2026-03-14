import { siteConfig } from "../siteConfig";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects, inDevelopment } from "../data/index";
import { ChevronDown, ArrowRight } from "../components/icons/icons";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Home() {
  const { language } = useContext(LanguageContext);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section - Minimalist */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Geometric accents */}
        <div className="absolute top-20 right-40 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent opacity-60" />
        <div className="absolute bottom-32 left-20 w-1 h-40 bg-gradient-to-t from-purple-400 to-transparent opacity-60" />

        <div className="container mx-auto relative z-10 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Greeting */}
            <div style={{ animation: 'fade-in-up 0.8s ease-out' }}>
              <p className="text-sm text-(--accent) font-semibold uppercase tracking-[0.2em] mb-4">
                {language === "nl" ? "XR Developer" : "XR Developer"}
              </p>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
                <span className="text-(--text)">
                  {language === "nl" ? "Hey, ik ben" : "Hey, I'm"}
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Laura
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div style={{ animation: 'fade-in-up 1s ease-out 0.2s both' }}>
              <p className="text-xl md:text-2xl text-(--muted) font-light leading-relaxed max-w-2xl mx-auto">
                {siteConfig[language]?.tagline || siteConfig.nl.tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8" style={{ animation: 'fade-in-up 1.2s ease-out 0.4s both' }}>
              <button 
                onClick={handleScrollToProjects}
                className="px-8 py-4 bg-(--accent) text-white font-semibold rounded-lg hover:shadow-lg transition-all group"
              >
                <span className="flex items-center justify-center gap-2">
                  {language === "nl" ? "Mijn werk" : "My work"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <Link 
                to="/contact"
                className="px-8 py-4 border border-(--accent) text-white rounded-lg hover:bg-(--accent) hover:text-white transition-all font-semibold"
              >
                {language === "nl" ? "Contact" : "Contact"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-(--surface-alt)">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-(--text) mb-4">
              {language === "nl" ? "Mijn Expertise" : "My Expertise"}
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
          </div>

          {/* Game Engines */}
          <div className="mb-16 flex justify-center">
            <div>
              <h3 className="text-2xl font-semibold text-(--accent) mb-6 text-center">
                {language === "nl" ? "Game Engines" : "Game Engines"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Unity", logo: "unity.png" },
                  { name: "Unreal Engine", logo: "unreal.png" },
                ].map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex flex-col items-center justify-center"
                    style={{ animation: `fade-in-up 0.8s ease-out ${0.2 + idx * 0.05}s both` }}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}assets/skills/${skill.logo}`} 
                      alt={skill.name}
                      className="h-16 mb-2 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <p className="text-sm font-semibold text-(--text) text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Programming Languages */}
          <div className="mb-16 flex justify-center">
            <div>
              <h3 className="text-2xl font-semibold text-(--secondary) mb-6 text-center">
                {language === "nl" ? "Programmeertalen" : "Programming Languages"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "C#", logo: "csharp.png" },
                  { name: "Python", logo: "python.png" },
                  { name: "C++", logo: "c++.png" },
                  { name: "JavaScript", logo: "javascript.png" },
                  { name: "HTML", logo: "html.png" },
                  { name: "CSS", logo: "css.png" },
                ].map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex flex-col items-center justify-center"
                    style={{ animation: `fade-in-up 0.8s ease-out ${0.2 + idx * 0.05}s both` }}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}assets/skills/${skill.logo}`} 
                      alt={skill.name}
                      className="h-16 mb-2 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <p className="text-sm font-semibold text-(--text) text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Design Tools & Hardware */}
          <div className="flex justify-center">
            <div>
              <h3 className="text-2xl font-semibold text-(--muted) mb-6 text-center">
                {language === "nl" ? "Tools & Hardware" : "Tools & Hardware"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Arduino", logo: "arduino.png" },
                  { name: "Raspberry Pi", logo: "raspberrypi.png" },
                  { name: "Github", logo: "github.png" },
                ].map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex flex-col items-center justify-center"
                    style={{ animation: `fade-in-up 0.8s ease-out ${0.2 + idx * 0.05}s both` }}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}assets/skills/${skill.logo}`} 
                      alt={skill.name}
                      className="h-16 mb-2 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <p className="text-sm font-semibold text-(--text) text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-(--text) mb-4">
              {language === "nl" ? "Mijn Projecten" : "My Projects"}
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                style={{ animation: `fade-in-up 0.8s ease-out ${0.2 + index * 0.1}s both` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* In Development */}
          {inDevelopment.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-(--text) mb-8 text-center">
                {language === "nl" ? "In Ontwikkeling" : "In Development"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inDevelopment.map((project, index) => (
                  <div 
                    key={index} 
                    style={{ animation: `fade-in-up 0.8s ease-out ${0.2 + index * 0.1}s both` }}
                  >
                    <ProjectCard project={project} inDevelopment={true} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}