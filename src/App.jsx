import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import TrustSection from './components/TrustSection'
import NeoPOP from './components/NeoPOP'
import Testimonials from './components/Testimonials'
import Security from './components/Security'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <TrustSection />
      <Features />
      <NeoPOP />
      <Testimonials />
      <Security />
      <Footer />
    </div>
  )
}
