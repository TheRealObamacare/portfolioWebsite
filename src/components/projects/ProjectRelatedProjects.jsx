import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SingleProjectContext from '../../context/SingleProjectContext';
// Import default images directly
import backPropImage from '../../images/backProp.jpg';
import sklearnImage from '../../images/mobile-project-1.jpg';
import spamImage from '../../images/email.png';

const ProjectRelatedProjects = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	// Default related projects data with directly imported images
	const defaultRelatedProject = {
		title: "Related Projects",
		Projects: [
			{
				id: 1,
				title: "Backpropagation Algorithm",
				img: backPropImage,
				path: "/projects/backpropagation-algorithm"
			},
			{
				id: 2,
				title: "Scikit-Learn Classifier",
				img: sklearnImage,
				path: "/projects/sklearn-classifier"
			},
			{
				id: 3,
				title: "Spam Email Classifier",
				img: spamImage,
				path: "/projects/spam-email-classifier"
			},
		],
	};

	// Use the project's RelatedProject if it exists, otherwise use default
	const relatedProject = singleProjectData.RelatedProject || defaultRelatedProject;

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{relatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{relatedProject.Projects.map((project) => {
					// Extract just the slug from the path
					const projectSlug = project.path.split('/').pop();
					
					return (
						<Link
							to={`/projects/${projectSlug}`}
							key={project.id}
							className="relative rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
						>
							<div>
								<img
									src={project.img}
									className="rounded-t-xl border-none"
									alt={project.title}
								/>
							</div>
							<div className="text-center px-4 py-6">
								<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
									{project.title}
								</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
