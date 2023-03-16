const SuiteInfo = ({ title, type, sqft, description, section }) => {
    return (
        <div className="suiteInfo" data-section={section}>
           {title && <p className="suiteInfo__title">{title}</p>}
            {type && <h2 className="suiteInfo__type">{type}</h2>}
            {sqft && <p className="suiteInfo__sqft">{sqft} Sq. Ft.</p>}
            {description && <span className="suiteInfo__description">{description}</span>}
        </div>
    )
}

export default SuiteInfo;