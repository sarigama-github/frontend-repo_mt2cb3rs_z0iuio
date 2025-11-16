import { useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'intro', title: 'Introduksjon' },
  { id: 'context', title: 'Kontekst' },
  { id: 'systems', title: 'Systemer' },
  { id: 'impact', title: 'Påvirkning' },
]

export default function ProjectDetail() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = document.querySelector(`a[href="#${entry.target.id}"]`)
          if (link) link.classList.toggle('active', entry.isIntersecting)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 1] }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-[#0b0b0c] text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[240px_1fr] gap-10">
        <aside className="sticky top-24 h-max">
          <nav className="space-y-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="block text-sm text-zinc-400 hover:text-white transition-colors">
                {s.title}
              </a>
            ))}
          </nav>
        </aside>
        <div className="space-y-24">
          {sections.map((s, i) => (
            <div key={s.id} id={s.id} className="scroll-mt-28">
              <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl text-white">
                {s.title}
              </motion.h3>
              <p className="mt-4 text-zinc-400 max-w-2xl">
                Dette er en eksempel-detaljside som viser hvordan et prosjekt kan presenteres med seksjonsnavigasjon og myke overganger.
              </p>
              <div className="mt-6 h-56 rounded-xl bg-gradient-to-br from-sky-500/20 to-emerald-500/20 border border-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
