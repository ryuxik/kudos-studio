import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-tab" id="name">
                Danqi Qian
            </div>
            <NavLink
                to="/"
                className={({ isActive }) => {
                    let navClass = "nav-tab";
                    if (isActive) navClass+=" active-tab";
                    return navClass;
                }}
                id="home-tab">
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => {
                    let navClass = "nav-tab";
                    if (isActive) navClass+=" active-tab";
                    return navClass;
                }}
                id="about-tab">
                About
            </NavLink>
            <div className='nav-tab' id='time'>
                NY 10:30PM
            </div>
        </div>
    );
}

export default Navbar;