import React from 'react'
import RealisticWater from './RealisticWater'
import Header from '@/assets/catalog/Header.webp'

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

        {/* Footer Section */}
        <section className="relative min-h-screen bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
          <div className="container mx-auto px-8 py-20">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {/* About */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">About Us</h3>
                <p className="text-gray-400 leading-relaxed">
                  Creating memorable experiences through stunning publications and timeless memories captured for the DLSU community.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition">
                    <span className="text-black font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition">
                    <span className="text-black font-bold">ig</span>
                  </div>
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition">
                    <span className="text-black font-bold">tw</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">Quick Links</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="hover:text-yellow-400 cursor-pointer transition">Home</li>
                  <li className="hover:text-yellow-400 cursor-pointer transition">Publications</li>
                  <li className="hover:text-yellow-400 cursor-pointer transition">Gallery</li>
                  <li className="hover:text-yellow-400 cursor-pointer transition">Events</li>
                  <li className="hover:text-yellow-400 cursor-pointer transition">Contact</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">Get in Touch</h3>
                <p className="text-gray-400">De La Salle University</p>
                <p className="text-gray-400">2401 Taft Avenue, Manila</p>
                <p className="text-gray-400 mt-4">Email: yearbook@dlsu.edu.ph</p>
                <p className="text-gray-400">Phone: +63 2 8524 4611</p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>© 2026 DLSU Yearbook. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                  <span className="hover:text-yellow-400 cursor-pointer transition">Privacy Policy</span>
                  <span className="hover:text-yellow-400 cursor-pointer transition">Terms of Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
