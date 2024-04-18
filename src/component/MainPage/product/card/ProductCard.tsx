import { Product } from "@/type/product.type";
import { ProductComponent } from "./ProductComponent";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ id, imageUrl, category, name }: Product) => {

  const navigate = useNavigate();

  return (
    <ProductComponent onClick={() => navigate(`/product/${id}`)}>
      <ProductComponent.Image imageUrl={imageUrl} className="rounded-xl h-fit w-80 transform transition-transform" />
      <ProductComponent.Category category={category} />
      <ProductComponent.Name name={name} />
    </ProductComponent>
  );
};