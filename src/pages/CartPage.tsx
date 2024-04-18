import CartRow from "@/component/Cart/CartRow"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { dummyProducts } from "@/dummy/productDummy"
import { useEffect, useState } from "react"

// 교보문고 보니까 장바구니에서 상품 수량 변경할 때마다 계속 요청 보냄 따라해야지
const CartPage = () => {


  const [cartProduct, setCartProduct] = useState(dummyProducts);
  const [headChecked, setHeadChecked] = useState(false);
  const [productChecked, setProductChecked] = useState<boolean[]>();

  useEffect(() => {
    const len = cartProduct.length
    setProductChecked(new Array(len).fill(false));

  }, [cartProduct])

  const handleAllClick = () => {
    setHeadChecked(!headChecked);
    setProductChecked(productChecked?.map((_) => headChecked));
  }

  return (
    <div className="w-full p-10">
      <div className="text-6xl font-bold border-b-4 items-start pb-6">Shopping Cart</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/4 text-center">상품명</TableHead>
            <TableHead className="text-center w-1/4">가격</TableHead>
            <TableHead className="w-1/4 text-center">수량</TableHead>
            <TableHead className="text-center w-fit">삭제</TableHead>
            <TableHead><Checkbox className="mr-5" onClick={handleAllClick} checked={headChecked} /></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartProduct.map((x) =>
            <CartRow product={x} key={x.id} setCartProduct={setCartProduct} cartProduct={cartProduct} />
          )}
        </TableBody>
      </Table>
      <div>Total Price</div>
      <div>Buttons</div>
    </div>
  )
}

export default CartPage