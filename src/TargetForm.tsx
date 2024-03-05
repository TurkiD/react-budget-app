import React from "react";
import "./App.css";

function TargetForm() {
  return (
    <div className="card">
      <form action="">
        <div className="form-field">
          <label htmlFor="target">Set target</label>
          <input type="text" name="target" id="target" required />
          <button type="submit">Reset</button>
        </div>
      </form>
      <p>Target: 4000</p>
      <p>Current saving: 1000</p>
      <p>
        <progress max={5000} value={1000}/>
      </p>
    </div>
  );
}

export default TargetForm;
