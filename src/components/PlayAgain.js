import React from "react";

function PlayAgain(props) {
    return (
        <div>
        <h2>Please play again</h2>
        <button className="btn btn-dark" onClick={()=> props.initialState()}>Play Again</button>
        </div>
    );
}

export default PlayAgain;