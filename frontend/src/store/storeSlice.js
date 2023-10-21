import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const updatedItems = [...state.items, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      state.items = updatedItems
    },

    removeFromCart: (state,action) => {
        const updatedItems = state.items.filter(
          (item) => item.id !== action.payload
        );
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        state.items = updatedItems
    },
    clearCart: (state) => {
      localStorage.removeItem("cartItems");
      state.items = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } =
  storeSlice.actions;

export default storeSlice.reducer;
