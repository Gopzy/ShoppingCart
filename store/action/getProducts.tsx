const getProducts = (success?: Function, failed?: Function) => ({
  type: "GET_DATA",
  success,
  failed,
});

export default getProducts;
