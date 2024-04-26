import { CartProduct } from "@/types"
import { useState } from 'react'
import CartPage from "./CartPage";
import { PaymentPage } from "./PaymentPage";
import { ReceiptPage } from "./ReceiptPage";

export const OrderFunnel = () => {

  const [buyProduct, setBuyProduct] = useState<CartProduct[]>([]);
  const [step, setStep] = useState<"장바구니" | "결제페이지" | "결제완료">();

  return (
    <>
      {step == "장바구니" && <CartPage setBuyProduct={setBuyProduct} onNext={() => { setStep("결제페이지") }} />}
      {step == "결제페이지" && <PaymentPage />}
      {step == "결제완료" && <ReceiptPage />}
    </>
  )
}
