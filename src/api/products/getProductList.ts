import { PRODUCT_COLLECTION } from "@/firebase"
import { Product } from "@/types/product.type";
import { getDocs } from "firebase/firestore";

export const getProductList = async () => {
  const docSnap = await getDocs(PRODUCT_COLLECTION);
  const products: Product[] = []
  docSnap.forEach((doc) => {
    const tmpPro = {
      id: doc.id,
      ...doc.data()
    }
    products.push(tmpPro as Product)
  })

  return products
}