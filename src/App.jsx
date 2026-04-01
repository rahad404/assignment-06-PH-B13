import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import StatBar from "./components/StatBar"
import GetStarted from "./components/GetStarted"

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
      <StatBar />

      <GetStarted />
    </>
  )
}

export default App
