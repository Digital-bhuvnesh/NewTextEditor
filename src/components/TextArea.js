import React, { useState } from "react";

export default function TextArea() {
  const [text, setText] = useState("Enter text here");

  const handleUpCase = () => {
    setText(text.toUpperCase());
  };

  const handleLoCase = () => {
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    setText("");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container my-5">
        <h2>Enter your text here</h2>
        <textarea
          className="container"
          value={text}
          onChange={handleOnChange}
          rows={8}
        ></textarea>
        <button className="btn btn-primary mx-1 " onClick={handleUpCase}>
          Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoCase}>
          Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear
        </button>
        <div className="container my-2">
          <h2>Symmary</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
        </div>
      </div>
    </>
  );
}
