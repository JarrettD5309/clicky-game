import React from "react";
import Navbar from "./Navbar";
import Counter from "./Counter";
import PlayAgain from "./PlayAgain";
import Acen from "../images/acen.jpeg";
import Bombscare from "../images/bombscare.jpg";
import Dubwar from "../images/dubwar.jpg";
import Edge from "../images/edge.jpg";
import Liquid from "../images/liquid.jpg";
import Mule from "../images/mule.jpg";
import Narramind from "../images/narramind.jpg";
import Prodigy from "../images/prodigy.jpg";
import Shutup from "../images/shutup.jpg";
import Sl2 from "../images/sl2.jpg";
import Sonz from "../images/sonz.jpg";
import Urbanshakedown from "../images/urbanshakedown.jpg";

class GameContainer extends React.Component {

    state = {
        active: true,
        score: 0
    }

    imageArr = [Acen,Bombscare,Dubwar,Edge,Liquid,Mule,Narramind,Prodigy,Shutup,Sl2,Sonz,Urbanshakedown];

    areYouActive = () => {
        if (this.state.active===true) {
            return <Counter countScore={this.countScore} imageArr={this.imageArr} handleActive={this.handleActive}/>;
        } else {
            return <PlayAgain handleActive={this.handleActive}/>;
        }
    }

    handleActive = () => {
        if (this.state.active===true) {
            this.setState({active: false})
        } else {
            this.setState({active:true})
        }
        
    }

    countScore = () => {
        let newScore = this.state.score + 1;
        console.log(newScore);
        this.setState({score: newScore});
    }

    render() {
        return (
            <div>
            <Navbar />
            <div className="container">
        <h2>Score: {this.state.score}</h2>
              {this.areYouActive()}
            </div> 
            </div>
            
          );

    }

}

export default GameContainer;