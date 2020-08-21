import React from "react";

function Counter(props) {
        return (
            <div>
                <div className="row">
                    {props.imageArr.map((result,i) => (
                        <div className="col-6 col-md-4 mb-2">
                            <button className="btn btn-default" onClick={()=>props.countScore(result.name,i)} key={result.name}><img alt="record label" className="img-fluid" src={result.src}/></button>
                        </div>
                    ))}
                </div>
            </div>
            );

}

export default Counter;