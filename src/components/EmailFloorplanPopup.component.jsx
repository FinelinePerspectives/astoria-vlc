import PopupTextInput from "./PopupTextInput.component";
import SuitesActionButton from "./SuitesActionButton.component";

import { Fragment, useContext, useState } from "react";
import { Context } from "../context/context";

import Button from '../components/Button.component';

import axios from 'axios';

const EmailFloorplanPopup = ({ close, vrTour, pdf }) => {
    const { userSettings } = useContext(Context);

    const [formStatus, setFormStatus] = useState({
        success: null,
        error: null,
    });
    const [formProcessing, setFormProcessing] = useState(false);

    const handleFormStatus = (state, message) => {
        setFormStatus((prevState) => ({
            ...prevState,
            [state]: message
        }))
    }

    const renderFormFields = () => {
        return (
            <div className="suites__popup--form">
                <PopupTextInput type="text" name="firstName" placeholder="First Name" value={userSettings.firstName} />
                <PopupTextInput type="text" name="lastName" placeholder="Last Name" value={userSettings.lastName} />
                <PopupTextInput type="email" name="email" placeholder="Email" value={userSettings.email} />
                <PopupTextInput type="textarea" name="notes" placeholder="Notes" value={userSettings.notes} />
                <Button copy="Send" callback={() => handleSubmit()} />
            </div>
        )
    }

    const renderFormSubmitting = () => {
        return <p>Sending floorplan to <br/>{userSettings.email}...</p>
    }

    const handleSubmit = async () => {
        setFormProcessing(true);

        const data = new FormData();
        const pdfLink = `../pdf/${pdf}`;

        data.append('userFirstName', userSettings.firstName);
        data.append('userLastName', userSettings.lastName);
        data.append('userEmail', userSettings.email);
        data.append('notes', userSettings.notes);
        data.append( 'vrLink', vrTour);
        data.append('floorPlanAttachment', pdfLink);

        const url = 'https://www.finelineperspectives.dev/astoria/php/emailMe.php'

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }

        await axios.post(url, data, config)
            .then(res => handleFormStatus('success', res.data))
            .catch(err => handleFormStatus('error', `Something went wrong! ${err.message}`));

        setTimeout(() => setFormProcessing(false), 1000)
      }

    return (
        <div className="suites__popup" data-popup="email">
            <SuitesActionButton action="close" callback={() => close()} />
            <div className="suites__popup--col" data-popup="emailbg">
                <h2>Email Floorplan</h2>
            </div>

            <div className="suites__popup--col" data-popup="emailform">
                {formProcessing ? renderFormSubmitting() : renderFormFields()}
            </div>
        </div>
    )
}

export default EmailFloorplanPopup;