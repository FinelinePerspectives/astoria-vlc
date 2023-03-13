import { createContext, useEffect, useState } from 'react';
import { initUserSettings } from '../data/initUserSettings';

import { filterDropdowns, filterCheckboxes } from '../data/filterData';

import { suitesData } from '../data/suitesData';
import mapItems from '../data/mapItems';

export const Context = createContext(null);

const AppContext = ({ children }) => {
    // Global
    const [userSettings, setUserSettings] = useState(initUserSettings);

    // Suites section
    const [activeSuite, setActiveSuite] = useState("C1");
    const [favouriteSuites, setFavouriteSuites] = useState([]);
    const [suites, setSuites] = useState(suitesData);

    // Neighbourhood Tour section
    const [mapCoords, setMapCoords] = useState({ lat: 44.056061, lng: -79.4714572 })
    const [currentNeighbourhoodTourCategory, setCurrentNeghbourhoodTourCategory] = useState('Restaurants & Cafes');
    const [activeNeighbourhoodTourItems, setActiveNeighbourhoodTourItems] = useState([]);
    const [activeMapItem, setActiveMapItem] = useState(null);

    // Filter suites function & useEffect to refilter whenever userSettings changes
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
    }, [userSettings]);

    // Filter mapItems based on active category and set active items to activeNeighbourhoodTourItems
    const filterMapItems = () => {
        const currentCategory = mapItems.filter(cat => cat.name === currentNeighbourhoodTourCategory);
        setActiveNeighbourhoodTourItems(currentCategory[0].items);
        setActiveMapItem(currentCategory[0].items[0]);
    }

    useEffect(() => {
        filterMapItems();
    }, [currentNeighbourhoodTourCategory]);

    return (
        <Context.Provider 
            value={{
                userSettings, setUserSettings,
                suites, setSuites,
                activeSuite, setActiveSuite,
                favouriteSuites, setFavouriteSuites,
                mapCoords, setMapCoords,
                activeNeighbourhoodTourItems, setActiveNeighbourhoodTourItems,
                currentNeighbourhoodTourCategory, setCurrentNeghbourhoodTourCategory,
                activeMapItem, setActiveMapItem
            }}>
                {children}
        </Context.Provider>)
}

export default AppContext;