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
      </div>
      <div className="modal-footer">
        <h3>You can do it!</h3>
      </div>
    </div>
  );
}
