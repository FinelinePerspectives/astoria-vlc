import SuiteFloorplan from "./SuiteFloorplan.component";
import SuiteInfo from "./SuiteInfo.component";

const SuitesFavouritesCard = ({ suite }) => {
    const { title, type, sqft, description, section, floorplan } = suite;

    return (<div className="suites__favourites--card">
        <SuiteInfo title={title} type={type} sqft={sqft} description={description} section={section}  />
        <div className="suites__favourites--floorplan">
            <img src={`https://finelineperspectives.dev/astoria/floorplans/${floorplan}`} alt={title} />
        </div>
    </div>)
}

export default SuitesFavouritesCard;