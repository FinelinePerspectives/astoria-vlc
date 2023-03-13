import googleMapStyles from '../data/googlemapStyles';
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useContext } from "react";
import { Context } from '../context/context';
import MapMarker from './MapMarker.component';
import { useState, useEffect } from 'react';

import markerRestaurants from '../assets/svg/markerRestaurants.svg';
import markerParks from '../assets/svg/markerParks.svg';
import markerLifestyle from '../assets/svg/markerLifestyle.svg';
import markerTransit from '../assets/svg/markerTransit.svg';
import markerShopping from '../assets/svg/markerShopping.svg';

const NeighbourhoodTourMap = () => {    
    const {
        mapCoords,
        currentNeighbourhoodTourCategory,
        activeNeighbourhoodTourItems,
        activeMapItem,
        setActiveMapItem
     } = useContext(Context);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: '',
//     googleMapsApiKey: 'AIzaSyBeGZ5ha4FkhvwlVte4lW63pEvaVt2PViA'
    });

    const assignCurrentMapMarker = () => {
        let marker;

        switch (currentNeighbourhoodTourCategory) {
            case 'Restaurants & Cafes':
                marker = markerRestaurants;
                break;
            case 'Lifestyle':
                marker = markerLifestyle;
                break;
            case 'Shopping':
                marker = markerShopping;
                break;
            case 'Parks & Trails':
                marker = markerParks;
                break;
            case 'Transit':
                marker = markerTransit;
                break;
            default:
                marker = markerRestaurants;
                break;
        }

        return marker;
    }

    if (isLoaded) {
        return (
            <GoogleMap 
                zoom={16} 
                center={mapCoords}
                mapContainerClassName="map"
                options={{ styles: googleMapStyles }}
            >
                {activeMapItem && <MapMarker />}
                {activeNeighbourhoodTourItems.map((item, i) => {
                    const { coords } = item;
                    const label = {
                        text: `${i + 1}`,
                        color: '#fff'
                    }

                    const marker = assignCurrentMapMarker();

                    return (<MarkerF
                        icon={marker}
                        cursor="pointer"
                        position={coords}
                        key={i}
                        label={label}
                        onClick={() => setActiveMapItem(item)}
                    />)
                })}
            </GoogleMap>)
    }
}


export default NeighbourhoodTourMap;