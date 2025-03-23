import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SingleProjectContext } from '../../context/SingleProjectContext';

const RelatedProjects = ({ projectId, title }) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	
	// Get current project
	const project = singleProjectData.find(p => p.id === projectId);
	
	if (!project || !project.RelatedProject) {
		return null;
	}

	return (
		<div className="mt-10">
			<h3 className="font-general-medium text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-6">
				{project.RelatedProject.title || title || "Related Projects"}
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{project.RelatedProject.Projects.map((relatedProject) => (
					<Link
						to={relatedProject.path}
						key={relatedProject.id}
						className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-600 bg-secondary-light dark:bg-ternary-dark transition transform hover:-translate-y-1"
					>
						<div className="relative h-48 overflow-hidden">
							<img
								src={relatedProject.img}
								alt={relatedProject.title}
								className="w-full h-full object-cover object-center transform hover:scale-110 transition duration-500"
							/>
						</div>
						<div className="px-4 py-4">
							<p className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light font-semibold mb-2">
								{relatedProject.title}
							</p>
							{relatedProject.technologies && (
								<div className="flex flex-wrap gap-2 mt-2">
									{relatedProject.technologies.slice(0, 3).map((tech, index) => (
										<span
											key={index}
											className="text-xs py-1 px-2 rounded-md bg-primary-light dark:bg-gray-700 text-primary-dark dark:text-primary-light border border-gray-200 dark:border-gray-600"
										>
											{tech}
										</span>
									))}
									{relatedProject.technologies.length > 3 && (
										<span className="text-xs text-gray-500 dark:text-gray-400 self-center">
											+{relatedProject.technologies.length - 3} more
										</span>
									)}
								</div>
							)}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default RelatedProjects;
