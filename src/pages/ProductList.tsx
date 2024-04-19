import { useState } from 'react'

import { dummyProducts } from "@/dummy/productDummy";
import { useFilterProducts } from "@/hooks/useFilterProducts";
import { ProductItems } from "component/MainPage/ProductItems";
import { CategoryList } from "component/MainPage/CategoryList";

export const ProductList = () => {

  const [filter, setFilter] = useState("ALL");
  const products = useFilterProducts(dummyProducts, filter);

  return (
    <div>
      <CategoryList setFilter={setFilter} />
      <ProductItems products={products} />
    </div>
  )
}