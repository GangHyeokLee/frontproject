import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from "../../types/product.type";

interface ProductCardProps { product: Product }

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const [productImg, setProductImg] = useState('');

  useEffect(() => {
    const fetchPostImg = async () => {
      // const response = await fetchImgFromFirebase(imgUrl);
      // setPostImg(response);
      setProductImg(product.imageUrl)
    };
    fetchPostImg();
  }, [product]);

  return (
    <div
      className="w-fit mx-8 mb-8 flex flex-col items-start cursor-pointer transform transition-transform hover:scale-110 hover:z-10 hover:bg-white"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="mb-3">
        <img
          src={productImg}
          alt="상품 이미지"
          className="rounded-xl h-fit w-80 transform transition-transform"
        />
      </div>
      <div className="flex flex-row w-full justify-start text-xs h-6">
        <div
          className={`text-white px-3 py-1 rounded-full h-fit w-fit text-center mr-5 bg-${product.category}`}
        >
          {product.category}
        </div>
      </div>
      <div>{product.name}</div>
    </div>
  );
};

export default ProductCard;
