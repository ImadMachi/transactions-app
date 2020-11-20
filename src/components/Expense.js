import React from "react";
import { useDispatch } from "react-redux";
import { removeExpense } from "../features/expensesSlice";
import classNames from "classnames";

const Expense = ({ id, name, amount }) => {
  const dispatch = useDispatch();
  const ExpenseClass = classNames({
    elem: true,
    green: amount >= 0,
    red: amount < 0,
  });
  return (
    <div className={ExpenseClass}>
      <button
        className="elem__delete"
        onClick={() => dispatch(removeExpense(id))}
      >
        X
      </button>
      <span className="elem__name">{name}</span>
      <span className="elem__amount">{amount}</span>
    </div>
  );
};

export { Expense as default };
