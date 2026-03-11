import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { projects } from "../data/index";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectGallery from "../components/projects/ProjectGallery";
import GamePreview from "../components/projects/GamePreview";
import ProjectMechanics from "../components/projects/ProjectMechanics";
import ProjectPrevNext from "../components/projects/ProjectPrevNext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function ProjectPage() {
  const { projectId } = useParams();
  const { language } = useContext(LanguageContext);
  
  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);
  
  const baseProject = projects.find(p => p.id === projectId);
  
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

  const currentIndex = projects.findIndex(p => p.id === projectId);
  
  // Find next enabled project
  let nextIndex = currentIndex;
  let nextFound = false;
  for (let i = 1; i < projects.length; i++) {
    const idx = (currentIndex + i) % projects.length;
    if (!projects[idx].disabled) {
      nextIndex = idx;
      nextFound = true;
      break;
    }
  }
  
  // Find previous enabled project
  let previousIndex = currentIndex;
  let previousFound = false;
  for (let i = 1; i < projects.length; i++) {
    const idx = (currentIndex - i + projects.length) % projects.length;
    if (!projects[idx].disabled) {
      previousIndex = idx;
      previousFound = true;
      break;
    }
  }

  const previousProject = previousFound ? { 
    title: projects[previousIndex][language]?.title || projects[previousIndex].nl.title, 
    url: `/projects/${projects[previousIndex].id}` 
  } : null;
  
  const nextProject = nextFound ? { 
    title: projects[nextIndex][language]?.title || projects[nextIndex].nl.title, 
    url: `/projects/${projects[nextIndex].id}` 
  } : null;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProjectInfo project={project} />
      <ProjectMechanics project={project} />
      {(project.youtube || (project.screenshots && project.screenshots.length > 0)) && <ProjectGallery project={project} />}
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
      <ProjectPrevNext previous={previousProject} next={nextProject} />
    </div>
  );
}
