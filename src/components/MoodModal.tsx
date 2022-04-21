import React, {useState} from "react";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {DiscreteSlider} from "./MoodSlider";

import "../styles/MoodModal.css"
import { formControlClasses } from "@mui/material";

const MoodModalParent: React.FC = () => {

    const [showModal, setShowModal] = useState<boolean>(true);

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

const MoodModal: React.FC<{handleClose: any}> = ({handleClose}) => {
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

    const [happinessValue, setHappinessValue] = useState(5);
    const [productivityValue, setProductivityValue] = useState(5);

    function submitModalData(): void {
        // FOR EVAN: PUT UR CODE HERE IN THIS FUNCTION
        // happinessValue -> value from happiness slider
        // productivityValue -> value from productivity slider

        console.log(happinessValue);
        console.log(productivityValue);
    }

    return (
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
    );
}