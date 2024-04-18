import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { TableCell, TableRow } from "@/components/ui/table"
import { Product } from '@/type/product.type';
import { useQuantity } from "@/hooks/useQuantity"
import { QuantityButton } from "../ProductDetail/QuantityButton"

interface CartRowProps {
  product: Product;
  isChecked: boolean;
  handleDelete: (id: number) => void;
  handleCheckbox: (id: number) => void;
}

const CartRow = ({ product, isChecked, handleDelete, handleCheckbox }: CartRowProps) => {

  const { quantity, incrementQuantity, decrementQuantity } = useQuantity(product.quantity);

  return (
    <TableRow>
      <TableCell className="font-medium flex items-center">
        <img src={product.imageUrl} className="w-20 mr-5" />
        {product.name}</TableCell>
      <TableCell className="text-center">{product.price}</TableCell>
      <TableCell className="text-center">
        <QuantityButton quantity={quantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
      </TableCell>
      <TableCell className="text-center"><Button onClick={() => handleDelete(product.id)}>삭제</Button></TableCell>
      <TableCell><Checkbox checked={isChecked} onClick={(() => handleCheckbox(product.id))} /></TableCell>
    </TableRow>
  )
}

export default CartRow