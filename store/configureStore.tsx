import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/productsReducer";

import createSagaMiddleware from "redux-saga";
import { watchFetchData } from "./saga/fetchData.saga";
import { cartSliceReducer } from "./reducer/cardSliceReducer";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartSliceReducer.reducer,
  },
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchData);
