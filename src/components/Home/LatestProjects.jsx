import { Link, useNavigate } from 'react-router-dom';
import ProjectCard from '../ProjectCard';
// Import directly from your existing projects file
import projectsData from '../../data/projects';

const LatestProjects = () => {
	const navigate = useNavigate();
	
	// Get the last 3 projects from your existing data
	const latestProjects = projectsData.slice(-3);

	// Fix the URL format to match your projects page (with 's' in 'projects')
	const handleProjectClick = (slug) => {
		console.log(`Navigating to project with slug: ${slug}`);
		if (slug) {
			navigate(`/projects/${slug}`); // Changed from /project/ to /projects/
		} else {
			console.error("Missing slug for project");
		}
		return false;
	};

	return (
		<div className="mt-10 sm:mt-16">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Latest Projects
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{latestProjects.map((project) => {
					console.log(`Project ${project.id} has slug: "${project.slug}"`);
					
					return (
						<div 
							key={project.id}
							onClick={() => handleProjectClick(project.slug)}
							className="cursor-pointer"
							aria-label="Single Project"
						>
							<ProjectCard project={project} />
						</div>
					);
				})}
			</div>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					More Projects
				</Link>
			</div>
		</div>
	);
};

export default LatestProjects;
