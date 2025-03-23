import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiX, FiLink, FiGithub } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import ProjectsFilter from './ProjectsFilter';
import { ProjectsContext } from '../context/ProjectsContext';

const Projects = () => {
	const { projects, selectProject, selectProjectsByCategory } = useContext(ProjectsContext);
	const [selectedProject, setSelectedProject] = useState(null);

	// Find related projects based on shared technologies
	const getRelatedProjects = (project) => {
		if (!project) return [];

		// If project has RelatedProject property, use that instead
		if (project.RelatedProject && project.RelatedProject.Projects) {
			return project.RelatedProject.Projects.map(relatedProj => {
				// Find complete project data
				const fullProject = projects.find(p => p.slug === relatedProj.path.split('/').pop());
				return fullProject || relatedProj;
			});
		}

		// Fallback to finding by technologies
		return projects
			.filter(p => 
				p.id !== project.id && 
				p.technologies && project.technologies &&
				p.technologies.some(tech => 
					project.technologies.includes(tech)
				)
			)
			.slice(0, 3); // Limit to 3 related projects
	};
	
	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				<h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
					Search projects by category
				</h3>
				<div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
					<div className="flex justify-between gap-2">
						<ProjectsFilter />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-5 sm:gap-10">
				{projects.map((project) => (
					<Link 
						to={`/projects/${project.slug}`}
						className="cursor-pointer"
						key={project.id}
						aria-label={project.title}
					>
						<ProjectCard project={project} />
					</Link>
				))}
			</div>

			{/* Selected Project Details Modal */}
			{selectedProject && (
				<div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-hidden">
					<div className="bg-secondary-light dark:bg-ternary-dark rounded-xl p-6 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
						<button
							onClick={() => setSelectedProject(null)}
							className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
							aria-label="Close"
						>
							<FiX className="w-6 h-6" />
						</button>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
							<div>
								<img
									src={selectedProject.img}
									alt={selectedProject.title}
									className="w-full h-auto rounded-lg object-cover shadow-md"
								/>
								
								{/* Project Images Gallery */}
								{selectedProject.ProjectImages && selectedProject.ProjectImages.length > 1 && (
									<div className="mt-4 grid grid-cols-3 gap-2">
										{selectedProject.ProjectImages.map((image, index) => (
											<img 
												key={image.id} 
												src={image.img} 
												alt={image.title}
												className="rounded cursor-pointer h-20 w-full object-cover" 
											/>
										))} 
									</div>
								)}
							</div>
							<div>
								<h2 className="text-2xl font-bold mb-2 text-primary-dark dark:text-primary-light">
									{selectedProject.ProjectHeader?.title || selectedProject.title}
								</h2>
								
								{selectedProject.ProjectHeader?.tags && (
									<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
										{selectedProject.ProjectHeader.tags}
									</p>
								)}
								
								<p className="text-gray-600 dark:text-gray-300 mb-6">
									{selectedProject.ProjectDetails?.description || selectedProject.description}
								</p>
								
								{selectedProject.ProjectInfo?.ObjectivesDetails && (
									<div className="mb-4">
										<h3 className="font-bold text-primary-dark dark:text-primary-light mb-2">
											{selectedProject.ProjectInfo.ObjectivesHeading || "Objective"}
										</h3>
										<p className="text-gray-600 dark:text-gray-300">
											{selectedProject.ProjectInfo.ObjectivesDetails}
										</p>
									</div>
								)}

								{selectedProject.technologies && (
									<div className="mb-6">
										<h3 className="font-bold text-primary-dark dark:text-primary-light mb-2">
											Technologies
										</h3>
										<div className="flex flex-wrap gap-2">
											{selectedProject.technologies.map((tech, index) => (
												<span
													key={index}
													className="text-sm py-1 px-3 rounded-full bg-primary-light dark:bg-gray-700 text-primary-dark dark:text-primary-light border border-gray-200 dark:border-gray-600"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								)}

								<div className="flex gap-4 flex-wrap">
									{selectedProject.ProjectInfo?.CompanyInfo?.find(info => info.title === 'GitHub')?.details && (
										<a
											href={selectedProject.ProjectInfo.CompanyInfo.find(info => info.title === 'GitHub').details}
											target="_blank"
											rel="noopener noreferrer"
											className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition flex items-center gap-2"
										>
											<FiGithub /> View on GitHub <FiChevronRight />
										</a>
									)}
									{selectedProject.link && (
										<a
											href={selectedProject.link}
											target="_blank"
											rel="noopener noreferrer"
											className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center gap-2"
										>
											<FiLink /> Live Demo <FiChevronRight />
										</a>
									)}
								</div>
							</div>
						</div>
						
						{/* Project Details */}
						{selectedProject.ProjectInfo?.ProjectDetails && (
							<div className="mt-10">
								<h3 className="text-xl font-bold mb-4 text-primary-dark dark:text-primary-light">
									{selectedProject.ProjectInfo.ProjectDetailsHeading || "Project Details"}
								</h3>
								<ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
									{selectedProject.ProjectInfo.ProjectDetails.map(detail => (
										<li key={detail.id}>{detail.details}</li>
									))}
								</ul>
							</div>
						)}
						
						{/* Related Projects */}
						{getRelatedProjects(selectedProject).length > 0 && (
							<div className="mt-12">
								<h3 className="text-xl font-bold mb-6 text-primary-dark dark:text-primary-light">
									{selectedProject.RelatedProject?.title || "Related Projects"}
								</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
									{getRelatedProjects(selectedProject).map((project) => (
										<div 
											key={project.id}
											onClick={() => setSelectedProject(project)}
											className="cursor-pointer transition transform hover:scale-105"
										>
											<ProjectCard project={project} />
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</section>
	);
};

export default Projects;
