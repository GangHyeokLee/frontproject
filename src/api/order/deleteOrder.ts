import { auth, db } from "@/firebase";
import { collection, deleteDoc, doc } from "firebase/firestore"

export const deleteOrder = async (id: string) => {
  if (auth.currentUser) {
    const ORDER_COLLECTION = collection(db, "orders", auth.currentUser.uid, "products");
    await deleteDoc(doc(ORDER_COLLECTION, id))
  }
}