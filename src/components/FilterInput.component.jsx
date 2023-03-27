const FilterInput = ({ input, setUserSettings }) => {
    const { id, label } = input;

    const onInputChange = async (e, id) => {
        await setUserSettings((prevState) => ({
            ...prevState,
            [id]: e.target.value
        }));
    }

    return (<input type={id === 'email' ? 'email' : 'text'} name={id} onInput={(e) => onInputChange(e, id)} placeholder={label} />)
}

export default FilterInput;