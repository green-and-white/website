import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Committees from '../sections/Committees'
import Process from '../sections/Process'
import FAQs from '../sections/FAQs'
import Footer from '../sections/Footer'
import Dates from '../sections/Dates'
import Navbar from '../Navbar'

import SparkleCursor from '../components/SparkleCursor';
import '../components/SparkleCursor.css';



export default function Apply() {
  return (
    <> 
        <Navbar />
        <SparkleCursor />
        <Hero></Hero>
        <About></About>
        <div id = "committees" className = "flex flex-col gap-16 radial-gradient py-16 px-8 lg:px-28">
            <Committees></Committees>
            <Process></Process>
            <Dates></Dates>
            <FAQs></FAQs>
        </div>
        <Footer></Footer>
    </>
   
  )
}
