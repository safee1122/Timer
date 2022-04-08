import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../features/counter/reducer";

export const store = configureStore({
  reducer: {
    timer: Reducer,
  },
});
