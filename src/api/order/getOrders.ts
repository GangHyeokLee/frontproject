import { auth, db } from "@/firebase"
import { CartProduct } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { getProduct } from "../products/getProduct";

export const getOrders = async () => {
  const orders: CartProduct[] = [];
  if (auth.currentUser) {
    const ORDER_COLLECTION = collection(db, "orders", auth.currentUser.uid, "products");
    const orderSnap = await getDocs(ORDER_COLLECTION);
    for (const doc of orderSnap.docs) {
      const tmpPro = await getProduct(doc.id);
      const tmpOr = {
        ...tmpPro,
        id: doc.id,
        quantity: doc.data().quantity,
        isChecked: false,
      }
      orders.push(tmpOr as CartProduct);
    }
  }
  return orders
}
