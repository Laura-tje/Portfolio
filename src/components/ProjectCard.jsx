import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const [isCardHovering, setIsCardHovering] = useState(false);
  const isDisabled = project.disabled;
  
  const cardContent = (
    <>
      {/* Thumbnail met overlay */}
      <div 
        className="relative aspect-video overflow-hidden"
      >
        {isCardHovering && project.gif ? (
          <img src={`${import.meta.env.BASE_URL}${project.gif}`} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <img src={`${import.meta.env.BASE_URL}${project.thumbnail}`} alt={project.title} className={`w-full h-full object-cover ${!isDisabled ? 'group-hover:scale-105' : 'opacity-50'} transition-transform duration-300`}/>
        )}
        {/* Status badge */}
        {isDisabled && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="text-white font-semibold text-center px-4">In ontwikkeling</span>
          </div>
        )}
        {/* Hover overlay */}
        {!isDisabled && (
          <div className="absolute inset-0 bg-(--overlay) opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-(--text) font-semibold">Bekijk Project →</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-4 ${isDisabled ? 'opacity-60' : ''}`}>
        <h3 className={`text-lg font-semibold ${isDisabled ? 'text-(--muted)' : 'text-(--text) group-hover:text-(--accent)'} mb-1 transition-colors`}>{project.title}</h3>
        <p className="text-sm text-(--muted) line-clamp-2">{project.tagline}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const baseClasses = "group block bg-(--surface) rounded-lg overflow-hidden border transition-all duration-300";
  const hoverStyle = !isDisabled && isCardHovering ? {
    animation: 'card-hover-lift 300ms ease-out forwards'
  } : {};
  
  const baseClasses2 = isDisabled 
    ? `${baseClasses} border-(--bordercolor) opacity-75 cursor-not-allowed` 
    : `${baseClasses} border-(--bordercolor) hover:border-(--accent)`;

  return isDisabled ? (
    <div className={baseClasses2}>
      {cardContent}
    </div>
  ) : (
    <Link
      to={`/projects/${project.id}`}
      className={baseClasses2}
      onMouseEnter={() => setIsCardHovering(true)}
      onMouseLeave={() => setIsCardHovering(false)}
      style={hoverStyle}
    >
      {cardContent}
    </Link>
  );
}