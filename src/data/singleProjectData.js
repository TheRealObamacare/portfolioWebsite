// This file can be removed since we'll now use the data from projectsData instead

// If you need to keep this file, replace its contents with:
import ProjectsData from './projects'; // Changed from { projectsData } to ProjectsData

/**
 * Get project data by project slug
 * @param {string} slug - The project slug from the URL
 * @returns {object} The project data object
 */
export function getProjectBySlug(slug) {
	console.log('Looking for project with slug:', slug);
	
	// Find project where the path ends with the slug
	const project = ProjectsData.find(p => {
		const projectSlug = p.path.split('/').pop();
		return projectSlug === slug;
	});
	
	if (project) {
		console.log('Found project:', project.title);
		return project;
	} else {
		console.warn(`No project found with slug: ${slug}`);
		return null;
	}
};

// Map of project slugs to their data for quicker lookups
export const projectsMap = ProjectsData.reduce((acc, project) => {
	const slug = project.path.split('/').pop();
	acc[slug] = project;
	return acc;
}, {});

// List of all ML projects
export const mlProjects = ProjectsData.filter(p => p.category === 'Machine Learning');

// Export default project for backwards compatibility
export default ProjectsData[0];

// Export all projects data
export const singleProjectData = ProjectsData[0];
