import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'cart',
  initialState: {
    showCart: false,
    cartData: {
      noOfItems: 0,
      itemsData: [],
      totalPrice: 0,
    },
  },

  reducers: {
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
    setCartData: (state, action) => {
      state.cartData.totalPrice += +action.payload?.price;

      state.cartData.itemsData.push(action.payload);

      state.cartData.noOfItems = state.cartData.itemsData.length;
    },
    removeCartData: (state, action) => {
      state.cartData.totalPrice -=
        +state.cartData.itemsData[action.payload]?.price;

      state.cartData.itemsData.splice(action.payload, 1);

      state.cartData.noOfItems = state.cartData.itemsData.length;
    },
  },
});

const { actions, reducer } = productsSlice;

export const { setShowCart, setCartData, removeCartData } = actions;

export default reducer;
