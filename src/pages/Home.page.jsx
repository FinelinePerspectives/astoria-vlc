import { useState } from 'react';

import Button from '../components/Button.component';

const HomePage = ({ slide, userSettings, setUserSettings }) => {
    const [initBtnClicked, setInitBtnClicked] = useState(false);

    const registrationInputs = [
        { label: 'First Name', id: 'firstName' },
        { label: 'Last Name', id: 'lastName' },
        { label: 'Postal Code', id: 'postalCode' },
        { label: 'Email', id: 'email' },
    ];

    const registrationDropdowns = [
        {
            label: 'What Style of Living Are You Interested In?',
            id: 'livingStyle',
            options: [
                { label: '1', value: '1' },
                { label: '2', value: '2' },
            ]
        },
        {
            label: 'Number of Bedrooms',
            id: 'numOfBeds',
            options: [
                { label: '3', value: '3' },
                { label: '4', value: '4' },
            ]
        },
        {
            label: 'Square Foot Range',
            id: 'sqftRange',
            options: [
                { label: '5', value: '5' },
                { label: '6', value: '6' },
            ]
        },
        {
            label: 'Number of Bathroooms',
            id: 'numOfBaths',
            options: [
                { label: '7', value: '7' },
                { label: '8', value: '8' },
            ]
        },
    ];

    const registrationCheckboxes = [
        { label: 'Den', id: 'hasDen' },
        { label: 'Balcony', id: 'hasBalcony' },
        { label: 'Ensuite', id: 'hasEnsuite' },
        { label: 'Walk-In Closet', id: 'hasWalkInCloset' },
        { label: 'Accessibility', id: 'isAccessible' },
        { label: 'VR Tour', id: 'hasVirtualTour' }
    ];

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

    const onInputChange = async (e, id) => {
        await setUserSettings((prevState) => ({
            ...prevState,
            [id]: e.target.value
        }));
    }

    const onInputCheck = (e, id) => {
        const isChecked = e.target.checked;
        setUserSettings((prevState) => ({
            ...prevState,
                [id]: isChecked
        }));
    }

    const submitRegistration = (e) => {
        e.preventDefault();
        console.log(userSettings)
    }

    const registrationScreen = () => {
        return (
            <div className="home__registration--container">
                <form className="home__registration">
                    <div className="home__registration--col" data-col="inputs">
                        <div className="home__registration--header">
                            <p>Please fill out a few personal details</p>
                        </div>

                        {registrationInputs.map((input, i) => {
                            return (
                                <div className="home__registration--input" key={i}>
                                    <input type={input.id === 'email' ? 'email' : 'text'} name={input.id} onInput={(e) => onInputChange(e, input.id)} placeholder={input.label} defaultValue="" />
                                </div>
                            )
                        })}
                    </div>

                    <div className="home__registration--col" data-col="dropdowns">
                        <div className="home__registration--header">
                            <p>What are you looking for?</p>
                        </div>
                        {registrationDropdowns.map((dropdown, i) => {
                            const options = dropdown.options;

                            return (
                                <div className="home__registration--input" key={i}>
                                    <select name={dropdown.label} onInput={(e) => onInputChange(e, dropdown.id)}>
                                        {options.map((opt, i) => <option key={i} value={opt.value}>{opt.label}</option>)}
                                    </select>
                                </div>
                            )
                        })}

                        <div className="home__registration--input" data-input="checkboxes">
                            {registrationCheckboxes.map((chk, i) => {
                                const isChecked = userSettings[chk.id];
                                const classes = ['home__registration--checkbox'];
                                isChecked && classes.push('active');

                                return (
                                    <div className={classes.join(' ')} key={i}>
                                        <p>{chk.label}</p>
                                        <input type="checkbox" onClick={(e) => onInputCheck(e, chk.id)} name={chk.id} />
                                    </div>
                                )
                            })}
                        </div>

                        <Button copy="Live the Dream" callback={(e) => submitRegistration(e)} />
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="home" data-bg={slide}>
            {!initBtnClicked ? initScreen() : registrationScreen()}
        </div>
    );
}

export default HomePage;
