import React from 'react';

interface ProductProps {
  id: number;
  sellerId: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt?: Date;
}

/////////////////////////////////////////////////////////

const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-fit mx-8 mb-8 flex flex-col items-start cursor-pointer transform transition-transform hover:scale-110 hover:z-10 hover:bg-white">
      {children}
    </div>
  );
};

const Image = ({ imageUrl }: { imageUrl: ProductProps['imageUrl'] }) => {
  return (
    <div className="mb-3">
      <img
        src={imageUrl}
        alt="상품 이미지"
        className="rounded-xl h-fit w-80 transform transition-transform"
      />
    </div>
  );
};

const Category = ({ category }: { category: ProductProps['category'] }) => {
  return (
    <div className="flex flex-row w-full justify-start text-xs h-6">
      <div
        className={`text-white px-3 py-1 rounded-full h-fit w-fit text-center mr-5 bg-${category}`}
      >
        {category}
      </div>
    </div>
  );
};

const Name = ({ name }: { name: ProductProps['name'] }) => {
  return <div>{name}</div>;
};

export const Product = Object.assign(Container, {
  Image,
  Category,
  Name,
});

/////////////////////////////////////////////////////////

const useProductCard = () => {
  const bussinessLogicImage = () => {
    console.log('bussinessLogicImage');
  };

  const bussinessLogicCategory = () => {
    console.log('bussinessLogicCategory');
  };

  const bussinessLogicName = () => {
    console.log('bussinessLogicName');
  };

  return {
    bussinessLogicImage,
    bussinessLogicCategory,
    bussinessLogicName,
  };
};

//////////////////////////////////////////////////////////

export const ProductCard = ({ imageUrl, category, name }: ProductProps) => {
  const { bussinessLogicImage, bussinessLogicCategory, bussinessLogicName } =
    useProductCard();

  return (
    <Product>
      <OnClick onClick={bussinessLogicImage}>
        <Product.Image imageUrl={imageUrl} />
      </OnClick>
      <OnClick onClick={bussinessLogicCategory}>
        <Product.Category category={category} />
      </OnClick>
      <OnClick onClick={bussinessLogicName}>
        <Product.Name name={name} />
      </OnClick>
    </Product>
  );
};

/////////////////////////////////////////////////////////

interface OnClickProps extends React.PropsWithChildren {
  onClick: () => void;
}

const OnClick = ({ onClick, children }: OnClickProps) => {
  return <button onClick={() => onClick()}>{children}</button>;
};

/////////////////////////////////////////////////////////
// 더 바뀌면 어떻게 될까?
// export const ProductMobileCard = ({ category, name }: ProductProps) => {
//   return (
//     <Product>
//       <Product.Category category={category} />
//       <Product.Name name={name} />
//     </Product>
//   );
// };

// // .. 5개

// const PRODUCT_CARD_TYPE = Object.freeze({
//   DEFAULT: 'default',
//   MOBILE: 'mobile',
// });

// type ProductCardType =
//   (typeof PRODUCT_CARD_TYPE)[keyof typeof PRODUCT_CARD_TYPE];

// export const ProductCard = (type: ProductCardType) => {
//   const getComponent = (type: ProductCardType) => {
//     switch (type) {
//       case PRODUCT_CARD_TYPE.DEFAULT: {
//         return ProductCard;
//       }

//       case PRODUCT_CARD_TYPE.MOBILE: {
//         return ProductMobileCard;
//       }

//       default: {
//         return ProductCard;
//       }
//     }
//   };

//   return getComponent(type);
// };

// const A = () => <ProductCard type={ isMobile ? PRODUCT_CARD_TYPE.MOBILE : PRODUCT_CARD_TYPE.DEFAULT } />;
