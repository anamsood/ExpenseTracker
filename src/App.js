import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 100.1,
    date: new Date(2022, 9, 29),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 278.56,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e3",
    title: "New desk",
    amount: 300,
    date: new Date(2021, 6, 14),
  },
  {
    id: "e4",
    title: "New Laptop",
    amount: 450,
    date: new Date(2019, 8, 1),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
