import React from "react";

function Score(props) {
    return (
        <div className="col-12 col-sm-8 col-md-6 mx-auto mt-3 mb-2">
            <div className="card rounded-0 text-white bg-dark ">
                <div className="card-body">
                    <div className="row">
                        <div className="col-5">
                            <p className="lead mb-0">Score: {props.score}</p>
                        </div>
                        <div className="col-7">
                            <p className="lead float-right mb-0">High Score: {props.highscore}</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Score;