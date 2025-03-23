// Import images
import NN from '../images/nn.jpg';
import backProp from '../images/backProp.jpg';
import data from '../images/mobile-project-1.jpg';
import mail from '../images/email.png';
import naiveBayes from '../images/naiveBayes.png';
import sklearn from '../images/sklearn.png';
import deepNNs from '../images/deepLearning.png';
import deepLearning from '../images/deep-learning-with-python.jpg';
import transformer from '../images/transformer.png';

// Helper function to generate slug from title if not present
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

const projectsData = [
	{
		id: 1,
		title: 'Backpropagation Algorithm',
		category: 'Machine Learning',
		img: backProp,
		path: '/projects/backpropagation-algorithm',
		slug: 'backpropagation-algorithm', // Added slug property
		technologies: ['Python', 'NumPy', 'PyTorch', 'Matplotlib'],
		ProjectHeader: {
			title: 'Backpropagation Algorithm Implementation',
			publishDate: '',
			tags: 'ML / Neural Networks / Optimization',
		},
		ProjectDetails: {
			client: 'Research Project',
			technologies: ['Python', 'NumPy', 'PyTorch', 'Matplotlib'],
			objective: 'Develop a from-scratch implementation of the backpropagation algorithm',
			description: 'A comprehensive implementation of the backpropagation algorithm for neural networks, with visualizations of gradient flow and learning dynamics.',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Backpropagation Algorithm',
				img: NN,
			},
			{
				id: 2,
				title: 'Gradient Flow Visualization',
				img: backProp,
			},
		],
		ProjectInfo: {
			ClientHeading: 'Project Type',
			CompanyInfo: [
				{
					id: 1,
					title: 'Category',
					details: 'Machine Learning Research',
				},
				{
					id: 2,
					title: 'Field',
					details: 'Neural Networks',
				},
				{
					id: 3,
					title: 'GitHub',
					details: 'https://github.com/TheRealObamacare/Neural-Network-Practice/blob/main/backpropAlg.ipynb',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Implement and visualize the backpropagation algorithm from scratch to deepen understanding of neural network training dynamics',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['Python', 'NumPy', 'PyTorch', 'Matplotlib', 'Jupyter Notebooks'],
				},
			],
			ProjectDetailsHeading: 'Project Details',
			ProjectDetails: [
				{
					id: 1,
					details: 'Implemented the backpropagation algorithm from first principles using only NumPy',
				},
				{
					id: 2,
					details: 'Created visualizations of gradient flow through the network during training',
				},
				{
					id: 3,
					details: 'Compared performance with PyTorch\'s automatic differentiation',
				},
				{
					id: 4,
					details: 'Analyzed the impact of different activation functions and initialization methods',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/intent/tweet?text=',
				},
				{
					id: 2,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/',
				},
				{
					id: 3,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com',
				},
			],
		},
		RelatedProject: {
			title: "Related ML Projects",
			Projects: [
				{
					id: 1,
					title: "Scikit-Learn Classifier",
					img: sklearn,
					path: "/projects/sklearn-classifier",
					technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib']
				},
				{
					id: 2,
					title: "Spam Email Classifier",
					img: mail,
					path: "/projects/spam-email-classifier",
					technologies: ['Python', 'TensorFlow', 'NLTK', 'Gmail API']
				},
				{
					id: 3,
					title: "Neural Network Practice",
					img: NN,
					path: "/projects/neural-network-practice",
					technologies: ['Python', 'TensorFlow', 'PyTorch', 'WaveNet']
				},
			],
		}
	},
	{
		id: 2,
		title: 'Scikit-Learn Classifier',
		category: 'Machine Learning',
		img: data,
		path: '/projects/sklearn-classifier',
		slug: 'sklearn-classifier', // Added slug property
		technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
		ProjectHeader: {
			title: 'Scikit-Learn Classification Projects',
			publishDate: '',
			tags: 'ML / Classification / Data Science',
		},
		ProjectDetails: {
			client: 'Research Project',
			technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
			objective: 'Compare different classification algorithms on various datasets',
			description: 'A series of classification projects using Scikit-Learn to analyze and predict outcomes on different datasets, comparing algorithm performance.',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Scikit-Learn Classifier',
				img: sklearn,
			},
			{
				id: 2,
				title: 'Scikit-Learn Framework',
				img: data,
			},
		],
		ProjectInfo: {
			ClientHeading: 'Project Type',
			CompanyInfo: [
				{
					id: 1,
					title: 'Category',
					details: 'Machine Learning Research',
				},
				{
					id: 2,
					title: 'Field',
					details: 'Classification',
				},
				{
					id: 3,
					title: 'GitHub',
					details: 'https://github.com/TheRealObamacare/learningRegressionModels',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Compare the performance of different classification algorithms across a variety of datasets to identify strengths and weaknesses',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib', 'Jupyter Notebooks'],
				},
			],
			ProjectDetailsHeading: 'Project Details',
			ProjectDetails: [
				{
					id: 1,
					details: 'Implemented and compared logistic regression, decision trees, random forests, and support vector machines',
				},
				{
					id: 2,
					details: 'Created visualization tools for confusion matrices and ROC curves',
				},
				{
					id: 3,
					details: 'Conducted hyperparameter tuning using grid search and cross-validation',
				},
				{
					id: 4,
					details: 'Analyzed feature importance and performed feature selection',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/intent/tweet?text=',
				},
				{
					id: 2,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/',
				},
				{
					id: 3,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com',
				},
			],
		},
		RelatedProject: {
			title: "Related ML Projects",
			Projects: [
				{
					id: 1,
					title: "Backpropagation Algorithm",
					img: NN,
					path: "/projects/backpropagation-algorithm",
					technologies: ['Python', 'NumPy', 'PyTorch', 'Matplotlib']
				},
				{
					id: 2,
					title: "Spam Email Classifier",
					img: mail,
					path: "/projects/spam-email-classifier",
					technologies: ['Python', 'TensorFlow', 'NLTK', 'Gmail API']
				},
				{
					id: 3,
					title: "Neural Network Practice",
					img: naiveBayes,
					path: "/projects/neural-network-practice",
					technologies: ['Python', 'TensorFlow', 'PyTorch', 'WaveNet']
				},
			],
		}
	},
	{
		id: 3,
		title: 'Spam Email Classifier',
		category: 'Machine Learning',
		img: mail,
		path: '/projects/spam-email-classifier',
		slug: 'spam-email-classifier', // Added slug property
		technologies: ['Python', 'TensorFlow', 'NLTK', 'Gmail API'],
		ProjectHeader: {
			title: 'Gmail Spam Email Classifier',
			publishDate: '',
			tags: 'ML / NLP / Email',
		},
		ProjectDetails: {
			client: 'Research Project',
			technologies: ['Python', 'TensorFlow', 'NLTK', 'Gmail API'],
			objective: 'Build a spam email classifier that integrates with Gmail',
			description: 'A machine learning system that connects to Gmail, reads emails, and uses natural language processing to classify them as spam or legitimate.',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Spam Email Classifier',
				img: mail,
			},
			{
				id: 2,
				title: 'Naive Bayes Classification',
				img: naiveBayes,
			},
		],  
		ProjectInfo: {
			ClientHeading: 'Project Type',
			CompanyInfo: [
				{
					id: 1,
					title: 'Category',
					details: 'Machine Learning Application',
				},
				{
					id: 2,
					title: 'Field',
					details: 'Natural Language Processing',
				},
				{
					id: 3,
					title: 'GitHub',
					details: 'https://github.com/TheRealObamacare/SpamEmailClassifier',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Create an effective spam filter that can integrate with Gmail and accurately identify unwanted messages',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['Python', 'TensorFlow', 'NLTK', 'Gmail API', 'OAuth2'],
				},
			],
			ProjectDetailsHeading: 'Project Details',
			ProjectDetails: [
				{
					id: 1,
					details: 'Integrated with Gmail API to securely access email content',
				},
				{
					id: 2,
					details: 'Applied NLP techniques for text preprocessing, including tokenization, stemming, and stop word removal',
				},
				{
					id: 3,
					details: 'Built and trained a neural network model for text classification with over 95% accuracy',
				},
				{
					id: 4,
					details: 'Implemented a simple web interface to view classification results and manage false positives/negatives',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/intent/tweet?text=',
				},
				{
					id: 2,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/',
				},
				{
					id: 3,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com',
				},
			],
		},
		RelatedProject: {
			title: "Related ML Projects",
			Projects: [
				{
					id: 1,
					title: "Backpropagation Algorithm",
					img: NN,
					path: "/projects/backpropagation-algorithm",
					technologies: ['Python', 'NumPy', 'PyTorch', 'Matplotlib']
				},
				{
					id: 2,
					title: "Scikit-Learn Classifier",
					img: data,
					path: "/projects/sklearn-classifier",
					technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib']
				},
				{
					id: 3,
					title: "Neural Network Practice",
					img: naiveBayes,
					path: "/projects/neural-network-practice",
					technologies: ['Python', 'TensorFlow', 'PyTorch', 'WaveNet']
				},
			],
		}
	},
	{
		id: 4,
		title: 'Neural Network Practice',
		category: 'Machine Learning',
		img: NN,
		path: '/projects/neural-network-practice',
		slug: 'neural-network-practice', // Added slug property
		technologies: ['Python', 'TensorFlow', 'PyTorch', 'WaveNet'],
		ProjectHeader: {
			title: 'Neural Network Architectures Comparison',
			publishDate: '',
			tags: 'ML / Deep Learning / Character Prediction',
		},
		ProjectDetails: {
			client: 'Research Project',
			technologies: ['Python', 'TensorFlow', 'PyTorch', 'WaveNet'],
			objective: 'Compare different neural network architectures for character prediction',
			description: 'A comprehensive comparison of neural network architectures including single-layer, multilayer perceptrons, and WaveNets for character-level prediction tasks.',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Neural Network Comparison',
				img: NN,
			},
			{
				id: 2,
				title: 'Architecture Diagram',
				img: backProp,
			},
		],
		ProjectInfo: {
			ClientHeading: 'Project Type',
			CompanyInfo: [
				{
					id: 1,
					title: 'Category',
					details: 'Deep Learning Research',
				},
				{
					id: 2,
					title: 'Field',
					details: 'Natural Language Processing',
				},
				{
					id: 3,
					title: 'GitHub',
					details: 'https://github.com/TheRealObamacare/Neural-Network-Practice',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Implement and compare different neural network architectures for the task of predicting the next character in a sequence',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['Python', 'TensorFlow', 'PyTorch', 'WaveNet', 'LSTM', 'MLP'],
				},
			],
			ProjectDetailsHeading: 'Project Details',
			ProjectDetails: [
				{
					id: 1,
					details: 'Implemented single-layer, multilayer perceptron, and WaveNet architectures from scratch',
				},
				{
					id: 2,
					details: 'Trained models on a large corpus of text to predict the next character in a sequence',
				},
				{
					id: 3,
					details: 'Conducted a detailed comparison of model performance, training time, and memory requirements',
				},
				{
					id: 4,
					details: 'Applied the backpropagation algorithm to understand the learning dynamics of each architecture',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/intent/tweet?text=',
				},
				{
					id: 2,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/',
				},
				{
					id: 3,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com',
				},
			],
		},
		RelatedProject: {
			title: "Related ML Projects",
			Projects: [
				{
					id: 1,
					title: "Backpropagation Algorithm",
					img: NN,
					path: "/projects/backpropagation-algorithm",
					technologies: ['Python', 'NumPy', 'PyTorch', 'Matplotlib']
				},
				{
					id: 2,
					title: "Scikit-Learn Classifier",
					img: data,
					path: "/projects/sklearn-classifier",
					technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib']
				},
				{
					id: 3,
					title: "Spam Email Classifier",
					img: mail,
					path: "/projects/spam-email-classifier",
					technologies: ['Python', 'TensorFlow', 'NLTK', 'Gmail API']
				},
			],
		}
	},
	{
		id: 5,
		title: 'Transformer Architectures',
		category: 'Machine Learning',
		img: transformer,
		path: '/projects/transformer-architectures',
		slug: 'transformer-architectures', // Added slug property
		technologies: ['Python', 'PyTorch', 'Transformers', 'NLP'],
		ProjectHeader: {
			title: 'Transformer Models Implementation',
			publishDate: '',
			tags: 'ML / NLP / Attention Mechanisms',
		},
		ProjectDetails: {
			client: 'Research Project',
			technologies: ['Python', 'PyTorch', 'Transformers', 'NLP'],
			objective: 'Implement and experiment with transformer architecture components',
			description: 'A deep dive into transformer architectures including attention mechanisms, tokenization, and GPT-style models.',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Transformer Architecture',
				img: transformer,
			},
			{
				id: 2,
				title: 'Attention Visualization',
				img: NN,
			},
		],
		ProjectInfo: {
			ClientHeading: 'Project Type',
			CompanyInfo: [
				{
					id: 1,
					title: 'Category',
					details: 'Deep Learning Research',
				},
				{
					id: 2,
					title: 'Field',
					details: 'Natural Language Processing',
				},
				{
					id: 3,
					title: 'GitHub',
					details: 'https://github.com/TheRealObamacare/transformerArchitectures',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Build transformer components from scratch to understand the architecture that powers models like GPT and BERT',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['Python', 'PyTorch', 'Attention Mechanisms', 'Tokenizers', 'Self-Supervised Learning'],
				},
			],
			ProjectDetailsHeading: 'Project Details',
			ProjectDetails: [
				{
					id: 1,
					details: 'Implemented a basic transformer architecture with self-attention mechanisms',
				},
				{
					id: 2,
					details: 'Created a tokenization pipeline for text processing',
				},
				{
					id: 3,
					details: 'Built a simplified GPT-style model for text generation',
				},
				{
					id: 4,
					details: 'Experimented with different attention patterns and positional encoding methods',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/intent/tweet?text=',
				},
				{
					id: 2,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/',
				},
				{
					id: 3,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com',
				},
			],
		},
		RelatedProject: {
			title: "Related ML Projects",
			Projects: [
				{
					id: 1,
					title: "Neural Network Practice",
					img: NN,
					path: "/projects/neural-network-practice",
					technologies: ['Python', 'TensorFlow', 'PyTorch', 'WaveNet']
				},
				{
					id: 2,
					title: "Deep Learning Practice",
					img: deepNNs,
					path: "/projects/deep-learning-practice",
					technologies: ['Python', 'TensorFlow', 'Keras', 'Computer Vision']
				},
				{
					id: 3,
					title: "Backpropagation Algorithm",
					img: backProp,
					path: "/projects/backpropagation-algorithm",
					technologies: ['Python', 'NumPy', 'PyTorch', 'Matplotlib']
				},
			],
		}
	},
	{
		id: 6,
		title: 'Deep Learning Practice',
		category: 'Machine Learning',
		img: deepNNs,
		path: '/projects/deep-learning-practice',
		slug: 'deep-learning-practice', // Added slug property
		technologies: ['Python', 'TensorFlow', 'Keras', 'Computer Vision'],
		ProjectHeader: {
			title: 'Deep Learning with Python',
			publishDate: '',
			tags: 'ML / Deep Learning / TensorFlow',
		},
		ProjectDetails: {
			client: 'Research Project',
			technologies: ['Python', 'TensorFlow', 'Keras', 'Computer Vision'],
			objective: 'Learn deep learning concepts following François Chollet\'s book',
			description: 'A comprehensive implementation of deep learning models and techniques from the book "Deep Learning with Python" by François Chollet.',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Tensor Operations',
				img: deepLearning,
			},
			{
				id: 2,
				title: 'MNIST Classification',
				img: deepNNs,
			},
		],
		ProjectInfo: {
			ClientHeading: 'Project Type',
			CompanyInfo: [
				{
					id: 1,
					title: 'Category',
					details: 'Deep Learning Research',
				},
				{
					id: 2,
					title: 'Field',
					details: 'Computer Vision & Neural Networks',
				},
				{
					id: 3,
					title: 'GitHub',
					details: 'https://github.com/TheRealObamacare/deepLearningPractice',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Work through the exercises and concepts in François Chollet\'s "Deep Learning with Python" to build a strong foundation in deep learning',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['Python', 'TensorFlow', 'Keras', 'CNN', 'MNIST', 'Tensor Operations'],
				},
			],
			ProjectDetailsHeading: 'Project Details',
			ProjectDetails: [
				{
					id: 1,
					details: 'Implemented fundamental tensor operations and manipulations',
				},
				{
					id: 2,
					details: 'Built and trained neural networks for MNIST digit classification',
				},
				{
					id: 3,
					details: 'Explored deep learning concepts including gradient descent, backpropagation, and optimization',
				},
				{
					id: 4,
					details: 'Worked through convolutional neural networks for image recognition tasks',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/intent/tweet?text=',
				},
				{
					id: 2,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/',
				},
				{
					id: 3,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com',
				},
			],
		},
		RelatedProject: {
			title: "Related ML Projects",
			Projects: [
				{
					id: 1,
					title: "Transformer Architectures",
					img: transformer,
					path: "/projects/transformer-architectures",
					technologies: ['Python', 'PyTorch', 'Transformers', 'NLP']
				},
				{
					id: 2,
					title: "Neural Network Practice",
					img: naiveBayes,
					path: "/projects/neural-network-practice",
					technologies: ['Python', 'TensorFlow', 'PyTorch', 'WaveNet']
				},
				{
					id: 3,
					title: "Backpropagation Algorithm",
					img: backProp,
					path: "/projects/backpropagation-algorithm",
					technologies: ['Python', 'NumPy', 'PyTorch', 'Matplotlib']
				},
			],
		}
	}
].map(project => {
  // If project doesn't have a slug, generate one from the title
  if (!project.slug) {
    const titleForSlug = project.ProjectHeader?.title || project.title || `project-${project.id}`;
    return {
      ...project,
      slug: generateSlug(titleForSlug)
    };
  }
  return project;
});

export default projectsData;
