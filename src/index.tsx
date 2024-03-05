import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import TargetForm from "./TargetForm";
import TransferForm from "./TransferForm";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div className="container">
      <React.StrictMode>
    {/* <App /> */}
    <IncomeForm />
    <ExpenseForm />
    <TargetForm />
    <TransferForm />
  </React.StrictMode>
  </div>
);
