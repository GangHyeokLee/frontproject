import dummyImage1 from '../assets/20231010_084411.jpg'
import dummyImage2 from '../assets/20231121_091209.jpg'
import dummyImage3 from '../assets/achievement-5597527_640.png'
import dummyImage4 from '../assets/kakao_icon.png'
import dummyImage5 from '../assets/20231029_091459.png'
import dummyImage6 from '../assets/Screenshot_20200427-152644_Facebook.png'
import dummyImage7 from '../assets/Screenshot_20220714-051432_Instagram.png'
import dummyImage8 from '../assets/FB_IMG_1695830410274.jpg'
import dummyImage9 from '../assets/FB_IMG_1613092264309.jpg'
import dummyImage10 from '../assets/20231020_090539.jpg'
import dummyImage11 from '../assets/google.png'
import dummyImage12 from '../assets/kakaotalk_sharing_btn_small.png'
import { Product } from "@/types/product.type"

export const dummyProducts: Product[] = [
  {
    id: 1,
    sellerId: 123,
    name: "상의 1",
    price: 20,
    description: "상의 제품 설명 1",
    category: "상의",
    imageUrl: dummyImage1,
    createdAt: new Date(),
  },
  {
    id: 2,
    sellerId: 456,
    name: "하의 1",
    price: 30,
    description: "하의 제품 설명 1",
    category: "하의",
    imageUrl: dummyImage2,
    createdAt: new Date(),
  },
  {
    id: 3,
    sellerId: 789,
    name: "신발 1",
    price: 50,
    description: "신발 제품 설명 1",
    category: "신발",
    imageUrl: dummyImage3,
    createdAt: new Date(),
  },
  {
    id: 4,
    sellerId: 234,
    name: "모자 1",
    price: 25,
    description: "모자 제품 설명 1",
    category: "모자",
    imageUrl: dummyImage4,
    createdAt: new Date(),
  },
  {
    id: 5,
    sellerId: 567,
    name: "안경 1",
    price: 40,
    description: "안경 제품 설명 1",
    category: "안경",
    imageUrl: dummyImage5,
    createdAt: new Date(),
  },
  {
    id: 6,
    sellerId: 890,
    name: "상의 2",
    price: 35,
    description: "상의 제품 설명 2",
    category: "상의",
    imageUrl: dummyImage6,
    createdAt: new Date(),
  },
  {
    id: 7,
    sellerId: 123,
    name: "하의 2",
    price: 45,
    description: "하의 제품 설명 2",
    category: "하의",
    imageUrl: dummyImage7,
    createdAt: new Date(),
  },
  {
    id: 8,
    sellerId: 456,
    name: "신발 2",
    price: 60,
    description: "신발 제품 설명 2",
    category: "신발",
    imageUrl: dummyImage8,
    createdAt: new Date(),
  },
  {
    id: 9,
    sellerId: 789,
    name: "모자 2",
    price: 30,
    description: "모자 제품 설명 2",
    category: "모자",
    imageUrl: dummyImage9,
    createdAt: new Date(),
  },
  {
    id: 10,
    sellerId: 234,
    name: "안경 2",
    price: 55,
    description: "안경 제품 설명 2",
    category: "안경",
    imageUrl: dummyImage10,
    createdAt: new Date(),
  },
  {
    id: 11,
    sellerId: 567,
    name: "상의 3",
    price: 40,
    description: "상의 제품 설명 3",
    category: "상의",
    imageUrl: dummyImage11,
    createdAt: new Date(),
  },
  {
    id: 12,
    sellerId: 890,
    name: "하의 3",
    price: 65,
    description: "하의 제품 설명 3",
    category: "하의",
    imageUrl: dummyImage12,
    createdAt: new Date(),
  },
];
