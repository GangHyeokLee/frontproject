import { CartProduct } from "@/types"
import { useState } from 'react'
import CartPage from "./CartPage";
import PaymentPage from "./PaymentPage";

const OrderFunnel = () => {

  const [buyProducts, setBuyProducts] = useState<CartProduct[]>([]);
  const [step, setStep] = useState<"장바구니" | "결제페이지">("장바구니");

  return (
    <>
      {step == "장바구니" && <CartPage
        setBuyProducts={setBuyProducts}
        onNext={() => { setStep("결제페이지") }}
      />}
      {step == "결제페이지" && <PaymentPage
        buyProducts={buyProducts}
        setBuyProducts={setBuyProducts}
        onPrev={() => { setStep("장바구니") }}
      />}
    </>
  )
}

export default OrderFunnel;