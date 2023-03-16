const SuiteFloorplan = ({ floorplan, title, section }) => {
    return (
        <div className="suites__container--floorplan" data-section={section}>
            <img src={floorplan} alt={title} />
        </div>
    )
}

export default SuiteFloorplan;