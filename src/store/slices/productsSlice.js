import { createSlice } from '@reduxjs/toolkit';

import allProductsData from './../../utils/services/api.json';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: allProductsData,
    singleProduct: allProductsData[4],
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },

    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
  },
});

const { actions, reducer } = productsSlice;

export const { setAllProducts, setSingleProduct } = actions;

export default reducer;
