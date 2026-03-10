import { useParams } from "react-router-dom";
import { projects } from "../data/index";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectGallery from "../components/projects/ProjectGallery";
import GamePreview from "../components/projects/GamePreview";
import ProjectMechanics from "../components/projects/ProjectMechanics";
import ProjectPrevNext from "../components/projects/ProjectPrevNext";

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        Project niet gevonden
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === projectId);
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
  const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;

  const previousProject = { 
    title: projects[previousIndex].title, 
    url: `/projects/${projects[previousIndex].id}` 
  };
  const nextProject = { 
    title: projects[nextIndex].title, 
    url: `/projects/${projects[nextIndex].id}` 
  };

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
