import PopupTextInput from "./PopupTextInput.component";
import SuitesActionButton from "./SuitesActionButton.component";

import { useContext, useState } from "react";
import { Context } from "../context/context";

import Button from '../components/Button.component';

import axios from 'axios';

const EmailFloorplanPopup = ({ section, title, close, vrTour, pdf }) => {
    const { userSettings, favouriteSuites } = useContext(Context);

    const initFormStatus = {
        success: null,
        error: null,
    }

    const [formStatus, setFormStatus] = useState(initFormStatus);
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
                {formStatus.error && <p>{formStatus.error}</p>}
            </div>
        )
    }

    const renderFormSubmitting = () => {
        return <p>Sending floorplan to <br/>{userSettings.email}...</p>
    }

    const onFormSuccess = () => {
        setTimeout(() => close(), 1000);
        return <p>{formStatus.success}</p>
    }

    const renderFormContent = () => {
        if (formStatus.success) {
            return onFormSuccess();
        } else {
            return formProcessing ? renderFormSubmitting() : renderFormFields();
        }
    }

    const handleSubmit = async () => {        
        let url;
        setFormStatus(initFormStatus);
        setFormProcessing(true);

        const data = new FormData();

        data.append('userFirstName', userSettings.firstName);
        data.append('userLastName', userSettings.lastName);
        data.append('userEmail', userSettings.email);
        data.append('notes', userSettings.notes);


        if (section === 'floorplan') {
            const pdfLink = `../pdf/${pdf}`;
            
            data.append('floorPlanAttachment', pdfLink);
            data.append('vrLink', vrTour);

            url = 'https://www.finelineperspectives.dev/astoria/php/emailMe.php';
        } else if (section === 'favourites') {
            const pdfLinks = [];
            const vrLinks = [];
            const unitNums = [];

            favouriteSuites.forEach((suite) => {pdfLinks.push(`../pdf/${suite.pdf}`)});
            favouriteSuites.forEach((suite) => {if (suite.vrTour && suite.vrTour !== '') vrLinks.push(suite.vrTour)});
            favouriteSuites.forEach((suite) => {if (suite.vrTour && suite.vrTour !== '') unitNums.push(suite.id)});

            data.append('floorPlanAttachment', pdfLinks);
            data.append('vrLinks', vrLinks);
            data.append('unitNumbers', unitNums);

            url = 'https://www.finelineperspectives.dev/astoria/php/emailMeFavs.php';
        }

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
                <h2>{title}</h2>
            </div>

            <div className="suites__popup--col" data-popup="emailform">
                {renderFormContent()}
            </div>
        </div>
    )
}

export default EmailFloorplanPopup;