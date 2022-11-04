import { useEffect, useState } from 'react';
import initUserSettings from './data/initUserSettings';

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
  const [slide, setSlide] = useState(1);
  const [userSettings, setUserSettings] = useState(initUserSettings);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    initSlideChange();
  }, [slide])

  const initSlideChange = () => {
    window.setTimeout(() => {
      slide !== 4 ? setSlide(slide + 1) : setSlide(1);
    }, 2500)
  }

  return (
    <div className="App">
      <div className="container">
          <div className="content">
            {currentSection === 'home' && <HomePage 
              slide={slide} 
              userSettings={userSettings}
              setUserSettings={setUserSettings}
              setCurrentSection={setCurrentSection}
            />}
            {currentSection === 'suites' && <SuitesPage />}
            {currentSection === 'propertyTour' && <PropertyTourPage />}
            {currentSection === 'neighbourhoodTour' && <NeighbourhoodTourPage />}
            {currentSection === 'gallery' && <GalleryPage />}
          </div>
            <Nav setCurrentSection={setCurrentSection} />
      </div>
    </div>
  );
}

export default App;
