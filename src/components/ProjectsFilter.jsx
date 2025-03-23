import { useContext } from 'react';
import { ProjectsContext } from '../context/ProjectsContext';

const ProjectsFilter = () => {
	const { projects, filterProjectsByCategory } = useContext(ProjectsContext);
	
	// Get unique categories
	const allCategories = ['All Projects', ...new Set(projects.map(project => project.category))];
	
	return (
		<select
			onChange={(e) => filterProjectsByCategory(e.target.value)}
			className="font-general-medium px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
		>
			{allCategories.map((category) => (
				<option key={category} value={category} className="text-sm sm:text-md">
					{category}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
