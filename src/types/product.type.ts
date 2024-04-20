export interface Product {
  id: string | number;
  pid?: string;
  sellerId: number;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt?: Date;
}
