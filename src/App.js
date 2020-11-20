import React from "react";
import Balance from "./components/Balance";
import History from "./components/History";
import Transaction from "./components/Transaction";

const App = () => {
  return (
    <main className="main">
      <h1 className="main__title">expense tracker</h1>
      <Balance />
      <History />
      <Transaction />
    </main>
  );
};

export { App as default };
