import { Link } from 'react-router-dom';
import projectsData from '../../data/projects';

const ProjectSingle = ({ id, title, category, image }) => {
  // Find the project to get its slug
  const project = projectsData.find(p => p.id === id);
  
  // Use the slug property directly if available
  const slug = project ? (project.slug || project.path.split('/').pop()) : id;
  
  console.log(`Project component: Linking project #${id} (${title}) to /projects/${slug}`);
  
  // Verify the project can be found
  if (project) {
    console.log("Found matching project in data");
  } else {
    console.warn(`No project found with id ${id} in projectsData`);
  }

  return (
    <Link
      to={`/projects/${slug}`}
      className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
      aria-label={`View ${title} project`}
    >
      <div>
        <img
          src={image}
          className="rounded-t-xl border-none"
          alt={title}
        />
      </div>
      <div className="text-center px-4 py-6">
        <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
          {title}
        </p>
        <span className="text-lg text-ternary-dark dark:text-ternary-light">
          {category}
        </span>
      </div>
    </Link>
  );
};

export default ProjectSingle;
