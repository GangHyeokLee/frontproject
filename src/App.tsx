import { Route, Routes } from "react-router-dom"
import Layout from "./component/layout/Layout"
import MainPage from "./pages/Products/MainPage"
import LoginPage from "./pages/Auth/LoginPage"
import SignUpSelectPage from "./pages/Auth/SignUpSelectPage"
import SignUpNormal from "./pages/Auth/SignUpNormal"
import SignUpSeller from "./pages/Auth/SignUpSeller"
import ProductDetail from "./pages/Products/ProductDetail"
import AddProduct from "./pages/Products/AddProduct"
import CartPage from "./pages/Order/CartPage"
import { PaymentPage } from "./pages/Order/PaymentPage"
import { ReceiptPage } from "./pages/Order/ReceiptPage"
import { ProductList } from "pages/Products/ProductList"

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpSelectPage />} />
          <Route path="/register/user" element={<SignUpNormal />} />
          <Route path="/register/seller" element={<SignUpSeller />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<AddProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/receipt/:id" element={<ReceiptPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
