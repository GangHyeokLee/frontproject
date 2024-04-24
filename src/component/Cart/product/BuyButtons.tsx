import { Button } from "@/components/ui/button"

// interface BuyButtonsProps {
//   // handleDeleteAll: () => void;
// }
export const BuyButtons = () => {
  return (
    <div className="flex justify-end">
      {/* <Button className="text-3xl py-8 px-10 mr-5 bg-red-400 hover:bg-red-500" onClick={handleDeleteAll}>전체 삭제</Button> */}
      <Button className="text-3xl py-8 px-10">주문하기</Button>
    </div>
  )
}
