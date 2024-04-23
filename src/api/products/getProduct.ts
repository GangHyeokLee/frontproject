import { PRODUCT_COLLECTION } from "@/firebase";
import { Product } from "@/types/product.type";
import { doc, getDoc } from "firebase/firestore";

export const getProduct = async (id: string) => {
  const docSnap = await getDoc(doc(PRODUCT_COLLECTION, id));
  return docSnap.data() as Product;
};