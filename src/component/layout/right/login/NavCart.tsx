import React from 'react'
import { useNavigate } from "react-router-dom"

export const NavCart = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => { navigate('/cart') }}
      className="cursor-pointer text-sm mr-3 font-ibm"
    >
      장바구니
    </div>
  )
}
