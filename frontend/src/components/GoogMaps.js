import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import './assets/map.css'

const GoogMaps = () => {
    const { isLoaded } = useLoadScript({
        //googleMapsApiKey: process.env.GOOGLE_API_KEY
        googleMapsApiKey: 'AIzaSyBn9s9PGTebqGkhGYCDQzdm7s3YOBirUKM'
    })
    const center = useMemo(() => ({lat:44, lng:-80}), []);

    if (!isLoaded) return <div>Loading...</div>


    return (
        <div>
            <GoogleMap 
                zoom={10} 
                center={center} 
                mapContainerClassName="map-container">
                    <Marker position={center} />
            </GoogleMap>
        </div>
    )
}

export default GoogMaps