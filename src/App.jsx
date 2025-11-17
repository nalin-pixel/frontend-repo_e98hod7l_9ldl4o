import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import ParallaxStory from './components/ParallaxStory'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function Nav() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-slate-900/70 backdrop-blur px-3 py-2">
          <a href="#" className="text-white font-semibold tracking-tight">yourname.design</a>
          <nav className="hidden sm:flex items-center gap-1 text-sm text-blue-100/90">
            <a href="#story" className="px-3 py-2 rounded-full hover:bg-white/10">Story</a>
            <a href="#work" className="px-3 py-2 rounded-full hover:bg-white/10">Work</a>
            <a href="#contact" className="px-3 py-2 rounded-full hover:bg-white/10">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-500/90 hover:bg-blue-500 text-white px-3 py-2 text-xs font-medium transition-colors">Let’s talk</a>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Nav />
      <Hero />
      <ParallaxStory />
      <Showcase />
      <Footer />
    </div>
  )
}

export default App
