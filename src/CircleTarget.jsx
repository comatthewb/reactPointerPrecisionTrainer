import React from "react";

export default function CircleTarget(props) {
  if (props.renderTarget && props.renderCircle) {
    return (
      <div
        onMouseDown={props.handleCircleTargetClick}
        className="circleTarget"
        style={{
          width: props.targetWorH,
          height: props.targetWorH,
          top: props.targetPosition[0],
          left: props.targetPosition[1],
          backgroundColor: props.color,
        }}
      ></div>
    );
  } else {
    return null;
  }
}
