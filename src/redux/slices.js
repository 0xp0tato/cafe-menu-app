import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    incrementToCart: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload.id);

      itemInCart
        ? itemInCart.quantity++
        : state.push({ ...action.payload, quantity: 1 });
    },
    decrementToCart: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      const itemInCart = state[itemIndex];

      if (state[itemIndex].quantity === 1) {
        const updatedCart = [
          ...state.slice(0, itemIndex),
          ...state.slice(itemIndex + 1),
        ];
        return updatedCart;
      } else {
        itemInCart.quantity--;
      }
    },

    emptyCart: () => {
      return [];
    },
  },
});

export default cartSlice.reducer;
export const { incrementToCart, decrementToCart, emptyCart } =
  cartSlice.actions;
