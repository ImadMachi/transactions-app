import { createSlice } from "@reduxjs/toolkit";

let expenseID = 0;

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push({ id: expenseID++, ...action.payload });
    },
    removeExpense: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

// selector of balance amount
const balanceSelector = (state) => {
  return state.reduce((acc, curr) => {
    acc += parseInt(curr.amount);
    return acc;
  }, 0);
};

// selector of incomes
const incomesSelector = (state) => {
  return state.reduce((acc, curr) => {
    const amount = parseInt(curr.amount);
    if (amount >= 0) acc += amount;
    return acc;
  }, 0);
};

// selector of expenses
const expensesSelector = (state) => {
  return Math.abs(
    state.reduce((acc, curr) => {
      const amount = parseInt(curr.amount);
      if (amount < 0) acc += amount;
      return acc;
    }, 0)
  );
};

export { balanceSelector, incomesSelector, expensesSelector };
export const { addExpense, removeExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
