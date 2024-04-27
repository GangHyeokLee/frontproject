import { Button } from "@/components/ui/button";

interface PayProps {
  finalPay: string;
  handlePay: () => void;
  handleCancel: () => void;
}


export const Pay = ({ finalPay, handlePay, handleCancel }: PayProps) => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col justify-center">
        <p className="text-xl font-bold text-end">최종 결제 금액: {finalPay} 원</p>
        <div className="flex justify-end">
          <Button onClick={handleCancel} className="mt-5 px-10 py-6 text-xl bg-red-500 mr-5">취소하기</Button>
          <Button onClick={handlePay} className="mt-5 px-10 py-6 text-xl">결제하기</Button>
        </div>
      </div>
    </div>
  )
}
