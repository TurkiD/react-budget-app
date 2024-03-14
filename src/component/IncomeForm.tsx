import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { ScrollArea, Flex, Text, Button, Box } from "@radix-ui/themes";
import { SubmitHandler, useForm } from "react-hook-form";

type IncomeType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
};

type IncomeFormProps = {
  onGetTotalIncomeAmount: (amount: number) => void;
};

const IncomeForm = (props: IncomeFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IncomeType>();

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
  const submittedData: SubmitHandler<IncomeType> = (data) => {
    // event.preventDefault();

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
      <form onSubmit={handleSubmit(submittedData)}>
        <div className="form-field">
          <label htmlFor="source">Income source:</label>
          <input
            className="input-field"
            type="text"
            {...register("source", {
              required: "Income source is required",
              minLength: {
                value: 2,
                message: "Income source should have at least 2 characters",
              },
            })}
            placeholder="Source"
            value={income.source}
            onChange={handleChange}
          />
          {errors.source && (
            <span style={{ color: "red" }}> {errors.source.message}</span>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="amount">Amount of income:</label>
          <input
            className="input-field"
            type="number"
            {...register("amount", {
              min: { value: 10, message: "Minimum income should be 10" },
            })}
            value={income.amount}
            onChange={handleChange}
          />
          {errors.amount && (
            <span style={{ color: "red" }}> {errors.amount.message}</span>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="date">Date of income:</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            value={income.date}
            onChange={handleChange}
          />
          {errors.date && (
            <span style={{ color: "red" }}> {errors.date.message}</span>
          )}
        </div>
        <button className="btn">Add Income</button>
      </form>

      {/* list array of items */}
      <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
        <ul>
          {incomes.length > 0 &&
            incomes.map((income) => {
              return (
                <li key={income.id}>
                  {income.source}: {income.amount} EUR on {income.date}
                  <button onClick={() => handleIncomeDelete(income.id)}>
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

export default IncomeForm;
