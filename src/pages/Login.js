import React, { useState } from 'react'
import { Navigate, Link } from "react-router-dom";
import { Alert } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

// Import tools for authentication
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase-config";

// Template
export default function Login (){

    // Declare hooks for login form data
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const [user, setUser] = useState({});
    
    // Create function to login when details submitted
    const login = async (e) => {
        e.preventDefault()
        try {
            setError('')
            setLoading(true) // loading while we log on
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        } catch (error) {
            console.log(error.message);
            setError('Failed to login')
        }

        setLoading(false)
    };

    // When auth state changed
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return (
        <main className="form-signin">
            <form className = "w-100" style={{ maxWidth: '600px', margin:"30px auto" }}>

                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                {/* Error message if error */}
                {error && <Alert variant="danger">{error}</Alert>}

                {/* Input email */}
                <div classname="form-floating">
                    <label for="floatingInput">Email address</label>
                    <input
                        placeholder="name@example.com"
                        className="form-control" id="floatingInput"
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    /> 
                </div>

                {/* Input password */}
                <div className="form-floating">
                    <label for="floatingPassword">Password</label>
                    <input
                        type="password"
                        placeholder="Must have at least 6 characters"
                        className="form-control" id="floatingPassword"
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />
                </div>
                
                {/* Submit password */}
                <button onClick={login} class="w-100 btn btn-lg btn-primary"> Sign in</button>

                <p className="mt-5 mb-3 text-muted">&copy; 20172021</p>

            </form>

            <div className = "w-100 text-center mt-2">
                Don't have an account? <Link to="/sign-up">Sign up</Link>
            </div>
        </main>
    )
}