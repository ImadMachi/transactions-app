import React, { useState, useEffect, createRef } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../features/expensesSlice";
import ClassNames from "classnames";

const Transaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const onChange = (e) => {
    const value = e.target.value;
    if (e.target.name === "name") setName(value);
    else setAmount(value);
  };
  useEffect(() => {
    if (name && amount) {
      setError("");
    }
  }, [name, amount]);
  const ref = createRef();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      dispatch(addExpense({ name, amount }));
      setName("");
      setAmount("");
      setError("");
      ref.current.focus();
    } else setError("Please add a name and an amount");
  };
  const btnClassName = ClassNames({
    input: true,
    "input--button": true,
    "bg-green": name && amount,
  });
  return (
    <div className="transaction">
      <h2 className="transaction__title">Add new transaction</h2>
      <form className="form" onSubmit={onSubmit}>
        <p className="error-message">{error}</p>
        <label className="label" htmlFor="transaction-name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="transaction-name"
          className="input"
          placeholder="Enter name..."
          value={name}
          onChange={onChange}
          ref={ref}
        />
        <label className="label" htmlFor="transaction-value">
          Amount
        </label>
        <input
          type="number"
          name="amount"
          id="transaction-amount"
          className="input"
          placeholder="Enter amount..."
          value={amount}
          onChange={onChange}
        />
        <input type="submit" className={btnClassName} value="add transaction" />
      </form>
    </div>
  );
};

export { Transaction as default };
