
import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';

const ProjectsSection = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projectsData.map((project) => (
          <Link
            to={`/projects/${project.slug}`}
            key={project.id}
            aria-label="Single Project"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;