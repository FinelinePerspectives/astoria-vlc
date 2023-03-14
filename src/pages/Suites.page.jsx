import { useState, useContext } from 'react';
import { Context } from '../context/context';

import SuitesContent from '../components/SuitesContent.component';
import SuitesFloors from '../components/SuitesFloors.component';

import SuitesFloorsMenu from '../components/SuitesFloorsMenu.component';

const SuitesPage = () => {    
    const [ currentSubsection, setCurrentSubsection ] = useState('suites');
    const [ currentFloor, setCurrentFloor ] = useState('groundFloor');

    const { userSettings, setUserSettings, suites, activeSuite, setFavouriteSuites } = useContext(Context);    

    return (
        <section className="suites">
            {currentSubsection === 'floors' && <SuitesFloors currentFloor={currentFloor} currentSubsection={currentSubsection} />}
            {currentSubsection === 'suites' && <SuitesContent currentSubsection={currentSubsection} suites={suites} activeSuite={activeSuite} />}
            <SuitesFloorsMenu currentSubsection={currentSubsection} currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} setCurrentSubsection={setCurrentSubsection} />
        </section>
    )
}

export default SuitesPage;