import './App.css'
import { Route, Routes } from 'react-router-dom'
import Pokemon from './pages/Pokemon'
import Pokedex from './pages/Pokedex'
import Home from './pages/Home'
import RouteProtected from './componentes/RouteProtected'
import HomeProtected from './componentes/HomeProtected'
import Footer from './Layout/Footer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'





function App() {
  const nameTrainer = useSelector(state => state.nameTrainer)

  useEffect(() => {
    localStorage.setItem("nameTrainer", nameTrainer)
  }, [nameTrainer])

  return (
    <div className="App">
      <Routes>
        <Route element={<HomeProtected />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route element={<RouteProtected />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<Pokemon />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
