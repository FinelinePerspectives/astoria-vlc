import { useState } from 'react';
import Button from '../components/Button.component';

import PropertyTourOrbit from '../components/PropertyTourOrbit.component';
import PropertyTourSeasonalSunlight from '../components/PropertyTourSeasonalSunlight.component';

const PropertyTour = () => {
    const [currentSubsection, setCurrentSubsection] = useState('seasonalsunlight');

    return (
        <section className="propertyTour">
            <div className="propertyTour__sectionMenu--wrapper">
                <div className="propertyTour__sectionMenu">
                    <Button type="section" copy="Property Orbit" callback={() => setCurrentSubsection('orbit')} isActive={currentSubsection === 'orbit'} />
                    <Button type="section" copy="Seasonal Sunlight" callback={() => setCurrentSubsection('seasonalsunlight')} isActive={currentSubsection === 'seasonalsunlight'} />
                </div>
            </div>
          <PropertyTourOrbit isActive={currentSubsection === 'orbit'} />
          <PropertyTourSeasonalSunlight isActive={currentSubsection === 'seasonalsunlight'} />
        </section>
    )
}

export default PropertyTour;