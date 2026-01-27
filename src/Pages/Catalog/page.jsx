import React from 'react'
import RealisticWater from './RealisticWater'
import Header from '@/assets/catalog/Header.webp'
import Footer from './Footer'

export default function page() {
  return (
    <div>
        {/* Header Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
           <img src={Header} alt="hero bg" className="absolute inset-0 w-full h-full object-cover"/>
        </section>

        {/* Water Effect Section */}
        <section className="relative h-screen">
            <RealisticWater />
        </section>

        {/* Footer */}
        <Footer />
    </div>
  )
}
