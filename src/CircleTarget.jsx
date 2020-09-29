import React from "react";

export default function CircleTarget(props) {
  if (props.renderTarget) {
    return <div className="circleTarget"></div>;
  } else {
    return null;
  }
}
