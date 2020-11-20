import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expensesSlice";

const store = configureStore({ reducer: expensesReducer });
export { store as default };
