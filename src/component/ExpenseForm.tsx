import React from "react";
// import "./App.css";
import { Flex, Text, Button, Box } from "@radix-ui/themes";

function ExpenseForm() {
  return (
    <div className="card">
      <form action="">
        <div>
          <label htmlFor="source">Expense source</label>
          <input
            type="text"
            placeholder="Bill"
            name="source"
            id="source"
            required
          />
        </div>
        <div>
          <div>
            <label htmlFor="expense">Amount of expense</label>
            <input type="text" name="expense" id="expense" required />
          </div>
          <div>
            <label htmlFor="date">Date of expense</label>
            <input type="date" name="date" id="date" />
          </div>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
