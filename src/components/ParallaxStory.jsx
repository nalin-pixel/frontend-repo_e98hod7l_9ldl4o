import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Section({ id, eyebrow, title, body, image, gradientFrom, gradientTo, align = 'left' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6])

  return (
    <section ref={ref} id={id} className="relative min-h-[90vh] flex items-center">
      <div className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} opacity-[0.06]`} />
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(#000,transparent_10%,transparent_90%,#000)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-10">
        <motion.div style={{ y, opacity }} className={`${align === 'left' ? '' : 'md:order-2'} space-y-4`}>
          <p className="text-xs uppercase tracking-widest text-blue-300/80">{eyebrow}</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">{title}</h2>
          <p className="text-blue-100/90 leading-relaxed">{body}</p>
        </motion.div>
        <motion.div style={{ y }} className={`${align === 'left' ? '' : 'md:order-1'} relative h-72 sm:h-96 bg-white/5 border border-white/10 rounded-2xl overflow-hidden`}> 
          {image}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/40" />
        </motion.div>
      </div>
    </section>
  )
}

export default function ParallaxStory() {
  return (
    <div id="story" className="bg-slate-900">
      <Section
        id="intro"
        eyebrow="Chapter 1"
        title="Discovery & immersion"
        body="I begin with people. Contextual interviews, journey maps, and lightweight ethnography to reveal friction and opportunity."
        gradientFrom="blue-500/10"
        gradientTo="cyan-400/10"
        image={<div className="h-full w-full bg-[radial-gradient(75%_60%_at_50%_50%,rgba(59,130,246,0.35),transparent)]" />}
      />

      <Section
        id="concepts"
        eyebrow="Chapter 2"
        title="Concepts that invite play"
        body="Paper sketches and motion prototypes explore interaction models. I bias towards tangible, delightful affordances."
        gradientFrom="violet-500/10"
        gradientTo="pink-400/10"
        align="right"
        image={<div className="h-full w-full grid grid-cols-3 gap-2 p-2">{
          Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-xl bg-white/[0.06] border border-white/10" />
          ))}
        </div>}
      />

      <Section
        id="build"
        eyebrow="Chapter 3"
        title="Prototyping to learn faster"
        body="From micro-interactions to flows, I iterate with fidelity that answers the question at hand—shipping insights weekly."
        gradientFrom="emerald-500/10"
        gradientTo="teal-400/10"
        image={<div className="h-full w-full flex items-center justify-center">
          <div className="size-40 rounded-2xl bg-gradient-to-br from-emerald-400/40 to-teal-300/40 blur-0" />
        </div>}
      />

      <Section
        id="impact"
        eyebrow="Finale"
        title="Measuring impact, not screens"
        body="I partner with eng and product to land outcomes—activation, retention, revenue. Design is the story users tell after they leave."
        gradientFrom="amber-500/10"
        gradientTo="rose-500/10"
        align="right"
        image={<div className="h-full w-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.08),transparent_60%)]" />}
      />
    </div>
  )
}
