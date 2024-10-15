import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './component/ProductCard'
import Navbar from './component/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './component/Footer'

function App() {

  return (
    <>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ProductCard />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
