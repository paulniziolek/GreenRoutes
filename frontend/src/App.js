import './App.css';
import HomePage from './components/HomePage'
import TripsPage from './components/TripsPage';
import TripPage from './components/TripPage';
import AddTripForm from './components/AddTripForm';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {



  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/add-trip" element={<AddTripForm />} />
        <Route path="/trip/:id" element={<TripPage />} />

      </Routes>
    </Router>

  )
}

export default App;
