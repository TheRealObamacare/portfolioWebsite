import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import UseScrollToTop from './hooks/useScrollToTop';
import { ProjectsProvider } from './context/ProjectsContext';
import { SingleProjectProvider } from './context/SingleProjectContext';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectSingle from './pages/ProjectSingle';
// ...other imports

function App() {
	// ...existing code

	useEffect(() => {
		// Debug routing
		console.log("App initialized with routes: /project/:slug and /projects");
	}, []);

	return (
		<ProjectsProvider>
			<SingleProjectProvider>
				{/* Make sure it's Router, not BrowserRouter in the JSX */}
				<Router basename="">
					<ScrollToTop />
					<AppHeader />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/project/:slug" element={<ProjectSingle />} />
						{/* Add a catch-all route for debugging */}
						<Route path="*" element={
							<div className="container mx-auto mt-10 text-center">
								<h2>Page not found</h2>
								<p>URL: {window.location.href}</p>
								<p>Path: {window.location.pathname}</p>
							</div>
						} />
					</Routes>
					<AppFooter />
				</Router>
			</SingleProjectProvider>
		</ProjectsProvider>
	);
}

export default App;