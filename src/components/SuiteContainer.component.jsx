import SuitesActionButton from "./SuitesActionButton.component";

import { useContext, useState, useEffect } from "react";
import { Context } from "../context/context";
import SuiteInfo from "./SuiteInfo.component";
import SuiteFloorplan from "./SuiteFloorplan.component";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const SuiteContainer = ({ suite, isActive, isFavourited }) => {
    const classes = ['suites__container'];
    isActive && classes.push('active');

    const { title, type, sqft, description, floorplan, keyplans, pdf, vrTour } = suite;

    const { toggleFavourite } = useContext(Context);

    const [vrTourActive, setVrTourActive] = useState(false);

    const VrTourPopup = ({ close }) => {
        return (<div className="suites__popup" data-popup="vr">
            <SuitesActionButton action="close" callback={() => close()} />
            <iframe src={vrTour} frameBorder="0" title={title}></iframe>
        </div>);
    }

    const renderVrTourButton = () => {
        if (vrTour !== null && vrTour !== '') {
            return <SuitesActionButton action="virtualtour" callback={() => setVrTourActive(true)} />
        }
    }
    
    return (
        <div className={classes.join(' ')}>
            <SuiteInfo section="suites" title={title} type={type} sqft={sqft} description={description} />
            
            <div className="suites__actions">
                <SuitesActionButton action="email" />
                <SuitesActionButton action="favourite" isActive={isFavourited} callback={() => toggleFavourite(suite)} />
                {pdf && <SuitesActionButton action="print" link={pdf} />}
                <SuitesActionButton action="compare" />
                {renderVrTourButton()}
            </div>

            <SuiteFloorplan floorplan={floorplan} title={title} section="suites" />

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