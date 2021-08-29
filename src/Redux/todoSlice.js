import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};
const todoSlice = createSlice({
  name: "second",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },

    del: (state, action) => {
      var arr = state.value.filter((item, index) => {
        return index !== action.payload.in;
      });
      state.value = arr;
    }
  }
});

export const { add, del } = todoSlice.actions;
export default todoSlice.reducer;
