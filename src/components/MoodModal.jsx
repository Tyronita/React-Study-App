import React, { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {DiscreteSlider} from "./MoodSlider";

import "../styles/MoodModal.css"
import { formControlClasses } from "@mui/material";

// import database
import { db } from "../firebase-config";
import { collection, addDoc} from 'firebase/firestore';

// import authentication
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const MoodModalParent = () => {

    const [showModal, setShowModal] = useState(true);

    const handleModalClose = () => {
        setShowModal(false);
    }

    return (
        <div>
            {showModal ? (
                <MoodModal handleClose={handleModalClose} />
            ): (
                // ENABLE THIS CODE IF U WANT THE SHOW MODAL BUTTON TO APPEAR
                // <button onClick={() => {setShowModal(true)}}>
                //     Show Modal
                // </button>
                <></>
            )}
        </div>
    );
}

export default MoodModalParent;

const MoodModal= ({handleClose}) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#d42c5e',
            },
            secondary: {
                light: '#d42c5e',
                main: '#d42c5e',
                contrastText: '#d42c5e',
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
        },
    });

    // current user
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const moodsCollectionRef = collection(db, "moods/")

    const [happinessValue, setHappinessValue] = useState(5);
    const [productivityValue, setProductivityValue] = useState(5);
    
    const submitModalData = async () => {

        // add task - to database
        const userID = user.uid;
        const newMoodEntry = {userID, happinessValue, productivityValue}
        await addDoc(moodsCollectionRef, newMoodEntry)
    }

    return (
        <div>
            <ThemeProvider theme={theme} >
                <div className="MoodModal">
                    <div className="MoodFormContainer">
                        <button className="MoodModalCloseBtn" onClick={handleClose}>
                            X
                        </button>
                        <h1 className="MoodModalTitle">
                            How are you feeling today?
                        </h1>
                        <p className="MoodSliderTitle">Happiness</p>     
                        <div className="MoodSliderAndEmojiDiv">
                            <p className="MoodSliderEmoji">😞</p> <div className="MoodSlider"><DiscreteSlider setState={setHappinessValue} />
        </div> <p className="MoodSliderEmoji">😊</p>
                        </div>
                        <p className="MoodSliderTitle">Productivity</p>     
                        <div className="MoodSliderAndEmojiDiv">
                            <p className="MoodSliderEmoji">😫</p> <div className="MoodSlider"><DiscreteSlider setState={setProductivityValue} /></div> <p className="MoodSliderEmoji">📚</p>
                        </div>
                        <button onClick={() => {submitModalData(); handleClose()}}>Done</button>
                    </div>
                </div>
            </ThemeProvider>
        </div>
        
    );
}