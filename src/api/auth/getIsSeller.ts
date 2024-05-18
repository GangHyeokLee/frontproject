import { USER_COLLECTION, auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const getIsSeller = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userSnap = await getDoc(doc(USER_COLLECTION, user.uid));
          resolve(userSnap.data()?.isSeller as string);
        } catch (error) {
          reject(error);
        }
      } else {
        resolve("NOTUSER");
      }
    });
  });
};
