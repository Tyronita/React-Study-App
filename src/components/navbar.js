import {Link} from "react-router-dom";

// import authentication
import React, { useState } from "react";
import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "../firebase-config";

// import styles
import "../styles/index.css";
import "../styles/navbar.css";

// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faCalendarDays, faHourglass, faGears, faList} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <nav className="nav">
            <h1 className="logo">Study App</h1>
            <div className="links">
                <Link to="/">Dashboard</Link> <FontAwesomeIcon icon={faChartLine} className='icon'/>
                <Link to="/calendar">Calendar</Link> <FontAwesomeIcon icon={faCalendarDays} className='icon'/>
                <Link to="/graph">Graph</Link> <FontAwesomeIcon icon={faChartLine} />
                <Link to="/to-do">To-do</Link> <FontAwesomeIcon icon={faList} />
                <Link to="/timer">Timer</Link> <FontAwesomeIcon icon={faHourglass} className='icon'/>
                <Link to="/settings">Settings</Link> <FontAwesomeIcon icon={faGears} className='icon'/>
            </div>
            <button type="button" style={{marginLeft: '2vw'}} className="btn btn-outline-danger" onClick={logout}>Log Out</button>
        </nav>
    )  
}

export default Navbar
