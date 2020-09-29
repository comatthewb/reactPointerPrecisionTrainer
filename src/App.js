import React from "react";

import "./App.css";
import ClickDetector from "./ClickDetector";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      clickedX: 0,
      clickedY: 0,
    };
    this.handleMouseMovement = this.handleMouseMovement.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  handleMouseMovement(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  handleMouseClick(event) {
    this.setState({
      clickedX: this.state.x,
      clickedY: this.state.y,
    });
  }

  render() {
    return (
      <div
        className="App"
        onMouseMove={this.handleMouseMovement}
        onClick={this.handleMouseClick}
      >
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
        <ClickDetector
          ClickPositionX={this.state.clickedX}
          ClickPositionY={this.state.clickedY}
        />
      </div>
    );
  }
}

export default App;
