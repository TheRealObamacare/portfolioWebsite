import { useState, createContext, useEffect } from 'react';
import projectsData from '../data/projects';

// Create context
export const SingleProjectContext = createContext();

// Create context provider
export const SingleProjectProvider = ({ children }) => {
  // Initialize with an empty array
  const [singleProjectData, setSingleProjectData] = useState([]);
  
  // Ensure data is loaded
  useEffect(() => {
    console.log("Loading project data in context");
    // Verify projectsData exists and is an array before setting state
    if (Array.isArray(projectsData) && projectsData.length > 0) {
      console.log(`Loaded ${projectsData.length} projects with slugs:`, 
        projectsData.map(p => p.slug).join(', '));
      setSingleProjectData(projectsData);
    } else {
      console.error("Project data is not available or not an array");
    }
  }, []);

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
