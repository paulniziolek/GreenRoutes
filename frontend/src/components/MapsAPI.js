import React, { useEffect } from 'react'
import axios from 'axios'


const MapsAPI = () => {

    let data = {
            "origin":{
                "location":{
                    "latLng":{
                        "latitude": 37.419734,
                        "longitude": -122.0827784
                        }
                }
            },
            "destination":{
                "location":{
                    "latLng":{
                        "latitude": 37.417670,
                        "longitude": -122.079595
                        }
                }
            },
            "routeModifiers": {
                "vehicleInfo": {
                    "emissionType": "GASOLINE"
                }
            },
            "travelMode": "DRIVE",
            "routingPreference": "TRAFFIC_AWARE_OPTIMAL",
            "requestedReferenceRoutes": ["FUEL_EFFICIENT"],
            "departureTime": "2023-10-15T15:01:23.045123456Z",
            "computeAlternativeRoutes": false,
            "routeModifiers": {
            "avoidTolls": false,
            "avoidHighways": false,
            "avoidFerries": false
            },
            "languageCode": "en-US",
            "units": "IMPERIAL",
        }
        //'FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline,routes.distanceMeters,routes.duration,routes.routeLabels,routes.travelAdvisory.fuelConsumptionMicroliters,routes.routeToken',
    useEffect(() => {
        axios.post("https://routes.googleapis.com/directions/v2:computeRoutes?key=AIzaSyBn9s9PGTebqGkhGYCDQzdm7s3YOBirUKM&fields=routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline", data)
        .then(
            response => {
                console.log("SUCCESS", response)

            })
        .catch(error => console.log(error.response))
    })

    

    return (
        <div>

        </div>
    )
}

export default MapsAPI