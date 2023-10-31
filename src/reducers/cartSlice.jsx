import { createSlice } from "@reduxjs/toolkit";

const initialState = {products:[]};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
          state.products.push(action.payload);
          console.log(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
