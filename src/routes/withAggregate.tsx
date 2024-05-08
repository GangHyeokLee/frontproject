import { auth } from "@/firebase";
import { ROUTES } from "./route.constant";
import { getIsSeller } from "@/api/auth/getIsSeller";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";

interface WithAggregateProps extends PropsWithChildren {
  page: keyof typeof ROUTES;
}

export const AggregateComponent = ({ children, page }: WithAggregateProps) => {

  const isSeller = useRef<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      const response = await getIsSeller();
      if (typeof response == 'string') {
        isSeller.current = response;
        setIsLoading(false);
      }
    };
    get();
    console.log('rendered');
  }, []);

  if (isLoading) {
    <div>Loading...</div>
  }
  else {
    // 로그인한 유저가 로그인, 회원가입 페이지에 접근 할 때
    if ((page == "LoginPage" || page == "SignUpNormal" || page == "SignUpSelectPage" || page == "SignUpSeller") && (isSeller.current != "")) {
      console.log(isSeller.current);
      return <Navigate to="/" />;
    }

    // 판매자가 장바구니와 결제 관련 페이지 접근할 때
    if ((page == "OrderFunnel" || page == "ReceiptPage") && (isSeller.current != "CUSTOMER")) {
      console.log("Dont go cart", page, auth.currentUser);
      return <Navigate to="/" />
    }

    if (page == "AddProduct" && (isSeller.current != "SELLER")) {
      console.log('Not for users', page);
      return <Navigate to="/" />
    }

    return children;
  }
}