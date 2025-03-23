import { Link } from 'react-router-dom';
// Using an existing image from the project instead of about-image.jpg
import backPropImage from '../../images/backProp.jpg'; // Use an image we know exists

const AboutSection = () => {
  return (
    <section className="py-8 sm:py-10 mt-8 sm:mt-16">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          About Me
        </p>
      </div>

      <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          {/* Use the existing image or render a placeholder */}
          <div className="rounded-lg w-full bg-secondary-light dark:bg-ternary-dark h-72 overflow-hidden">
            <img
              src={backPropImage}
              className="rounded-lg w-full h-full object-cover"
              alt="About Me"
              onError={(e) => {
                // If image fails to load, replace with a placeholder div
                const placeholder = document.createElement('div');
                placeholder.className = 'w-full h-full flex items-center justify-center bg-secondary-light dark:bg-ternary-dark text-ternary-dark dark:text-ternary-light';
                placeholder.textContent = 'About Image';
                e.target.parentNode.replaceChild(placeholder, e.target);
              }}
            />
          </div>
        </div>

        <div className="w-full sm:w-3/4 text-left">
          <p className="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light">
            I'm a machine learning engineer passionate about developing intelligent systems that can learn and adapt over time.
          </p>
          <p className="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light">
            With expertise in deep learning, natural language processing, and computer vision, I build solutions that extract meaningful insights from complex data.
          </p>

          <div className="mt-8">
            <Link
              to="/about"
              className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
              aria-label="More About Me"
            >
              More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
