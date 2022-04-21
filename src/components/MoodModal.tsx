import React, {useState} from "react";

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
    function submitModalData(): void {
        
    }

    return (
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
                    <p className="MoodSliderEmoji">😞</p> <div className="MoodSlider"><DiscreteSlider /></div> <p className="MoodSliderEmoji">😊</p>
                </div>
                <p className="MoodSliderTitle">Productivity</p>     
                <div className="MoodSliderAndEmojiDiv">
                    <p className="MoodSliderEmoji">😫</p> <div className="MoodSlider"><DiscreteSlider /></div> <p className="MoodSliderEmoji">📚</p>
                </div>
                <button onClick={() => submitModalData()}>Done</button>
            </div>
        </div>
    );
}