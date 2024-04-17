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

export interface Product{
  id: number;
  sellerId: number;
  productName: string;
  productPrice: number;
  productQuantity: number;
  productDescription: string;
  productCategory: string;
  productImage: string;
  createdAt: Date;
  updatedAt?: Date;
}

export const dummyProducts: Product[] = [
  {
    id: 1,
    sellerId: 123,
    productName: "상의 1",
    productPrice: 20,
    productQuantity: 50,
    productDescription: "상의 제품 설명 1",
    productCategory: "상의",
    productImage: dummyImage1,
    createdAt: new Date(),
  },
  {
    id: 2,
    sellerId: 456,
    productName: "하의 1",
    productPrice: 30,
    productQuantity: 40,
    productDescription: "하의 제품 설명 1",
    productCategory: "하의",
    productImage: dummyImage2,
    createdAt: new Date(),
  },
  {
    id: 3,
    sellerId: 789,
    productName: "신발 1",
    productPrice: 50,
    productQuantity: 60,
    productDescription: "신발 제품 설명 1",
    productCategory: "신발",
    productImage: dummyImage3,
    createdAt: new Date(),
  },
  {
    id: 4,
    sellerId: 234,
    productName: "모자 1",
    productPrice: 25,
    productQuantity: 30,
    productDescription: "모자 제품 설명 1",
    productCategory: "모자",
    productImage: dummyImage4,
    createdAt: new Date(),
  },
  {
    id: 5,
    sellerId: 567,
    productName: "안경 1",
    productPrice: 40,
    productQuantity: 20,
    productDescription: "안경 제품 설명 1",
    productCategory: "안경",
    productImage: dummyImage5,
    createdAt: new Date(),
  },
  {
    id: 6,
    sellerId: 890,
    productName: "상의 2",
    productPrice: 35,
    productQuantity: 45,
    productDescription: "상의 제품 설명 2",
    productCategory: "상의",
    productImage: dummyImage6,
    createdAt: new Date(),
  },
  {
    id: 7,
    sellerId: 123,
    productName: "하의 2",
    productPrice: 45,
    productQuantity: 35,
    productDescription: "하의 제품 설명 2",
    productCategory: "하의",
    productImage: dummyImage7,
    createdAt: new Date(),
  },
  {
    id: 8,
    sellerId: 456,
    productName: "신발 2",
    productPrice: 60,
    productQuantity: 55,
    productDescription: "신발 제품 설명 2",
    productCategory: "신발",
    productImage: dummyImage8,
    createdAt: new Date(),
  },
  {
    id: 9,
    sellerId: 789,
    productName: "모자 2",
    productPrice: 30,
    productQuantity: 25,
    productDescription: "모자 제품 설명 2",
    productCategory: "모자",
    productImage: dummyImage9,
    createdAt: new Date(),
  },
  {
    id: 10,
    sellerId: 234,
    productName: "안경 2",
    productPrice: 55,
    productQuantity: 15,
    productDescription: "안경 제품 설명 2",
    productCategory: "안경",
    productImage: dummyImage10,
    createdAt: new Date(),
  },
  {
    id: 11,
    sellerId: 567,
    productName: "상의 3",
    productPrice: 40,
    productQuantity: 60,
    productDescription: "상의 제품 설명 3",
    productCategory: "상의",
    productImage: dummyImage11,
    createdAt: new Date(),
  },
  {
    id: 12,
    sellerId: 890,
    productName: "하의 3",
    productPrice: 65,
    productQuantity: 70,
    productDescription: "하의 제품 설명 3",
    productCategory: "하의",
    productImage: dummyImage12,
    createdAt: new Date(),
  },
];
