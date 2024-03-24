import { GET_PRODUCTS } from "./actionType";

const getProducts = (success?: Function, failed?: Function) => ({
  type: GET_PRODUCTS,
  success,
  failed,
});

export default getProducts;
