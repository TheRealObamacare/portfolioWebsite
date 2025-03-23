import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectSingle from './pages/ProjectSingle';

const AppRouter = () => {
  console.log('AppRouter rendering with routes:');
  
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* Make sure ID parameter is defined correctly */}
        <Route path="/projects/:id" element={<ProjectSingle />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
