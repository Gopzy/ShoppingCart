export interface Reducers {
  products: ProductsType;
  cart: CartType;
}

export type ProductsType = {
  productData: [
    {
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
    }
  ];
};

export type productDataType = {
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

export type cardObjectType = {
  quantity: number;
  id: string;
  name: string;
  mainImage: string;
  description: string;
  amount: number;
  selectedSize: [];
};

export type CartType = {
  cart: [];
};

// export type ProductsType = {
//   productData: [];
// };
