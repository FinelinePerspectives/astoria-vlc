const PropertyTourOrbit = ({ isActive }) => {
    const classes = ['propertyTour__section'];
    isActive && classes.push('active');

    return (
        <div className={classes.join(' ')} data-section="orbit">
            orbit
        </div>
    )
}

export default PropertyTourOrbit;