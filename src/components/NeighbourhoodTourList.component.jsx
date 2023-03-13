import { useContext } from "react";
import { Context } from "../context/context";
import NeighbourhoodTourItem from "./NeighbourhoodTourItem.component";

const NeighbourhoodTourList = ({ category, isActive }) => {
    const { currentNeighbourhoodTourCategory, setCurrentNeghbourhoodTourCategory, activeNeighbourhoodTourItems } = useContext(Context);

    const classes = ['neighbourhoodTour__list'];
    isActive && classes.push('active');

    const setActive = () => currentNeighbourhoodTourCategory !== category && setCurrentNeghbourhoodTourCategory(category);

    return (
    <div className={classes.join(' ')} data-category={category}>
        <div className="neighbourhoodTour__list--header" onClick={setActive} data-category={category}>
            <p>{category}</p>
        </div>

        <div className="neighbourhoodTour__list--items">
            {isActive && activeNeighbourhoodTourItems.map((item, i) => <NeighbourhoodTourItem key={i} item={item} number={i+1} title={item.title} />)}
        </div>
    </div>);
}

export default NeighbourhoodTourList;