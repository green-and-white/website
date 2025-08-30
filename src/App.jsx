import { useState } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Committees from './sections/Committees'
import Process from './sections/Process'
import FAQs from './sections/FAQs'
import Footer from './sections/Footer'

import './App.css'

function App() {

  return (
    <>
      <Hero></Hero>
      <About></About>
      <div>
        <Committees></Committees>
        <Process></Process>
        <FAQs></FAQs>
      </div>
      <Footer></Footer>
  
    </>
  )
}

export default App
