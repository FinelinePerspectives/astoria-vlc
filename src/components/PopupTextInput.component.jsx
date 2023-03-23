import { useContext } from "react";
import { Context } from "../context/context";

const PopupTextInput = ({ type, name, placeholder, value }) => {
    const { setUserSettings } = useContext(Context);

    const updateUserSettings = (value) => {
        setUserSettings((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    if (type === 'textarea') {
        return <textarea className="formInput__textarea" rows={10} name={name} id={name} placeholder={placeholder} value={value} onChange={(e) => updateUserSettings(e.target.value)}  />
    } else {
        return <input className="formInput__text" type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={(e) => updateUserSettings(e.target.value)}  />
    }
}

export default PopupTextInput;