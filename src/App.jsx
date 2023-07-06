import Header from "./components/Header"
import './App.css'
import Slider from "./components/Slider"
import ProductionHouse from "./components/ProductionHouse"
import GenreMovielist from "./components/GenreMovielist"
const App = () => {
  return (
    <div className=" ">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovielist />
    </div>
  )
}

export default App
