import { createContext, useState } from 'react';
import { initUserSettings } from '../data/initUserSettings';

export const Context = createContext(null);

const AppContext = ({ children }) => {
    const [userSettings, setUserSettings] = useState(initUserSettings);
    const [currentNeighbourhoodTourCategory, setCurrentNeghbourhoodTourCategory] = useState('restauraunts');

    return (
        <Context.Provider 
            value={{
                userSettings,
                setUserSettings,
                currentNeighbourhoodTourCategory,
                setCurrentNeghbourhoodTourCategory
            }}>
                {children}
            </Context.Provider>)
}

export default AppContext;