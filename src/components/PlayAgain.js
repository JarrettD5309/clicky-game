import React from "react";

function PlayAgain(props) {
    return (
        <div>
        <h2>Please play again</h2>
        <button className="btn btn-primary" onClick={()=> props.handleActive()}>Change Active</button>
        </div>
    );
}

export default PlayAgain;