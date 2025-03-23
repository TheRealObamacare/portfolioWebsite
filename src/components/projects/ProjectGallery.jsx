import { useContext, useState, useEffect } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

// Direct imports of all images we need
import NN from '../../images/nn.jpg';
import backProp from '../../images/backProp.jpg';
import mail from '../../images/email.png';
import MobileImage1 from '../../images/mobile-project-1.jpg';
import UIImage1 from '../../images/ui-project-1.jpg';
import UIImage2 from '../../images/ui-project-2.jpg';
import naiveBayes from '../../images/naiveBayes.png';
import sklearn from '../../images/sklearn.png';
import deepNNs from '../../images/deepLearning.png';
import deepLearning from '../../images/deep-learning-with-python.jpg';
import transformer from '../../images/transformer.png';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const [images, setImages] = useState([]);

	// Image mapping based on project path
	const imageMap = {
		'backpropagation-algorithm': {
			main: backProp,
			secondary: NN
		},
		'sklearn-classifier': {
			main: MobileImage1,
			secondary: sklearn  // was UIImage1
		},
		'spam-email-classifier': {
			main: mail,
			secondary: naiveBayes  // was UIImage2
		},
		'neural-network-practice': {
			main: NN,
			secondary: deepNNs  // was UIImage1
		}
	};

	useEffect(() => {
		// Get project slug from path
		const projectSlug = singleProjectData.path?.split('/').pop();
		
		if (projectSlug && imageMap[projectSlug]) {
			// If we have images for this project, use them
			const projectImages = singleProjectData.ProjectImages || [];
			
			// Map new images array with reliable sources
			const mappedImages = projectImages.map((img, index) => ({
				...img,
				// Use our reliable image map as the source
				img: index === 0 ? imageMap[projectSlug].main : imageMap[projectSlug].secondary
			}));
			
			setImages(mappedImages);
		} else if (singleProjectData.ProjectImages) {
			// Fallback to original images if we don't have a mapping
			setImages(singleProjectData.ProjectImages);
		}
	}, [singleProjectData]);

	if (!images || images.length === 0) {
		return <div className="mt-12 text-center">No project images available</div>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
			{images.map((project, index) => (
				<div className="mb-10 sm:mb-0" key={index}>
					<img
						src={project.img}
						className="rounded-xl cursor-pointer shadow-lg sm:shadow-none h-60 object-cover w-full"
						alt={project.title || `Project Image ${index + 1}`}
						onError={(e) => {
							console.error(`Failed to load image: ${project.title}`);
							// If our mapped images fail, fall back to a static image
							e.target.src = UIImage1;
						}}
					/>
				</div>
			))}
		</div>
	);
};

export default ProjectGallery;
