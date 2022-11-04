const FilterCheckbox = ({ checkbox, userSettings, setUserSettings }) => {
    const { label, id } = checkbox;

    const isChecked = userSettings[id];
    const classes = ['home__registration--checkbox'];
    isChecked && classes.push('active');

    const onInputCheck = (e, id) => {
        const isChecked = e.target.checked;
        setUserSettings((prevState) => ({
            ...prevState,
                [id]: isChecked
        }));
    }

    return (
        <div className={classes.join(' ')}>
            <p>{label}</p>
            <input type="checkbox" onClick={(e) => onInputCheck(e, id)} name={id} />
        </div>
    )
}

export default FilterCheckbox;