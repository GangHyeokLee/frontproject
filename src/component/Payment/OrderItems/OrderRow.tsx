import { TableCell, TableRow } from "@/components/ui/table"
import { CartProduct } from "@/types/product.type"

interface OrderRowProps {
  product: CartProduct;
}

export const OrderRow = ({ product }: OrderRowProps) => {
  return (
    <TableRow>
      <TableCell className="font-medium flex items-center">
        <img src={product.imageUrl} className="w-20 mr-5" />
        {product.name}</TableCell>
      <TableCell className="text-center">{product.quantity} 개</TableCell>
      <TableCell className="text-end">{(product.price * product.quantity).toLocaleString()} 원</TableCell>
    </TableRow>
  )
}
