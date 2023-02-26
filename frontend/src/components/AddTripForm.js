import React, {useState} from 'react';
import axios from 'axios';
import './assets/AddTripForm.css'
const AddTripForm = () => {

    const [tripName, setTripName] = useState("");
    const [startLoc, setStartLoc] = useState("");
    const [endLoc, setEndLoc] = useState("");

    
    

    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/trips", {
            "itinerary": "",
            "locations": [startLoc, endLoc],
            "name": tripName
            
    })
        
        //navigate to page name
    };
  return (
    <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name of trip:
                    <input type="text" onChange={(e) => setTripName(e.target.value)}/>
                </label>
                <label>
                    Starting Location:
                    <input type="text" onChange={(e) => setStartLoc(e.target.value)}/>
                </label>
                <label>
                    Ending Location:
                    <input type="text" onChange={(e) => setEndLoc(e.target.value)}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>

  )
}

export default AddTripForm