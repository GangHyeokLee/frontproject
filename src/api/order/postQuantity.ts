import { auth, db } from "@/firebase";
import { collection, doc, updateDoc } from "firebase/firestore";

export const postQuantity = async (id: string, quantity: number) => {
  if (id && auth.currentUser) {
    const ORDER_COLLECTION = collection(db, "orders", auth.currentUser.uid, "products");
    await updateDoc(doc(ORDER_COLLECTION, id), {
      quantity: quantity
    });
  }
};