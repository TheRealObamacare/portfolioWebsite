import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

const ProjectsGrid = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <p className="text-center">No projects to display</p>;
  }

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.src = '/images/placeholder-project.jpg'; // Fallback image
    e.target.alt = 'Project image placeholder';
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      {projects.map((project) => {
        // Ensure project has a slug property
        const slug = project.slug || `project-${project.id}`;
        
        return (
          <Link
            to={`/projects/${slug}`}
            key={project.id}
            aria-label="Single Project"
            className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
          >
            <div>
              <img
                src={project.img}
                className="rounded-t-xl border-none w-full h-48 object-cover"
                alt={project.title}
                onError={handleImageError}
              />
            </div>
            <div className="px-4 py-6">
              <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                {project.title}
              </p>
              <span className="text-lg text-ternary-dark dark:text-ternary-light">
                {project.category}
              </span>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default ProjectsGrid;
