import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/productsReducer";
import CartReducer from "./reducer/CartReducer";
import createSagaMiddleware from "redux-saga";
import { watchFetchData } from "./saga/fetchData.saga";
import { cartSlice } from "./reducer/cardSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: CartReducer,
    cartSlice: cartSlice.reducer,
  },
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchData);
