import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

export function* fetchDataSaga({ payload }) {
  try {
    const {
      data: { data },
    } = yield call(
      axios.get,
      "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json"
    );

    yield put({ type: "FETCH_DATA_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_DATA_ERROR", payload: error });
  }
}

export function* watchFetchData() {
  yield takeLatest("FETCH_DATA", fetchDataSaga);
}
