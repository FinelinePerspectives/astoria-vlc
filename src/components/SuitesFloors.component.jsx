import { floors } from '../data/floors';

const SuitesFloors = ({ currentSubsection, currentFloor }) => {
    const classes = ['suites__content'];
    currentSubsection === 'floors' && classes.push('active');

    const renderFloor = (floor) => {
        const { id, floorplate, keyplan } = floor;

        const classes = ['suites__floor'];
        id === currentFloor && classes.push('active');

        return (
            <div className={classes.join(' ')} data-floor={id} key={id}>
                <div className="suites__floorplate">
                    <img src={floorplate} alt="" />
                </div>

                <div className="suites__keyplan">
                    <img src={keyplan} alt="" />
                </div>
            </div>
        )
    }

    return (
        <div className={classes.join(' ')} data-subsection="floors">
            {floors.map(floor => renderFloor(floor))}
        </div>
    )
}

export default SuitesFloors;