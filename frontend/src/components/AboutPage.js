import React from 'react'
import Efficient from './assets/Fuel-Efficient.png'
import Itenerariy from './assets/Itenerariy.png'
import Plan from './assets/Plan.png'
import './assets/AboutPage.css'

const AboutPage = () => {
  return (
    <div className="features">
        <h1>Features</h1>
        <div className = "row">
            <div className = "features-col">
            <img src={Efficient} />
                <h3>Find Fuel-Efficient Routes</h3>
            </div>
            <div className = "features-col">
                <img src = {Itenerariy}/>
                <h3>Generates Itineraries</h3>
            </div>
            <div className = "features-col">
                <img src = {Plan}/>
                <h3>Plan & Organize Your Own Trips</h3>
            </div>
        </div>
    </div>
    )
}

export default AboutPage

