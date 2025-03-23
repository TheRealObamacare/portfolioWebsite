import { createContext, useState } from 'react';
import projectsData from '../data/projects';

// Create context
export const ProjectsContext = createContext();

// Create context provider
export const ProjectsProvider = ({ children }) => {
	const [projects, setProjects] = useState(projectsData);
	const [selectedProject, setSelectedProject] = useState({});
	const [selectProjectsByCategory, setSelectProjectsByCategory] = useState([]);

	// Select project by category
	const filterProjectsByCategory = (category) => {
		if (category === 'All Projects') {
			setSelectProjectsByCategory(projects);
		} else {
			setSelectProjectsByCategory(
				projects.filter((project) => project.category === category)
			);
		}
	};

	// Select single project
	const selectProject = (id) => {
		setSelectedProject(projects.find((project) => project.id === id));
	};

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				selectProject,
				selectedProject,
				selectProjectsByCategory,
				setSelectProjectsByCategory,
				filterProjectsByCategory,
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
};

export default ProjectsProvider;