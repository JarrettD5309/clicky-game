import React from "react";

function Counter(props) {
        return (
            <div>
                <h2>Play the game</h2>
                <div className="row">
                    {props.imageArr.map(result => (
                        <div className="col-6 col-md-4 mb-2">
                            <button className="btn btn-default" onClick={()=>props.countScore()}><img alt="record label" className="rounded img-fluid" src={result}/></button>
                        </div>
                    ))}
                </div>
            <button className="btn btn-primary" onClick={()=> props.handleActive()}>Change Active</button>
            </div>
            );

}

export default Counter;