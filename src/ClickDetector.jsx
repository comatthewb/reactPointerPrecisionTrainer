import React from "react";

export default function ClickDetector(props) {
  let percentage = ((props.Score / props.ClickCount) * 100).toFixed(2);

  return (
    <div className="ClickDetector">
      Last Clicked X: {props.ClickPositionX} Y: {props.ClickPositionY}
      <div>
        Score: {props.Score} / {props.totalRenders} (targets hit / total targets)
      </div>
      <div>Accuracy: {percentage}%</div>
      <div> Rounds: {props.rounds}</div>
    </div>
  );
}
