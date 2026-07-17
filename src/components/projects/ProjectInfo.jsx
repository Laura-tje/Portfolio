import { usePageTranslations } from "../../hooks/useTranslations";
import ProjectGallery from "./ProjectGallery";

export default function ProjectInfo({ project, hasMoreContent = false }) {
  const { t } = usePageTranslations('projects');

  const hasYoutube = !!project.youtube;
  const hasGif = !!project.gif;
  const hasMedia = hasYoutube || hasGif;
  
  return (
    <div className={`mb-4 ${hasMoreContent ? 'border-b border-(--bordercolor) pb-8' : ''} ml-4 mr-4 mt-8`}>
      <div className={`grid ${hasMedia ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-8`}>
        {/* Left column - Description */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-(--text) mb-4">{t('aboutThisProject')}</h2>
          {project.description && project.description.split("\n\n").map((text, i) => (
            <p key={i} className="leading-relaxed text-(--muted)">
              {text}
            </p>
          ))}
        </div>

        {/* Right column - Shows YouTube video or GIF */}
        {hasMedia ? (
          <div className="h-fit md:self-start">
            {hasMoreContent ? (
              <ProjectGallery project={project} />
            ) : (
              <>
                {hasYoutube && (
                  <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
                    <iframe
                      src={project.youtube}
                      title={project.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                )}

                {!hasYoutube && hasGif && (
                  <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
                    <img
                      src={`${import.meta.env.BASE_URL}${project.gif}`}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-lg"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>
                )}

                <h3 className="text-xl font-semibold mb-4 text-(--text) border-b border-(--bordercolor) pb-2">{t('details')}</h3>
                <ul className="text-sm space-y-2 text-(--muted)">
                  <li className="flex justify-between border-b border-(--bordercolor) pb-1">
                    <span className="font-medium text-(--text)">{t('role')}</span>
                    <span>{project.projectRole}</span>
                  </li>
                  {project.timeline && (
                    <li className="flex justify-between border-b border-(--bordercolor) pb-1">
                      <span className="font-medium text-(--text)">{t('timeline')}</span>
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
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}