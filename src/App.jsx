import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

// #283618 dark green 
// #606c38 green

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Header />
        <main className='bg-white'>
          <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<Dashboard/>} path='/dashboard' />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
