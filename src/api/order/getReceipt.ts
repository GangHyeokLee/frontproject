import { auth } from "@/firebase";
import { getReceiptCollection } from "../collections"
import { doc, getDoc } from "firebase/firestore";

export const getReceipt = async (id: string) => {
  if (auth.currentUser) {
    const RECEIPT_COLLECTION = getReceiptCollection(auth.currentUser.uid);
    try {
      const response = await getDoc(doc(RECEIPT_COLLECTION, id));
      return response.data();
    } catch (error) {
      console.log(error);
    }
  }

}