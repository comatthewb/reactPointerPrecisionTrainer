import React from "react";

export default function SettingsModal(props) {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <span className="close" onClick={props.closeSettings}>
          &times;
        </span>
      </div>
      <div className="modal-body">
        <p>
          Target Size: {props.targetSize} by {props.targetSize}px
        </p>
        <input id="target-size-input" placeholder="ex:25"></input>
        <button
          id="target-size-submit"
          onClick={props.targetSizeSubmitClickHandler}
        >
          submit
        </button>
        <p>
          Target Shape: {props.isSquareRendering ? "Square" : null}
          {props.isCircleRendering ? "Circle" : null}
        </p>
        <button onClick={props.renderSquare}>Square</button>
        <button onClick={props.renderCircle}>Circle</button>
        <p>Number of Rounds: {props.roundCount}</p>
        <button onClick={props.handleRoundChange} id="25">
          25
        </button>
        <button onClick={props.handleRoundChange} id="50">
          50
        </button>
        <button onClick={props.handleRoundChange} id="100">
          100
        </button>
        <button onClick={props.handleRoundChange} id="200">
          200
        </button>
        <p>Difficulty: {props.difficulty}</p>
        <button onClick={props.handleDifficultyChange} id="easy">
          easy
        </button>
        <button onClick={props.handleDifficultyChange} id="medium">
          medium
        </button>
        <button onClick={props.handleDifficultyChange} id="hard">
          hard
        </button>
        <button onClick={props.handleDifficultyChange} id="ruthless">
          ruthless
        </button>
        <div className="color-button-container">
          <p>Color: {props.color}</p>
          <button
            className="colorButton"
            onClick={props.changeTargetColor}
            id="red"
          >
            Red
          </button>
          <button
            className="colorButton"
            onClick={props.changeTargetColor}
            id="orange"
          >
            Orange
          </button>
          <button
            className="colorButton"
            onClick={props.changeTargetColor}
            id="yellow"
          >
            Yellow
          </button>
          <button
            className="colorButton"
            onClick={props.changeTargetColor}
            id="green"
          >
            Green
          </button>
          <button
            className="colorButton"
            onClick={props.changeTargetColor}
            id="blue"
          >
            Blue
          </button>
          <button
            className="colorButton"
            onClick={props.changeTargetColor}
            id="indigo"
          >
            Indigo
          </button>
          <button
            className="colorButton"
            onClick={props.changeTargetColor}
            id="violet"
          >
            Violet
          </button>
          <button
            className="colorButton"
            onClick={props.changeTargetColor}
            id="lightblue"
          >
            Light Blue
          </button>
        </div>
      </div>
      <div className="modal-footer">
        <h3>You can do it!</h3>
      </div>
    </div>
  );
}
