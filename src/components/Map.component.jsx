import googleMapStyles from '../data/googlemapStyles';
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import MapItems from '../data/mapItems';
import { useContext } from "react";
import { Context } from '../context/context';


const Map = () => {    
    const {
        mapCoords,
        currentNeighbourhoodTourCategory,
        setCurrentNeghbourhoodTourCategory,
        activeNeighbourhoodTourItems,
        setActiveNeighbourhoodTourItems
     } = useContext(Context);

    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey: 'AIzaSyBeGZ5ha4FkhvwlVte4lW63pEvaVt2PViA'
    // });
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: ''
    });

    if (isLoaded) {
        return (
            <GoogleMap 
                zoom={15} 
                center={mapCoords}
                mapContainerClassName="map"
                options={{ styles: googleMapStyles }}
            >
                {activeNeighbourhoodTourItems.map((item, i) => <Marker key={i}>{i}</Marker>)}
            </GoogleMap>)
    }
}


export default Map;