const FilterDropdown = ({ dropdown, userSettings, setUserSettings }) => {
    const { id, placeholder, options, section } = dropdown;

    const selected = userSettings[id];

    const onInputChange = (e, id) => {
        setUserSettings(prevState => ({
            ...prevState,
            [id]: e.target.value
        }));
    }

    return (
        <select className="filterInput__dropdown" name={id} onChange={(e) => onInputChange(e, id)} value={selected}>
            <option value="" defaultValue="" disabled>{placeholder}</option>
            {options.map((opt) => {
                const { value, label } = opt;
                return (<option key={value} value={value}>{label}</option>)
            })}
        </select>
    );
}

export default FilterDropdown;