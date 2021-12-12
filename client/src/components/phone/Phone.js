import React from "react";
import Keyboard from "../keyboard/Keyboard";
import Screen from "../screen/Screen";
import "./Phone.css";

function Phone() {
  return (
    <div className="phone">
      <div className="phone__header">Fake it till you make it</div>
      <div className="phone__content">
        <Screen />
        <Keyboard />
      </div>
    </div>
  );
}

export default Phone;
