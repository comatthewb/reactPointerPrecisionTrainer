import React from "react";

import "./App.css";
import CircleTarget from "./CircleTarget";
import ClickDetector from "./ClickDetector";
import SettingsModal from "./SettingsModal";
import SquareTarget from "./SquareTarget";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMouseX: 0,
      currentMouseY: 0,
      clickedX: 0,
      clickedY: 0,
      renderTarget: false,
      clickCounter: 0,
      started: false,
      targetWorH: 50,
      targetPosition: [500, 500],
      score: 0,
      totalRenders: 0,
      interval: 700,
      renderModal: false,
      color: "purple",
      rounds: 5,
    };
    this.handleMouseMovement = this.handleMouseMovement.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.changeTargetPosition = this.changeTargetPosition.bind(this);
    this.handleCircleTargetClick = this.handleCircleTargetClick.bind(this);
    this.handleSquareTargetClick = this.handleSquareTargetClick.bind(this);
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
    this.changeTargetColor = this.changeTargetColor.bind(this);
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
    this.closeSettings = this.closeSettings.bind(this);
    this.handleRoundChange = this.handleRoundChange.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  handleMouseMovement(event) {
    this.setState({
      currentMouseX: event.clientX,
      currentMouseY: event.clientY,
    });
  }

  endGame() {
    this.setState({
      started: false,
      clickCounter: 0,
      renderTarget: false,
      score: 0,
      totalRenders: 0,
    });
    //clear target rendering interval
    clearInterval(this.targetRenderer);
    console.log("your score is " + this.state.score);
  }

  handleMouseClick(event) {
    let count = this.state.clickCounter;
    count++;
    if (this.state.started === true) {
      this.setState({
        clickedX: this.state.currentMouseX,
        clickedY: this.state.currentMouseY,
        clickCounter: count,
      });
    } else {
      this.setState({
        clickedX: this.state.currentMouseX,
        clickedY: this.state.currentMouseY,
        clickCounter: 0,
      });
    }
  }

  changeTargetColor(event) {
    let color = event.target.id;

    this.setState({
      color: color,
    });
  }

  changeTargetPosition() {
    if (this.state.renderTarget) {
      let position = [],
        maxH = window.innerHeight - this.state.targetWorH,
        maxW = window.innerWidth - this.state.targetWorH;

      position[0] =
        Math.floor(Math.random() * (maxH - this.state.targetWorH * 2)) +
        this.state.targetWorH;
      position[1] =
        Math.floor(Math.random() * (maxW - this.state.targetWorH * 2)) +
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
          clickCounter: 0,
          score: 0,
          totalRenders: 0,
        },
        () => {
          this.closeSettings();
          this.targetRenderer = setInterval(() => {
            this.changeTargetPosition();
            this.setState(
              {
                renderTarget: !this.state.renderTarget,
              },
              () => {
                if (this.state.renderTarget) {
                  this.setState({
                    totalRenders: this.state.totalRenders + 1,
                  });
                }
                if (this.state.totalRenders >= this.state.rounds) {
                  this.setState({
                    started: false,
                    renderTarget: false,
                  });
                  //clear target rendering interval
                  clearInterval(this.targetRenderer);
                }
              }
            );
          }, this.state.interval);
        }
      );
    } else {
      this.endGame();
    }
  }

  handleSettingsClick() {
    if (!this.state.started) {
      this.setState({
        renderModal: true,
      });
    }
  }

  closeSettings() {
    this.setState({
      renderModal: false,
    });
  }

  handleDifficultyChange(event) {
    if (event.target.id === "easy") {
      this.setState({
        interval: 1500,
      });
    }
    if (event.target.id === "medium") {
      this.setState({
        interval: 700,
      });
    }
    if (event.target.id === "hard") {
      this.setState({
        interval: 575,
      });
    }
    if (event.target.id === "ruthless") {
      this.setState({
        interval: 450,
      });
    }
  }

  handleRoundChange(event) {
    let rounds = parseInt(event.target.id);
    console.log(rounds);
    this.setState({ rounds: rounds });
  }

  handleSquareTargetClick() {
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
        onMouseDown={this.handleMouseClick}
      >
        <button onClick={this.handleStartClick}>
          {this.state.started ? "Stop!" : "Start!"}
        </button>
        <button onClick={this.handleSettingsClick}> settings</button>
        <p>
          The current mouse position is ({this.state.currentMouseX},
          {this.state.currentMouseY})
        </p>
        <ClickDetector
          rounds={this.state.rounds}
          ClickPositionX={this.state.clickedX}
          ClickPositionY={this.state.clickedY}
          ClickCount={this.state.clickCounter}
          totalRenders={this.state.totalRenders}
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
          color={this.state.color}
        />
        {this.state.renderModal ? (
          <SettingsModal
            handleSettingsClick={this.handleSettingsClick}
            closeSettings={this.closeSettings}
            changeTargetColor={this.changeTargetColor}
            color={this.state.color}
            handleDifficultyChange={this.handleDifficultyChange}
            handleRoundChange={this.handleRoundChange}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
