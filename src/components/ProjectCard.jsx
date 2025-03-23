import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
			className="rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		>
			<div>
				<img
					src={project.img}
					className="rounded-t-xl border-none"
					alt="Project"
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
		</motion.div>
	);
};

export default ProjectCard;
