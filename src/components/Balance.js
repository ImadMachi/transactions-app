import React from "react";
import { useSelector } from "react-redux";
import {
  balanceSelector,
  incomesSelector,
  expensesSelector,
} from "../features/expensesSlice";

const Balance = () => {
  const balanceAmount = useSelector(balanceSelector);
  const incomeAmount = useSelector(incomesSelector);
  const expenseAmount = useSelector(expensesSelector);

  return (
    <div className="balance">
      <h2 className="balance__title">your balance</h2>
      <p className="balance__amount">${balanceAmount}</p>
      <div className="balance__explicit">
        <section className="income">
          <p className="income__title">income</p>
          <p className="income__amount">${incomeAmount}</p>
        </section>
        <section className="expense">
          <p className="expense__title">expense</p>
          <p className="expense__amount">${expenseAmount}</p>
        </section>
      </div>
    </div>
  );
};

export { Balance as default };
