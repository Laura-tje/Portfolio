import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { projects, inDevelopment } from "../data/index";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import GamePreview from "../components/projects/GamePreview";
import ProjectMechanics from "../components/projects/ProjectMechanics";
import { LanguageContext } from "../contexts/LanguageContext";

export default function ProjectPage({ projectId: projectIdProp, isModal = false }) {
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
      </div>
    </div>
  );
}
