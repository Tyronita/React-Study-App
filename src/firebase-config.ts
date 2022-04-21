// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF7T5jnN8Z4LAO6nUOdcX9HbGbfhVhQSA",
  authDomain: "study-monitoring-app.firebaseapp.com",
  projectId: "study-monitoring-app",
  storageBucket: "study-monitoring-app.appspot.com",
  messagingSenderId: "487318849833",
  appId: "1:487318849833:web:33b97de759d1e941748f38",
  measurementId: "G-M3Z345KM97"
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY, 
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
//   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Get database
export const db = getFirestore(app);