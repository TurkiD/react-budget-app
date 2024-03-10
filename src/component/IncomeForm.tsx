import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ScrollArea, Flex, Text, Button, Box } from "@radix-ui/themes";
// import "./App.css";

type IncomeType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
};

type IncomeFormProps = {
  onGetTotalIncomeAmount: (amount: number) => void;
};

function IncomeForm(props: IncomeFormProps) {
  const [income, setIncome] = useState({
    source: "",
    amount: 0,
    date: "",
  });
  const [incomes, setIncomes] = useState<IncomeType[]>([]);

  // reading input from user
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIncome((prevIncome) => {
      return { ...prevIncome, [event.target.name]: event.target.value };
    });
  };

  // calculate the amount of incomes
  const totalAmount = incomes.reduce(
    (total, currentValue) => total + Number(currentValue.amount),
    0
  );

  useEffect(() => {
    // send total amount to App component
    props.onGetTotalIncomeAmount(totalAmount);
  }, [incomes, totalAmount, props]);

  // handling submit
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
    if (income.source && income.amount && income.date) {
          // after clicking the submit button
    // adding ID to each income
    const newIncome = {
      id: uuidv4(),
      ...income,
    };

    // assign incomes to an array
    setIncomes((prevIncomes) => [...prevIncomes, newIncome]);

    // reset state
    setIncome({
      source: "",
      amount: 0,
      date: "",
    });
    }
  };

  const handleIncomeDelete = (id: string | undefined) => {
    const filterdIncome = incomes.filter((income) => income.id !== id);
    setIncomes(filterdIncome);
  };

  // rendering
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="source">Income source:</label>
          <input
            className="input-field"
            type="text"
            placeholder="Salary"
            name="source"
            value={income.source}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="amount">Amount of income:</label>
          <input
            className="input-field"
            type="number"
            placeholder=""
            name="amount"
            value={income.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="date">Date of income:</label>
          <input
            type="date"
            name="date"
            value={income.date}
            onChange={handleChange}
            required
          />
        </div>
        <button>Add Income</button>
      </form>

      {/* list array of items */}
      <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
        <ul>
          {incomes.length > 0 && incomes.map((income) => {
            return (
              <li key={income.id}>
                {income.source}: {income.amount} EUR on {income.date}
                <button
                  onClick={() => handleIncomeDelete(income.id)}
                  className="btn"
                >
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

export default IncomeForm;
