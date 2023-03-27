import { ReactSVG } from 'react-svg';

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


    return (
        <div className={classes.join(' ')} data-floor={id} key={id}>
            <div className="suites__floorplate">
                <ReactSVG src={floorplate} loading={() => console.log('loading')} />
            </div>
        </div>
    )
}

export default SuitesFloor;