import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/productsReducer";

import createSagaMiddleware from "redux-saga";
import { watchGetProduct } from "./saga/getProducts.saga";
import { cartReducer } from "./reducer/cardReducer";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer.reducer,
  },
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(watchGetProduct);
