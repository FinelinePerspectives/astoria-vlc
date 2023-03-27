import SuitesActionButton from "./SuitesActionButton.component";

const VrTourPopup = ({ close, title, vrTour }) => {
    return (<div className="suites__popup" data-popup="vr">
        <SuitesActionButton action="close" callback={() => close()} />
        <iframe src={vrTour} frameBorder="0" title={title}></iframe>
    </div>);
}

export default VrTourPopup;