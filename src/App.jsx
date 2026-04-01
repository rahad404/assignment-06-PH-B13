import Banner from "./components/Banner"
import NavBar from "./components/NavBar"

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
      <NavBar data={data}/>
      <Banner />
    </>
  )
}

export default App
