import { ReactNode } from "react";

export const Image = ({ imageUrl, className }: { imageUrl: string; className: string }) => {
  return (
    <div className="mb-3">
      <img
        src={imageUrl}
        alt="상품 이미지"
        className={className}
      />
    </div>
  )
}

const Name = ({ name }: { name: string }) => {
  return <div>{name}</div>;
};

const Category = ({ category }: { category: string }) => {
  return (
    <div className="flex flex-row w-full justify-start text-xs h-6">
      <div className="text-white px-3 py-1 rounded-full h-fit w-fit text-center mr-5">
        {category}
      </div>
    </div>
  )
}

interface CardProps {
  children: ReactNode;
  onClick: () => void;
}

const Card = ({ children, onClick }: CardProps) => {
  return (
    <div className="w-fit mx-8 mb-8 flex flex-col items-start cursor-pointer transform transition-transform hover:scale-110 hover:z-10 hover:bg-white" onClick={() => onClick?.()}>
      {children}
    </div>
  );
};

export const ProductComponent = Object.assign(Card, {
  Image,
  Category,
  Name
});
