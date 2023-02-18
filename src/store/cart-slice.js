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
      const indexItem = state.cartItems.findIndex(
        (ele) => ele.id === action.payload.newItem.id
      );

      if (state.cartItems[indexItem]) {
        const newAmount = Number(state.cartItems[indexItem].amount) + 1;

        state.cartItems[indexItem] = {
          ...state.cartItems[indexItem],
          amount: newAmount,
        };
      } else {
        state.cartItems = [...state.cartItems, action.payload.newItem];
      }
    },
    removeFromCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
