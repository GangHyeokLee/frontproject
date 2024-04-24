import { db } from "@/firebase";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const postOrder = async (pid: string, uid: string, quantity: number) => {


  // const docRef = ;

  try {
    const ORDER_COLLECTION = collection(db, "orders", uid, "products");
    // DB에 해당 uid 컬렉션에서 pid가 있는지 탐색하기
    const docSnap = await getDoc(doc(ORDER_COLLECTION, pid));
    if (!docSnap.exists()) {
      const response = await setDoc(doc(ORDER_COLLECTION, pid),
        {
          pid: pid,
          quantity: quantity,
        }
      )
      return response;
    }
    else {
      const response = await updateDoc(doc(ORDER_COLLECTION, pid), {
        quantity: docSnap.data().quantity + quantity
      });
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}