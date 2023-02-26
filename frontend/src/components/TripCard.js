import React from 'react'
import './assets/TripCard.css'

const TripCard = ({ name, itinerary, locations, key }) => {
    return (
        <div className="card" id={key}>
            <div className="container">
                <h2>{name}</h2>
                <p>{locations[0]}</p>
                <p>{locations[locations.length-1]}</p>
            </div>
        </div>
    )
}

export default TripCard