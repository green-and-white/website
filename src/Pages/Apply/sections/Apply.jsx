import React from 'react'
import Hero from './Hero'
import About from '../About'
import Committees from './Committees'
import Process from './Process'
import FAQs from './FAQs'
import Footer from './Footer'
import Dates from './Dates'
import Navbar from '../../../Navbar'

import SparkleCursor from "@/components/SparkleCursor";
import '@/components/SparkleCursor.css';



export default function Apply() {
  return (
    <> 
        <Navbar />
        <SparkleCursor />
        <div className='bg-blue-900'>
          <Hero></Hero>
          <About></About>
          <div id = "committees" className = "flex flex-col gap-16 radial-gradient py-16 px-8 lg:px-28">
              <Committees></Committees>
              <Process></Process>
              <Dates></Dates>
              <FAQs></FAQs>
          </div>
          <Footer></Footer>
        </div>
       
    </>
   
  )
}
