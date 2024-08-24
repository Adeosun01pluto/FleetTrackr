import React from 'react'
import Hero from '../../components/Hero'
import Thecars from '../../components/Thecars'
import Contact from '../../components/Contact'
import WhyChoose from '../../components/WhyChoose'
import About_ from '../about/About'

function Home_() {
  return (
    <div className='min-h-[100vh]'>
      <Hero />
      {/* <Thecars /> */}
      <About_ />
      <WhyChoose/> 
      <Contact />
    </div>
  )
}

export default Home_