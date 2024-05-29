import React, { useState } from "react";
import ExpensesContent from "./ExpensesContent";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseCharts from "./ExpenseCharts";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("All");
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === "All") {
      return true;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseCharts expenses={filteredExpenses} />
        <ExpensesContent items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
