import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { projects, inDevelopment } from "../data/index";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import GamePreview from "../components/projects/GamePreview";
import ProjectMechanics from "../components/projects/ProjectMechanics";
import ProjectPrevNext from "../components/projects/ProjectPrevNext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function ProjectPage({ projectId: projectIdProp, onNavigateProject, isModal = false }) {
  const { projectId: routeProjectId } = useParams();
  const { language } = useContext(LanguageContext);
  const projectId = projectIdProp || routeProjectId;
  
  // Only scroll to top for standalone project pages, not for modal overlays
  useEffect(() => {
    if (!isModal) {
      window.scrollTo(0, 0);
    }
  }, [projectId, isModal]);

  const allProjects = [...projects, ...inDevelopment];
  const baseProject = allProjects.find(p => p.id === projectId);
  
  if (!baseProject) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        {language === 'nl' ? 'Project niet gevonden' : 'Project not found'}
      </div>
    );
  }

  // Merge base project data with language-specific data
  const projectContent = baseProject[language] || baseProject.nl;
  const project = { ...baseProject, ...projectContent };

  const currentIndex = allProjects.findIndex(p => p.id === projectId);
  
  // Find next project
  let nextIndex = (currentIndex + 1) % allProjects.length;
  
  // Find previous project
  let previousIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;

  const previousProject = { 
    id: allProjects[previousIndex].id,
    title: allProjects[previousIndex][language]?.title || allProjects[previousIndex].nl.title, 
    url: `/projects/${allProjects[previousIndex].id}` 
  };
  
  const nextProject = { 
    id: allProjects[nextIndex].id,
    title: allProjects[nextIndex][language]?.title || allProjects[nextIndex].nl.title, 
    url: `/projects/${allProjects[nextIndex].id}` 
  };

  const hasHighlights = project.mechanics && project.mechanics.length > 0;
  const hasGallery = project.youtube || (project.screenshots && project.screenshots.length > 0);
  const hasMoreContent = hasHighlights || hasGallery;

  return (
    <div className="w-full bg-(--surface)">
      <div className="pb-32 lg:pb-0">
        <ProjectHeader project={project} hasMoreContent={hasMoreContent} />
        <ProjectInfo project={project} hasMoreContent={hasMoreContent} />
        {hasHighlights && <ProjectMechanics project={project} hasMoreContent={hasGallery} />}
        {project.gameUrl && (
          <div className="container mx-auto px-4 mt-12">
            <h2 className="text-3xl font-bold mb-6">Preview</h2>
            <GamePreview 
              gameUrl={project.gameUrl}
              width={project.gameWidth || '600px'}
              height={project.gameHeight || '500px'}
              aspectRatio={project.gameAspectRatio || null}
            />
          </div>
        )}
        {/* <ProjectPrevNext previous={previousProject} next={nextProject} onNavigateProject={onNavigateProject} /> */}
      </div>
    </div>
  );
}
