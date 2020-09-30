import React from "react";

export default function SettingsModal(props) {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <span className="close" onClick={props.handleSettingsClick}>
          &times;
        </span>
        <h2>Trainer Settings</h2>
      </div>
      <div className="modal-body">
        <p>Difficulty: </p>
        <p>In Progress</p>
        <button onClick={props.changeTargetColor} id="red">
          Red
        </button>
        <button onClick={props.changeTargetColor} id="orange">
          Orange
        </button>
        <button onClick={props.changeTargetColor} id="yellow">
          Yellow
        </button>
        <button onClick={props.changeTargetColor} id="green">
          Green
        </button>
        <button onClick={props.changeTargetColor} id="blue">
          Blue
        </button>
        <button onClick={props.changeTargetColor} id="indigo">
          Indigo
        </button>
        <button onClick={props.changeTargetColor} id="violet">
          Violet
        </button>
        <button onClick={props.changeTargetColor} id="black">
          Black
        </button>
      </div>
      <div className="modal-footer">
        <h3>You can do it!</h3>
      </div>
    </div>
  );
}
