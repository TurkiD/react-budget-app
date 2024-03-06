import { Flex, Text, Button } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import IncomeForm from "./component/IncomeForm";
import ExpenseForm from "./component/ExpenseForm";
import TargetForSaving from "./component/TargetForSaving";
import TransferForSaving from "./component/TransferForSaving";
import "./index.css";
import { useState } from "react";

export default function MyApp() {
  // State lifting here
  const [savingAmount, setSavingAmount] = useState(0);
  const getSavingAmount = (amount: number) => {
    setSavingAmount(amount);
  };

  // const getTotalIncomeAmount = (totalAmount) => {

  // }

  return (
    <>
      <div className="container">
        <IncomeForm />
        <ExpenseForm />
        <TargetForSaving savingAmount={savingAmount} />
        <TransferForSaving OnGetSavingAmount={getSavingAmount} />
      </div>
    </>
  );
}
