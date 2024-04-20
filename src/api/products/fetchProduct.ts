import { PRODUCT_COLLECTION } from "@/firebase";
import { Product } from "@/types/product.type";
import { doc, getDoc } from "firebase/firestore";

export const fetchProduct = async (id: string) => {
  const docSnap = await getDoc(doc(PRODUCT_COLLECTION, id));
  return docSnap.data() as Product;
};