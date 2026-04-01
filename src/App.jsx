import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import StatBar from "./components/StatBar"
import GetStarted from "./components/GetStarted"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import ProductData from "./components/ProductData"

function App() {
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
      <NavBar data={data} />
      <Banner />
      <StatBar />
      <ProductData />
      <GetStarted />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
