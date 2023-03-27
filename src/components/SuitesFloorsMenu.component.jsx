import { useContext } from 'react';
import { Context } from '../context/context';

import { floors } from '../data/floors';
import { filterDropdowns, filterCheckboxes } from '../data/filterData';
import FilterCheckbox from './FilterCheckbox.component';
import SuitesIcon from './SuitesIcon.component';
import FilterDropdown from './FilterDropdown.component';
import { suitesSubsections } from '../data/suitesSubsections';
import { initUserSettings } from '../data/initUserSettings';


const SuitesFloorsMenu = ({ currentSubsection, currentFloor, setCurrentFloor, setCurrentSubsection }) => {
    const { userSettings, setUserSettings, suites, setFavouriteSuites } = useContext(Context);    

    const renderMenuFloorBtn = (floor) => {
        const { id, label } = floor;

        const btnClasses = ['btn', 'btn-outline'];
        id === currentFloor && btnClasses.push('active');
        
        return (
            <div className='suites__menu--floor' key={id}>
                <button className={btnClasses.join(' ')} onClick={() => setCurrentFloor(id)}>{label}</button>
            </div>
        )
    }

    const renderSubMenu = () => {
        if (currentSubsection === 'floors') {
            return (
                <div className="suites__menu--floors">
                    {floors.map(floor => renderMenuFloorBtn(floor))}
                </div>
            )
        }

        if (currentSubsection === 'suites') {
            return (
                <div className="suites__menu--suites">
                    <div className="suites__menu--dropdowns">
                        {
                            filterDropdowns.map(dropdown => {
                                return (<div className="suites__menu--dropdown" key={dropdown.id}>
                                    <FilterDropdown dropdown={dropdown} userSettings={userSettings} setUserSettings={setUserSettings} />
                                </div>)
                            })
                        }
                    </div>

                    <div className="suites__menu--checkboxes">
                        {
                            filterCheckboxes.map(checkbox => {
                                return (<div className="suites__menu--checkbox" key={checkbox.id}>
                                    <FilterCheckbox checkbox={checkbox} userSettings={userSettings} setUserSettings={setUserSettings} />
                                </div>)
                            })
                        }
                    </div>

                    <div className="suites__menu--units">
                        {suites.map((suite, i) => <SuitesIcon suite={suite} key={i} />)}
                    </div>

                    <div className="suites__menu--controls">
                        <div className="suites__menu--control" onClick={() => clearFilters()}>
                            <span>Reset Filters</span>
                        </div>

                        <div className="suites__menu--control" onClick={() => clearFavouriteSuites()}>
                            <span>Clear Favourites</span>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const clearFilters = () => {
        setUserSettings(initUserSettings);
    }

    const clearFavouriteSuites = () => {
        setFavouriteSuites([]);
    }

    const renderMenuSubsectionBtn = (subsection) => {
        const { id, label } = subsection;

        const btnClasses = ['btn', 'btn-menu'];
        id === currentSubsection && btnClasses.push('active');
        
        return (
            <div className="suites__menu--subsections-btn" key={id}>
                <button className={btnClasses.join(' ')} onClick={() => setCurrentSubsection(id)}>{label}</button>
            </div>
        )
    }
    
    return (
        <div className="suites__menu">
            <div className="suites__menu--subsections">
                {suitesSubsections.map(subsection => renderMenuSubsectionBtn(subsection))}
            </div>

            {renderSubMenu()}
        </div>
    )

}

export default SuitesFloorsMenu;