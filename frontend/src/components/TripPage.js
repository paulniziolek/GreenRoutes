import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GoogMaps from './GoogMaps';

const TripPage = () => {
    const { id } = useParams();
    const [trip, setTrip] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/api/trips/${id}`)
        .then( response => {
        
        setTrip(JSON.parse(JSON.stringify(response.data)))
        })
    }, [])

    const updateTrip = (e) => {
        e.preventDefault()
        console.log(trip)
        axios.put(`http://localhost:5000/api/trips/${id}`, JSON.stringify({'data': JSON.stringify(trip)}))
        .then(response => {console.log(response)})
        .catch(error => {console.log(error)})
    }

    

    return (
        <div>
            <div>
            <form className = "form" onSubmit={updateTrip}>
                <div className="input-container">
                Name
                <input value={trip.name} onChange={(e) => setTrip({...trip, 'name': e.target.value})}/>
                </div>
                <div className="map-container">
                    <GoogMaps />
                </div>

                <div className = "itinerary-container"> 
                    Itinerary
                    <textarea rows = "20" cols = "50" value={trip.itinerary} onChange={(e) => setTrip({...trip, 'itinerary': e.target.value})}></textarea>
                </div>
                <button type="submit">Update</button>
            </form>


            
            </div>
            <div> 
            
            </div>
        </div> 
    )
}

export default TripPage