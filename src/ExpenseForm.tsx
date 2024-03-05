import React from "react";
import "./App.css";

function ExpenseForm() {
  return (
    <div className="card">
      <form action="">
        <div className="form-field">
          <label htmlFor="source">Expense source</label>
          <input
            type="text"
            placeholder="Bill"
            name="source"
            id="source"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="expense">Amount of expense</label>
          <input
            type="text"
            name="expense"
            id="expense"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="date">Date of expense</label>
          <input type="date" name="date" id="date" />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
