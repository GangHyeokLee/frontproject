import { postQuantity } from "@/api/order/postQuantity";
import { useState } from "react"

export const useQuantity = (initialQuantity: number, id: string) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const incrementQuantity = () => {
    postQuantity(id, quantity + 1);
    setQuantity(quantity + 1);
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      postQuantity(id, quantity - 1);
      setQuantity(quantity - 1);
    }
  }

  return { quantity, incrementQuantity, decrementQuantity }
}