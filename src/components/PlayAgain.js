import React from "react";

function PlayAgain(props) {
    return (
        <div className="text-center">
            <h2 className="lead font-weight-bold">You Lose!</h2>
            <button className="btn btn-default lead play-again-btn" onClick={() => props.initialState()}>Play Again</button>
        </div>
    );
}

export default PlayAgain;