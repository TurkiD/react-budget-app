import React, { ChangeEvent, FormEvent, useState } from "react";
// import "./App.css";
import { Flex, Text, Button } from "@radix-ui/themes";

function TargetForSaving(props: { savingAmount: number }) {
  const [amount, setAmount] = useState<number>(0);

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
          <label htmlFor="source">Set target</label>
          <input
            type="text"
            name="source"
            id="source"
            onChange={handleSourceChange}
            required
          />
        </div>
        <button>Reset</button>
      </form>

      <p>Target: {amount}</p>
      <p>Current saving: {props.savingAmount}</p>
      <p>
        <progress max={5000} value={1000} />
      </p>
    </div>
  );
}

export default TargetForSaving;
