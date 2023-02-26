import React from 'react';
import './assets/NavBar.css';
import logo from './assets/logo.png';

const NavBar = () => {
    return (
        <nav>
            <a href="index.html"><img src={logo}/></a>
            <div className="nav-links">
                <ul>
                    <li><a href = "/">HOME</a></li>
                    <li><a href = "/add-trip">PLAN</a></li>
                    <li><a href = "/trips">TRIPS</a></li>
                    <li><a href = "/about">ABOUT</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar