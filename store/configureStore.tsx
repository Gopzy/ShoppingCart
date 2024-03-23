import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/productsReducer";

import createSagaMiddleware from "redux-saga";
import { watchFetchData } from "./saga/fetchData.saga";
import { cartReducer } from "./reducer/cardReducer";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer.reducer,
  },
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchData);
