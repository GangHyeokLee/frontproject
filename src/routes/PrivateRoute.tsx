import { getIsSeller } from "@/api/auth/getIsSeller";
import { auth } from "@/firebase";
import { PropsWithChildren, useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";


// deprecated

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const isSeller = useRef<string>();

  useEffect(() => {
    const get = async () => {
      const response = await getIsSeller();
      if (typeof response == 'string') {
        isSeller.current = response;
      }
    }
    get();
  }, []);

  if (auth.currentUser && isSeller.current == "SELLER") {
    return children
  }

  alert("판매자만 접근 가능합니다.");
  return <Navigate to={"/"} replace state={{ ...location }} />
}