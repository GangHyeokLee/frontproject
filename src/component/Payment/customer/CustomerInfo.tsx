import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { orderMessages } from "../OrderMessage.constant"

interface CustomerInfoProps {
  receiver: string;
  address: string;
  orderMessage: string;
  setReceiver: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setOrderMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const CustomerInfo = ({
  receiver, setReceiver,
  address, setAddress,
  orderMessage, setOrderMessage

}: CustomerInfoProps) => {


  return (

    <div className="flex p-10 w-full flex-col justify-start text-xl mb-6">
      <div className="flex">
        <p className="w-64">수령인</p>
        <Input className="w-32" value={receiver} onChange={(e) => setReceiver(e.target.value)} />
      </div>
      <div className="flex my-5">
        <p className="w-64">배송지 정보</p>
        <Input className="w-1/2" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="flex text-xl justify-start">
        <p className="w-64">배송 요청사항</p>
        <div className="w-64">
          <Select
            onValueChange={(e: string) => { setOrderMessage(e) }}
            defaultValue={orderMessage}
          >
            <SelectTrigger        >
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>배송 요청</SelectLabel>
                {orderMessages.map((it, idx) => (
                  <SelectItem value={it} key={it + idx}>
                    {it}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
