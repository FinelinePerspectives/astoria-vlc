import { useContext } from "react";
import { Context } from '../context/context';

import NeighbourhoodTourMap from "../components/NeighbourhoodTourMap.component.";
import NeighbourhoodTourMenu from "../components/NeighbourhoodTourMenu.component";

const NeighbourhoodTour = () => {
    const {
        currentNeighbourhoodTourCategory,
     } = useContext(Context);

    return (
        <section className="neighbourhoodTour" data-category={currentNeighbourhoodTourCategory}> 
            <NeighbourhoodTourMap />
            <NeighbourhoodTourMenu />
        </section>
    )
}

export default NeighbourhoodTour;