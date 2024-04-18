import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Product, dummyProducts } from "@/dummy/productDummy";
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"

const categories = [
  'ALL', '상의', '하의', '신발', '모자', '안경'
]

const AddProduct = () => {

  const [product, setProduct] = useState<Product>();
  const id = useParams().id;

  const [name, setName] = useState("");
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [productImage, setProductImage] = useState<File | undefined>();

  const categoryRef: RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null);
  const descriptionRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);
  const imgRef: RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  // 상품이 있을 경우 이미지 미리 보여주기
  useEffect(() => {
    if (id) {
      const tmp: Product[] = dummyProducts.filter((x) => x.id == parseInt(id));
      if (tmp.length == 1) {
        if (imgRef.current) {
          imgRef.current.setAttribute('src', tmp[0].productImage);
        }
        setProduct(tmp[0]);
        setName(tmp[0].productName);
        setCategory(tmp[0].productCategory);
        setPrice(tmp[0].productPrice + "");
        setDescription(tmp[0].productDescription);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async () => {
    if (!imgRef.current?.src) {
      alert('이미지를 업로드 하세요');
      return;
    }
    if (category === '') {
      categoryRef.current?.focus();
      return;
    }

    if (window.confirm('피드 작성을 완료하시겠습니까?')) {
      // const response = await createPost({
      //   categoryName: category,
      //   activityTime:
      //     category === '기상'
      //       ? (hour * 60 + minute).toString()
      //       : minute.toString(),
      //   content: content,
      // });

      // if (response && response.message === 'OK') {
      //   setPost({
      //     ...feed,
      //     categoryName: category,
      //     content: content,
      //     imgUrl: imgURL,
      //     activityTime: category === '기상' ? hour * 60 + minute : minute,
      //   });
      //   const feedId = response.data.id;
      //   const formData = new FormData();
      //   formData.append('image', postImage as File);
      //   const imgResponse = await sendPostImage(formData, feedId);

      //   if (imgResponse) {
      //     navigate(`/feed/${response.data.id}`, { replace: true });
      //   }
      // }
    }
  };

  const handleEdit = async () => {
    // if (category === '기상' && hour === 0) {
    //   hourRef.current?.focus();
    //   return;
    // } else if (category !== '기상' && minute === 0) {
    //   minuteRef.current?.focus();
    //   return;
    // }

    // if (window.confirm('피드 수정을 완료하시겠습니까?')) {
    //   const response = await editPost({
    //     categoryName: category,
    //     activityTime: category === '기상' ? hour * 60 + minute : minute,
    //     content: content,
    //     id: id!,
    //     imgUrl: imgURL,
    //   });
    //   if (response && response.message === 'OK') {
    //     setFeed({
    //       ...feed,
    //       categoryName: category,
    //       content: content,
    //       imgUrl: imgURL,
    //       activityTime: category === '기상' ? hour * 60 + minute : minute,
    //     });

    //     if (postImage) {
    //       const feedId = response.data.id;
    //       const formData = new FormData();
    //       formData.append('image', postImage as File);
    //       const imgResponse = await sendPostImage(formData, feedId);

    //       if (imgResponse) {
    //         navigate(`/feed/${response.data.id}`, { replace: true });
    //       }
    //     } else {
    //       navigate(`/feed/${response.data.id}`, { replace: true });
    //     }
    //   }
    // }
  };

  const handleDeletePost = async () => {
    // const response = await deletePost(parseInt(id!));
    // if (response && response.message === 'OK') {
    //   alert('삭제 완료');
    //   navigate('/feed', { replace: true });
    // }
  };

  useEffect(() => {
    if (imgRef.current && imgURL?.length) {
      imgRef.current.setAttribute('src', imgURL);
    }
  }, [imgURL]);

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setProductImage(file);
      setImgURL(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col mx-10 mt-10 border-2 rounded-xl px-10 py-10 font-ibm">
      <div className="flex flex-row">
        <div className="flex flex-col mr-10">
          <div className="flex mb-5 flex-row items-center">
            <div className="font-bold mr-5 w-16">상품명</div>
            <Input
              type="text"
              onChange={(e) => { setName(e.target.value) }}
              value={name}
              className="w-[180px] border-2 flex-1"
            />
          </div>
          <div className="flex mb-5 flex-row items-center">
            <span className="font-bold mr-5 w-16">카테고리</span>
            {(id ? category : true) && (
              <Select
                onValueChange={(e: string) => {
                  setCategory(e);
                }}
                defaultValue={category}
              >
                <SelectTrigger
                  className="w-[180px] border-2 flex-1"
                  ref={categoryRef}
                >
                  <SelectValue placeholder="선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>카테고리</SelectLabel>
                    {categories?.map((it, idx) => (
                      <SelectItem value={it} key={it + idx}>
                        {it}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          </div>
          <div className="flex mb-5 flex-row items-center">
            <div className="font-bold mr-5 w-16">가격</div>
            <Input
              type="text"
              onChange={(e) => { setPrice(e.target.value) }}
              value={price}
              className="w-[180px] border-2 flex-1"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center">
          <div className="flex mb-5 flex-row items-center">
            <div className="font-bold mr-5 w-16">사진</div>
            <Input
              accept="image/jpeg, image/png"
              type="file"
              onChange={handleUploadImage}
              className="w-full border-2"
            />
          </div>
          <img
            ref={imgRef}
            alt="사진을 업로드하세요."
            className="object-contain mb-5 h-[265px] rounded-lg max-h-96 border-2 "
          />
          <textarea
            className="resize-none w-full border-2"
            placeholder="내용을 입력하세요."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ref={descriptionRef}
          />
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <Button
          className="bg-gray-300 mr-5 rounded-lg text-sm text-black w-28 py-2 hover:bg-main-hover hover:ring-2 hover:ring-main active:bg-main-active drop-shadow-md"
          onClick={() => navigate(`/product/${id}`, { replace: true })}
        >
          취소
        </Button>
        {id ? (
          <Button
            className="bg-red-500 mr-5 rounded-lg text-sm w-28 py-2 hover:ring-2 hover:ring-point hover:bg-red-800 active:bg-point-active drop-shadow-md"
            onClick={handleDeletePost}
          >
            삭제
          </Button>
        ) : (
          <></>
        )}
        <Button
          className="bg-gray-500 rounded-lg text-sm w-28 py-2 hover:ring-2 hover:ring-point hover:bg-point-hover active:bg-point-active drop-shadow-md"
          onClick={id ? handleEdit : handleSubmit}
        >
          저장
        </Button>
      </div>
    </div>
  )
}

export default AddProduct