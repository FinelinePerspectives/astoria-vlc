import { useState, useContext } from 'react';

import { suitesData } from '../data/suitesData';
import SuiteFloorplan from './SuiteFloorplan.component';
import SuiteInfo from './SuiteInfo.component';

import SuitesActionButton from './SuitesActionButton.component';
import EmailFloorplanPopup from './EmailFloorplanPopup.component';
import VrTourButton from './VrTourButton.component';
import VrTourPopup from './VrTourPopup.component';
import { Context } from '../context/context';

const SuitesFloorplanPopup = ({ close, id }) => {
    const { toggleFavourite, favouriteSuites } = useContext(Context)

    const [currentSubsection, setCurrentSubsection] = useState('floorplan');

    const suite = suitesData.find(s => s.id === id);
    const { title, type, sqft, description, floorplan, pdf, vrTour } = suite;

    const suiteIsFav = favouriteSuites.find(s => s.id === suite.id) ? true : false;

    const FloorplanContent = () => (
        <>
            <SuiteInfo section="suites" title={title} type={type} sqft={sqft} description={description} />
            <SuiteFloorplan floorplan={`https://finelineperspectives.dev/astoria/floorplans/${floorplan}`} title={title} section="suites" />
        </>
    )

    const MenuContent = () => (
        <>
            <div className="suites__actions" data-section="floors">
                <SuitesActionButton action="email" callback={() => setCurrentSubsection('email')} />
                <SuitesActionButton isActive={suiteIsFav} action="favourite" callback={() => toggleFavourite(suite)} />
                {pdf && <SuitesActionButton action="print" link={`https://finelineperspectives.dev/astoria/pdf/${pdf}`} />}
                <VrTourButton callback={() => setCurrentSubsection('vrtour')} />
                <SuitesActionButton action="close" callback={() => close()} />
            </div>
        </>
    )

    return (
         <div className="suites__popup" data-section="floors">
            {currentSubsection === 'floorplan' && <MenuContent />}
            {currentSubsection === 'floorplan' && <FloorplanContent />}
            {currentSubsection === 'email' && <EmailFloorplanPopup section="floorplan" title="Email Floorplan" vrTour={vrTour} pdf={pdf} close={() => setCurrentSubsection('floorplan')} />}
            {currentSubsection === 'vrtour' && <VrTourPopup title={title} vrTour={vrTour} close={() => setCurrentSubsection('floorplan')} />}
        </div>

    );
}

export default SuitesFloorplanPopup;