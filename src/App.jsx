import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Thecars from './components/Thecars'
import BlogPost from './components/BlogPost'
import Dashboard_ from './pages/dashboard/Dashboard_'
import ScheduleAppointment from './pages/schedule/ScheduleAppointment '
import Home_ from './pages/home/Home'
import About_ from './pages/about/About'
import Blog_ from './pages/blog/Blog'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import PrivateRoute from './PrivateRoute'

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
            <Route element={<Home_/>} path='/' />
            <Route element={<About_/>} path='/about' />
            <Route element={<Contact/>} path='/contact' />
            {/* <Route element={<Thecars/>} path='/vehicles' /> */}
            <Route element={
              <PrivateRoute>
                <Dashboard_/>
              </PrivateRoute>
            } path='/dashboard/*' />
            <Route path="/blogs" element={
              <PrivateRoute>
                <Blog_ />
              </PrivateRoute>
            } /> {/* Add the Blog route */}
            <Route path="/blog/:id" element={
              <PrivateRoute>
                <BlogPost />
              </PrivateRoute>
            } /> {/* Add the BlogPost route */}
            <Route path="/schedule" element={
              <PrivateRoute>
                <ScheduleAppointment />
              </PrivateRoute>
            } />
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
