import { useContext } from "react";
import { Context } from "../context/context";
import SuitesActionButton from "./SuitesActionButton.component";
import SuitesFavouritesCard from "./SuitesFavouritesCard.component";

const SuitesFavourites = ({ setCurrentSubsection, isActive }) => {
    const classes = ['suites__favourites'];
    isActive && classes.push('active');

    const { favouriteSuites } = useContext(Context);

    return <div className={classes.join(' ')}>
        <div className="suites__favourites--menu">
            <SuitesActionButton action="email" />
            <SuitesActionButton action="close" callback={() => setCurrentSubsection('suites')} />
        </div>
       
       <div className="suites__favourites--swiper">
            {favouriteSuites.map(suite => {
                return <SuitesFavouritesCard suite={suite} />
            })}
       </div>
    </div>
}

export default SuitesFavourites;