import React, { useState } from "react";
import "./Input.css";
function Input({ setUserValueState, userValueState, setNanErr }) {
  const handleChange = (e) => {
    if (isNaN(e.target.value)) {
      setNanErr("Please enter a valid number.");
      setUserValueState(e.target.value);
    } else {
      setNanErr(null);
      setUserValueState(e.target.value);
    }
  };
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={handleChange}
          className="input"
          value={userValueState}
        />
      </form>
    </div>
  );
}

export default Input;
