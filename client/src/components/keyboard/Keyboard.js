import React, { useState } from "react";
import "./Keyboard.css";

function Keyboard() {
  const [message, setMessage] = useState("");

  return (
    <div className="keyboard">
      <span>{message}</span>
      <div className="keyboard__row">
        <button onClick={(e) => setMessage("1")} className="keyboard__button">
          <span className="keyboard__number">1</span>
          <span className="keyboard__letters">A B C</span>
        </button>
        <button onClick={(e) => setMessage("2")} className="keyboard__button">
          <span className="keyboard__number">2</span>
          <span className="keyboard__letters">A B C</span>
        </button>
        <button className="keyboard__button">
          <span className="keyboard__number">3</span>
          <span className="keyboard__letters">A B C</span>
        </button>
      </div>
      <div className="keyboard__row">
        <button className="keyboard__button">
          <span className="keyboard__number">4</span>
          <span className="keyboard__letters">A B C</span>
        </button>
        <button className="keyboard__button">
          <span className="keyboard__number">5</span>
          <span className="keyboard__letters">A B C</span>
        </button>
        <button className="keyboard__button">
          <span className="keyboard__number">6</span>
          <span className="keyboard__letters">A B C</span>
        </button>
      </div>
      <div className="keyboard__row">
        <button className="keyboard__button">
          <span className="keyboard__number">7</span>
          <span className="keyboard__letters">A B C</span>
        </button>
        <button className="keyboard__button">
          <span className="keyboard__number">8</span>
          <span className="keyboard__letters">A B C</span>
        </button>
        <button className="keyboard__button">
          <span className="keyboard__number">9</span>
          <span className="keyboard__letters">A B C</span>
        </button>
      </div>
      <div className="keyboard__row">
        <button className="keyboard__button">
          <span className="keyboard__number">delete</span>
          <span className="keyboard__letters">A B C</span>
        </button>
        <button className="keyboard__button">
          <span className="keyboard__number">0</span>
          <span className="keyboard__letters">A B C</span>
        </button>
        <button className="keyboard__button">
          <span className="keyboard__number">exit</span>
          <span className="keyboard__letters">A B C</span>
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
