import "./form.css";
import React, { useRef } from "react";

const Form = () => {
  const focus = useRef(null);
  const handleFocusInput = () => {
    focus.current.focus();
  };
  return (
    <div className="form-container">
      <input
        ref={focus}
        className="modern-input"
        placeholder="Enter something..."
      />
      <button onClick={handleFocusInput} className="modern-button">
        Focus Input
      </button>
    </div>
  );
};

export default Form;
