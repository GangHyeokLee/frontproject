import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react";

interface QuantityButtonProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export const QuantityButton = ({ quantity, incrementQuantity, decrementQuantity }: QuantityButtonProps) => {

  return (
    <div className="flex justify-center">
      <Button onClick={incrementQuantity} className="bg-white text-black border-2 mr-5 hover:bg-white" size="icon" >
        <Plus className="h-4 w-4" />
      </Button>
      <p className="text-xl">{quantity}</p>
      <Button onClick={decrementQuantity} className="bg-white text-black border-2 ml-5 hover:bg-white" size="icon" >
        <Minus className="h-4-w-4" />
      </Button>
    </div>
  )
}
