import EmailFloorplanPopup from "./EmailFloorplanPopup.component";
import SuitesActionButton from "./SuitesActionButton.component";

import { useContext, useState } from "react";
import { Context } from "../context/context";
import SuiteInfo from "./SuiteInfo.component";
import SuiteFloorplan from "./SuiteFloorplan.component";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const SuiteContainer = ({ setCurrentSubsection, suite, isActive }) => {
    const classes = ['suites__container'];
    isActive && classes.push('active');

    const { title, type, sqft, description, floorplan, keyplans, pdf, vrTour } = suite;

    const { toggleFavourite, favouriteSuites } = useContext(Context);

    const [emailFloorplanActive, setEmailFloorplanActive] = useState(false);
    const [vrTourActive, setVrTourActive] = useState(false);

    const suiteIsFav = favouriteSuites.find(s => s.id === suite.id) ? true : false;

    const VrTourPopup = ({ close }) => {
        return (<div className="suites__popup" data-popup="vr">
            <SuitesActionButton action="close" callback={() => close()} />
            <iframe src={vrTour} frameBorder="0" title={title}></iframe>
        </div>);
    }

    const renderVrTourButton = () => {
        if (vrTour !== null && vrTour !== '') {
            return <SuitesActionButton action="virtualtour" isActive={vrTourActive} callback={() => setVrTourActive(true)} />
        }
    }
    
    return (
        <div className={classes.join(' ')}>
            <SuiteInfo section="suites" title={title} type={type} sqft={sqft} description={description} />
            
            <div className="suites__actions">
                <SuitesActionButton action="email" isActive={emailFloorplanActive} callback={() => setEmailFloorplanActive(true)} />
                <SuitesActionButton isActive={suiteIsFav} action="favourite" callback={() => toggleFavourite(suite)} />
                {pdf && <SuitesActionButton action="print" link={`https://finelineperspectives.dev/astoria/pdf/${pdf}`} />}
                <SuitesActionButton action="compare" callback={() => setCurrentSubsection('favourites')} disable={favouriteSuites.length <= 1} />
                {renderVrTourButton()}
            </div>

            <SuiteFloorplan floorplan={floorplan} title={title} section="suites" />

            <Popup open={emailFloorplanActive} modal nested onClose={() => setEmailFloorplanActive(false)}>
                {close => (<EmailFloorplanPopup vrTour={vrTour} pdf={pdf} close={close} />)}
            </Popup>

            <Popup open={vrTourActive} modal nested onClose={() => setVrTourActive(false)}>
                {close => (<VrTourPopup close={close} />)}
            </Popup>

            <div className="suites__container--keyplans">
                {keyplans.map((keyplan, i) => <div className="suites__container--keyplan" key={i}>
                    <img src={keyplan} alt="keyplan" />
                </div>)}
            </div>
    </div>
    )
}

export default SuiteContainer;