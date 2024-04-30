import { CartProduct } from "./product.type";

export interface Receipt {
  address: string;
  createdAt: Date;
  products: CartProduct[];
  price: number;
  message: string;
  receiver: string;
}