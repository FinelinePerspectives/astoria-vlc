import { useContext, useEffect, useState } from 'react';

// Context
import AppContext from './context/context';

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
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    console.log('App render');
  }, []);

  return (
    <AppContext>
      <div className="App">
        <div className="container">
            <div className="content">
              {currentSection === 'home' && <HomePage 
                setCurrentSection={setCurrentSection}
              />}
              {currentSection === 'suites' && <SuitesPage/>}
              {currentSection === 'propertyTour' && <PropertyTourPage />}
              {currentSection === 'neighbourhoodTour' && <NeighbourhoodTourPage />}
              {currentSection === 'gallery' && <GalleryPage />}
            </div>

            <Nav currentSection={currentSection} setCurrentSection={setCurrentSection} />
        </div>
      </div>
    </AppContext>
  );
}

export default App;
