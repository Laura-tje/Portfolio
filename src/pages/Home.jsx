import { siteConfig } from "../siteConfig";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/index";
import { GitHub, LinkedIn, Itch, Envelope } from "../components/icons/icons";
import { useState } from "react";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  const handleImageHover = () => {
    setIsHovering(true);
  };

  const handleImageLeave = () => {
    setIsHovering(false);
  };
  
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div>
      {/* Hero Section - Bold & Dynamic */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large glow orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-(--accent) rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-(--accent) rounded-full blur-3xl opacity-5" />
          
          {/* Geometric grid lines */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(90deg, var(--accent) 1px, transparent 1px), linear-gradient(var(--accent) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem'
          }} />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: Image */}
            <div className="relative order-1 lg:order-1">
              {/* Decorative background shapes */}
              <div className="absolute -inset-8 bg-(--accent) opacity-10 rounded-3xl blur-xl" />
              
              {/* Profile Image */}
              <div className="relative mb-8 max-w-sm mx-auto">
                <div 
                  className="aspect-square rounded-3xl overflow-hidden border-4 border-(--accent) shadow-2xl cursor-pointer relative"
                  onMouseEnter={handleImageHover}
                  onMouseLeave={handleImageLeave}
                >
                  {siteConfig.profileImages?.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${siteConfig.name} ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        (isHovering && index === 1) || (!isHovering && index === 0) ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* RIGHT: Text & CTA */}
            <div className="space-y-8 order-2 lg:order-2">
              <div>
                <p className="text-lg text-(--accent) font-medium mb-2 uppercase tracking-widest">Welkom 👋</p>
                <h1 className="text-6xl lg:text-7xl font-bold text-(--text) mb-4">
                  Hey, ik ben <span className="text-(--accent)">Laura</span>
                </h1>
                <p className="text-xl text-(--accent) font-medium mb-6">{siteConfig.role}</p>
              </div>

              {/* Tagline met meer punch */}
              <p className="text-lg text-(--muted) leading-relaxed max-w-lg">
                {siteConfig.tagline}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={handleScrollToProjects}
                  className="px-8 py-4 bg-(--accent) text-(--accent-text) font-bold rounded-lg hover:bg-(--accent-hover) transition-all shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                >
                  Bekijk mijn werk
                </button>
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-(--surface) border-2 border-(--accent) text-(--text) font-bold rounded-lg hover:border-(--accent-hover) transition-all"
                >
                  Neem contact op
                </Link>
              </div>

              {/* Socials */}
              <div className="pt-8 border-t border-(--bordercolor)">
                <p className="text-sm text-(--muted) uppercase tracking-wider mb-4">Vind mij op</p>
                <div className="flex gap-4">
                  {siteConfig.socials.github && (
                    <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 rounded-full bg-(--surface) border border-(--bordercolor) hover:border-(--accent) flex items-center justify-center transition-all hover:text-(--accent) text-(--muted)">
                      <GitHub className="w-6 h-6" />
                    </a>
                  )}
                  {siteConfig.socials.linkedin && (
                    <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 rounded-full bg-(--surface) border border-(--bordercolor) hover:border-(--accent) flex items-center justify-center transition-all hover:text-(--accent) text-(--muted)">
                      <LinkedIn className="w-6 h-6" />
                    </a>
                  )}
                  {siteConfig.socials.itch && (
                    <a href={siteConfig.socials.itch} target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 rounded-full bg-(--surface) border border-(--bordercolor) hover:border-(--accent) flex items-center justify-center transition-all hover:text-(--accent) text-(--muted)">
                      <Itch className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Projecten Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-(--text) mb-8 text-center">Mijn Projecten</h2>

          {/* Grid met ProjectCards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}