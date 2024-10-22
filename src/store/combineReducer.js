import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from './themeSlice';
import cartReducer from './cartSlice';

const rootReducer =combineReducers({
    themeStore : themeReducer,
    cartStore : cartReducer
})

export default rootReducer;