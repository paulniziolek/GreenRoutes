import React from 'react'
import NavBar from './NavBar'
import TripCard from './TripCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './assets/TripCard.css'

const TripsPage = () => {

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/trips")
        .then( response => {
        
        setTrips(JSON.parse(JSON.stringify(response.data)))
        })
    }, [])


    return (
        <div className="Trips">

            {trips.map(trip => <TripCard 
            name={trip.name}
            locations={trip.locations}
            id={trip.id}
            key={trip.id} />)} 
            </div>
                

        
        
    
    )

}

export default TripsPage