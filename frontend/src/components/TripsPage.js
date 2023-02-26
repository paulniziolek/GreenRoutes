import React from 'react'
import NavBar from './NavBar'
import TripCard from './TripCard'

const TripsPage = ({props}) => {


    return (
    <div className="Trips">

        {props.map(trip => <TripCard 
        name={trip.name}
        locations={trip.locations}
        id={trip.id}
        key={trip.id} />)} 

    </div>
    )
}

export default TripsPage