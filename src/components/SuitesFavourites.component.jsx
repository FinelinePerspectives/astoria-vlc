import { useContext, useState } from "react";
import { Context } from "../context/context";
import SuitesActionButton from "./SuitesActionButton.component";
import SuitesFavouritesCard from "./SuitesFavouritesCard.component";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EmailFloorplanPopup from "./EmailFloorplanPopup.component";


const SuitesFavourites = ({ setCurrentSubsection, isActive }) => {
    const [emailFloorplanActive, setEmailFloorplanActive] = useState(false);

    const classes = ['suites__favourites'];
    isActive && classes.push('active');

    const { favouriteSuites } = useContext(Context);

    return <div className={classes.join(' ')}>
        <div className="suites__favourites--menu">
            <SuitesActionButton action="email" callback={() => setEmailFloorplanActive(true)} />
            <SuitesActionButton action="close" callback={() => setCurrentSubsection('suites')} />
        </div>
       
       <div className="suites__favourites--swiper">
            {favouriteSuites.map(suite => {
                return <SuitesFavouritesCard suite={suite} />
            })}
       </div>

       <Popup open={emailFloorplanActive} modal nested onClose={() => setEmailFloorplanActive(false)}>
            {close => (<EmailFloorplanPopup title="Email Favourites" section="favourites" close={close} />)}
        </Popup>
    </div>
}

export default SuitesFavourites;