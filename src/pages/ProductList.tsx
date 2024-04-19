import { useState } from 'react'
import Categories from "../component/MainPage/ProductList"
import { dummyProducts } from "@/dummy/productDummy";
import { useFilterProducts } from "@/hooks/useFilterProducts";
import { ProductItems } from "component/MainPage/ProductItems";

export const ProductList = () => {

  const [filter, setFilter] = useState("ALL");
  const products = useFilterProducts(dummyProducts, filter);

  return (
    <div>
      <Categories setFilter={setFilter} />
      <ProductItems products={products} />
    </div>
  )
}