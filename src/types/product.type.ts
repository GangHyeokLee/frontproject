export interface Product {
  id: string;
  sellerId: number;
  name: string;
  dir: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt?: Date;
  quantity: number;
}

export interface CartProduct extends Product {
  quantity: number;
  isChecked?: boolean;
}