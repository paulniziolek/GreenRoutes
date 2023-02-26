import React from 'react'
import './assets/TripCard.css'
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const TripCard = ({ name, locations, id }) => {
    const handleDelete = (id) => {
        axios.delete("http://localhost:5000/api/trips", {'data': {'trip_id': id}})
        .then(response => {console.log(response.data.message)})
        .catch(error => {console.log(error)})
    }

    let navigate = useNavigate()

    const onClick = (id) => {
        navigate(`/trip/${id}`)
        console.log(id)
    }




    return (
        <div className="card" role="button" onClick={() => onClick(id)}>
            <div className="container">
                <h2>{name}</h2>
                <p>{locations[0]}</p>
                <p>{locations[locations.length-1]}</p>
                <FaTrashAlt 
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(id)
                        navigate(`/trips`)
                    }}
                    role="button" 
                    tabIndex="0"
                    
                />
            </div>
        </div>
    )
}

export default TripCard