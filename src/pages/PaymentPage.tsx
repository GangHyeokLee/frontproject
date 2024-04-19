import { dummyProducts } from "@/dummy/productDummy";
import { OrderTable } from "@/component/Payment/OrderItems/OrderTable";
import { CustomerInfo } from "@/component/Payment/customer/CustomerInfo";
import { Pay } from "@/component/Payment/OrderItems/Pay";
import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {

  const navigate = useNavigate();
  // 주문누르면 선택한 상품에 대한 정보 백으로 보내고
  // 이페이지로 넘어오면서 다시 해당 정보 가져와야함
  // 결제수단이랑 이런건 나중에
  const handlePay = () => {
    console.log('결제완료');
    navigate('/receipt/10')

  }

  return (
    <div className="w-full p-10">
      <p className="text-6xl font-bold border-b-4 border-b-gray-500 items-start pb-6">주문/결제</p>
      <CustomerInfo />
      <OrderTable basketItems={dummyProducts} />
      <Pay finalPay={dummyProducts.reduce((prev, curr) => prev + curr.quantity * curr.price, 0).toLocaleString()} handlePay={handlePay} />
    </div>
  )
}
