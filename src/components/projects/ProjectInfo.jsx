import ProjectGallery from "./ProjectGallery";

export default function ProjectInfo({ project, hasMoreContent = false }) {
  return (
    <div className={`mb-4 ${hasMoreContent ? 'border-b border-(--bordercolor) pb-8' : ''} ml-4 mr-4 mt-8`}>
      {/* Grid layout: 2 columns on desktop, stacks on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Description - left column */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-(--text) mb-4">Over dit project</h2>
          {project.description && project.description.split("\n\n").map((text, i) => (
            <p key={i} className="leading-relaxed text-(--muted)">
              {text}
            </p>
          ))}
        </div>

        {/* Right column: Gallery (if exists) or Details */}
        <div className="h-fit md:self-start">
          {hasMoreContent ? (
            <ProjectGallery project={project} />
          ) : (
            <>
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
                      <span key={tag} className="tag">
                        {tag}
                      </span>
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
                       className="px-3 py-2 bg-(--accent) text-(--accent-text) rounded-lg 
                                  hover:bg-(--accent-hover) text-sm transition-colors">
                      Itch.io
                    </a>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}