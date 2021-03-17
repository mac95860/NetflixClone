import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className = "nav">
            <div className = "nav_contents">
                <img className = "nav_logo" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=49" alt=""/>
                <img className = "nav_avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""/>
            </div>
        </div>
    )
}

export default Navbar;
