import { getReceipt } from "@/api/order/getReceipt";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Button } from "component/Auth";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export const ReceiptPage = () => {
  // 주문 결과 받는 로직있을 것
  // 얘는 요구사항 변경될 거 같지 않으니 그냥 여기서 받고 다 하자
  const id = useParams().id;
  const navigate = useNavigate();
  const [payPrice, setPayPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [deliveryMemo, setDeliveryMemo] = useState("");
  const [orderDate, setOrderDate] = useState(new Date());
  useEffect(() => {

    const get = async () => {
      if (id) {
        const response = await getReceipt(id);
        if (response) {
          setPayPrice(response.price);
          setAddress(response.address);
          setDeliveryMemo(response.message);
          setOrderDate(new Date(response.createdAt));
        }
      }
    }
    get();
  }, [id])
  return (
    <div className="flex justify-center w-full p-10">
      <div className="w-fit">
        <p className="text-6xl text-center font-bold">주문완료</p>
        <Table className="mt-10 text-xl">
          <TableBody>
            <TableRow>
              <TableCell className="text-right">주문일시</TableCell>
              <TableCell>{orderDate.toLocaleDateString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-right">결제금액</TableCell>
              <TableCell>{payPrice.toLocaleString()} 원</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-right">배송지</TableCell>
              <TableCell>{address}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-right">배송메모</TableCell>
              <TableCell>{deliveryMemo}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button name="홈으로" onClick={() => { navigate('/') }} />
      </div>
    </div>
  )
}
