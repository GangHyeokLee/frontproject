import { auth, db } from "@/firebase"
import { collection, deleteDoc, doc } from "firebase/firestore"

export const deleteAllOrders = async () => {
  if (auth.currentUser) {
    console.log("delete all");
    await deleteDoc(doc(collection(db, "orders"), auth.currentUser.uid));
  }
}