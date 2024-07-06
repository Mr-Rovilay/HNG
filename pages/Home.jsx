import Footer from "../src/components/Footer"
import Hero from "../src/components/Hero"
import Products from "../src/components/Products"


const Home = () => {
  return (
    <div className="container">
        <Hero/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home