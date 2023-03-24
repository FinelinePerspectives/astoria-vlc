import { useContext } from 'react'; 
import { Context } from '../context/context';
import Checkmark from '../assets/svg/checkmark.svg';


const SuitesTypeButton = ({ label, index, callback }) => { 
    const { activeSuiteTypeFilters } = useContext(Context);

    const classes = ['suites__typeBtn'];
    const isActive = activeSuiteTypeFilters[index].isActive;
    isActive && classes.push('active');

    return (
        <div className={classes.join(' ')} onClick={callback ? () => callback() : null}>
            {isActive && <img src={Checkmark} alt="" />}
            {label}
        </div>
    )
}

export default SuitesTypeButton;