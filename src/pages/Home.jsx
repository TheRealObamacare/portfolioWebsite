import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import LatestProjects from '../components/Home/LatestProjects';

const Home = () => {
  return (
    <div className="container mx-auto">
      <AppBanner />
      <LatestProjects />
      {/* Removed the manual project mapping since LatestProjects should handle this */}
    </div>
  );
};

export default Home;