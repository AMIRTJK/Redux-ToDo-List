import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../api/todo/todoApi";

const todo = createSlice({
  name: "todo",
  initialState: {
    data: [],
    loading: false,
    text: "aa",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default todo.reducer;
