import React from 'react'
import NavBar from './NavBar'
import TripCard from './TripCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './assets/TripCard.css'
import { useNavigate } from 'react-router-dom'

const TripsPage = () => {
    let navigate = useNavigate()
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/trips")
        .then( response => {
        
        setTrips(JSON.parse(JSON.stringify(response.data)))
        })
    }, [])


    return (
        <div className="Trips">
            <div className="Trips">

                {trips.map(trip => <TripCard 
                name={trip.name}
                locations={trip.locations}
                id={trip.id}
                key={trip.id} />)} 
            </div>

        </div>

            
                

        
        
    
    )

}

export default TripsPage