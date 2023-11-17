import { configureStore } from "@reduxjs/toolkit";
import todo from "../reducers/todo";

export const store = configureStore({
  reducer: {
    todo: todo,
  },
});
