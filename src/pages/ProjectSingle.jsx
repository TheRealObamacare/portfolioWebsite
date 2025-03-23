import { useParams, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { SingleProjectContext } from '../context/SingleProjectContext';
import { FiClock, FiTag } from 'react-icons/fi';

const ProjectSingle = () => {
	// Get both params and full location for debugging
	const params = useParams();
	const location = useLocation();
	
	// Display full URL parsing details
	console.log("RAW URL:", window.location.href);
	console.log("URL PATHNAME:", window.location.pathname);
	
	// Extract slug manually as a fallback
	const pathParts = window.location.pathname.split('/');
	const manualSlug = pathParts[pathParts.length - 1];
	console.log("Manually extracted slug:", manualSlug);
	
	// Try both the params and manual extraction
	const slug = params?.slug || manualSlug || '';
	console.log("FINAL SLUG VALUE:", slug);
	
	const { singleProjectData } = useContext(SingleProjectContext);
	const [singleProject, setSingleProject] = useState([]);
	const [notFound, setNotFound] = useState(false);
	const [loading, setLoading] = useState(true);

	// Find the project with improved slug matching
	useEffect(() => {
		// Enhanced debugging
		console.log("Current URL:", window.location.href);
		console.log("Route path:", location.pathname);
		console.log("URL params:", params);
		console.log("Extracted slug:", slug);
		console.log("Available projects:", singleProjectData);
		
		// Check if singleProjectData exists and has items
		if (!singleProjectData || !Array.isArray(singleProjectData) || singleProjectData.length === 0) {
			console.log("Project data not loaded yet");
			setLoading(true);
			return; // Exit early, wait for data to load
		}
		
		setLoading(false);
		
		// Extra safety check for slug
		if (!slug) {
			console.error("No slug provided in URL");
			setNotFound(true);
			return;
		}
		
		console.log(`Looking for project with slug: "${slug}"`);
		console.log("Available slugs:", singleProjectData.map(p => `"${p.slug}"`).join(", "));
		
			// First, log all available projects and their slugs for comparison
			console.table(singleProjectData.map(p => ({
				id: p.id,
				title: p.title,
				slug: p.slug
			})));
			
			// Try a direct match
			const exactMatch = singleProjectData.find(item => 
				item && item.slug && item.slug === slug
			);
			
			if (exactMatch) {
				console.log("Found exact match:", exactMatch.title);
				setSingleProject([exactMatch]);
				setNotFound(false);
				return;
			}
			
		// More robust slug comparison (case-insensitive)
		const project = singleProjectData.filter((item) => {
			const match = item && item.slug && slug && item.slug.toLowerCase() === slug.toLowerCase();
			console.log(`Comparing slug "${item?.slug}" with "${slug}": ${match}`);
			return match;
		});
		
		// If no project found, try to find by id in case slug is an id
		if (project.length === 0) {
			const projectById = singleProjectData.filter(item => item && item.id && item.id.toString() === slug);
			if (projectById.length === 0) {
				setNotFound(true);
				console.error("No project found with slug or id:", slug);
			} else {
				setSingleProject(projectById);
				setNotFound(false);
			}
		} else {
			setSingleProject(project);
			setNotFound(false);
		}
	}, [slug, singleProjectData, location]);

	if (loading) {
		return (
			<div className="container mx-auto py-10 text-center">
				<h1 className="text-3xl font-bold">Loading project...</h1>
			</div>
		);
	}

	if (notFound) {
		return (
			<div className="container mx-auto py-10 text-center">
				<h1 className="text-3xl font-bold">Project Not Found</h1>
				<p className="mt-4">Could not find project with slug: {slug}</p>
				<p className="mt-2">Available slugs: {singleProjectData.map(p => p.slug).join(", ")}</p>
			</div>
		);
	}

	return (
		<div className="container mx-auto">
			{singleProject.map((project) => (
				<div className="mt-10 sm:mt-20" key={project.id}>
					{/* Project header */}
					<div>
						<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
							{project.ProjectHeader.title}
						</p>
						{/* Project tags */}
						<div className="flex">
							<div className="flex items-center mr-10">
								<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
								<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
									{project.ProjectHeader.tags}
								</span>
							</div>
						</div>
					</div>

					{/* Project gallery */}
					<div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 mt-12">
						{project.ProjectImages.map((image) => {
							return (
								<div className="mb-10 sm:mb-0" key={image.id}>
									<img
										src={image.img}
										className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
										alt={project.ProjectHeader.title}
									/>
								</div>
							);
						})}
					</div>

					{/* Project details */}
					<div className="sm:col-span-1">
						<p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
							Project Info
						</p>
						{project.ProjectInfo.CompanyInfo.map((info) => (
							<div key={info.id} className="mb-2">
								<p className="text-lg text-ternary-dark dark:text-ternary-light font-normal">
									{info.title}: {" "}
									{info.title === "GitHub" ? (
										<a 
											href={info.details}
											target="_blank"
											rel="noopener noreferrer"
											className="font-normal text-indigo-500 hover:underline"
										>
											View Repository
										</a>
									) : (
										<span className="font-normal">{info.details}</span>
									)}
								</p>
							</div>
						))}
					</div>

					{/* Project objectives */}
					<div className="mt-10 sm:mt-14">
						<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
							{project.ProjectInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">
							{project.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Project Details */}
					<div className="mt-10 sm:mt-14">
						<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
							{project.ProjectInfo.ProjectDetailsHeading}
						</p>
						<ul className="list-disc">
							{project.ProjectInfo.ProjectDetails.map((details) => (
								<li
									key={details.id}
									className="font-general-regular text-lg text-ternary-dark dark:text-ternary-light mb-2"
								>
									{details.details}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProjectSingle;
