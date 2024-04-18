import { Route, Routes } from "react-router-dom"
import Layout from "./component/layout/Layout"
import MainPage from "./pages/MainPage"
import LoginPage from "./pages/LoginPage"
import SignUpSelectPage from "./pages/SignUpSelectPage"
import SignUpNormal from "./pages/SignUpNormal"
import SignUpSeller from "./pages/SignUpSeller"
import ProductList from "./pages/ProductList"
import ProductDetail from "./pages/ProductDetail"

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
        </Route>
      </Routes>
    </>
  )
}

export default App
