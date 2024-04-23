import { PRODUCT_COLLECTION, storage } from "@/firebase"
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage"

export const deleteProduct = async (id: string, imageUrl: string) => {
  console.log(imageUrl);
  try {
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
    await deleteDoc(doc(PRODUCT_COLLECTION, id));
  } catch (error) {
    console.log(error);
  }
}