import { Fragment, useMemo, useState, useContext } from "react";
import { Context } from '../context/context';
import Map from "../components/Map.component";
import NeighbourhoodTourMenu from "../components/NeighbourhoodTourMenu.component";

const NeighbourhoodTour = () => {
    const { currentNeighbourhoodTourCategory, setCurrentNeghbourhoodTourCategory } = useContext(Context);

    return (
        <section className="neighbourhoodTour">
            <Map />
            <NeighbourhoodTourMenu />
        </section>
    )
}

export default NeighbourhoodTour;