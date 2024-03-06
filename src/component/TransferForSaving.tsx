import React, { ChangeEvent, FormEvent, useState } from "react";
import { Flex, Text, Button } from "@radix-ui/themes";

function TransferForSaving() {
  const [amount, setAmount] = useState<number>(0);

  const handleSourceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAmount(Number(value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(amount);
  }

  return (
    <div className="card">
      <p>Current balance: 0</p>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="source">Transfer to saving account</label>
          <input
            type="number"
            name="amount"
            id="amount"
            onChange={handleSourceChange}
            required
          />
          <button>Transfer</button>
        </div>
      </form>
    </div>
  );
}

export default TransferForSaving;
