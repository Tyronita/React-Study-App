import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import GraphPage from "./pages/GraphPage";
import HomePage from "./pages/HomePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import CalendarPage from "./pages/CalendarPage";
import StopwatchPage from "./pages/StopwatchPage";
import TimerPage from "./pages/TimerPage";
import TodoPage from "./pages/TodoPage";
import SettingsPage from "./pages/SettingsPage";
import NoMatchPage from "./pages/NoMatchPage";

export default function App() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/graph" element={<GraphPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/stopwatch" element={<StopwatchPage />} />
                <Route path="/timer" element={<TimerPage />} />
                <Route path="/todo" element={<TodoPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/*" element={<NoMatchPage />} />
            </Routes>
        </div>
    );
}

