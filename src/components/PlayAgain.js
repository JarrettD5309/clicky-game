import React from "react";

function PlayAgain(props) {
    return (
        <div className="text-center">
        <button className="btn btn-default lead play-again-btn" onClick={()=> props.initialState()}>Play Again</button>
        </div>
    );
}

export default PlayAgain;