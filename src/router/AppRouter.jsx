import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import AppFooter from '../components/shared/AppFooter';
import AppHeader from '../components/shared/AppHeader';
import UseScrollToTop from '../hooks/useScrollToTop';

// Lazy load components
const About = lazy(() => import('../pages/AboutMe'));
const Contact = lazy(() => import('../pages/Contact.jsx'));
const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));
const ProjectSingle = lazy(() => import('../pages/ProjectSingle.jsx'));

const AppRouter = () => {
  return (
    <AnimatePresence>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router>
          <ScrollToTop />
          <AppHeader />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/projects/:projectPath"
                element={
                  <SingleProjectProvider>
                    <ProjectSingle />
                  </SingleProjectProvider>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch-all route for 404 pages */}
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </Suspense>
          <AppFooter />
          <UseScrollToTop />
        </Router>
      </div>
    </AnimatePresence>
  );
};

export default AppRouter; 