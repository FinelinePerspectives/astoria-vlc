import { useContext } from "react";
import { Context } from "../context/context";
import NeighbourhoodTourList from "./NeighbourhoodTourList.component";

const NeighbourhoodTourMenu = () => {
    const { currentNeighbourhoodTourCategory, setCurrentNeghbourhoodTourCategory } = useContext(Context);

    return (
        <div className="neighbourhoodTour__menu">
            <NeighbourhoodTourList category="restauraunts" isActive={currentNeighbourhoodTourCategory === 'restauraunts'} />
            <NeighbourhoodTourList category="shopping" isActive={currentNeighbourhoodTourCategory === 'shopping'} />
            <NeighbourhoodTourList category="transit" isActive={currentNeighbourhoodTourCategory === 'transit'} />
        </div>
    )
}

export default NeighbourhoodTourMenu;