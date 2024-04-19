import { Button } from "@/components/ui/button";

interface PayProps {
  finalPay: string;
  handlePay: () => void;
}


export const Pay = ({ finalPay, handlePay }: PayProps) => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col justify-center">
        <p className="text-xl font-bold">최종 결제 금액: {finalPay} 원</p>
        <Button onClick={handlePay} className="mt-5 px-10 py-6 text-xl">결제하기</Button>
      </div>
    </div>
  )
}
