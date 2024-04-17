import { dummyProducts } from "@/dummy/productDummy";
import AdBanner from "../component/MainPage/AdBanner"
import Categories from "../component/MainPage/SampleProduct"
import ProductItems from './../component/MainPage/ProductItems';
import { useState } from "react";

// 카테고리 contextapi 써서 사용해야겠다.
const MainPage = () => {

  const [filter, setFilter] = useState("ALL");

  return (
    <div className="flex flex-col">
      <AdBanner />
      <Categories setFilter={setFilter} />
      <ProductItems products={dummyProducts} category={filter}/>
    </div>
  )
}

export default MainPage