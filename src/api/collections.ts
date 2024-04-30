import { db } from "@/firebase"
import { collection } from "firebase/firestore"

export const getReceiptCollection = (uid: string) => {
  return collection(db, "receipts", uid, "receipt");
}