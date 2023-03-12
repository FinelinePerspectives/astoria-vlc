import { useContext } from 'react';
import { Context } from '../context/context';

const FilterDropdown = ({ dropdown }) => {
    const { id, placeholder, options } = dropdown;

    const { userSettings, setUserSettings } = useContext(Context);

    const selected = userSettings[id];

    const onInputChange = (e, id) => {
        setUserSettings(prevState => ({
            ...prevState,
            [id]: e.target.value
        }));
    }

    return (
        <select className="filterInput__dropdown" name={id} onChange={(e) => onInputChange(e, id)} value={selected}>
            <option value="" defaultValue="" disabled={userSettings[id] === ""}>{userSettings[id] === "" ? placeholder : 'Show All'}</option>
            {options.map((opt) => {
                const { value, label } = opt;
                return (<option key={value} value={value}>{label}</option>)
            })}
        </select>
    );
}

export default FilterDropdown;