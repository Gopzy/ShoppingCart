import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
} from "../action/actionType";

const AMAZON_API =
  "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json";

export function* getProductSaga({ success, failed }) {
  try {
    const {
      data: { data },
    } = yield call(axios.get, AMAZON_API);
    success?.();
    yield put({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    failed?.();
    yield put({ type: GET_PRODUCTS_FAILED, payload: error });
  }
}

export function* watchGetProduct() {
  yield takeLatest(GET_PRODUCTS, getProductSaga);
}
