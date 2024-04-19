import { TableCell, TableRow } from "@/components/ui/table"
import { Product } from "@/types/product.type"

interface OrderRowProps {
  product: Product;
}

export const OrderRow = ({ product }: OrderRowProps) => {
  return (
    <TableRow>
      <TableCell className="font-medium flex items-center">
        <img src={product.imageUrl} className="w-20 mr-5" />
        {product.name}</TableCell>
      <TableCell className="text-center">{product.quantity} 개</TableCell>
      <TableCell className="text-center">{product.price * product.quantity} 원</TableCell>
    </TableRow>
  )
}
