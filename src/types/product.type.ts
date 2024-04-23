export interface Product {
  id: string | number;
  sellerId: number;
  name: string;
  dir: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt?: Date;
}
