import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CartProduct } from "@/types/product.type"
import { OrderRow } from "./OrderRow"

interface OrderTableProps {
  basketItems: CartProduct[]
}

export const OrderTable = ({ basketItems }: OrderTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">주문상품</TableHead>
          <TableHead className="text-center">총 {basketItems.reduce((prev, curr) => prev + curr.quantity, 0)} 개</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {basketItems.map((x) =>
          <OrderRow product={x} key={x.id} />
        )}
      </TableBody>
    </Table>
  )
}
