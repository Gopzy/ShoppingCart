import React from "react";

const initialState = {
  productData: [],
  productData_error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        productData: [],
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        productData: action.payload,
      };
    case "FETCH_DATA_FAIL":
      return {
        ...state,
        productData_error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
