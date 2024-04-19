import { dummyProducts } from "@/dummy/productDummy";
import AdBanner from "../component/MainPage/AdBanner"
import Categories from "../component/MainPage/ProductList"
import { useState } from "react";
import { ProductItems } from "component/MainPage/ProductItems";
import { useFilterProducts } from "@/hooks/useFilterProducts";

const MainPage = () => {

  const [filter, setFilter] = useState("ALL");
  const products = useFilterProducts([...dummyProducts], filter);

  return (
    <div className="flex flex-col">
      <AdBanner />
      <div className="mt-10 font-bold text-6xl flex justify-center">
        OOTD
      </div>
      <Categories setFilter={setFilter} />
      <ProductItems products={products} />
    </div>
  )
}

export default MainPage