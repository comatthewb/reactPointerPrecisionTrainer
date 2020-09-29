import React from "react";

export default function CircleTarget(props) {
  if (props.renderTarget) {
    return (
      <div
        className="circleTarget"
        style={{
          width: props.targetWorH,
          height: props.targetWorH,
          top: props.targetPosition[0],
          left: props.targetPosition[1],
        }}
      ></div>
    );
  } else {
    return null;
  }
}
