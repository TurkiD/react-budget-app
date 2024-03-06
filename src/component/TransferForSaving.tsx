import React, { ChangeEvent, FormEvent, useState } from "react";
import { Flex, Text, Button } from "@radix-ui/themes";

type AmountSavingProps = {
  OnGetSavingAmount: (amount: number) => void;
  totalIncomeAmount: number
};

function TransferForSaving(props: AmountSavingProps) {
  const [amount, setAmount] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAmount(Number(value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    props.OnGetSavingAmount(Number(amount));
  };

  return (
    <div className="card">
      <p>Current balance: {props.totalIncomeAmount}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="source">Transfer to saving account</label>
          <input
            type="number"
            name="amount"
            id="amount"
            onChange={handleChange}
            required
          />
          <button>Transfer</button>
        </div>
      </form>
    </div>
  );
}

export default TransferForSaving;
