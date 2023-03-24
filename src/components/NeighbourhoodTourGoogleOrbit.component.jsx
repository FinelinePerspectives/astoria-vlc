const NeighbourhoodTourGoogleOrbit = ({ isActive }) => {
    const classes = ['neighbourhoodTour__section'];
    isActive && classes.push('active');

    return (<div className={classes.join(' ')} data-section="googleorbit">
        google orbit
    </div>)
}

export default NeighbourhoodTourGoogleOrbit;