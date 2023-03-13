import { useContext } from "react";
import { Context } from "../context/context";
import NeighbourhoodTourList from "./NeighbourhoodTourList.component";

const NeighbourhoodTourMenu = () => {
    const { currentNeighbourhoodTourCategory, setCurrentNeghbourhoodTourCategory } = useContext(Context);

    return (
        <div className="neighbourhoodTour__menu">
            <NeighbourhoodTourList category="Restaurants & Cafes" isActive={currentNeighbourhoodTourCategory === 'Restaurants & Cafes'} />
            <NeighbourhoodTourList category="Lifestyle" isActive={currentNeighbourhoodTourCategory === 'Lifestyle'} />
            <NeighbourhoodTourList category="Shopping" isActive={currentNeighbourhoodTourCategory === 'Shopping'} />
            <NeighbourhoodTourList category="Parks & Trails" isActive={currentNeighbourhoodTourCategory === 'Parks & Trails'} />
            <NeighbourhoodTourList category="Transit" isActive={currentNeighbourhoodTourCategory === 'Transit'} />
        </div>
    )
}

export default NeighbourhoodTourMenu;