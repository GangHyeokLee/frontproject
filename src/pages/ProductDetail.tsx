import { getProduct } from "@/api/products/getProduct";
import { Button } from "@/components/ui/button";
import { storage } from "@/firebase";
import { Product } from "@/types/product.type";
import { getDownloadURL, ref } from "firebase/storage";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


const ProductDetail = () => {

  const id = useParams().id;
  const [product, setProduct] = useState<Product>();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const isSeller = localStorage.getItem('isSeller');
  const [imageUrl, setImageUrl] = useState("");


  useEffect(() => {
    const get = async () => {
      if (id) {
        const response = await getProduct(id);
        if (response) {
          setProduct(response);
          const url = await getDownloadURL(ref(storage, response.imageUrl));
          setImageUrl(url);
        }
      }
    }
    get();
  }, [id])

  return (
    <div className="w-full p-10">
      <Button variant="outline" className="mb-5" size="icon" onClick={() => navigate('/products')}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="w-full flex justify-between mb-20">
        <div className="mr-28 w-fit">
          <img src={imageUrl} className="w-96 h-96" />
        </div>
        <div className="flex flex-col justify-start flex-grow border-t-4 border-t-black pt-8">
          <div className="text-3xl font-extrabold pb-10">{product?.name}</div>
          <div className="flex items-end mb-8">
            <p className="text-2xl font-bold">{product?.price.toLocaleString()}</p>
            <p>&nbsp;원</p></div>
          <div className="flex justify-start text-sm">
            <p className="w-48">배송정보</p>
            <span>
              <p className="mb-2">일반 출고</p>
              <span className="flex">
                <p className="text-blue-700">2일 이내 &nbsp;</p>
                출고 (주말, 공휴일 제외)
              </span>
            </span>
          </div>
          <div className="flex justify-start text-sm mt-8">
            <p className="w-48">배송비</p>
            <span>
              <p className="mb-2">무료 배송</p>
              <p className="flex">
                제주도를 포함한 도서/산간지역은 추가배송비 3,000원
              </p>
            </span>
          </div>
          <div className="flex justify-between pr-20 mt-8 items-center">
            <span className="flex items-center">
              <Button onClick={() => { setQuantity(quantity + 1) }} className="bg-white text-black border-2 mr-5 hover:bg-white" size="icon" ><Plus className="h-4 w-4" /></Button>
              <p className="text-xl">{quantity}</p>
              <Button onClick={() => { setQuantity((quantity - 1) > 0 ? (quantity - 1) : 1) }} className="bg-white text-black border-2 ml-5 hover:bg-white" size="icon" ><Minus className="h-4-w-4" /></Button>
            </span>
            <p>{product ? (quantity * product.price).toLocaleString() : 0} 원</p>
          </div>
          <div className="mt-12 flex justify-between">
            {
              isSeller ?
                <Button className="text-2xl px-10 py-5 h-fit bg-white border-2 text-black w-full hover:bg-gray-300" onClick={() => navigate(`/edit/${id}`)}>수정하기</Button>
                :
                <>
                  <Button className="text-2xl px-10 py-5 h-fit bg-white border-2 text-black w-full hover:bg-gray-300">장바구니 담기</Button>
                  <Button className="text-2xl px-10 py-5 h-fit w-full ml-6">바로 구매</Button>
                </>
            }
          </div>
        </div>
      </div>
      <p>{product?.description}</p>
    </div>
  )
}

export default ProductDetail