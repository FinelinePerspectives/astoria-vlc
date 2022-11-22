import { useEffect, useState } from 'react';
import { initUserSettings } from './data/initUserSettings';

// Components
import Nav from './components/Nav.component';

// Pages
import HomePage from './pages/Home.page';
import SuitesPage from './pages/Suites.page';
import PropertyTourPage from './pages/PropertyTour.page';
import NeighbourhoodTourPage from './pages/NeighbourhoodTour.page';
import GalleryPage from './pages/Gallery.page';

import './sass/main.scss';

function App() {
  const [userSettings, setUserSettings] = useState(initUserSettings);
  const [currentSection, setCurrentSection] = useState('gallery');

  useEffect(() => {
    console.log('App render');
  }, [])

  return (
    <div className="App">
      <div className="container">
          <div className="content">
            {currentSection === 'home' && <HomePage 
              userSettings={userSettings}
              setUserSettings={setUserSettings}
              setCurrentSection={setCurrentSection}
            />}
            {currentSection === 'suites' && <SuitesPage userSettings={userSettings} setUserSettings={setUserSettings} />}
            {currentSection === 'propertyTour' && <PropertyTourPage />}
            {currentSection === 'neighbourhoodTour' && <NeighbourhoodTourPage />}
            {currentSection === 'gallery' && <GalleryPage />}
          </div>

          <Nav setUserSettings={setUserSettings} currentSection={currentSection} setCurrentSection={setCurrentSection} />
      </div>
    </div>
  );
}

export default App;
