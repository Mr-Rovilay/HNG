import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Navbar from "./components/Navbar"
import CartPage from "../pages/CartPage"
import ShopPage from "../pages/ShopPage"
import CheckoutPage from "../pages/CheckoutPage"

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/home" element={ <Home/>} />  
        <Route path="/cart-page" element={ <CartPage/>} />
        <Route path="/check-out" element={ <CheckoutPage/>} />              
        <Route path="/shop" element={ <ShopPage/>} />              
      </Routes>
      </div>
  )
}

export default App