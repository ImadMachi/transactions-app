import React from "react";
import { useSelector } from "react-redux";
import Expense from "./Expense";

const History = () => {
  const expenses = useSelector((state) => state);
  return (
    <div className="history">
      <h2 className="history__title">history</h2>
      {expenses.length === 0 && (
        <p className="emptylist-message">add some transactions</p>
      )}
      {expenses.map((expense) => (
        <Expense key={expense.id} {...expense} />
      ))}
    </div>
  );
};

export { History as default };
