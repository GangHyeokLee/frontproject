import { auth } from "@/firebase"
import { CartProduct } from "@/types";
import { addDoc } from "firebase/firestore"
import { getReceiptCollection } from "../collections";

export const postPay = async (receiver: string, address: string, message: string, price: number, products: CartProduct[]) => {
  const uid = auth.currentUser?.uid;
  if (uid) {
    const RECEIPT_COLLECTION = getReceiptCollection(uid);
    try {
      const response = await addDoc(RECEIPT_COLLECTION, {
        address: address,
        message: message,
        price: price,
        products: products,
        receiver: receiver,
        createdAt: new Date().toDateString(),
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}