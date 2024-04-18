export interface Product {
  id: number;
  sellerId: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt?: Date;
}
