import React from "react";

export default function SquareTarget(props) {
  if (props.renderTarget) {
    return (
      <div
        className={`squareTarget-${props.color}`}
        style={{
          width: props.targetWorH,
          height: props.targetWorH,
          top: props.targetPosition[0],
          left: props.targetPosition[1],
          backgroundColor: props.color,
        }}
        onClick={props.handleSquareTargetClick}
      ></div>
    );
  } else {
    return null;
  }
}
