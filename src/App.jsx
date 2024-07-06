import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CartPage from "../pages/CartPage"
import ShopPage from "../pages/ShopPage"

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/home" element={ <Home/>} />  
        <Route path="/cart-page" element={ <CartPage/>} />
        <Route path="/shop" element={ <ShopPage/>} />              
      </Routes>
      <Footer/>
      </div>
  )
}

export default App