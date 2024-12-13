import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    price: 0,
  },
  reducers: {
    addItems: (state, action) => {
      const cartItems = state.cart.find(
        (item) =>
          item._id === action.payload._id && item.selectedSize === action.payload.selectedSize
      );
      if (cartItems) {
        cartItems.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.price = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (each) => each._id !== action.payload._id || each.selectedSize !== action.payload.selectedSize
      );
      state.price = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    decreaseQuantity: (state, action) => {
      const cartItem = state.cart.find(
        (item) =>
          item._id === action.payload._id && item.selectedSize === action.payload.selectedSize
      );
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      }
      state.price = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
});

export const { addItems, removeItem, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
