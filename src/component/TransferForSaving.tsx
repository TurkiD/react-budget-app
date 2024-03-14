import React, { ChangeEvent, FormEvent, useState } from "react";

import { Flex, Text, Button } from "@radix-ui/themes";
import { SubmitHandler, useForm } from "react-hook-form";

// TODO: if the balance become less than zero when transfaring values make the button disabled

type AmountSavingProps = {
  OnSetSavingAmount: (amount: number) => void;
  totalIncomeAmount: number;
  totalExpenseAmount: number;
  saving: number;
};

type Amount = {
  amount: number;
};

function TransferForSaving(props: AmountSavingProps) {
  const [amount, setAmount] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Amount>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAmount(Number(value));
  };

  const submittedData: SubmitHandler<Amount> = (data) => {
    // event.preventDefault();

    props.OnSetSavingAmount(Number(amount));
    setAmount(0);
  };

  return (
    <div className="card">
      <p>
        Current balance:{" "}
        {props.totalIncomeAmount - props.totalExpenseAmount - props.saving}
      </p>
      <form onSubmit={handleSubmit(submittedData)}>
        <div className="form-field">
          <label htmlFor="amount">Transfer to saving account:</label>
          <input
            className="input-field"
            type="number"
            {...register("amount", {
              required: true,
              min: { value: 1, message: "Minimum transfer value is 10" },
            })}
            value={amount}
            onChange={handleChange}
          />
          {props.totalIncomeAmount - props.totalExpenseAmount - props.saving <=
          0 ? (
            <span style={{ color: "red" }}>Not enough balance</span>
          ) : (
            errors.amount && (
              <span style={{ color: "red" }}> {errors.amount.message}</span>
            )
          )}
        </div>
        <button className="btn">Transfer</button>
      </form>
    </div>
  );
}

export default TransferForSaving;
