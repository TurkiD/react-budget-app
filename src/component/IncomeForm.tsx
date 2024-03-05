import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Flex, Text, Button, Box } from "@radix-ui/themes";
// import "./App.css";

type IncomeType = {
  id?: string,
  source: string,
  amount: number,
  date: string
}

function IncomeForm() {
  const [source, setSource] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [incomes, setIncomes] = useState<IncomeType[]>([]);

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

    const income = {
      id: uuidv4(),
      source: source,
      amount: amount,
      date: date,
    };

    setIncomes((prevIncomes) => [...prevIncomes, income]);

    // reset state
    setSource("");
    setAmount(0);
    setSource("");
  };

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
            value={source}
            onChange={handleSourceChange}
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
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="date">Date of income</label>
          <input
            type="date"
            name="date"
            id=""
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <button type="submit">Add Income</button>
      </form>

      {/* list array of items */}
      <ul>
        {incomes.map((income) => {
          return <li key={income.id}>{income.source}: {income.amount} EUR on {income.date}</li>;
        })}
      </ul>
    </div>
  );
}

export default IncomeForm;
