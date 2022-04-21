/*
import {Link} from "react-router-dom";
import React from "react";
import "../styles/index.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Study App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/graph">Graph</Link>
                <Link to="/analytics">Analytics</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/stopwatch">Stopwatch</Link>
                <Link to="/timer">Timer</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    )  
}

export default Navbar
 */

import {Link} from "react-router-dom";

// import authentication
import React, { useState } from "react";
//import {
  //onAuthStateChanged,
  //signOut
//} from "firebase/auth";
//import { auth } from "../firebase-config";

// import styles
import "../styles/index.css";
import "../styles/navbar.css";

// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faCalendarDays, faHourglass, faGears, faList} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    //const [user, setUser] = useState({});
    //onAuthStateChanged(auth, (currentUser) => {
        //setUser(currentUser);
    //});

    const logout = async () => {
        //await signOut(auth);
    };

    return (
        <nav className="nav">
            <h1 className="logo">Study App</h1>
            <div className="links">
                <Link to="/">Dashboard</Link> <FontAwesomeIcon icon={faChartLine} className='icon'/>
                <Link to="/calendar">Calendar</Link> <FontAwesomeIcon icon={faCalendarDays} className='icon'/>
                <Link to="/graph">Graph</Link> 
                <Link to="/to-do">To-do</Link> <FontAwesomeIcon icon={faList} />
                <Link to="/timer">Timer</Link> <FontAwesomeIcon icon={faHourglass} className='icon'/>
                <Link to="/settings">Settings</Link> <FontAwesomeIcon icon={faGears} className='icon'/>
            </div>
            <button type="button" style={{marginLeft: '2vw'}} className="btn btn-outline-danger" onClick={logout}>Log Out</button>
        </nav>
    )  
}

export default Navbar
