import { useState } from 'react';

import Button from '../components/Button.component';
import FilterInput from '../components/FilterInput.component';
import FilterDropdown from '../components/FilterDropdown.component';

import { filterInputs, filterDropdowns, filterCheckboxes } from '../data/filterData';
import FilterCheckbox from '../components/FilterCheckbox.component';

const HomePage = ({ slide, userSettings, setUserSettings, setCurrentSection }) => {
    const [initBtnClicked, setInitBtnClicked] = useState(false);

    let keyword;

    switch (slide) {
        case 1:
            keyword = 'looked';
            break;
        case 2:
            keyword = 'felt';
            break;
        case 3:
            keyword = 'been';
            break;
        case 4:
            keyword = 'looked';
            break;
    
        default:
            keyword = 'looked';
            break;
    }

    const displayRegisterScreen = () => setInitBtnClicked(true);

    const initScreen = () => {
        return (
            <div className="home__content">
                <h1>
                    Senior living<br/>has never<br/><span className="home__keyword">{keyword}</span><br/>this good!
                </h1>
                <Button copy="Take Me There" callback={displayRegisterScreen} />
            </div>
        )
    }

    const submitRegistration = () => {
        setCurrentSection('suites')
    };

    const registrationScreen = () => {
        return (
            <div className="home__registration--container">
                <form className="home__registration">
                    <div className="home__registration--col" data-col="inputs">
                        <div className="home__registration--header">
                            <p>Please fill out a few personal details</p>
                        </div>
                        {filterInputs.map((input, i) => <div className="home__registration--input" key={i}><FilterInput input={input} userSettings={userSettings} setUserSettings={setUserSettings} /></div>)}
                    </div>

                    <div className="home__registration--col" data-col="dropdowns">
                        <div className="home__registration--header">
                            <p>What are you looking for?</p>
                        </div>
                        {filterDropdowns.map((dropdown, i) => (<div className="home__registration--input" key={i}><FilterDropdown userSettings={userSettings} dropdown={dropdown} setUserSettings={setUserSettings} /></div>))}

                        <div className="home__registration--input" data-input="checkboxes">
                            {filterCheckboxes.map((chk, i) => <FilterCheckbox key={i} checkbox={chk} setUserSettings={setUserSettings} userSettings={userSettings} />)}
                        </div>

                        <Button copy="Live the Dream" callback={(e) => submitRegistration(e)} />
                    </div>
                </form>
            </div>
        )
    }

    return (
        <section className="home" data-bg={slide}>
            {!initBtnClicked ? initScreen() : registrationScreen()}
        </section>
    );
}

export default HomePage;
