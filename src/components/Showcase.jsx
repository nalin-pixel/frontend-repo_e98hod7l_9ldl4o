import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Onboarding Flow', tag: 'Product', color: 'from-blue-500/30 to-cyan-400/30' },
  { title: 'Design System', tag: 'System', color: 'from-violet-500/30 to-fuchsia-400/30' },
  { title: 'Motion Language', tag: 'Motion', color: 'from-emerald-500/30 to-teal-400/30' },
  { title: 'Accessibility Pass', tag: 'A11y', color: 'from-amber-500/30 to-orange-400/30' },
]

export default function Showcase() {
  return (
    <section id="work" className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-300/80">Selected Work</p>
            <h3 className="mt-2 text-3xl sm:text-5xl font-bold text-white">A taste of projects</h3>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 text-sm font-medium transition-colors">Contact</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative h-56 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${card.color}`}
            >
              <div className="absolute inset-0 backdrop-blur-[1px]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(100%_80%_at_50%_0%,rgba(255,255,255,0.15),transparent)]" />
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <span className="self-start rounded-full bg-black/30 text-white/90 text-[10px] px-2 py-1 border border-white/10">{card.tag}</span>
                <h4 className="text-white text-xl font-semibold max-w-[12ch] leading-snug">{card.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
