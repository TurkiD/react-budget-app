import React, { ChangeEvent, FormEvent, memo, useEffect, useState } from "react";

import { Flex, Text, Button } from "@radix-ui/themes";
import { SubmitHandler, useForm } from "react-hook-form";

type SavingProps = {
  savingAmount: number;
  OnGetTotalSaving: (amount: number) => void;
};

type Amount = {
  amount: number;
};

const TargetForSaving = (props: SavingProps) => {
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    // send total amount to App component
    props.OnGetTotalSaving(props.savingAmount);
  }, [props]);

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

    setAmount(0);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit(submittedData)}>
        <div className="form-field">
          <label htmlFor="amount">Set target:</label>
          <input
            className="input-field"
            type="number"
            {...register("amount", {required: true, min: {value: 0, message: "Minimum transfer value is 10"}})}
            value={amount}
            onChange={handleChange}
          />
          {errors.amount && (
            <span style={{ color: "red" }}> {errors.amount.message}</span>
          )}
        </div>
        <button className="btn">Reset</button>
      </form>

      <p>Target: {amount}</p>
      <p>Current saving: {props.savingAmount}</p>
      <p>
        Progress: {(props.savingAmount / amount) * 100}%
        <progress max={amount} value={props.savingAmount} />
      </p>
    </div>
  );
};

export default memo(TargetForSaving);
