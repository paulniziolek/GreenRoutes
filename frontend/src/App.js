import './App.css';
import HomePage from './components/HomePage'
import TripsPage from './components/TripsPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddTripForm from './components/AddTripForm';
import NavBar from './components/NavBar';

function App() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/trips")
    .then( response => {
      
      setTrips(JSON.parse(JSON.stringify(response.data)))
    })
  }, [])


  return (
    <div className="App">
      <TripsPage props={trips}/>
      

{/*
      <TripsPage props={trips}/>
      <Routes>
        <Route path="/" element={<h1>Test</h1>}>
          <Route index element={<HomePage />} />
          <Route component={HomePage} />
        </Route>
      </Routes>
*/}

    </div>
  );
}

export default App;
