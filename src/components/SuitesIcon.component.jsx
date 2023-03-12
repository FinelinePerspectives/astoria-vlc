import { useContext } from 'react';
import { Context } from '../context/context';

const SuitesIcon = ({ suite, isActive }) => {
    const { id, dataBG } = suite;
    const { activeSuite, setActiveSuite } = useContext(Context);

    const classes = ['suites__icon'];
    id === activeSuite && classes.push('active')

    const selectActiveSuite = () => activeSuite !== id && setActiveSuite(id);

    return (
        <div className={classes.join(' ')} data-bg={dataBG} onClick={selectActiveSuite}>
            <p>{id}</p>
        </div>
    )
}

export default SuitesIcon;