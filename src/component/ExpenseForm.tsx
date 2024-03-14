import React, { ChangeEvent, FormEvent, memo, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { ScrollArea, Flex, Text, Button, Box } from "@radix-ui/themes";
import { SubmitHandler, useForm } from "react-hook-form";

type ExpenseType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
};

type ExpenseFormProps = {
  onGetTotalExpenseAmount: (amount: number) => void;
};

const ExpenseForm = (props: ExpenseFormProps) => {
  
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseType>();

  useEffect(() => {
    // send total amount to App component
    props.onGetTotalExpenseAmount(totalAmount);
  }, [expenses, totalAmount, props]);

  // read input from user
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExpense((prevExpense) => {
      return { ...prevExpense, [event.target.name]: event.target.value };
    });
  };

  const submittedData: SubmitHandler<ExpenseType> = (data) => {
    // event.preventDefault();
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
      <form onSubmit={handleSubmit(submittedData)}>
        <div className="form-field">
          <label htmlFor="source">Expense source:</label>
          <input
            type="text"
            placeholder="Bill"
            {...register("source", {
              required: "Expense source is required",
              minLength: {
                value: 2,
                message: "Expense source should have at least 2 characters",
              },
            })}
            value={expense.source}
            onChange={handleChange}
          />
          {errors.source && (
            <span style={{ color: "red" }}> {errors.source.message}</span>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="amount">Amount of expense:</label>
          <input
            className="input-field"
            type="number"
            {...register("amount", {
              min: { value: 10, message: "Minimum expense should be 10" },
            })}
            value={expense.amount}
            onChange={handleChange}
          />
          {errors.amount && (
            <span style={{ color: "red" }}> {errors.amount.message}</span>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="date">Date of expense:</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            value={expense.date}
            onChange={handleChange}
          />
          {errors.date && (
            <span style={{ color: "red" }}> {errors.date.message}</span>
          )}
        </div>
        <button className="btn">Add Expense</button>
      </form>

      {/* list array of items */}
      <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
        <ul>
          {expenses.map((expense) => {
            return (
              <li key={expense.id}>
                {expense.source}: {expense.amount} EUR on {expense.date}
                <button onClick={() => handleExpenseDelete(expense.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default memo(ExpenseForm);
