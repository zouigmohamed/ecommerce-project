import { createSlice } from "@reduxjs/toolkit";

const initialState = {value :20};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
          state.value += 1;
          console.log(state.value);
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
