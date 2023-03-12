import googleMapStyles from '../data/googlemapStyles';
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from 'react';

const Map = ({ children }) => {
    const coords = useMemo(() => ({ lat: 44.056061, lng: -79.4714572 }), []);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: ''
    })

    if (isLoaded) {
        return (
            <GoogleMap 
                zoom={15} 
                center={coords}
                mapContainerClassName="map"
                options={{ styles: googleMapStyles }}
            >
                {children}
            </GoogleMap>)
    }
}


export default Map;