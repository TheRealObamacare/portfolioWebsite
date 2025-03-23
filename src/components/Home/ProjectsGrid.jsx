import { Link } from 'react-router-dom';
// ...existing code...

const HomeProjectsGrid = ({ projects }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
			{projects.map((project) => (
				<Link
					to={`/projects/${project.id}`}
					key={project.id}
					className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
				>
					{/* ...existing project card content... */}
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
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{project.category}
						</span>
					</div>
				</Link>
			))}
		</div>
	);
};

export default HomeProjectsGrid;
