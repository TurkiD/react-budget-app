import { Flex, Text, Button } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import IncomeForm from "./component/IncomeForm";
import ExpenseForm from "./component/ExpenseForm";
import TargetForSaving from "./component/TargetForSaving";
import TransferForSaving from "./component/TransferForSaving";
import "./index.css";
import { useState } from "react";

export default function MyApp() {
  const [savingAmount, setSavingAmount] = useState(0);
  const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);

  // State lifting here
  const getSavingAmount = (amount: number) => {
    setSavingAmount(amount);
  };

  const getTotalIncomeAmount = (amount: number) => {
    setTotalIncomeAmount(amount);
    console.log(totalIncomeAmount);
  };

  return (
    <>
      <div className="container">
        <IncomeForm onGetTotalIncomeAmount={getTotalIncomeAmount} />
        <ExpenseForm />
        <TargetForSaving savingAmount={savingAmount} />
        <TransferForSaving OnGetSavingAmount={getSavingAmount} totalIncomeAmount={totalIncomeAmount}/>
      </div>
    </>
  );
}
