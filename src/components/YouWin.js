import React from "react";

function YouWin(props) {
    return (
        <div className="text-center">
        <h2 className="lead font-weight-bold">You Won!</h2>
        <h2 className="lead font-weight-bold">You remembered all 12 labels!</h2>
        <button className="btn btn-default lead play-again-btn" onClick={()=> props.initialState()}>Play Again</button>
        </div>
    );
}

export default YouWin;