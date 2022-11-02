import { useEffect, useState } from 'react';
import initUserSettings from './data/initUserSettings';

import HomePage from './pages/Home.page';

import './sass/main.scss';

function App() {
  const [slide, setSlide] = useState(1);
  const [userSettings, setUserSettings] = useState(initUserSettings);

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
        <HomePage slide={slide} userSettings={userSettings} setUserSettings={setUserSettings} />
      </div>
    </div>
  );
}

export default App;
