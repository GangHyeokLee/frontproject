import { Product } from "@/types/product.type"
import { useEffect, useState } from "react"

export const useFilterProducts = (initialProducts: Product[], filter: string) => {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    setProducts(initialProducts.filter((x) => (filter === "ALL") || (x.category === filter)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  return products
}