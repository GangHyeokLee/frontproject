import { PRODUCT_COLLECTION, auth, storage } from "@/firebase";
import { addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

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

  await addDoc(
    PRODUCT_COLLECTION,
    {
      sellerId: auth.currentUser?.uid,
      name: name,
      price: price,
      description: description,
      category: category,
      imageUrl: filePath,
      createdAt: createdAt,
      updatedAt: updatedAt,
    }
  )

}