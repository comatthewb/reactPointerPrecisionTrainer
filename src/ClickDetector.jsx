import { render } from "@testing-library/react";
import React from "react";

export default function ClickDetector(props) {
  return (
    <div className="ClickDetector">
      Last Clicked X: {props.ClickPositionX} Y: {props.ClickPositionY}
      <div>Number of clicks: {props.ClickCount}</div>
    </div>
  );
}
