import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import GraphPage from "./pages/GraphPage";

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
                <Route path="/todo" element={<TodoPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/*" element={<NoMatchPage />} />
            </Routes>
        </div>
    );
}

function HomePage() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function AnalyticsPage() {
    return (
        <div>
            <h2>Analytics</h2>
        </div>
    );
}

function CalendarPage() {
    return (
        <div>
            <h2>Calendar</h2>
        </div>
    );
}

function StopwatchPage() {
    return (
        <div>
            <h2>Stopwatch</h2>
        </div>
    );
}


function TodoPage() {
    return (
        <div>
            <h2>Todo</h2>
        </div>
    );
}

function SettingsPage() {
    return (
        <div>
            <h2>Settings</h2>
        </div>
    );
}

function NoMatchPage() {
    return (
        <div>
            <h2>No page found</h2>
            <p>
                <Link to="/">Return to Home</Link>
            </p>
        </div>
    );
}
