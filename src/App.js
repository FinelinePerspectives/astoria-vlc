import { useEffect, useState } from 'react';
import initUserSettings from './data/initUserSettings';

// Components
import Nav from './components/Nav.component';

// Pages
import HomePage from './pages/Home.page';
import SuitesPage from './pages/Suites.page';

import './sass/main.scss';

function App() {
  const [slide, setSlide] = useState(1);
  const [userSettings, setUserSettings] = useState(initUserSettings);
  const [userSettingsReceived, setUserSettingsReceived] = useState(false);

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
            {!userSettingsReceived ? (
          <HomePage 
            slide={slide} 
            userSettings={userSettings}
            setUserSettings={setUserSettings}
            setUserSettingsReceived={setUserSettingsReceived}
          />) : (
            <SuitesPage />
          )}
        </div>
          <Nav />
      </div>
    </div>
  );
}

export default App;
