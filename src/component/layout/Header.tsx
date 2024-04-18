import React from 'react'
import NavLogout from "./NavLogout"
import NavMyPage from "./NavMyPage"
import NavLogin from "./NavLogin"
import NavRegister from "./NavRegister"
import Title from "./Title"
import TopNav from "./TopNav"
import { NavCart } from "./NavCart"

const Header = () => {
  return (
    <div
      className={`flex w-full h-12 px-3 items-center justify-between bg-white border-b border-gray-400 z-50 transition-transform duration-900 ease-in-out             `}
    >
      <TopNav />
      <Title />
      <div className="flex">
        {localStorage.getItem('AccessToken') ? (
          <>
            <NavCart />
            <NavLogout />
            <NavMyPage />
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