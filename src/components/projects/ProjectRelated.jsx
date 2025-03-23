import { useContext } from 'react';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectSingle from './ProjectSingle';

const ProjectRelated = ({ excludeId }) => {
  const { projects } = useContext(ProjectsContext);
  
  // Filter out the current project and get up to 3 related projects
  const relatedProjects = projects
    .filter(project => project.id !== excludeId)
    .slice(0, 3);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 pt-10 border-t-2 border-primary-light dark:border-secondary-dark">
      <h3 className="font-general-regular text-center text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
        Related Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {relatedProjects.map((project) => (
          <ProjectSingle
            id={project.id}
            title={project.title}
            category={project.category}
            image={project.img}
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectRelated;