import { PRODUCT_COLLECTION } from "@/firebase"
import { Product } from "@/types/product.type";
import { SHA256 } from "crypto-js";
import { getDocs } from "firebase/firestore";

export const fetchProductList = async () => {
  const docSnap = await getDocs(PRODUCT_COLLECTION);
  const products: Product[] = []
  docSnap.forEach((doc) => {
    const tmpPro = {
      id: doc.id,
      pid: SHA256(doc.id).toString(),
      ...doc.data()
    }
    products.push(tmpPro as Product)
  })

  return products
}