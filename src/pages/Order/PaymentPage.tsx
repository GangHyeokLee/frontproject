import { OrderTable } from "@/component/Payment/OrderItems/OrderTable";
import { CustomerInfo } from "@/component/Payment/customer/CustomerInfo";
import { Pay } from "@/component/Payment/OrderItems/Pay";
import { CartProduct } from "@/types";
import { postPay } from "@/api/order/postPay";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface PaymentPageProps {
  buyProducts: CartProduct[];
  setBuyProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  onPrev: () => void;
}

export const PaymentPage = ({ buyProducts, setBuyProducts, onPrev }: PaymentPageProps) => {

  const navigate = useNavigate();
  const [orderMessage, setOrderMessage] = useState("");
  const [receiver, setReceiver] = useState("");
  const [address, setAddress] = useState("");
  const [price] = useState(buyProducts.reduce((prev, curr) => prev + curr.quantity * curr.price, 0));

  const handlePay = async () => {
    const response = await postPay(receiver, address, orderMessage, price, buyProducts);
    if (response) {
      window.alert('결제 완료!');
      navigate(`/receipt/${response.id}`, { replace: true });
    } else {
      window.alert('결제 실패')
    }

  }

  const handleCancel = () => {
    setBuyProducts([]);
    onPrev();
  }
  return (
    <div className="w-full p-10">
      <p className="text-6xl font-bold border-b-4 border-b-gray-500 items-start pb-6">주문/결제</p>
      <CustomerInfo
        receiver={receiver} setReceiver={setReceiver}
        address={address} setAddress={setAddress}
        orderMessage={orderMessage} setOrderMessage={setOrderMessage}
      />
      <OrderTable basketItems={buyProducts} />
      <Pay
        finalPay={price.toLocaleString()}
        handlePay={handlePay}
        handleCancel={handleCancel}
      />
    </div>
  )
}
