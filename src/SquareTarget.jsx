import React from "react";

export default function SquareTarget(props) {
  if (props.renderTarget) {
    return (
      <div
        className="squareTarget"
        style={{
          width: props.targetWorH,
          height: props.targetWorH,
          top: props.targetPosition[0],
          left: props.targetPosition[1],
        }}
        onClick={props.handleSquareTargetClick}
      ></div>
    );
  } else {
    return null;
  }
}
