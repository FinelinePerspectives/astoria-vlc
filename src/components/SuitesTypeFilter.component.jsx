import { useState, useContext, useEffect } from 'react';
import CloseIcon from '../assets/svg/x.svg';

import SuitesTypeButton from "./SuitesTypeButton.component";

import { Context } from '../context/context';

const SuitesFloorsFilter = () => {
    const { activeSuiteTypeFilters, setActiveSuiteTypeFilters } = useContext(Context);

    const [menuActive, setMenuActive] = useState(true);

    const contentClasses = ['suites__typeFilter--content'];
    menuActive && contentClasses.push('active');

    const handleFilterChange = (i) => {
        let newArr = [...activeSuiteTypeFilters];
        newArr[i].isActive = !activeSuiteTypeFilters[i].isActive
        setActiveSuiteTypeFilters(newArr);
    }

   return ( 
    <div className="suites__typeFilter">
            <div className="suites__typeFilter--icon">
                <img src={CloseIcon} alt="" onClick={() => setMenuActive(!menuActive)} />
            </div>

            <div className={contentClasses.join(' ')}>
                {activeSuiteTypeFilters.map((type, i) => {
                    return (<SuitesTypeButton key={i} index={i} label={type.id} callback={() => handleFilterChange(i)} />)
                })}
            </div>
    </div>
   );
}

export default SuitesFloorsFilter;