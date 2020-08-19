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
        score: 0,
        highscore: 0,
        imageArr: [
            { name: "Acen", src: Acen, clicked: false },
            { name: "Bombscare", src: Bombscare, clicked: false },
            { name: "Dub War", src: Dubwar, clicked: false },
            { name: "DJ Edge", src: Edge, clicked: false },
            { name: "Liquid", src: Liquid, clicked: false },
            { name: "Mule", src: Mule, clicked: false },
            { name: "Narramind", src: Narramind, clicked: false },
            { name: "Prodigy", src: Prodigy, clicked: false },
            { name: "Shutup", src: Shutup, clicked: false },
            { name: "Sl2", src: Sl2, clicked: false },
            { name: "Sonz", src: Sonz, clicked: false },
            { name: "Urban Shakedown", src: Urbanshakedown, clicked: false }
        ]
    }

    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    areYouActive = () => {
        if (this.state.active === true) {
            return <Counter countScore={this.countScore} imageArr={this.state.imageArr} handleActive={this.handleActive} />;
        } else {
            this.setHighScore();
            return <PlayAgain initialState={this.initialState} />;
        }
    }

    handleActive = () => {
        if (this.state.active === true) {
            this.setState({ active: false })
        } else {
            this.setState({ active: true })
        }

    }

    countScore = (name,i) => {
        console.log(name);
        if (this.state.imageArr[i].name === name && this.state.imageArr[i].clicked === false) {
            let newScore = this.state.score + 1;
            console.log(newScore);
            let currentArr = this.state.imageArr;
            currentArr[i].clicked=true;
            console.log(currentArr[i]);
            this.setState({ score: newScore });
            this.setState({imageArr:currentArr});
            this.setState({ imageArr: this.shuffle(this.state.imageArr) })
        } else {
            this.setState({active:false});
        }

    }

    setHighScore = () => {
        var score=this.state.score;
        if (score>this.state.highscore) {
            this.setState({highscore:score});
        }
    }

    initialState = () => {
        let shuffledResetArr = this.shuffle([
            { name: "Acen", src: Acen, clicked: false },
            { name: "Bombscare", src: Bombscare, clicked: false },
            { name: "Dub War", src: Dubwar, clicked: false },
            { name: "DJ Edge", src: Edge, clicked: false },
            { name: "Liquid", src: Liquid, clicked: false },
            { name: "Mule", src: Mule, clicked: false },
            { name: "Narramind", src: Narramind, clicked: false },
            { name: "Prodigy", src: Prodigy, clicked: false },
            { name: "Shutup", src: Shutup, clicked: false },
            { name: "Sl2", src: Sl2, clicked: false },
            { name: "Sonz", src: Sonz, clicked: false },
            { name: "Urban Shakedown", src: Urbanshakedown, clicked: false }
        ]);
        this.setState({
            active: true,
            score: 0,
            imageArr: shuffledResetArr})
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h2>Score: {this.state.score}</h2>
                    <h2>High Score: {this.state.highscore}</h2>
                    {this.areYouActive()}
                    {/* {this.state.active===true ? <Counter countScore={this.countScore} imageArr={this.imageArr} handleActive={this.handleActive}/>:<PlayAgain handleActive={this.handleActive}/>} */}
                </div>
            </div>

        );

    }

}

export default GameContainer;