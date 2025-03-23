import React from 'react';
import NN from '../images/nn.jpg';
import backProp from '../images/backProp.jpg';
import data from '../images/mobile-project-1.jpg';
import mail from '../images/email.png';
import naiveBayes from '../images/naiveBayes.png';
import sklearn from '../images/sklearn.png';
import deepNNs from '../images/deepLearning.png';
import deepLearning from '../images/deep-learning-with-python.jpg';
import transformer from '../images/transformer.png';

const ImageDebug = () => {
  const images = [
    { name: 'NN', src: NN },
    { name: 'backProp', src: backProp },
    { name: 'data', src: data },
    { name: 'mail', src: mail },
    { name: 'naiveBayes', src: naiveBayes },
    { name: 'sklearn', src: sklearn },
    { name: 'deepNNs', src: deepNNs },
    { name: 'deepLearning', src: deepLearning },
    { name: 'transformer', src: transformer },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Image Debug</h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, index) => (
          <div key={index} className="border p-2">
            <p className="mb-2">{img.name}</p>
            <img 
              src={img.src} 
              alt={img.name} 
              className="h-40 object-contain"
              onError={() => console.error(`Failed to load: ${img.name}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDebug;