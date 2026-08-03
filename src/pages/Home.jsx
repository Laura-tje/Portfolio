import { siteConfig } from "../siteConfig";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";
import { projects, inDevelopment } from "../data/index";
import { ChevronDown, ArrowRight } from "../components/icons/icons";
import CommitCalendar from "../components/CommitCalendar";
import { useContext, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import ProjectPage from "./ProjectPage";

export default function Home() {
  const { language } = useContext(LanguageContext);
  const [hoveredImage, setHoveredImage] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Extract all unique tags from config
  const availableFilters = useMemo(() => {
    const allTags = [];
    if (siteConfig.filterableTags && typeof siteConfig.filterableTags === 'object') {
      Object.values(siteConfig.filterableTags).forEach(category => {
        if (category.tags && Array.isArray(category.tags)) {
          allTags.push(...category.tags);
        }
      });
    }
    return allTags;
  }, []);

  // Get all projects for filtering (optionally including in-development)
  const allProjectsForFiltering = useMemo(() => {
    const allProjects = [...projects];
    if (siteConfig.includeInDevelopmentInFilters) {
      allProjects.push(...inDevelopment);
    }
    return allProjects;
  }, []);

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    if (selectedFilters.length === 0) {
      return projects;
    }
    return projects.filter(project =>
      selectedFilters.every(filter =>
        project.tags && project.tags.includes(filter)
      )
    );
  }, [selectedFilters]);

  // Filter in development projects with the same filters
  const filteredInDevelopment = useMemo(() => {
    if (selectedFilters.length === 0) {
      return inDevelopment;
    }
    return inDevelopment.filter(project =>
      selectedFilters.every(filter =>
        project.tags && project.tags.includes(filter)
      )
    );
  }, [selectedFilters]);

  useEffect(() => {
    const gifSources = [...projects, ...inDevelopment]
      .map((project) => project.gif)
      .filter(Boolean)
      .map((gif) => `${import.meta.env.BASE_URL}${gif}`);

    gifSources.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  useEffect(() => {
    if (selectedProjectId) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [selectedProjectId]);

  const openProject = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const closeProject = () => {
    setSelectedProjectId(null);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="w-full min-h-screen relative">
      {selectedProjectId && (
        <div className="fixed inset-0 z-[999] flex items-start justify-center overflow-y-auto bg-black/0 px-2 py-2 backdrop-blur-sm sm:px-4 sm:py-4 md:px-6 md:py-6">
          <div className="relative z-[1000] w-full max-w-6xl overflow-visible rounded-[32px] border border-(--bordercolor) bg-(--surface) shadow-2xl">
            <button
              type="button"
              onClick={closeProject}
              aria-label="Sluit project"
              className="absolute right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-(--bordercolor) bg-(--surface-alt) text-3xl leading-none text-(--text) shadow-xl transition hover:border-(--accent) hover:text-(--accent)"
            >
              ×
            </button>

            <div className="h-[93vh] overflow-y-auto rounded-[32px] pt-0">
              <ProjectPage projectId={selectedProjectId} onNavigateProject={setSelectedProjectId} isModal />
            </div>
          </div>
        </div>
      )}
      {/* HERO / INTRO SECTION */}
      <section className="relative min-h-screen max-w-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="w-full relative z-10 px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* LEFT: PROFILE IMAGE */}
            <div className="flex justify-center md:order-2" style={{ animation: 'fade-in-up 0.8s ease-out' }}>
              <div 
                className="relative w-full max-w-md aspect-square cursor-pointer"
                //onMouseEnter={() => setHoveredImage(true)}
                onMouseLeave={() => setHoveredImage(false)}
              >
                <div className="absolute inset-0 bg-(--surface) rounded-2xl blur-2xl opacity-60" />
                <img 
                  src={`${import.meta.env.BASE_URL}${hoveredImage ? siteConfig.profileImages[1] : siteConfig.profileImages[0]}`}
                  alt="Laura"
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>

            {/* RIGHT: TEXT CONTENT */}
            <div className="space-y-8 md:order-1">
              {/* GREETING / NAME */}
              <div style={{ animation: 'fade-in-up 0.8s ease-out 0.1s both' }}>
                <p className="text-sm text-(--accent) font-semibold uppercase tracking-[0.2em] mb-4">
                  {language === "nl" ? "XR Developer" : "XR Developer"}
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                  <span className="text-(--text)">
                    {language === "nl" ? "Hey, ik ben" : "Hey, I'm"}
                  </span>
                  <br />
                  <span className="text-(--accent)">
                    Laura
                  </span>
                </h1>
              </div>

              {/* TAGLINE */}
              <div style={{ animation: 'fade-in-up 1s ease-out 0.2s both' }}>
                <p className="text-lg md:text-xl text-(--muted) font-light leading-relaxed">
                  {siteConfig[language]?.tagline || siteConfig.nl.tagline}
                </p>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8" style={{ animation: 'fade-in-up 1.2s ease-out 0.4s both' }}>
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
                  className="px-8 py-4 border border-(--accent) text-white rounded-lg hover:bg-(--accent) hover:text-white transition-all font-semibold text-center"
                >
                  {language === "nl" ? "Contact" : "Contact"}
                </Link>
              </div>

              {/* GITHUB ACTIVITY */}
              <CommitCalendar />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-(--text) mb-4">
              {language === "nl" ? "Mijn Projecten" : "My Projects"}
            </h2>
            <div className="h-1 w-12 bg-(--accent) mx-auto" />
          </div>

          {/* FILTERS */}
          <ProjectFilter 
            selectedFilters={selectedFilters}
            onFilterChange={setSelectedFilters}
            availableFilters={availableFilters}
            filterCategories={siteConfig.filterableTags}
            allProjects={allProjectsForFiltering}
          />

          {/* PROJECT GRID */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  style={{ animation: `fade-in-up 0.8s ease-out ${0.2 + index * 0.1}s both` }}
                >
                  <ProjectCard project={project} onOpenProject={openProject} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-(--muted) text-lg">
                {language === "nl" 
                  ? "Geen projecten gevonden met deze filters" 
                  : "No projects found with these filters"}
              </p>
            </div>
          )}

          {/* IN DEVELOPMENT */}
          {filteredInDevelopment.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-(--text) mb-8 text-center">
                {language === "nl" ? "In Ontwikkeling" : "In Development"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInDevelopment.map((project, index) => (
                  <div 
                    key={index} 
                    style={{ animation: `fade-in-up 0.8s ease-out ${0.2 + index * 0.1}s both` }}
                  >
                    <ProjectCard project={project} inDevelopment={true} onOpenProject={openProject} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 px-4">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-(--text) mb-4">
              {language === "nl" ? "Ik heb ervaring met" : "I have experience with"}
            </h2>
            <div className="h-1 w-12 bg-(--accent) mx-auto" />
          </div>

          {/* GAME ENGINES */}
          <div className="mb-16 flex justify-center">
            <div>
              <h3 className="text-2xl font-semibold text-(--accent) mb-6 text-center">
                {language === "nl" ? "Game Engines" : "Game Engines"}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { name: "Unity", logo: "unity.png" },
                  { name: "Unreal", logo: "unreal.png" },
                  { name: "Godot", logo: "godot.png" },
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
                      loading="lazy"
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

          {/* PROGRAMMING LANGUAGES */}
          <div className="mb-16 flex justify-center">
            <div>
              <h3 className="text-2xl font-semibold text-(--secondary) mb-6 text-center">
                {language === "nl" ? "Programmeertalen" : "Programming Languages"}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { name: "C#", logo: "csharp.png" },
                  { name: "C++", logo: "c++.png" },
                  { name: "Python", logo: "python.png" },
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
                      loading="lazy"
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

          {/* Tools & Hardware */}
          <div className="mb-16 flex justify-center">
            <div>
              <h3 className="text-2xl font-semibold text-(--muted) mb-6 text-center">
                {language === "nl" ? "Hardware & Tools" : "Hardware & Tools"}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  //{ name: "Arduino", logo: "arduino.png" },
                  { name: "Raspberry Pi", logo: "raspberrypi.png" },
                  { name: "OpenCV", logo: "opencv.png" },
                  { name: "Socket.io", logo: "socketio.png" },
                  { name: "P5.js", logo: "p5.png" },
                  { name: "Git", logo: "git.png" },
                  { name: "Github", logo: "github.png" },
                  { name: "Copilot", logo: "copilot.png" },
                  { name: "Claude", logo: "claude.png" },
                  { name: "Lightroom", logo: "lightroom.png" },
                  { name: "Illustrator", logo: "illustrator.png" },
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
                      loading="lazy"
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
    </div>
  );
}