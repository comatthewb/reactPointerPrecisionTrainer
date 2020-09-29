import React from "react";

import "./App.css";
import CircleTarget from "./CircleTarget";
import ClickDetector from "./ClickDetector";
import SquareTarget from "./SquareTarget";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMouseX: 0,
      currentMouseY: 0,
      clickedX: 0,
      clickedY: 0,
      renderTarget: true,
      clickCounter: 0,
      started: false,
      targetWorH: 50,
      targetPosition: [0, 0],
      score: 0,
    };
    this.handleMouseMovement = this.handleMouseMovement.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.changeTargetPosition = this.changeTargetPosition.bind(this);
    this.handleCircleTargetClick = this.handleCircleTargetClick.bind(this);
    this.handleSquareTargetClick = this.handleSquareTargetClick.bind(this);
  }

  handleMouseMovement(event) {
    this.setState({
      currentMouseX: event.clientX,
      currentMouseY: event.clientY,
    });
  }

  handleMouseClick(event) {
    let count = this.state.clickCounter;
    count++;
    this.setState({
      clickedX: this.state.currentMouseX,
      clickedY: this.state.currentMouseY,
      clickCounter: count,
    });
  }

  changeTargetPosition() {
    if (this.state.renderTarget) {
      let position = [],
        maxH = window.innerHeight,
        maxW = window.innerWidth;

      position[0] =
        Math.floor(Math.random() * (maxH - this.state.targetWorH / 2)) +
        this.state.targetWorH;
      position[1] =
        Math.floor(Math.random() * (maxW - this.state.targetWorH / 2)) +
        this.state.targetWorH;
      console.log(position);
      this.setState({ targetPosition: position });
    }
  }

  handleStartClick(event) {
    if (!this.state.started) {
      this.setState(
        {
          started: !this.state.started,
          clickCounter: this.state.clickCounter--,
        },
        () => {
          this.test = setInterval(() => {
            this.changeTargetPosition();
            this.setState({
              renderTarget: !this.state.renderTarget,
            });
          }, 1000);
        }
      );
    } else {
      this.setState(
        { started: false, clickCounter: this.state.clickCounter - 1 },
        this.setState({ renderTarget: false })
      );
      clearInterval(this.test);
    }
  }

  handleSquareTargetClick() {
    console.log("square clicked");
    let score = this.state.score;
    score++;
    this.setState({ score: score }, () => {
      console.log(this.state.score);
    });
  }

  handleCircleTargetClick() {
    console.log(
      this.state.clickedX,
      this.state.clickedY,
      this.state.targetPosition[0],
      this.state.targetPosition[1],

      Math.sqrt(
        (this.state.clickedX -
          (this.state.targetPosition[0] + this.state.targetWorH / 2)) *
          (this.state.clickedX -
            this.state.targetPosition[0] +
            this.state.targetWorH / 2) +
          (this.state.clickedY -
            this.state.targetPosition[1] +
            this.state.targetWorH / 2) *
            (this.state.clickedY -
              this.state.targetPosition[1] +
              this.state.targetWorH / 2)
      )
    );
    if (
      Math.sqrt(
        (this.state.clickedX - this.state.targetPosition[0]) *
          (this.state.clickedX - this.state.targetPosition[0]) +
          (this.state.clickedY - this.state.targetPosition[1]) *
            (this.state.clickedY - this.state.targetPosition[1])
      ) <
      this.state.targetWorH / 2
    ) {
      console.log("clicked within bounds");

      this.setState({
        score: this.state.score + 1,
      });
    }
  }

  render() {
    return (
      <div
        className="App"
        onMouseMove={this.handleMouseMovement}
        onClick={this.handleMouseClick}
      >
        <button onClick={this.handleStartClick}>
          {this.state.started ? "Stop!" : "Start!"}
        </button>

        <p>
          The current mouse position is ({this.state.currentMouseX},
          {this.state.currentMouseY})
        </p>
        <ClickDetector
          ClickPositionX={this.state.clickedX}
          ClickPositionY={this.state.clickedY}
          ClickCount={this.state.clickCounter}
          Score={this.state.score}
        />
        {/* <CircleTarget
          renderTarget={this.state.renderTarget}
          targetWorH={this.state.targetWorH}
          targetPosition={this.state.targetPosition}
        /> */}
        <SquareTarget
          handleSquareTargetClick={this.handleSquareTargetClick}
          renderTarget={this.state.renderTarget}
          targetWorH={this.state.targetWorH}
          targetPosition={this.state.targetPosition}
        />
      </div>
    );
  }
}

export default App;
