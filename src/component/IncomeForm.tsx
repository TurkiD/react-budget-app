import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Flex, Text, Button, Box } from "@radix-ui/themes";
// import "./App.css";

type IncomeType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
};

function IncomeForm() {
  const [income, setIncome] = useState({
    source: "",
    amount: 0,
    date: "",
  });
  const [incomes, setIncomes] = useState<IncomeType[]>([]);

  // reading input from user
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIncome((prevIncome) => {
      return {...prevIncome, [event.target.name]: event.target.value}
    });
  };

  // calculate the amount of incomes
  const totalAmount = incomes.reduce(
    (total, currentValue) => total + Number(currentValue.amount),
    0
  );
  console.log(totalAmount);

  // handling submit
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // after clicking the submit button
    // adding ID to each income
    const newIncome = {
      id: uuidv4(),
      ...income
    };

    // assign incomes to an array
    setIncomes((prevIncomes) => [...prevIncomes, newIncome]);

    // reset state
    setIncome({
      source: "",
      amount: 0,
      date: "",
    })
  };

  // rendering
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="source">Income source</label>
          <input
            type="text"
            placeholder="Salary"
            name="source"
            id="source"
            value={income.source}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="amount">Amount of income</label>
          <input
            type="number"
            placeholder=""
            name="amount"
            id="amount"
            value={income.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="date">Date of income</label>
          <input
            type="date"
            name="date"
            id=""
            value={income.date}
            onChange={handleChange}
            required
          />
        </div>
        <button>Add Income</button>
      </form>

      {/* list array of items */}
      <ul>
        {incomes.map((income) => {
          return (
            <li key={income.id}>
              {income.source}: {income.amount} EUR on {income.date}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default IncomeForm;
