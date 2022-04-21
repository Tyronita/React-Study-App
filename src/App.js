// Routing and hooks
import {Route, Routes} from "react-router-dom";
import React, { useState, Fragment } from "react";
import PrivateRoute from "./components/PrivateRoute";

// import authentication
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase-config";

// Import components
import Navbar from "./components/navbar";

// Import pages
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import DashboardPage from "./pages/DashboardPage";
import LoginStuff from "./pages/LoginStuff"

import GraphPage from "./pages/GraphPage";
import CalendarPage from "./pages/CalendarPage";
import StopwatchPage from "./pages/StopwatchPage";
import TodoPage from "./pages/TodoPage";
import NoMatchPage from "./pages/NoMatchPage";
import Timer from "./pages/TimerPage";

// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

import { createTheme } from '@mui/material/styles';

export default function App() {

    // current user
    // const [user, setUser] = useState({});
    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // });
    
    const theme = createTheme({
        palette: {
            primary: {
                main: '#d42c5e',
            },
            secondary: {
                light: '#0066ff',
                main: '#0044ff',
                contrastText: '#ffcc00',
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
        },
    });

    return (
        <div>
            <Navbar />
            <Routes>
                <Fragment>
                    <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/' element={<DashboardPage/>}/></Route>
                    {/* Login stuff */}
                    <Route path="/log-in" element={<Login/>} />
                    <Route path="/sign-up" element={<Signup/>} />

                    {/* Pages */}
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/graph" element={<GraphPage />} />
                    <Route path="/stopwatch" element={<StopwatchPage />} />
                    <Route path="/timer" element={<Timer />} />
                    <Route path="/to-do" element={<TodoPage />} />
                    <Route path="/settings" element={<LoginStuff/>} />
                    
                    {/* No match */}
                    <Route path="/*" element={ <NoMatchPage />} />
                </Fragment>
            </Routes>
        </div>
    );
}

