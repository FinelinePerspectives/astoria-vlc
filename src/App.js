import { useEffect, useState } from 'react';

import Home from './components/Home.component';

import './sass/main.scss';

function App() {
  const [slide, setSlide] = useState(1);

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
        <Home slide={slide} />
      </div>
    </div>
  );
}

export default App;
