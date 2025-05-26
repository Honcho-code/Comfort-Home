import About from "./Components/About"
import Body from "./Components/Body"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import HouseListings from "./Components/HouseListings"
import Testemonial from "./Components/Testemonial"

function App() {

  return (
    <div className="scroll-smooth">
      <Body/>
      <HouseListings/>
      <About/>
      <Testemonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
