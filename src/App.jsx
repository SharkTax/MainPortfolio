import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLyout from './layouts/MainLyout'
import Home from './pages/Home'
import "./index.css"
import Porfolio from './pages/Porfolio'
import Sobre from './pages/Sobre'


function App() {

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<MainLyout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Porfolio/>}/>
          <Route path='/contato' element={<Sobre/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
