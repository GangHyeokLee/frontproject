export interface Product {
  id: number;
  sellerId: number;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt?: Date;
}
