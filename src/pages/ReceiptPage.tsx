import { Table, TableCell, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react"

export const ReceiptPage = () => {
  // 주문 결과 받는 로직있을 것
  // 얘는 요구사항 변경될 거 같지 않으니 그냥 여기서 받고 다 하자

  const [payPrice, setPayPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [deliveryMemo, setDeliveryMemo] = useState("");
  useEffect(() => {
    setPayPrice(1000000);
    setAddress("어디어디어디임");
    setDeliveryMemo("문 앞에 두고가시오")
  }, [])
  return (
    <div className="flex justify-center w-full p-10">
      <div className="w-fit">
        <p className="text-6xl text-center font-bold">주문완료</p>
        <Table className="mt-10 text-xl">
          <TableRow>
            <TableCell className="text-right">주문일시</TableCell>
            <TableCell>{new Date().toLocaleString()}</TableCell>
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
        </Table>
      </div>
    </div>
  )
}
