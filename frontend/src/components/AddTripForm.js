import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const AddTripForm = () => {
    const [tripName, setTripName] = useState('');
    const [startLoc,setStartLoc] = useState('');
    const [endLoc, setEndLoc] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //send name, startLoc and endLoc to backend server
        //navigate('pagename') to navigate to trips page after done
    };

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>
                    Name of trip:
                    <input type="text" value="{tripName}" onChange = {(e) => setTripName(e.target.value)}/>
                </label>

                <label>
                    Starting Location:
                    <input type="text" value="{startLoc}" onChange = {(e) => setStartLoc(e.target.value)}/>
                </label>
                <label>
                    Ending Location:
                    <input type="text" value="{endLoc}" onChange = {(e) => setEndLoc(e.target.value)}/>
                </label>
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default AddTripForm