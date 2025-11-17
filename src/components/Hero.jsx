import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-900">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/90 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" />
            Interactive UX Portfolio · Story Mode
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Designing playful, human-centered experiences
          </h1>
          <p className="mt-4 text-blue-100/90 text-base sm:text-lg leading-relaxed">
            I craft interfaces that feel alive. Scroll to explore the journey—concepts, prototypes, and polished product moments.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#story" className="inline-flex items-center justify-center rounded-lg bg-blue-500/90 hover:bg-blue-500 text-white px-5 py-3 text-sm font-medium transition-colors">
              Start the story
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 text-sm font-medium transition-colors">
              View selected work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
