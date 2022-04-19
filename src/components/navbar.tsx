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