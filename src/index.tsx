import React from "react";

import { Theme, ThemePanel, Grid } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import { v4 as uuidv4 } from 'uuid';

import ReactDOM from "react-dom/client";
import "./index.css";
import IncomeForm from "./component/IncomeForm";
import ExpenseForm from "./component/ExpenseForm";
import TargetForm from "./component/TargetForm";
import TransferForm from "./component/TransferForm";
import MyApp from "./component/MyApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div className="container">
        <IncomeForm />
        <ExpenseForm />
        <TargetForm />
        <TransferForm />
  </div>
);
