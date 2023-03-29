const PropertyTourOrbit = ({ isActive }) => {
    const classes = ['propertyTour__section'];
    isActive && classes.push('active');

    return (
        <div className={classes.join(' ')} data-section="orbit">
            <iframe src="https://finelineperspectives.dev/astoria/orbit/2210_Orbit_resize.html" frameBorder="0"></iframe>
        </div>
    )
}

export default PropertyTourOrbit;