const initialState = {
  productData: [],
  productData_error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_REQUEST":
      return {
        ...state,
        productData: [],
      };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        productData: action.payload,
      };
    case "GET_DATA_FAIL":
      return {
        ...state,
        productData_error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
