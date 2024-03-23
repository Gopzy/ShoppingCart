import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

export function* getProductSaga({ success, failed }) {
  try {
    const {
      data: { data },
    } = yield call(
      axios.get,
      "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json"
    );
    success?.();
    yield put({ type: "GET_DATA_SUCCESS", payload: data });
  } catch (error) {
    failed?.();
    yield put({ type: "GET_DATA_ERROR", payload: error });
  }
}

export function* watchFetchData() {
  yield takeLatest("GET_DATA", getProductSaga);
}
