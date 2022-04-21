import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

// import authentication
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const PrivateRoute = () => {
   // determine if authorized, from context or however you're doing it
   // current user
   const [user, setUser] = useState({});
   onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser);
   });

   // If authorized, return an outlet that will render child elements
   // If not, return element that will navigate to login page
   return user ? <Outlet /> : <Navigate to="/log-in" />;
}

export default PrivateRoute;