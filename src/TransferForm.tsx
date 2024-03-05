import React from "react";
import "./App.css";

function TransferForm() {
  return (
    <div className="transfer-form">
      <p>Current balance: 0</p>
      <form action="">
        <div className="form-field">
          <label htmlFor="transfer">Transfer to saving account</label>
          <input type="text" name="transfer" id="transfer" required />
          <button type="submit">Transfer</button>
        </div>
      </form>
    </div>
  );
}

export default TransferForm;
