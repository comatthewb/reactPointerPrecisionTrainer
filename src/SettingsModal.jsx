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
          style={{ backgroundColor: "red", color: "white" }}
          onClick={props.changeTargetColor}
          id="red"
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "orange", color: "white" }}
          onClick={props.changeTargetColor}
          id="orange"
        >
          Orange
        </button>
        <button
          style={{ backgroundColor: "yellow", color: "white" }}
          onClick={props.changeTargetColor}
          id="yellow"
        >
          Yellow
        </button>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={props.changeTargetColor}
          id="green"
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={props.changeTargetColor}
          id="blue"
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "indigo", color: "white" }}
          onClick={props.changeTargetColor}
          id="indigo"
        >
          Indigo
        </button>
        <button
          style={{ backgroundColor: "violet", color: "white" }}
          onClick={props.changeTargetColor}
          id="violet"
        >
          Violet
        </button>
        <button
          style={{ backgroundColor: "black", color: "white" }}
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
