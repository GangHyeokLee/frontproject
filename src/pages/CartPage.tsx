import { deleteOrder } from "@/api/order/deleteOrder"
import { getOrders } from "@/api/order/getOrders"
import CartRow from "@/component/Cart/CartRow"
import { BuyButtons } from "@/component/Cart/product/BuyButtons"
import { TotalPrice } from "@/component/Cart/product/TotalPrice"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CartProduct } from "@/types"
import { useEffect, useState } from "react"

interface CartPageProps {
  onNext: () => void;
  setBuyProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}
const CartPage = ({ setBuyProducts, onNext }: CartPageProps) => {

  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [headChecked, setHeadChecked] = useState(false);

  useEffect(() => {
    const get = async () => {
      const response = await getOrders();
      setCartProducts(response);
    }
    get();

  }, [])

  const handleAllClick = () => {
    setCartProducts(cartProducts?.map((x) => {
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
      setCartProducts(response);
    })
  }

  // const handleDeleteAll = async () => {
  //   await deleteAllOrders().then(() => {
  //     setCartProduct([]);
  //   })
  // }

  const handleCheckbox = (id: string) => {
    const idx = cartProducts.findIndex((x) => x.id == id);
    cartProducts[idx].isChecked = !cartProducts[idx].isChecked;
    setCartProducts([...cartProducts]);
  }

  const handleBuyProducts = () => {
    setBuyProducts(cartProducts.filter((p) => p.isChecked));
    onNext();
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
          {cartProducts && cartProducts.map((x) =>
            <CartRow product={x} key={x.id} handleDelete={handleDelete} handleCheckbox={handleCheckbox} />
          )}
        </TableBody>
      </Table>
      <TotalPrice
        productTypes={cartProducts.length}
        totalQuantity={cartProducts.reduce((prev, curr) => prev + curr.quantity, 0)}
        totalPrice={cartProducts.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)}
      />
      <BuyButtons onNext={handleBuyProducts} />
    </div>
  )
}

export default CartPage