import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCartSlice: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeFromCart;
    },
    decrementQty: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent.quantity == 1) {
        const removeFromCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeFromCart;
      } else {
        itemPresent.quantity--;
      }
    },
  },
});

export const { addToCartSlice, removeFromCart, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;
