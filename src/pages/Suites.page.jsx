import { useState, useContext } from 'react';
import { Context } from '../context/context';

import SuitesContent from '../components/SuitesContent.component';
import SuitesFloors from '../components/SuitesFloors.component';

import SuitesFloorsMenu from '../components/SuitesFloorsMenu.component';
import SuitesFavourites from '../components/SuitesFavourites.component';

const SuitesPage = () => {    
    const [ currentSubsection, setCurrentSubsection ] = useState('favourites');
    const [ currentFloor, setCurrentFloor ] = useState('groundFloor');

    const { userSettings, setUserSettings, suites, activeSuite, setFavouriteSuites } = useContext(Context);    

    return (
        <section className="suites">
            {currentSubsection === 'favourites' && <SuitesFavourites setCurrentSubsection={setCurrentSubsection} isActive={currentSubsection === 'favourites'} />}
            {currentSubsection === 'floors' && <SuitesFloors currentFloor={currentFloor} currentSubsection={currentSubsection} />}
            {currentSubsection === 'suites' && <SuitesContent currentSubsection={currentSubsection} setCurrentSubsection={setCurrentSubsection} suites={suites} activeSuite={activeSuite} />}
            {currentSubsection !== 'favourites' && <SuitesFloorsMenu currentSubsection={currentSubsection} currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} setCurrentSubsection={setCurrentSubsection} />}
        </section>
    )
}

export default SuitesPage;