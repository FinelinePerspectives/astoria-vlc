import SuitesActionButton from '../components/SuitesActionButton.component';
import { useState, useEffect } from 'react';

import { sunStudies } from '../data/sunStudies';
import PropertyTourSeasonalSunlightImage from './PropertyTourSeasonalSunlightImage.component';

const PropertyTourSeasonalSunlight = ({ isActive }) => {
    const [currentDirection, setCurrentDirection] = useState('north');
    const [currentSeason, setCurrentSeason] = useState('spring');

    const [currentImage, setCurrentImage] = useState('00001');
    const [currentSunStudy, setCurrentSunStudy] = useState(null);

    const classes = ['propertyTour__section'];
    isActive && classes.push('active');

    const pad = (num, size) => {
        var s = "00000" + num;
        return s.substring(s.length-size);
    }

    const handleRangeChange = (e) => {
            const val = pad(e.target.value, 5);
            setCurrentImage(val);
    }

    const handleSunStudyChange = () => {
        const cur = sunStudies.find(s => s.key  === `${currentDirection}${currentSeason}`);
        setCurrentSunStudy(cur);
    }

    const resetIndex = () => setCurrentImage('00001');

    useEffect(() => {
        handleSunStudyChange();
        window.addEventListener('load', () => console.log('done'))
    }, []);

    useEffect(() => {
        resetIndex();
        setCurrentSunStudy();
        handleSunStudyChange();
    }, [currentDirection]);

    useEffect(() => {
        resetIndex();
        handleSunStudyChange();
    }, [currentSeason]);


    return (
        <div className={classes.join(' ')} data-section="seasonalsunlight">
            <PropertyTourSeasonalSunlightImage sunStudy={currentSunStudy} currentImage={currentImage} />


            <div className="propertyTour__seasonalSunlight--menu" data-menu="directions">
                <SuitesActionButton action="north" callback={() => setCurrentDirection('north')} isActive={currentDirection === 'north'} />
                <SuitesActionButton action="east" callback={() => setCurrentDirection('east')} isActive={currentDirection === 'east'} />
                <SuitesActionButton action="south" callback={() => setCurrentDirection('south')} isActive={currentDirection === 'south'} />
                <SuitesActionButton action="west" callback={() => setCurrentDirection('west')} isActive={currentDirection === 'west'} />
            </div>

            <div className="propertyTour__control">
                <input step="1" type="range" min={1} max={100} onChange={(e) => handleRangeChange(e)} value={currentImage} />
            </div>

            <div className="propertyTour__seasonalSunlight--menu" data-menu="seasons">
                <SuitesActionButton action="spring" callback={() => setCurrentSeason('spring')} isActive={currentSeason === 'spring'}/>
                <SuitesActionButton action="summer" callback={() => setCurrentSeason('summer')} isActive={currentSeason === 'summer'}/>
                <SuitesActionButton action="fall" callback={() => setCurrentSeason('fall')} isActive={currentSeason === 'fall'}/>
                <SuitesActionButton action="winter" callback={() => setCurrentSeason('winter')} isActive={currentSeason === 'winter'}/>
            </div>
        </div>
    )
}

export default PropertyTourSeasonalSunlight;