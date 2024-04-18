import { useState } from "react"

export const useQuantity = (initialQuantity: number) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decrementQuantity = () => {
    setQuantity((quantity - 1) > 0 ? (quantity - 1) : 1);
  }

  return { quantity, incrementQuantity, decrementQuantity }
}