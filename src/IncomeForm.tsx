import React from "react";
import "./App.css";

function IncomeForm() {
  return (
    <div className="card">
      <form action="">
        <div className="form-field">
          <label htmlFor="source">Income source</label>
          <input type="text" placeholder="Salary" name="source" id="source" required />
        </div>
        <div className="form-field">
          <label htmlFor="income">Amount of income</label>
          <input type="text" placeholder="" name="income" id="income" required />
        </div>
        <div className="form-field">
          <label htmlFor="date">Date of income</label>
          <input type="date" name="date" id="" />
        </div>
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
}

export default IncomeForm;
