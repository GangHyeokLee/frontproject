import { getProductList } from "@/api/products/getProductList";
import { Product } from "@/types/product.type"
import { useEffect, useState } from "react"

export const useFilterProducts = (filter: string) => {
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const get = async () => {
      const response = await getProductList();
      setInitialProducts(response);
    }

    get();
  }, [])

  useEffect(() => {
    setProducts(initialProducts.filter((x) => (filter === "ALL") || (x.category === filter)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialProducts, filter])

  return products
}