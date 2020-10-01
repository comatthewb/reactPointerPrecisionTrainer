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
        <p>Number of Rounds: </p>
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
        <p>Difficulty: </p>
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

        <p>Color: </p>

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
          id="black"
        >
          Black
        </button>
      </div>
      <div className="modal-footer">
        <h3>You can do it!</h3>
      </div>
    </div>
  );
}
