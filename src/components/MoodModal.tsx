import React, {useState} from "react";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import DiscreteSlider from "./MoodSlider";

import "../styles/MoodModal.css"

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
                <button onClick={() => {setShowModal(true)}}>
                    Show Modal
                </button>
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

    const [happinessValue, setHappinessValue] = useState<number>(5);

    function submitModalData(): void {
        // <Slider {...props} onChange={(_, value) => setInputValue(value)} />

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
                    {/* <p className="MoodSliderEmoji">😞</p> <div className="MoodSlider"><DiscreteSlider onChange={(_, value) => {setHappinessValue(value)}} */}
}
/></div> <p className="MoodSliderEmoji">😊</p>
                </div>
                <p className="MoodSliderTitle">Productivity</p>     
                <div className="MoodSliderAndEmojiDiv">
                    <p className="MoodSliderEmoji">😫</p> <div className="MoodSlider"><DiscreteSlider /></div> <p className="MoodSliderEmoji">📚</p>
                </div>
                <button onClick={submitModalData}>Done</button>
            </div>
        </div>
        </ThemeProvider>
    );
}