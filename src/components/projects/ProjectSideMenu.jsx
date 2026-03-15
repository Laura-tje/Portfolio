import { Link } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function ProjectSideMenu({ currentProjectId, allProjects }) {
  const { language } = useContext(LanguageContext);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const wheelRef = useRef(null);

  // Set scroll offset so active project is always in center
  useEffect(() => {
    const activeIndex = allProjects.findIndex(p => p.id === currentProjectId);
    if (activeIndex !== -1) {
      setScrollOffset(activeIndex);
    }
  }, [currentProjectId, allProjects]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const scrollAmount = e.deltaY > 0 ? 1 : -1;
    setScrollOffset((prev) => {
      const newOffset = prev + scrollAmount;
      return ((newOffset % allProjects.length) + allProjects.length) % allProjects.length;
    });
  };

  const handleMouseEnter = () => {
    document.documentElement.style.scrollbarGutter = 'stable';
    document.body.style.overflow = 'hidden';
    document.body.classList.add('scrollbar-hidden');
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = '';
    document.body.classList.remove('scrollbar-hidden');
    document.documentElement.style.scrollbarGutter = '';
  };

  // Get vertical position based on scroll offset
  const getProjectPosition = (index) => {
    let position = (index - scrollOffset + allProjects.length) % allProjects.length;
    // Convert to circular distance (-2 to 2 range wrapping around)
    if (position > allProjects.length / 2) {
      position = position - allProjects.length;
    }
    return position;
  };

  // Get opacity/scale based on position in the wheel
  const getProjectStyle = (position) => {
    const absPos = Math.abs(position);
    switch (absPos) {
      case 0: // center - brightest
        return { opacity: 1, scale: 1, blur: 0 };
      case 1: // ±1 - medium
        return { opacity: 0.25, scale: 0.96, blur: 0 };
      case 2: // ±2 - darker
        return { opacity: 0.1, scale: 0.92, blur: 0 };
      case 3: // ±3 - darkest
        return { opacity: 0, scale: 0.88, blur: 0 };
      default:
        return { opacity: 0, scale: 0.8, blur: 10 };
    }
  };

  const itemHeight = 140; // w-48 h-32 + gap

  return (
    <>
      {/* Desktop Wheel Menu - Right, Centered */}
      <div
        ref={wheelRef}
        className="fixed left-4 top-1/2 -translate-y-1/2 w-56 pointer-events-auto z-30 hidden lg:flex flex-col p-3 rounded-lg overflow-visible"
        onWheel={handleWheel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Carousel Container - Shows 7 items */}
        <div className="relative h-[980px] w-full flex items-center justify-center overflow-visible">
          <div className="absolute inset-0 flex items-center justify-center overflow-visible">
            {allProjects.map((project, index) => {
              const position = getProjectPosition(index);
              const isActive = project.id === currentProjectId;
              const projectTitle = project[language]?.title || project.nl.title;
              
              // Only render projects within display range (-3 to 3)
              if (Math.abs(position) > 3) return null;

              const style = getProjectStyle(position);
              const yTranslate = position * itemHeight;

              const zIndex = 4 - Math.abs(position) + (position === 0 && hoveredProjectId === project.id ? 10 : 0);
              const pointerEvents = style.opacity < 0.1 ? 'none' : 'auto';

              return (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  onClick={scrollToTop}
                  onMouseEnter={() => position === 0 && setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className="absolute transition-all duration-500 ease-out"
                  style={{
                    transform: position === 0 && hoveredProjectId === project.id 
                      ? `translateY(${yTranslate}px) translateX(120px)` 
                      : `translateY(${yTranslate}px)`,
                    opacity: style.opacity,
                    filter: `blur(${style.blur}px)`,
                    zIndex: zIndex,
                    pointerEvents: pointerEvents,
                  }}
                >
                  <div
                    className={`relative rounded-md overflow-hidden group transition-all border border-(--bordercolor) ${
                      position === 0 && hoveredProjectId === project.id
                        ? 'w-80 flex flex-col bg-(--surface)'
                        : 'w-48 h-32'
                    }`}
                    title={projectTitle}
                  >
                    {position === 0 && hoveredProjectId === project.id ? (
                      <>
                        {/* Expanded view - Thumbnail met aspect-video */}
                        <div className="relative aspect-video overflow-hidden bg-black/10">
                          <img
                            src={project.thumbnail}
                            alt={projectTitle}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-(--text) mb-1 transition-colors">
                            {projectTitle}
                          </h3>
                          <p className="text-sm text-(--muted) line-clamp-2">
                            {project[language]?.tagline || project.nl.tagline}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-3">
                            {project.tags?.slice(0, 3).map((tag, idx) => (
                              <span 
                                key={idx}
                                className="tag"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Collapsed view - Only thumbnail */}
                        <img
                          src={project.thumbnail}
                          alt={projectTitle}
                          className="w-full h-full object-cover"
                        />
                      </>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Scrollable Menu */}
      <div className="fixed bottom-0 left-0 right-0 bg-(--surface) border-t border-(--bordercolor) pointer-events-auto z-30 lg:hidden p-3">
        <div className="text-(--muted) text-xs mb-2">{language === 'nl' ? 'Projecten' : 'Projects'}</div>
        <div className="overflow-x-auto flex gap-2 pb-2 custom-scrollbar-horizontal">
          {allProjects.map((project) => {
            const projectTitle = project[language]?.title || project.nl.title;
            const isActive = project.id === currentProjectId;

            return (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                onClick={scrollToTop}
                className="relative flex-shrink-0 w-24 h-18 rounded-md overflow-hidden group transition-all hover:ring-1 hover:ring-(--accent)"
                title={projectTitle}
              >
                <img
                  src={project.thumbnail}
                  alt={projectTitle}
                  className={`w-full h-full object-cover transition-all ${
                    isActive ? 'brightness-100' : 'brightness-60 group-hover:brightness-80'
                  }`}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-black/40'
                      : 'bg-black/0 group-hover:bg-black/20'
                  }`}
                >
                  <p className="text-xs font-semibold text-white text-center px-1 line-clamp-1">
                    {projectTitle}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        .custom-scrollbar-horizontal::-webkit-scrollbar {
          height: 4px;
        }
        
        .custom-scrollbar-horizontal::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar-horizontal::-webkit-scrollbar-thumb {
          background: var(--bordercolor);
          border-radius: 2px;
        }
        
        .custom-scrollbar-horizontal::-webkit-scrollbar-thumb:hover {
          background: var(--accent);
        }

        /* Hidden scrollbar - blended with background */
        body.scrollbar-hidden::-webkit-scrollbar {
          width: 15px;
          background: transparent;
        }

        body.scrollbar-hidden::-webkit-scrollbar-track {
          background: transparent;
        }

        body.scrollbar-hidden::-webkit-scrollbar-thumb {
          background: transparent;
        }

        body.scrollbar-hidden {
          scrollbar-color: transparent transparent;
        }
      `}</style>
    </>
  );
}
