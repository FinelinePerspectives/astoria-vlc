import { InfoWindowF } from "@react-google-maps/api";
import { useContext } from "react";
import { Context } from '../context/context';

const MapMarker = () => {
    const {
        currentNeighbourhoodTourCategory,
        activeMapItem,
        setActiveMapItem
     } = useContext(Context);

     const googleMapsBaseURL = 'https://maps.google.ca/';
     
     const { coords } = activeMapItem;

    return (
            <InfoWindowF
                focus
                className="ff"
                onCloseClick={() => setActiveMapItem(null)}
                position={{ lat: coords.lat, lng: coords.lng }}   
                options={{ pixelOffset: new window.google.maps.Size(0, -40) }} 
        >
            <div className="mapMarker__info" data-category={currentNeighbourhoodTourCategory}>
                <a href={`${googleMapsBaseURL}${coords.lat},${coords.lng}`} className="mapMarker__image" target="_blank" rel="noreferrer">
                    <img src={`https://www.finelineperspectives.dev/astoria/map/${activeMapItem.image}`} alt={activeMapItem.title} />

                    <div className="mapMarker__header">
                        <span>{activeMapItem.title}</span>
                    </div>
                </a>

                <div className="mapMarker__times">
                    <div className="mapMarker__time">
                        <div className="mapMarker__time--image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.863" height="14.877" viewBox="0 0 8.863 14.877">
                                <g id="Group_9851" data-name="Group 9851" transform="translate(0 0)">
                                    <path id="Path_51143" data-name="Path 51143" d="M197.914,686.54c-.488.284-.91.509-1.306.772a.6.6,0,0,0-.166.39c-.086.665-.151,1.333-.23,2a.629.629,0,0,1-.669.622.618.618,0,0,1-.556-.725c.082-.946.182-1.89.291-2.832a.5.5,0,0,1,.205-.319c.885-.566,1.778-1.118,2.671-1.67a.62.62,0,0,1,.276-.11,1.831,1.831,0,0,1,1.715,1.647c0,1.14-.009,2.28.01,3.419a1.625,1.625,0,0,0,.207.53.144.144,0,0,0,.052.054c1.8,1.29,2.26,3.332,2.922,5.255a.73.73,0,0,1-.461.923.743.743,0,0,1-.981-.468c-.411-1.034-.8-2.077-1.214-3.109a1.8,1.8,0,0,0-.387-.589c-.7-.7-1.427-1.366-2.121-2.069a.949.949,0,0,1-.246-.584c-.026-.886-.011-1.773-.011-2.659Z" transform="translate(-194.512 -681.669)" fill="#BB855D"/>
                                    <path id="Path_51144" data-name="Path 51144" d="M196.564,704.521c.406.382.739.674,1.042,1a.435.435,0,0,1,.058.379,8.022,8.022,0,0,1-1.29,2.26c-.565.665-1.074,1.377-1.609,2.068a.777.777,0,0,1-1.147.256.791.791,0,0,1-.073-1.174c.2-.277.4-.551.606-.827A15,15,0,0,0,196.564,704.521Z" transform="translate(-193.323 -695.898)" fill="#BB855D"/>
                                    <path id="Path_51145" data-name="Path 51145" d="M206.317,674.09a1.382,1.382,0,1,1-1.4,1.352A1.376,1.376,0,0,1,206.317,674.09Z" transform="translate(-201.63 -674.09)" fill="#BB855D"/>
                                    <path id="Path_51146" data-name="Path 51146" d="M214.421,695.281c.636.551,1.283,1.091,1.9,1.66a.522.522,0,0,1,.006.758.552.552,0,0,1-.781.14c-.395-.273-.762-.587-1.128-.9a.4.4,0,0,1-.084-.273c-.008-.442,0-.885,0-1.327Z" transform="translate(-208.38 -689.276)" fill="#BB855D"/>
                                </g>
                            </svg>
                        </div>
                        <span>{activeMapItem.walkTime} min</span>
                    </div>
                    
                    <div className="mapMarker__time">
                        <div className="mapMarker__time--image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.229" height="11.137" viewBox="0 0 18.229 11.137">
                                <g id="Group_9849" data-name="Group 9849" transform="translate(0 0)">
                                    <path id="Path_51142" data-name="Path 51142" d="M463.445,684.523c.389-.559.8-1.081,1.122-1.649.093-.162-.044-.455-.076-.7-.245.039-.416.055-.582.1a.249.249,0,0,1-.345-.2,2.212,2.212,0,0,1-.054-.539c.007-.206.172-.216.334-.216q1.034,0,2.068,0c.145,0,.3-.016.309.194a.338.338,0,0,1-.252.4c-.253.062-.511.1-.764.155.011.3.137.41.439.407,1.531-.015,3.062-.007,4.592-.007h.37l-.669-1.754c-.316,0-.62,0-.923,0-.228,0-.378-.091-.393-.325a.345.345,0,0,1,.37-.391c.395-.016.791-.009,1.186,0,.26.006.349.2.428.411q.671,1.758,1.346,3.515c.035.092.075.183.12.294a3.541,3.541,0,0,1,2.977.6,3.4,3.4,0,0,1,1.345,2.1,3.5,3.5,0,0,1-6.49,2.406,3.391,3.391,0,0,1-.29-2.732,3.456,3.456,0,0,1,1.76-2.092l-.4-1.022c-.107.119-.193.209-.274.3-1.135,1.323-2.265,2.651-3.412,3.964a.777.777,0,0,1-.485.228,11.979,11.979,0,0,1-1.276.007c-.208-.006-.291.048-.334.272a3.539,3.539,0,0,1-3.136,2.865,3.48,3.48,0,0,1-3.613-2.358,3.316,3.316,0,0,1,.844-3.609,3.41,3.41,0,0,1,3.646-.83c.087.027.17.066.254.1Zm8.206.691a2.707,2.707,0,0,0-1.231,3.514,2.774,2.774,0,0,0,3.69,1.418,2.736,2.736,0,0,0,1.439-3.554,2.683,2.683,0,0,0-3.193-1.611c.039.112.077.225.119.337q.4,1.063.81,2.125c.082.217.058.418-.177.506a.363.363,0,0,1-.508-.245c-.032-.085-.064-.171-.1-.256Zm-7.14,2.772h-.356c-.76,0-1.52.009-2.279-.009a.52.52,0,0,1-.4-.192.717.717,0,0,1,.063-.469,1.725,1.725,0,0,1,.236-.351l1.243-1.785a2.665,2.665,0,0,0-3.069.343,2.752,2.752,0,0,0-.686,3.291,2.765,2.765,0,0,0,5.248-.827Zm2.571-1.08,3.162-3.708h-4.63Zm-3.024-1.954a3.669,3.669,0,0,1,1.184,2.142c.01.059.093.149.144.151.331.014.663.007,1.04.007l-1.436-3.657Zm.462,2.288a2.771,2.771,0,0,0-.893-1.681l-1.15,1.681Z" transform="translate(-458.237 -679.99)" fill="#BB855D"/>
                                </g>
                            </svg>
                        </div>
                        <span>{activeMapItem.bikeTime} min</span>
                    </div>

                    <div className="mapMarker__time">
                        <div className="mapMarker__time--image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13.974" height="11.978" viewBox="0 0 13.974 11.978">
                                <path id="Path_51147" data-name="Path 51147" d="M752.224,682.567h-.832l-.331-1h1.164a.5.5,0,0,0,0-1h-1.5l-.682-2.047a1.484,1.484,0,0,0-1.314-.948h-5.989a1.483,1.483,0,0,0-1.314.948l-.682,2.047h-1.5a.5.5,0,0,0,0,1h1.164l-.331,1h-.833a.5.5,0,0,0-.5.5v2.995a.5.5,0,0,0,.5.5h.5v2a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1v-2h5.989v2a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1v-2h.5a.5.5,0,0,0,.5-.5v-2.995A.5.5,0,0,0,752.224,682.567Zm-9.849-3.727a.511.511,0,0,1,.366-.265h2v.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-.5h2a.513.513,0,0,1,.367.265l1.243,3.727h-9.209Zm-.632,6.722a1,1,0,1,1,1-1A1,1,0,0,1,741.743,685.561Zm5.989,0H743.74v-1h3.993Zm2,0a1,1,0,1,1,1-1A1,1,0,0,1,749.729,685.561Z" transform="translate(-738.749 -677.576)" fill="#BB855D"/>
                            </svg>
                        </div>
                        <span>{activeMapItem.driveTime} min</span>
                    </div>
                </div>
            </div>
        </InfoWindowF>

    )
}

export default MapMarker;