type cartItems = {
  noOfItem: number;
  totlaAmount: number;
  product: Object;
};

const initialState = {
  cart: [],
};

const addToCart = (state, payload) => {
  console.log("addToCart >>>>>", state, payload);

  const itemPresent = state.cart.find((item) => item.id === payload.id);
  if (itemPresent) {
    itemPresent.quantity++;
  } else {
    state.cart.push({ ...payload, quantity: 1 });
  }
};

const CartReducer = (state = initialState, action) => {
  // console.log("CartReducer  ||||||||", initialState, action);
  switch (action.type) {
    case "ADD_TO_CARD":
      return addToCart(state, action.payload);

    case "REMOVE_FROM_CART":
    // return removeFromCart(state, action.payload);

    case "CART_FAIL":
      return {
        ...state,
        cartData_error: action.payload,
      };
    default:
      return state;
  }
};

export default CartReducer;
