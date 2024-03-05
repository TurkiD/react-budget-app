import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import "./App.css";
import { Flex, Text, Button, Box } from "@radix-ui/themes";

type IncomeType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
};

function ExpenseForm() {
  const [source, setSource] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [expenses, setExpenses] = useState<IncomeType[]>([]);

  const handleSourceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSource(value);
  };
  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAmount(Number(value));
  };
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDate(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // after clicking the submit button

    const expense = {
      id: uuidv4(),
      source: source,
      amount: amount,
      date: date,
    };

    setExpenses((prevExpenses) => [...prevExpenses, expense]);

    // reset state
    setSource("");
    setAmount(0);
    setSource("");
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="source">Expense source</label>
          <input
            type="text"
            placeholder="Bill"
            name="source"
            id="source"
            value={source}
            onChange={handleSourceChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="expense">Amount of expense</label>
          <input
            type="text"
            name="expense"
            id="expense"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="date">Date of expense</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <button>Add Expense</button>
      </form>

            {/* list array of items */}
            <ul>
        {expenses.map((expense) => {
          return <li key={expense.id}>{expense.source}: {expense.amount} EUR on {expense.date}</li>;
        })}
      </ul>
    </div>
  );
}

export default ExpenseForm;
