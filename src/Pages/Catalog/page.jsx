import React from 'react'
import RealisticWater from './RealisticWater'
import Header from './Header'
import Footer from './Footer'

export default function page() {
  return (
    <div>
        {/* Header Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
           <Header />
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
