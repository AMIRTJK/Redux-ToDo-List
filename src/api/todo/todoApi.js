import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3000/data";

// Async GET
export const getData = createAsyncThunk(
  "todo/getData",
  // Если в аргументе асинхронной функции не передаётся ничего просто указываем _
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await axios.get(API);
      return data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
// Async DELETE
export const deleteData = createAsyncThunk(
  "todo/deleteData",
  async function (clickedItem, { dispatch, getState }) {
    let text = getState().todo.data;
    try {
      const data = await axios.delete(`${API}/${clickedItem.id}`);
      dispatch(getData());
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
