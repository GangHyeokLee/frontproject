import { deleteOrder } from "@/api/order/deleteOrder"
import { getOrders } from "@/api/order/getOrders"
import CartRow from "@/component/Cart/CartRow"
import { BuyButtons } from "@/component/Cart/product/BuyButtons"
import { TotalPrice } from "@/component/Cart/product/TotalPrice"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CartProduct } from "@/types"
import { useEffect, useState } from "react"



// 교보문고 보니까 장바구니에서 상품 수량 변경할 때마다 계속 요청 보냄 따라해야지
const CartPage = () => {

  const [cartProduct, setCartProduct] = useState<CartProduct[]>([]);
  const [headChecked, setHeadChecked] = useState(false);

  useEffect(() => {
    const get = async () => {
      const response = await getOrders();
      setCartProduct(response);
    }
    get();

  }, [])

  const handleAllClick = () => {
    setCartProduct(cartProduct?.map((x) => {
      return {
        ...x,
        isChecked: !headChecked
      }
    }));
    setHeadChecked(!headChecked);
  }

  const handleDelete = async (id: string) => {
    await deleteOrder(id).then(async () => {
      const response = await getOrders();
      setCartProduct(response);
    })

  }

  const handleCheckbox = (id: string) => {
    const idx = cartProduct.findIndex((x) => x.id == id);
    cartProduct[idx].isChecked = !cartProduct[idx].isChecked;
    setCartProduct([...cartProduct]);
  }

  return (
    <div className="w-full p-10">
      <div className="text-6xl font-bold border-b-4 border-b-gray-500 items-start pb-6">Shopping Cart</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/4 text-center">상품명</TableHead>
            <TableHead className="text-center w-1/4">가격</TableHead>
            <TableHead className="w-1/4 text-center">수량</TableHead>
            <TableHead className="text-center w-fit whitespace-nowrap">삭제</TableHead>
            <TableHead><Checkbox className="mr-5" onClick={handleAllClick} checked={headChecked} /></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartProduct && cartProduct.map((x) =>
            <CartRow product={x} key={x.id} handleDelete={handleDelete} handleCheckbox={handleCheckbox} />
          )}
        </TableBody>
      </Table>
      <TotalPrice
        productTypes={cartProduct.length}
        totalQuantity={cartProduct.reduce((prev, curr) => prev + curr.quantity, 0)}
        totalPrice={cartProduct.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)}
      />
      <BuyButtons />
    </div>
  )
}

export default CartPage