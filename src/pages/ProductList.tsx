import React, { useState } from 'react'
import Categories from "../component/MainPage/ProductList"
import ProductItems from './../component/MainPage/ProductItems';
import { dummyProducts } from "@/dummy/productDummy";

const ProductList = () => {

  const [filter, setFilter] = useState("ALL");

  return (
    <div>
      <Categories setFilter={setFilter} />
      <ProductItems products={dummyProducts} category={filter} />
    </div>
  )
}

export default ProductList