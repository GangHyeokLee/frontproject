import NavLogout from "./right/login/NavLogout"
// import NavMyPage from "./NavMyPage"
import NavLogin from "./right/guest/NavLogin"
import NavRegister from "./right/guest/NavRegister"
import Title from "./Title"
import { NavCart } from "./right/login/NavCart"
import { useEffect, useState } from "react"
import { TopNav } from './TopNav';
import { auth } from "@/firebase"

const Header = () => {

  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      //로그인이 된 상태
      if (user) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
    })
  }, [])
  return (
    <div
      className={`flex w-full h-12 px-3 items-center justify-between bg-white border-b border-gray-400 z-50 transition-transform duration-900 ease-in-out             `}
    >
      <TopNav />
      <Title />
      <div className="flex">
        {isLogin ? (
          <>
            <NavCart />
            <NavLogout />
            {/* <NavMyPage /> */}
          </>
        ) : (
          <>
            <NavCart />
            <NavLogin />
            <NavRegister />
          </>
        )}
      </div>
    </div>
  )
}

export default Header