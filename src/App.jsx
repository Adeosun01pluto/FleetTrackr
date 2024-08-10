import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contact from './components/Contact'
import Thecars from './components/Thecars'
import Login from './pages/Login'
import Signup from './pages/Signup'

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
            <Route element={<About/>} path='/about' />
            {/* <Route element={<Contact/>} path='/contact' /> */}
            <Route element={<Thecars/>} path='/vehicles' />
            <Route element={<Dashboard/>} path='/dashboard' />
            <Route element={<Login/>} path='/login' />
            <Route element={<Signup/>} path='/signup' />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
