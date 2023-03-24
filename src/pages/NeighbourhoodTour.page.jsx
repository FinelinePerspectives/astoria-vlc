import { useContext, useState} from "react";
import { Context } from '../context/context';

import NeighbourhoodTourGoogleOrbit from "../components/NeighbourhoodTourGoogleOrbit.component";
import NeighbourhoodTourMapContainer from "../components/NeighbourhoodTourMapContainer.component";
import SuitesActionButton from "../components/SuitesActionButton.component";

const NeighbourhoodTour = () => {
    const [currentSubsection, setCurrentSubsection] = useState('map');

    const {
        currentNeighbourhoodTourCategory,
     } = useContext(Context);

    return (
        <section className="neighbourhoodTour" data-category={currentNeighbourhoodTourCategory}>
            <div className="neighbourhoodTour__sectionMenu--wrapper">
                <SuitesActionButton action="map" callback={() => setCurrentSubsection('map')} isActive={currentSubsection === 'map'} />
                <SuitesActionButton action="orbit" callback={() => setCurrentSubsection('googleorbit')} isActive={currentSubsection === 'googleorbit'} />
            </div>

            <NeighbourhoodTourMapContainer isActive={currentSubsection === 'map'} />
           <NeighbourhoodTourGoogleOrbit isActive={currentSubsection === 'googleorbit'} />
        </section>
    )
}

export default NeighbourhoodTour;