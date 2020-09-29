import React from "react";

import "./App.css";
import CircleTarget from "./CircleTarget";
import ClickDetector from "./ClickDetector";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      clickedX: 0,
      clickedY: 0,
      renderTarget: false,
      clickCounter: 0,
    };
    this.handleMouseMovement = this.handleMouseMovement.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  handleMouseMovement(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  handleMouseClick(event) {
    let count = this.state.clickCounter;
    count++;
    this.setState({
      clickedX: this.state.x,
      clickedY: this.state.y,
      clickCounter: count,
    });
  }

  handleStartClick(event) {
    this.setState({
      renderTarget: !this.state.renderTarget,
    });
  }

  render() {
    return (
      <div
        className="App"
        onMouseMove={this.handleMouseMovement}
        onClick={this.handleMouseClick}
      >
        <button onClick={this.handleStartClick}>Start!</button>
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
        <ClickDetector
          ClickPositionX={this.state.clickedX}
          ClickPositionY={this.state.clickedY}
          ClickCount={this.state.clickCounter}
        />
        {/* <CircleTarget /> */}
      </div>
    );
  }
}

export default App;
