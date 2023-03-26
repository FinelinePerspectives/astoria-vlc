import {suitesData} from '../data/suitesData';

import SuitesActionButton from './SuitesActionButton.component';

const SuitesFloorplanPopup = ({ close, id }) => {
    const suite = suitesData.find(s => s.id === id);
    console.log(suite);

    return <div className="suites__popup">
        <SuitesActionButton action="close" callback={() => close()} />
        yee
    </div>
}

export default SuitesFloorplanPopup;