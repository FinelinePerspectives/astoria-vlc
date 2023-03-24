const PropertyTourSeasonalSunlight = ({ isActive }) => {
    const classes = ['propertyTour__section'];
    isActive && classes.push('active');

    return (
        <div className={classes.join(' ')} data-section="seasonalsunlight">
            seasonal sunlight
        </div>
    )
}

export default PropertyTourSeasonalSunlight;