import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.js";
import modalReducer from "./features/modal/modalSlice.js";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = () => useSelector();
