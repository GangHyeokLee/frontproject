import { OrderTable } from "@/component/Payment/OrderItems/OrderTable";
import { CustomerInfo } from "@/component/Payment/customer/CustomerInfo";
import { Pay } from "@/component/Payment/OrderItems/Pay";
import { CartProduct } from "@/types";

interface PaymentPageProps {
  buyProducts: CartProduct[];
  setBuyProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  onPrev: () => void;
}

export const PaymentPage = ({ buyProducts, setBuyProducts, onPrev }: PaymentPageProps) => {

  const handlePay = () => {
    console.log('결제완료');
  }

  const handleCancel = () => {
    setBuyProducts([]);
    onPrev();
  }
  return (
    <div className="w-full p-10">
      <p className="text-6xl font-bold border-b-4 border-b-gray-500 items-start pb-6">주문/결제</p>
      <CustomerInfo />
      <OrderTable basketItems={buyProducts} />
      <Pay
        finalPay={buyProducts.reduce((prev, curr) => prev + curr.quantity * curr.price, 0).toLocaleString()}
        handlePay={handlePay}
        handleCancel={handleCancel}
      />
    </div>
  )
}
