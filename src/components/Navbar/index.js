import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import './Navbar.css';

function Navbar() {

    const [show, handleShow] = useState(false);
    const history = useHistory()
    // when the user scrolls down, the black backround of the navbar will appear
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, []);
    
    return (
        <div className = {`nav ${show && 'nav_black'}`}>
            <div className = "nav_contents">
                <img onClick = {() => history.push('/')}className = "nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix logo"/>
                <img onClick = {() => history.push('/profile')} className = "nav_avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""/>
            </div>
        </div>
    )
}

export default Navbar;
