import { useContext, useState } from 'react';

import { Context } from '../context/context';

import { floors } from '../data/floors';
import SuitesTypeFilter from '../components/SuitesTypeFilter.component';
import SuitesFloorplanPopup from './SuitesFloorplanPopup.component';

import SuiteKeyplan from './SuiteKeyplan.component';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const SuitesFloors = ({ currentSubsection, currentFloor }) => {
    const { activeSuite } = useContext(Context);

    const classes = ['suites__content'];
    currentSubsection === 'floors' && classes.push('active');

    const [popupActive, setPopupActive] = useState(false);

    const renderFloor = (floor) => {
        const { id, floorplate, keyplan } = floor;

        const classes = ['suites__floor'];
        id === currentFloor && classes.push('active');


        return (
            <div className={classes.join(' ')} data-floor={id} key={id}>
                <div className="suites__floorplate">
                    <img src={floorplate} alt="" />
                </div>

                <SuiteKeyplan keyplan={keyplan} callback={() => setPopupActive(true)} />
            </div>
        )
    }

    return (
        <div className={classes.join(' ')} data-subsection="floors">
            <SuitesTypeFilter />
            {floors.map(floor => renderFloor(floor))}

            <Popup open={popupActive} modal nested onClose={() => setPopupActive(false)}>
                {close => (<SuitesFloorplanPopup close={close} id={activeSuite} />)}
            </Popup>
        </div>
    )
}

export default SuitesFloors;