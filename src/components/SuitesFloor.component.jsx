import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const SuitesFloor = ({ currentFloor, floor }) => {
    const { id, floorplate, keyplan } = floor;

    const classes = ['suites__floor'];
    id === currentFloor && classes.push('active');


const Keyplan = () => {
    return (
        <div className="suites__keyplan">
            <img src={keyplan} alt="" />
        </div>
    )
}

const TestPopup = ({ close }) => {
    <div className="popup">
        <button onClick={close}>close</button>
    </div>
}

    return (
        <div className={classes.join(' ')} data-floor={id} key={id}>
            <div className="suites__floorplate">
                <img src={floorplate} alt="" />
            </div>

            <Popup trigger={Keyplan} modal nested>
                {close => (<TestPopup close={close} />)}
            </Popup>
        </div>
    )
}

export default SuitesFloor;