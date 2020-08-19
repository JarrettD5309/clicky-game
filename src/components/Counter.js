import React from "react";

class Counter extends React.Component {

    state = {
        count: 0
    };

    render() {
        return (
            <p>Current Count: {this.state.count}</p>
        );
    
    }

}

export default Counter;