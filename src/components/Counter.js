import React from "react";

function Counter(props) {
        return (
            <div>
                <h2>Play the game</h2>
                <div className="row">
                    {props.imageArr.map((result,i) => (
                        <div className="col-6 col-md-4 mb-2">
                            <button className="btn btn-default" onClick={()=>props.countScore(result.name,i)} key={result.name}><img alt="record label" className="rounded img-fluid" src={result.src}/></button>
                        </div>
                    ))}
                </div>
            </div>
            );

}

export default Counter;