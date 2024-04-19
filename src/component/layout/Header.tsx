import NavLogout from "./right/guest/NavLogout"
// import NavMyPage from "./NavMyPage"
import NavLogin from "./right/login/NavLogin"
import NavRegister from "./right/login/NavRegister"
import Title from "./Title"
import { NavCart } from "./right/guest/NavCart"
import { useEffect, useState } from "react"
import firebase from './../../firebase';
import { TopNav } from './TopNav';

const Header = () => {

  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
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