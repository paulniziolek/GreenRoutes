import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import './assets/map.css'

const GoogMaps = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_API_KEY
    })

    if (!isLoaded) return <div>Loading...</div>

    return (
        <div>
            <GoogleMap 
                zoom={10} 
                center={{lat:44, lng:-80}} 
                mapContainerClassName="map-container">
                    <Marker position={{lat:44, lng:-80}} />
            </GoogleMap>
        </div>
    )
}

export default GoogMaps