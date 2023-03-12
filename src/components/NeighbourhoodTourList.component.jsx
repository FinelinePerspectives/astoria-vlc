import { useContext } from "react";
import { Context } from "../context/context";


const NeighbourhoodTourList = ({ category, isActive }) => {
    const { currentNeighbourhoodTourCategory, setCurrentNeghbourhoodTourCategory } = useContext(Context);

    const classes = ['neighbourhoodTour__list'];
    isActive && classes.push('active');

    const setActive = () => currentNeighbourhoodTourCategory !== category && setCurrentNeghbourhoodTourCategory(category);

    return (
    <div className={classes.join(' ')}>
        <div className="neighbourhoodTour__list--header" onClick={setActive}>
            <p>{category}</p>
        </div>

        <ul className="neighbourhoodTour__list--items">
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
        </ul>
    </div>);
}

export default NeighbourhoodTourList;