import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProjectsContext } from '../context/ProjectsContext';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects'; // Import data directly as fallback

const Projects = () => {
	// Use context with a fallback to direct data import
	const contextValue = useContext(ProjectsContext);
	const projects = contextValue?.projects || projectsData;

	return (
		<div className="container mx-auto">
			<div className="mt-12">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
						Projects portfolio
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 sm:gap-10">
				{projects.map((project) => (
					<Link 
						to={`/projects/${project.slug}`} 
						key={project.id}
						aria-label="Single Project"
					>
						<ProjectCard project={project} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Projects;
