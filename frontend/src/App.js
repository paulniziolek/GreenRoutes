import './App.css';
import HomePage from './components/HomePage'
import TripsPage from './components/TripsPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddTripForm from './components/AddTripForm';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/trips")
    .then( response => {
      
      setTrips(JSON.parse(JSON.stringify(response.data)))
    })
  }, [])


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trips" element={<TripsPage props={trips} />} />
        <Route path="/add-trip" element={<AddTripForm />} />

      </Routes>
    </Router>

  )
}

export default App;
