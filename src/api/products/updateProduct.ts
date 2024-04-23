import { PRODUCT_COLLECTION, storage } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface updateProductProps {
  image?: File;
  name: string;
  price: string;
  description: string;
  category: string;
  dir: string;
  id: string;
}

export const updateProduct = async ({
  id,
  category,
  name,
  price,
  description,
  dir,
  image
}: updateProductProps) => {
  // 이미지 바꼈는지 확인하기
  if (image) {
    await deleteObject(ref(storage, dir));
    const filePath = `/products/${category}/${name}/${image?.name}`;
    const imageRef = ref(storage, filePath);
    await uploadBytes(imageRef, image);
    const imgUrl = await getDownloadURL(imageRef);
    await updateDoc(doc(PRODUCT_COLLECTION, id), {
      category: category,
      name: name,
      price: price,
      description: description,
      filePath: filePath,
      imageUrl: imgUrl,
      updatedAt: new Date()
    });
  }
  await updateDoc(doc(PRODUCT_COLLECTION, id), {
    category: category,
    name: name,
    price: price,
    description: description,
    updatedAt: new Date
  });
}