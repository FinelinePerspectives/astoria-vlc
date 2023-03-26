import SuitesActionButton from '../components/SuitesActionButton.component';
import { useState } from 'react';

const PropertyTourSeasonalSunlight = ({ isActive }) => {
    const [currentDirection, setCurrentDirection] = useState('north');
    const [currentSeason, setCurrentSeason] = useState('spring');

    const classes = ['propertyTour__section'];
    isActive && classes.push('active');

    return (
        <div className={classes.join(' ')} data-section="seasonalsunlight">
            <p>{currentDirection} {currentSeason}</p>

            <div className="propertyTour__seasonalSunlight--menu" data-menu="directions">
                <SuitesActionButton action="north" callback={() => setCurrentDirection('north')} isActive={currentDirection === 'north'} />
                <SuitesActionButton action="east" callback={() => setCurrentDirection('east')} isActive={currentDirection === 'east'} />
                <SuitesActionButton action="south" callback={() => setCurrentDirection('south')} isActive={currentDirection === 'south'} />
                <SuitesActionButton action="west" callback={() => setCurrentDirection('west')} isActive={currentDirection === 'west'} />
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