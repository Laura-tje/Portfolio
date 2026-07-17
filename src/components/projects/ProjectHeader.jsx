import TagBadge from "../TagBadge";

export default function ProjectHeader({ project, hasMoreContent = false }) {
  // Use banner if available, fallback to thumbnail
  const bannerImage = project.banner || project.thumbnail;
  
  return (
    <div>
      <div className="relative w-full mb-2 overflow-hidden">
        {/* Banner Image */}
        <img 
          src={`${import.meta.env.BASE_URL}${bannerImage}`}
          alt={project.title} 
          className="w-full h-48 sm:h-120 object-cover" 
          loading="eager"
          fetchPriority="high"
        />

        {/* Solid overlay voor leesbaarheid */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Text overlay */}
        <div className="absolute bottom-4 left-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-1">{project.title}</h1>
          <p className="text-base text-gray-300 max-w-xl drop-shadow-sm font-medium">{project.tagline}</p>
        </div>
      </div>

      {/* Details: only show if there's gallery/mechanics */}
      {hasMoreContent && (
        <div className="mx-4 ml-4 mr-4 pb-8">
          <h3 className="text-xl font-semibold mb-4 text-(--text) border-b border-(--bordercolor) pb-2">Details</h3>

          <ul className="text-sm space-y-2 text-(--muted)">
            <li className="flex justify-between border-b border-(--bordercolor) pb-1">
              <span className="font-medium text-(--text)">Rol</span>
              <span>{project.projectRole}</span>
            </li>

            {project.timeline && (
              <li className="flex justify-between border-b border-(--bordercolor) pb-1">
                <span className="font-medium text-(--text)">Tijdlijn</span>
                <span>{project.timeline}</span>
              </li>
            )}

            <li className="flex justify-between items-center pb-1">
              <span className="font-medium text-(--text)">Tags</span>
              <div className="flex flex-wrap gap-1.5 justify-end">
                {project.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
            </li>
          </ul>

          {/* Action buttons - shown if links exist */}
          {(project.git || project.itch) && (
            <div className="mt-4 flex gap-2 justify-end">
              {project.git && (
                <a href={project.git} target="_blank" rel="noopener noreferrer" 
                   className="px-3 py-2 bg-(--surface) border border-(--bordercolor) rounded-lg 
                              hover:border-(--accent) text-sm transition-colors">
                  GitHub
                </a>
              )}
              {project.itch && (
                <a href={project.itch} target="_blank" rel="noopener noreferrer"
                   className="px-3 py-2 bg-(--accent) text-white rounded-lg 
                              hover:bg-(--accent-hover) text-sm transition-colors">
                  Itch.io
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}