import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function ProjectCard({ project, inDevelopment = false, onOpenProject }) {
  const [isCardHovering, setIsCardHovering] = useState(false);
  const { language } = useContext(LanguageContext);
  
  // Get language-specific content
  const content = project[language] || project.nl;
  const engineIcons = [
    { key: "unity", src: "assets/skills/unity.png" },
    { key: "unreal", src: "assets/skills/unreal.png" },
    { key: "godot", src: "assets/skills/godot.png" },
    { key: "raspberry pi", src: "assets/skills/raspberrypi.png" },
    { key: "arduino", src: "assets/skills/arduino.png" },
  ];
  const engineIcon = engineIcons.find(({ key }) =>
    project.tags?.some((tag) => tag.toLowerCase().includes(key))
  );
  const visibleTags = project.tags.filter(
    (tag) => !engineIcons.some(({ key }) => tag.toLowerCase().includes(key))
  );
  
  const cardContent = (
    <>
      {/* Award Ribbon */}
      {project.oustanding && (
        <div className="award-ribbon">
          <span className="award-text">
            {typeof project.oustanding === 'string' 
              ? project.oustanding 
              : project.oustanding.text}
          </span>
          {project.oustanding.image && (
            <img src={`${import.meta.env.BASE_URL}${project.oustanding.image}`} alt="Award" className="award-image" loading="lazy" />
          )}
        </div>
      )}
      
      {/* Thumbnail met overlay */}
      <div 
        className="relative aspect-video overflow-hidden"
      >
        {isCardHovering && project.gif ? (
          <img src={`${import.meta.env.BASE_URL}${project.gif}`} alt={content.title} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        ) : (
          <img src={`${import.meta.env.BASE_URL}${project.thumbnail}`} alt={content.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        )}
        {engineIcon && (
          <div
            className="absolute left-2 bottom-2 z-10 rounded-md bg-black/55 px-2 py-1 shadow-[0_4px_14px_rgba(0,0,0,0.9)] backdrop-blur-[2px]"
            aria-hidden="true"
          >
            <img
              src={`${import.meta.env.BASE_URL}${engineIcon.src}`}
              alt=""
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-(--overlay) opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-0.5">
          <div className="text-lg text-(--text) font-semibold">{content.projectRole}</div>
          <div className="text-lg text-(--muted)">{content.timeline}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-(--text) group-hover:text-(--accent) mb-1 transition-colors">{content.title}</h3>
        <p className="text-sm text-(--muted) line-clamp-2">{content.tagline}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {visibleTags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const baseClasses = "group relative block bg-(--surface) rounded-lg border transition-all duration-300 project-card";
  const hoverStyle = isCardHovering ? {
    animation: 'card-hover-lift 300ms ease-out forwards'
  } : {};
  
  const baseClasses2 = `${baseClasses} border-(--bordercolor) hover:border-(--accent)`;

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpenProject?.(project.id);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={baseClasses2}
      onMouseEnter={() => setIsCardHovering(true)}
      onMouseLeave={() => setIsCardHovering(false)}
      onClick={() => onOpenProject?.(project.id)}
      onKeyDown={handleKeyDown}
    >
      {cardContent}
    </div>
  );
}