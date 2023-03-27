import { createContext, useEffect, useState } from 'react';
import { initUserSettings } from '../data/initUserSettings';

import { filterDropdowns, filterCheckboxes } from '../data/filterData';

import { suitesData } from '../data/suitesData';
import mapItems from '../data/mapItems';

import { initActiveSuiteTypeFilters } from '../data/initActiveSuiteTypeFilters';

export const Context = createContext(null);

const AppContext = ({ children }) => {
    // Global
    const [userSettings, setUserSettings] = useState(initUserSettings);

    // Suites section
    const [activeSuite, setActiveSuite] = useState("C3");
    const [activeSuiteTypeFilters, setActiveSuiteTypeFilters] = useState(initActiveSuiteTypeFilters)
    const [favouriteSuites, setFavouriteSuites] = useState([]);

    const sortedSuites = suitesData.sort((a, b) => a.id - b.id);
    const [suites, setSuites] = useState(sortedSuites);

    // Neighbourhood Tour section
    const [mapCoords, setMapCoords] = useState({ lat: 45.3674337, lng: -75.739004 })
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

    // Toggle suite in favourites
    const toggleFavourite = (suite) => {
        let arr = [];

        const isFav = favouriteSuites.filter(s => s.id === suite.id).length === 0 ? false : true;

        if (isFav) {
            favouriteSuites.forEach(s => s.id !== suite.id && arr.push(s));
        } else {
            favouriteSuites.forEach(suite => arr.push(suite));
            arr.push(suite);
        }

        setFavouriteSuites(arr);
    }

    return (
        <Context.Provider 
            value={{
                userSettings, setUserSettings,
                suites, setSuites,
                activeSuite, setActiveSuite,
                activeSuiteTypeFilters, setActiveSuiteTypeFilters,
                favouriteSuites, setFavouriteSuites, toggleFavourite,
                mapCoords, setMapCoords,
                activeNeighbourhoodTourItems, setActiveNeighbourhoodTourItems,
                currentNeighbourhoodTourCategory, setCurrentNeghbourhoodTourCategory,
                activeMapItem, setActiveMapItem,
            }}>
                {children}
        </Context.Provider>)
}

export default AppContext;