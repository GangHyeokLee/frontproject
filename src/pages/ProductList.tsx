import { useState } from 'react'
import { useFilterProducts } from "@/hooks/useFilterProducts";
import { ProductItems } from "component/MainPage/ProductItems";
import { CategoryList } from "component/MainPage/CategoryList";

const ProductList = () => {

  const [filter, setFilter] = useState("ALL");
  const products = useFilterProducts(filter);

  return (
    <>
      <CategoryList setFilter={setFilter} />
      <ProductItems products={products} />
    </>
  )
}

export default ProductList