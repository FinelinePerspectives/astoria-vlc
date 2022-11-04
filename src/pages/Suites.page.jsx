import { useEffect, useState } from 'react';

import Floorplate1 from '../assets/images/floorplate1.png';
import Floorplate2 from '../assets/images/floorplate2.png';
import Keyplan1 from '../assets/images/keyplan.png';

import { filterDropdowns, filterCheckboxes } from '../data/filterData';

import FilterDropdown from '../components/FilterDropdown.component';
import FilterCheckbox from '../components/FilterCheckbox.component';

import { initUserSettings } from '../data/initUserSettings';

const suitesSubsections = [
    { id: 'floors', label: 'Floors' },
    { id: 'suites', label: 'Suites' }
];

const floors = [
    { id: 'floor2', label: 'Floor 2', floorplate: Floorplate1, keyplan: Keyplan1 },
    { id: 'floor1', label: 'Ground Floor', floorplate: Floorplate2, keyplan: Keyplan1 },
    { id: 'ground', label: 'Floor 1', floorplate: Floorplate1, keyplan: Keyplan1 },
]

const SuitesPage = ({ userSettings, setUserSettings }) => {    
    const [ currentSubsection, setCurrentSubsection ] = useState('suites');
    const [ currentFloor, setCurrentFloor ] = useState('floor1');
    const [favouriteSuites, setFavouriteSuites] = useState([]);
    const dropdowns = filterDropdowns.filter(drop => drop.section !== 'home');

    const clearFilters = () => {
        setUserSettings(initUserSettings);
        console.log('filters cleared');
    }

    const clearFavouriteSuites = () => {
        setFavouriteSuites([]);
        console.log('favourites cleared');
    }

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

    const renderFloorsSubsection = () => {
        const classes = ['suites__content'];
        currentSubsection === 'floors' && classes.push('active');

        return (
            <div className={classes.join(' ')} data-subsection="floors">
                {floors.map(floor => renderFloor(floor))}
            </div>
        )
    }

    const renderSuitesSubsection = () => {
        const classes = ['suites__content'];
        currentSubsection === 'suites' && classes.push('active');

        return (
            <div className={classes.join(' ')} data-subsection="suites">
                <div className="suites__floorplan">
                    suites
                </div>
            </div>
        )
    }

    const renderSuitesMenu = () => {
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
                                dropdowns.map(dropdown => {
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
                            units
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

        

        return (
            <div className="suites__menu">
                <div className="suites__menu--subsections">
                    {suitesSubsections.map(subsection => renderMenuSubsectionBtn(subsection))}
                </div>

                {renderSubMenu()}
            </div>
        )
    }

    return (
        <section className="suites">
            {currentSubsection === 'floors' && renderFloorsSubsection()}
            {currentSubsection === 'suites' && renderSuitesSubsection()}
            {renderSuitesMenu()}
        </section>
    )
}

export default SuitesPage;