import { auth, db } from "@/firebase"
import { CartProduct } from "@/types";
import { addDoc, collection } from "firebase/firestore"

export const postPay = async (receiver: string, address: string, message: string, price: number, products: CartProduct[]) => {
  const uid = auth.currentUser?.uid;
  if (uid) {
    const RECEIPT_COLLECTION = collection(db, "receipts", uid, "receipt");
    try {
      const response = await addDoc(RECEIPT_COLLECTION, {
        address: address,
        message: message,
        price: price,
        products: products,
        receiver: receiver
      });
      console.log(response.id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}