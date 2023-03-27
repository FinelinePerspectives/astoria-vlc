import SuitesActionButton from "./SuitesActionButton.component";

const VrTourButton = ({ vrTour, isActive, callback }) => {
    console.log(vrTour)
    if (vrTour !== undefined && vrTour !== '') {
        return <SuitesActionButton action="virtualtour" isActive={isActive} callback={() => callback(true)} />
    }
}
export default VrTourButton;