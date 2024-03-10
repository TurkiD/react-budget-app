import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import "./App.css";
import { ScrollArea, Flex, Text, Button, Box } from "@radix-ui/themes";

type ExpenseType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
};

type ExpenseFormProps = {
  onGetTotalExpenseAmount: (amount: number) => void;
};

function ExpenseForm(props: ExpenseFormProps) {
  // use state
  const [expense, setExpense] = useState({
    source: "",
    amount: 0,
    date: "",
  });
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);

  // calculate the amount of incomes
  const totalAmount = expenses.reduce(
    (total, currentValue) => total + Number(currentValue.amount),
    0
  );
  // send total amount to App component
  props.onGetTotalExpenseAmount(totalAmount);

  // read input from user
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExpense((prevExpense) => {
      return { ...prevExpense, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // after clicking the submit button

    // adding ID for each expense
    const newExpense = {
      id: uuidv4(),
      ...expense,
    };

    // assign expense to an array
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

    // reset state
    setExpense({
      source: "",
      amount: 0,
      date: "",
    });
  };

  const handleExpenseDelete = (id: string | undefined) => {
    const filteredExpense = expenses.filter((expense) => expense.id !== id);
    setExpenses(filteredExpense);
  };

  // rendering
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="source">Expense source:</label>
          <input
            type="text"
            placeholder="Bill"
            name="source"
            value={expense.source}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="amount">Amount of expense:</label>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="date">Date of expense:</label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </div>
        <button>Add Expense</button>
      </form>

      {/* list array of items */}
      <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
        <ul>
          {expenses.map((expense) => {
            return (
              <li key={expense.id}>
                {expense.source}: {expense.amount} EUR on {expense.date}
                <button onClick={() => handleExpenseDelete (expense.id)} className="btn">
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}

export default ExpenseForm;
