import SuitesActionButton from "./SuitesActionButton.component";

const VrTourButton = ({ vrTour, isActive, callback }) => {
    if (vrTour !== null && vrTour !== '') {
        return <SuitesActionButton action="virtualtour" isActive={isActive} callback={() => callback(true)} />
    }
}
export default VrTourButton;