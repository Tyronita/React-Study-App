import { Navigate } from "react-router-dom";
import React, { useState }  from "react";

import {Link} from "react-router-dom";

import ModalParent from "../components/MoodModal";

// import authentication
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

import "../styles/DashboardPage.css";
import { Modal } from "react-bootstrap";

export default function DashboardPage() {

    const [user, setUser] = useState({});
    
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    // re-direct user if not logged
    // if (user) {return <Navigate to="/login"/> }

    return (
        <div>
            <div className="content">
                <h1 id="DashboardTitle">Dashboard</h1>
                <div className="DashboardWidgets">
                    <Link className="DashboardWidgetContainer" id="DashboardWidgetContainerTopLeft" to="/graph">View how much you studied</Link>
                    <Link className="DashboardWidgetContainer" id="DashboardWidgetContainerTopRight" to="/timer">Time yourself!</Link>
                    <Link className="DashboardWidgetContainer" id="DashboardWidgetContainerBottomLeft" to="/to-do">TODOs!</Link>
                    <Link className="DashboardWidgetContainer" id="DashboardWidgetContainerBottomRight" to="/settings">Manage your settings</Link>
                </div>
            </div>
            <ModalParent />
        </div>
    );
}
