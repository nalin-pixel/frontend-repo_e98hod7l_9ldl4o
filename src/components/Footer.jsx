import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950/95">
      <div className="mx-auto max-w-6xl px-6 py-16 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-white text-2xl font-semibold">Let’s build something playful</h4>
            <p className="text-blue-100/80 mt-2 max-w-xl">Open to freelance and full-time roles. I love tough problems and tiny details.</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:hello@yourname.design" className="inline-flex items-center justify-center rounded-lg bg-blue-500/90 hover:bg-blue-500 text-white px-5 py-3 text-sm font-medium transition-colors">Email</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 text-sm font-medium transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="mt-10 text-xs text-blue-300/60">© {new Date().getFullYear()} Your Name — UX/Product Designer</div>
      </div>
    </footer>
  )
}
