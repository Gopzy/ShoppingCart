export interface Reducers {
  products: ProductsType;
  cart: CartType;
}

export type ProductsType = {
  SKU: number;
  brandName: string;
  colour: string;
  description: string;
  id: string;
  mainImage: string;
  name: string;
  price: { amount: number; currency: "GBP" };
  sizes: [];
  stockStatus: "IN STOCK" | "OUT OF STOCK";
};

export type CartType = {
  cart: [];
};
