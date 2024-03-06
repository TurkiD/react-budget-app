import { Flex, Text, Button } from '@radix-ui/themes';
import "@radix-ui/themes/styles.css";
import IncomeForm from "./component/IncomeForm";
import ExpenseForm from "./component/ExpenseForm";
import TargetForSaving from "./component/TargetForSaving";
import TransferForSaving from "./component/TransferForSaving";
import "./index.css";

export default function MyApp() {
  return (
    <>
     <div className="container">
    <IncomeForm />
    <ExpenseForm />
    <TargetForSaving />
    <TransferForSaving />
    </div>
    </>
  );
}