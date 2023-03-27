import EmailFloorplanPopup from "./EmailFloorplanPopup.component";
import SuitesActionButton from "./SuitesActionButton.component";

import { useContext, useState } from "react";
import { Context } from "../context/context";
import SuiteInfo from "./SuiteInfo.component";
import SuiteFloorplan from "./SuiteFloorplan.component";
import VrTourPopup from "./VrTourPopup.component";
import VrTourButton from "./VrTourButton.component";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const SuiteContainer = ({ setCurrentSubsection, suite, isActive }) => {
    const classes = ['suites__container'];
    isActive && classes.push('active');

    const { title, type, sqft, description, floorplan, keyplan, pdf, vrTour } = suite;

    const { toggleFavourite, favouriteSuites } = useContext(Context);

    const [emailFloorplanActive, setEmailFloorplanActive] = useState(false);
    const [vrTourActive, setVrTourActive] = useState(false);

    const suiteIsFav = favouriteSuites.find(s => s.id === suite.id) ? true : false;
    
    return (
        <div className={classes.join(' ')}>
            <SuiteInfo section="suites" title={title} type={type} sqft={sqft} description={description} />
            
            <div className="suites__actions">
                <SuitesActionButton action="email" isActive={emailFloorplanActive} callback={() => setEmailFloorplanActive(true)} />
                <SuitesActionButton isActive={suiteIsFav} action="favourite" callback={() => toggleFavourite(suite)} />
                {pdf && <SuitesActionButton action="print" link={`https://finelineperspectives.dev/astoria/pdf/${pdf}`} />}
                <SuitesActionButton action="compare" callback={() => setCurrentSubsection('favourites')} disable={favouriteSuites.length <= 1} />
                <VrTourButton vrTour={vrTour} isActive={vrTourActive} callback={() => setVrTourActive(true)} />
            </div>

            <SuiteFloorplan floorplan={`https://finelineperspectives.dev/astoria/floorplans/${floorplan}`} title={title} section="suites" />

            <Popup open={emailFloorplanActive} modal nested onClose={() => setEmailFloorplanActive(false)}>
                {close => (<EmailFloorplanPopup section="floorplan" title="Email Floorplan" vrTour={vrTour} pdf={pdf} close={close} />)}
            </Popup>

            <Popup open={vrTourActive} modal nested onClose={() => setVrTourActive(false)}>
                {close => (<VrTourPopup title={title} vrTour={vrTour} close={close} />)}
            </Popup>

            <div className="suites__container--keyplan">
                <img src={`https://finelineperspectives.dev/astoria/keyplans/${keyplan}`} alt="keyplan" />
            </div>
    </div>
    )
}

export default SuiteContainer;