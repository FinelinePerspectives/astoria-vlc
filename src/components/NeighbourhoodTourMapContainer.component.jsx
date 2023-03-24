import NeighbourhoodTourMap from "./NeighbourhoodTourMap.component.";
import NeighbourhoodTourMenu from "./NeighbourhoodTourMenu.component";

const NeighbourhoodTourMapContainer = ({ isActive }) => {
    const classes = ['neighbourhoodTour__section'];
    isActive && classes.push('active');

    return (<div className={classes.join(' ')} data-section="map">
        <NeighbourhoodTourMap />
        <NeighbourhoodTourMenu />
    </div>)
}

export default NeighbourhoodTourMapContainer;