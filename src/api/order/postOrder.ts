import { ORDER_COLLECTION } from "@/firebase";
import { Order } from "@/types";
import { addDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";

export const postOrder = async (pid: string, uid: string, quantity: number) => {

  try {
    // DB에 해당 pid와 uid를 가진 문서 있는지 탐색하기
    const querySnapshot = await getDocs(
      query(ORDER_COLLECTION,
        where("uid", "==", uid),
        where("pid", "==", pid))
    );

    if (querySnapshot.empty) {
      const response = await addDoc(ORDER_COLLECTION,
        {
          uid: uid,
          pid: pid,
          quantity: quantity,
        }
      )
      return response;
    }
    else {
      // id는 한 개 일거야 아마도
      const docs: Order[] = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id } as Order)
      })
      console.log(docs);
      const response = await updateDoc(doc(ORDER_COLLECTION, docs[0].id), {
        quantity: docs[0].quantity + quantity
      });
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}