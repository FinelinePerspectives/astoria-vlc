import { useContext } from "react";
import { Context } from "../context/context";

const NeighbourhoodTourItem = ({ item, number, title }) => {
    const { setActiveMapItem } = useContext(Context);
    
    return (
    <div className="neighbourhoodTour__item" onClick={() => setActiveMapItem(item)}>
        <div className="neighbourhoodTour__item--number">
            <p>{number}</p>
        </div>

        <div className="neighbourhoodTour__item--title">
            <p>{title}</p>
        </div>
    </div>);
}

export default NeighbourhoodTourItem;