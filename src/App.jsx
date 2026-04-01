import { useState } from 'react';
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import StatBar from "./components/StatBar"
import GetStarted from "./components/GetStarted"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import ProductData from "./components/ProductData"
import Transform from './components/Transform';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const data = {
    title: "My App",
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Contact", url: "/contact" }
    ]
  }
  return (
    <>
      <NavBar cartCount={cart.length} />
      <Banner />
      <StatBar />
      <ProductData cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />
      <GetStarted />
      <Pricing />
      <Transform />
      <Footer />
    </>
  )
}

export default App
