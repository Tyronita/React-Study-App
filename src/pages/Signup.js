import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Navigate, Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { Alert } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

// Template
export default function Signup (){

    const [user, setUser] = useState({});

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)   

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    // Form validation
    async function handleSubmit(e) {
        e.preventDefault()

        if (registerPassword !== registerConfirmPassword) {
            return setError('Passwords do not match')
        }

        if (registerPassword.length < 6) {
            return setError('Passwords do not match')
        }

        try {

            setError('');
            setLoading(true);
            await register();

            // try {
            //     await login();
            // } catch {
            //     setError('Failed to login')
            // }

        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    // // Create function to login when details submitted
    // const login = async (e) => {
    //     e.preventDefault()
    //     try {
    //         setError('')
    //         setLoading(true) // loading while we log on
    //         const user = await signInWithEmailAndPassword(
    //             auth,
    //             registerEmail,
    //             registerPassword
    //         );
    //     } catch (error) {
    //         console.log(error.message);
    //         setError('Failed to login')
    //     }
    // }

    const register = async () => {
        try {
            // Create User
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );

        } catch (error) {
            console.log(error.message)
            throw error
        }
    };

    return (
        <main className="h-100">
            <form onSubmit = {handleSubmit} className = "w-100 " style={{ maxWidth: '600px', margin:"30px auto"}}>

                <h2 className='text-center mb-4'>Create Account</h2>

                {/* Error message if error */}
                {error && <Alert variant="danger">{error}</Alert>}

                {/* Input email */}
                <div classname="form-floating">
                    <label for="floatingInput">Email address</label>
                    <input
                        type="email"
                        placeholder="name@example.com"
                        className="form-control" id="floatingInput"
                        onChange={(event) => {
                          setRegisterEmail(event.target.value);
                        }}
                    /> 
                </div>

                {/* Input password */}
                <div className="form-floating">
                    <label for="floatingPassword">Password</label>
                    <input
                        type="password"
                        placeholder="Password must be at least 6 characters"
                        className="form-control" id="floatingPassword"
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />
                </div>

                {/* Input confirm password */}
                <div className="form-floating">
                    <label for="floatingConfirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Must match password"
                        className="form-control" id="floatingConfirmPassword"
                        onChange={(event) => {
                            setRegisterConfirmPassword(event.target.value);
                        }}
                    />
                </div>
                
                {/* Submit form button */}
                <button class="w-100 btn btn-lg btn-primary" disabled = {loading}>
                    Create Account
                </button>

            </form>

            <div className = "w-100 text-center mt-2">
                Already have an account? <Link to="/log-in">Log in</Link>
            </div>
        </main>
    )
}