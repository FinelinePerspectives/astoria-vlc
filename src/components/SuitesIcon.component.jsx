import { useContext } from 'react';
import { Context } from '../context/context';

import HeartIcon from '../assets/svg/heart.svg';

const SuitesIcon = ({ suite }) => {
    const { id, dataBG } = suite;
    const { activeSuite, setActiveSuite, favouriteSuites } = useContext(Context);

    const suiteIsFav = favouriteSuites.find(s => s.id === suite.id) ? true : false;

    const classes = ['suites__icon'];
    id === activeSuite && classes.push('active')

    const selectActiveSuite = () => activeSuite !== id && setActiveSuite(id);

    return (
        <div className={classes.join(' ')} data-bg={dataBG} onClick={selectActiveSuite}>
            <p>{id}</p>
            {suiteIsFav && <img className="suites__icon--favourite" src={HeartIcon} alt="Favourite" />}
        </div>
    )
}

export default SuitesIcon;