import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import ProjectsData from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = ProjectsData.find(project => project.id.toString() === id);
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-ternary-dark dark:text-ternary-light">
          Project not found
        </h2>
        <button
          onClick={() => navigate('/')}
          className="mt-8 px-4 py-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-600"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center mb-10 px-4 py-2 text-ternary-dark dark:text-ternary-light hover:text-indigo-500 dark:hover:text-indigo-400"
      >
        <FiArrowLeft className="mr-2" />
        Back to Projects
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <img 
            src={project.img} 
            alt={project.title}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-ternary-dark dark:text-ternary-light mb-4">
            {project.title}
          </h1>
          <p className="text-primary-dark dark:text-primary-light mb-4">
            {project.category}
          </p>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              Project Description
            </h2>
            <p className="text-primary-dark dark:text-primary-light">
              {project.description || "No description available."}
            </p>
          </div>
          {project.ProjectDetails && project.ProjectDetails.technologies && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.ProjectDetails.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {project.ProjectInfo && project.ProjectInfo.CompanyInfo && (
            <div className="mb-8">
              {project.ProjectInfo.CompanyInfo.map(info => {
                if (info.title === 'GitHub') {
                  return (
                    <a 
                      key={info.id}
                      href={info.details}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-600"
                    >
                      View on GitHub
                    </a>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
