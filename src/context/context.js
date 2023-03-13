import { createContext, useEffect, useState } from 'react';
import { initUserSettings } from '../data/initUserSettings';

import { filterDropdowns, filterCheckboxes } from '../data/filterData';

import { suitesData } from '../data/suitesData';

export const Context = createContext(null);

const AppContext = ({ children }) => {
    // Global
    const [userSettings, setUserSettings] = useState(initUserSettings);

    const filterSuites = () => {
        const filteredSuites = [];

        suitesData.forEach(suite => {
            let returnSuite = true;

            filterDropdowns.forEach(drop => {
                if (userSettings[drop.id] !== '' && suite[drop.id] !== userSettings[drop.id]) {
                    returnSuite = false;
                    return;
                }
            });

            filterCheckboxes.forEach(chk => {
                if (userSettings[chk.id] && suite[chk.id] !== userSettings[chk.id]) {
                    returnSuite = false;
                    return;
                }
            });
            
            returnSuite && filteredSuites.push(suite);
        });

        setSuites(filteredSuites);
        
        const activeSuiteNotFiltered = filteredSuites.find(suite => suite.id === activeSuite) ? true : false;
        if (!activeSuiteNotFiltered && filteredSuites.length > 0) {
            const defaultSelected = filteredSuites[0].id || null;
            setActiveSuite(defaultSelected);
        }
    }

    useEffect(() => {
        filterSuites();
    }, [userSettings])

    // Suites section
    const [activeSuite, setActiveSuite] = useState("C1");
    const [favouriteSuites, setFavouriteSuites] = useState([]);
    const [suites, setSuites] = useState(suitesData);

    // Neighbourhood Tour section
    const [currentNeighbourhoodTourCategory, setCurrentNeghbourhoodTourCategory] = useState('Restaurants & Cafes');

    return (
        <Context.Provider 
            value={{
                userSettings, setUserSettings,
                suites, setSuites,
                activeSuite, setActiveSuite,
                favouriteSuites, setFavouriteSuites,
                currentNeighbourhoodTourCategory, setCurrentNeghbourhoodTourCategory
            }}>
                {children}
            </Context.Provider>)
}

export default AppContext;