import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.selectedSize === action.payload.selectedSize
          )
      );
      state.cart = removeFromCart;
    },
    decrementQty: (state, action) => {
      const itemPresent = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize
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

export const { addToCart, removeFromCart, decrementQty } = cartReducer.actions;

export default cartReducer.reducer;
