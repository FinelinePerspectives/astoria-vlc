const NeighbourhoodTourOrbit = ({ isActive }) => {
    const classes = ['neighbourhoodTour__section'];
    isActive && classes.push('active');

    return (<div className={classes.join(' ')} data-section="orbit">
        orbit
    </div>)
}

export default NeighbourhoodTourOrbit;