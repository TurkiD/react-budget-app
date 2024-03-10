import React, { ChangeEvent, FormEvent, useState } from "react";
import { Flex, Text, Button } from "@radix-ui/themes";

type AmountSavingProps = {
  OnSetSavingAmount: (amount: number) => void;
  totalIncomeAmount: number;
  totalExpenseAmount: number;
  saving: number;
};

function TransferForSaving(props: AmountSavingProps) {
  const [amount, setAmount] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAmount(Number(value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    props.OnSetSavingAmount(Number(amount));
    setAmount(0);
  };

  return (
    <div className="card">
      <p>
        Current balance:{" "}
        {props.totalIncomeAmount - props.totalExpenseAmount - props.saving}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="source">Transfer to saving account:</label>
          <input
            className="input-field"
            type="number"
            name="amount"
            value={amount}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn">Transfer</button>
      </form>
    </div>
  );
}

export default TransferForSaving;
