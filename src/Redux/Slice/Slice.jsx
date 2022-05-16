import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addplayer: (state, action) => {
      state.data.push(action.payload);
      //state.data[state.data.length] = action.payload;
      //state.data = [...state.data, action.payload];
    },
    removeplayer: (state, action) => {
      // tought wrong in tutorial
      // ==> return state.data.filter((item) => item.id !== action.payload);
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addplayer, removeplayer } = cartSlice.actions;
export default cartSlice.reducer;
