import React from "react";

function YouWin(props) {
    return (
        <div>
        <h2>You Won!</h2>
        <h2>You remembered all 12 labels!</h2>
        <button className="btn btn-dark" onClick={()=> props.initialState()}>Play Again</button>
        </div>
    );
}

export default YouWin;