import { PRODUCT_COLLECTION, auth, storage } from "@/firebase";
import { addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface postProductProps {
  image: File;
  name: string;
  price: string;
  description: string;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const postProduct = async ({ image, name, price, description, category, createdAt = new Date(), updatedAt = new Date() }: postProductProps) => {

  const filePath = `/products/${category}/${name}/${image?.name}`;

  const imageRef = ref(storage, filePath);
  await uploadBytes(imageRef, image);

  // 파일 url
  const downloadURL = await getDownloadURL(imageRef);
  const response = await addDoc(
    PRODUCT_COLLECTION,
    {
      sellerId: auth.currentUser?.uid,
      name: name,
      price: price,
      dir: filePath,
      description: description,
      category: category,
      imageUrl: downloadURL,
      createdAt: createdAt,
      updatedAt: updatedAt,
    }
  )
  return response.id;
}