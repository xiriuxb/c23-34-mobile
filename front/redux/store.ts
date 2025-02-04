import { configureStore } from "@reduxjs/toolkit";
import payFy from "./slice/payFySlice";

export const store = configureStore({
  reducer: {
    payFy: payFy,
  },
});
