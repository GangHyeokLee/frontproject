
interface TotalPriceProps {
  productTypes: number;
  totalQuantity: number;
  totalPrice: number;
}
export const TotalPrice = ({ productTypes, totalQuantity, totalPrice }: TotalPriceProps) => {
  return (
    <div className="text-2xl mt-5">
      <div className="flex">
        <p className="mr-10">총 주문 상품</p>
        <p>{productTypes}종 {totalQuantity}개</p>
      </div>
      <div className="flex">
        <p className="mr-10">총 상품 가격</p> <p>{totalPrice.toLocaleString()} 원</p>
      </div>
    </div>
  )
}
