import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartVisualizationStatus: false, cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    changeVisualization(state) {
      state.cartVisualizationStatus = !state.cartVisualizationStatus;
    },
    addToCart(state, action) {
      state.cartItems = [...state.cartItems, action.payload.newItem];
    },
    removeFromCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
