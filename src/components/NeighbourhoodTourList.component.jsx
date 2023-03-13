import { useContext } from "react";
import { Context } from "../context/context";


const NeighbourhoodTourList = ({ category, isActive }) => {
    const { currentNeighbourhoodTourCategory, setCurrentNeghbourhoodTourCategory } = useContext(Context);

    const classes = ['neighbourhoodTour__list'];
    isActive && classes.push('active');

    const setActive = () => currentNeighbourhoodTourCategory !== category && setCurrentNeghbourhoodTourCategory(category);

    return (
    <div className={classes.join(' ')} data-category={category}>
        <div className="neighbourhoodTour__list--header" onClick={setActive} data-category={category}>
            <p>{category}</p>
        </div>

        <div className="neighbourhoodTour__list--items">
            <div className="neighbourhoodTour__item">
                <div className="neighbourhoodTour__item--number">1</div>
                <div className="neighbourhoodTour__item--title">Item 1</div>
            </div>
            <div className="neighbourhoodTour__item">
                <div className="neighbourhoodTour__item--number">1</div>
                <div className="neighbourhoodTour__item--title">Item 1</div>
            </div>
            <div className="neighbourhoodTour__item">
                <div className="neighbourhoodTour__item--number">1</div>
                <div className="neighbourhoodTour__item--title">Item 1</div>
            </div>
        </div>
    </div>);
}

export default NeighbourhoodTourList;