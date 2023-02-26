import React from 'react'
import NavBar from './NavBar'
import TripCard from './TripCard'

const TripsPage = ({props}) => {


    return (
    <div className="Trips">
        <NavBar />

        {props.map(trip => <TripCard 
        name={trip.name}
        locations={trip.locations}
        itinerary={trip.itinerary}
        key={trip.id} />)} 

    </div>
    )
}

export default TripsPage