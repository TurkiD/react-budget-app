import { Flex, Text, Button } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import "/src/index.css";
import IncomeForm from "../component/IncomeForm";
import ExpenseForm from "../component/ExpenseForm";
import TargetForSaving from "../component/TargetForSaving";
import TransferForSaving from "../component/TransferForSaving";
import { useCallback, useState } from "react";

export default function App() {
  const [savingAmount, setSavingAmount] = useState(0);
  const [saving, setSaving] = useState(0);
  const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);
  const [totalExpenseAmount, setTotalExpenseAmount] = useState(0);

  // State lifting here
  const getSavingAmount = useCallback( 
    (amount: number) => {
      setSavingAmount(amount);
    },
    []
  )

  const getTotalSaving = useCallback(
    (amount: number) => {
      setSaving(amount);
    },
    [],
  )

  const getTotalIncomeAmount = useCallback(
    (amount: number) => {
      setTotalIncomeAmount(amount);
    },
    [],
  )

  const getTotalExpenseAmount = useCallback(
    (amount: number) => {
      setTotalExpenseAmount(amount);
    },
    [],
  )

  return (
    <>
      <div className="container">
        <IncomeForm onGetTotalIncomeAmount={getTotalIncomeAmount} />
        <ExpenseForm onGetTotalExpenseAmount={getTotalExpenseAmount} />
        <TargetForSaving
          OnGetTotalSaving={getTotalSaving}
          savingAmount={savingAmount}
        />
        <TransferForSaving
          OnSetSavingAmount={getSavingAmount}
          totalIncomeAmount={totalIncomeAmount}
          totalExpenseAmount={totalExpenseAmount}
          saving={saving}
        />
      </div>
    </>
  );
}
