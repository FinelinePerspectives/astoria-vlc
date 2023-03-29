const PropertyTourSeasonalSunlightImage = ({ sunStudy, isActive, currentImage }) => {
    const wrapperClasses = ['propertyTour__seasonalSunlight--imageWrapper'];
    // isActive && wrapperClasses.push('active');

    return (
        <div className={wrapperClasses.join(' ')}>
            {sunStudy && sunStudy.items.map((item, i) => {
                const classes = ['propertyTour__seasonalSunlight--image'];
                item.key === currentImage && classes.push('active');
                return <img key={i} className={classes.join(' ')} src={item.url} alt="" />
            })}
        </div>
    )
}

export default PropertyTourSeasonalSunlightImage;