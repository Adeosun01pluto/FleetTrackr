import React from 'react'
import Hero from '../components/Hero'
import Thecars from '../components/Thecars'
import Contact from '../components/Contact'
import WhyChoose from '../components/WhyChoose'
import About from './About'

function Home() {
  return (
    <div className='min-h-[100vh]'>
      <Hero />
      <Thecars />
      <Contact />
      <About />
      <WhyChoose/> 
    </div>
  )
}

export default Home