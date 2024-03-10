import React, { ChangeEvent, FormEvent, useState } from "react";
// import "./App.css";
import { Flex, Text, Button } from "@radix-ui/themes";

type SavingProps = {
  savingAmount: number;
  OnGetTotalSaving: (amount: number) => void;
};

function TargetForSaving(props: SavingProps) {
  const [amount, setAmount] = useState<number>(0);

  props.OnGetTotalSaving(props.savingAmount);

  const handleSourceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAmount(Number(value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="source">Set target:</label>
          <input
            className="input-field"
            type="text"
            name="source"
            onChange={handleSourceChange}
            required
          />
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
}

export default TargetForSaving;
