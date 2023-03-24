import { useState } from 'react';
import Button from '../components/Button.component';

import PropertyTourOrbit from '../components/PropertyTourOrbit.component';
import PropertyTourSeasonalSunlight from '../components/PropertyTourSeasonalSunlight.component';
import SuitesActionButton from '../components/SuitesActionButton.component';

const PropertyTour = () => {
    const [currentSubsection, setCurrentSubsection] = useState('orbit');

    return (
        <section className="propertyTour">
            <div className="propertyTour__sectionMenu--wrapper">
                <div className="propertyTour__sectionMenu">
                    <Button copy="Property Orbit" callback={() => setCurrentSubsection('orbit')}/>
                    <Button copy="Seasonal Sunlight" callback={() => setCurrentSubsection('seasonalsunlight')}/>
                </div>
            </div>
          <PropertyTourOrbit isActive={currentSubsection === 'orbit'} />
          <PropertyTourSeasonalSunlight isActive={currentSubsection === 'seasonalsunlight'} />
        </section>
    )
}

export default PropertyTour;