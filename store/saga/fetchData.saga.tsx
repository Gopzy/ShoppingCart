import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

export function* fetchDataSaga({ payload }) {
  try {
    // "https://fakestoreapi.com/products"
    const {
      data: { data },
    } = yield call(
      axios.get,
      "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json"
    );
    // console.log("saga response", data);

    yield put({ type: "FETCH_DATA_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_DATA_ERROR", payload: error });
  }
}

// export function* addToCartSaga({ payload }) {
//   console.log("addToCartSaga >>>>>>", payload);
//   try {
//     yield put({ type: "ADD_TO_CARD_REQUEST", payload: payload });
//   } catch (error) {
//     yield put({ type: "ADD_TO_CARD_ERROR", payload: error });
//   }
// }

export function* watchFetchData() {
  yield takeLatest("FETCH_DATA", fetchDataSaga);
  // yield takeLatest("ADD_TO_CARD", addToCartSaga);
}
