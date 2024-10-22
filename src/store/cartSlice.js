import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
    
        item.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
      // state.cart.splice(action.payload,1);
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else if (item) {
        state.cart = state.cart.filter(item => item.id !== action.payload);
      }
    },
    
  },
});

export const { addToCart, removeCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
