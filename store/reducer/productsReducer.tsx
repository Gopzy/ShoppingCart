import {
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../action/actionType";

const initialState = {
  productData: [],
  productData_error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        productData: [],
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productData: action.payload,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        productData_error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
