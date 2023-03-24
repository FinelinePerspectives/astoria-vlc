import { useContext, useState} from "react";
import { Context } from '../context/context';

import NeighbourhoodTourOrbit from "../components/NeighbourhoodTourOrbit.component";
import NeighbourhoodTourMapContainer from "../components/NeighbourhoodTourMapContainer.component";
import SuitesActionButton from "../components/SuitesActionButton.component";

const NeighbourhoodTour = () => {
    const [currentSubsection, setCurrentSubsection] = useState('map');

    const {
        currentNeighbourhoodTourCategory,
     } = useContext(Context);

    return (
        <section className="neighbourhoodTour" data-category={currentNeighbourhoodTourCategory}>
            <div className="neighbourhoodTour__sectionMenu">
                <SuitesActionButton action="map" callback={() => setCurrentSubsection('map')} isActive={currentSubsection === 'map'} />
                <SuitesActionButton action="orbit" callback={() => setCurrentSubsection('orbit')} isActive={currentSubsection === 'orbit'} />
            </div>

            <NeighbourhoodTourMapContainer isActive={currentSubsection === 'map'} />
           <NeighbourhoodTourOrbit isActive={currentSubsection === 'orbit'} />
        </section>
    )
}

export default NeighbourhoodTour;