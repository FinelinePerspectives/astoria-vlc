const SuiteContainer = ({ suite, isActive }) => {
    const classes = ['suites__container'];
    isActive && classes.push('active');

    const { title, type, sqft, description, floorplan, keyplans } = suite;

    return (
        <div className={classes.join(' ')}>
            <div className="suites__container--info">
                <p className="suites__container--title">{title}</p>
                <h2 className="suites__container--type">{type}</h2>
                <p className="suites__container--sqft">{sqft} Sq. Ft.</p>
                <span className="suites__container--description">{description}</span>
            </div>

            <div className="suites__container--floorplan">
                <img src={floorplan} alt={title} />
            </div>

            <div className="suites__container--keyplans">
                {keyplans.map((keyplan, i) => <div className="suites__container--keyplan" key={i}>
                    <img src={keyplan} alt="keyplan" />
                </div>)}
            </div>
    </div>
    )
}

export default SuiteContainer;