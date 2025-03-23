import { Link } from 'react-router-dom';
import { FiMail, FiPhone } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section className="py-8 sm:py-10 mt-8 sm:mt-16">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Get In Touch
        </p>
      </div>

      <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full sm:w-2/3 text-left flex flex-col items-center">
          <p className="font-general-regular text-lg mb-6 text-center text-ternary-dark dark:text-ternary-light">
            Have a project in mind? Need help with machine learning or AI? Feel free to contact me.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full mb-8">
            <div className="flex items-center rounded-lg bg-secondary-light dark:bg-ternary-dark p-4">
              <FiMail className="text-2xl mr-3 text-indigo-600" />
              <span className="text-ternary-dark dark:text-ternary-light">youremail@example.com</span>
            </div>
            
            <div className="flex items-center rounded-lg bg-secondary-light dark:bg-ternary-dark p-4">
              <FiPhone className="text-2xl mr-3 text-indigo-600" />
              <span className="text-ternary-dark dark:text-ternary-light">(123) 456-7890</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            aria-label="Contact Me"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
