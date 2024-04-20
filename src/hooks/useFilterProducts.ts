import { fetchProductList } from "@/api/products/fetchProductList";
import { Product } from "@/types/product.type"
import { useEffect, useState } from "react"

export const useFilterProducts = (filter: string) => {
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProductList();
      setInitialProducts(response);
    }

    getProducts();
  }, [])

  useEffect(() => {
    setProducts(initialProducts.filter((x) => (filter === "ALL") || (x.category === filter)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialProducts, filter])

  return products
}