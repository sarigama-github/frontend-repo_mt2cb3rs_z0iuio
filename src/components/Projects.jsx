import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const initialProjects = [
  { id: 'eco-tower', title: 'ECO Tower', tag: 'Høybygg', color: 'from-sky-500/20 to-emerald-500/20' },
  { id: 'lumen-hub', title: 'Lumen Hub', tag: 'Kultur', color: 'from-fuchsia-500/20 to-sky-500/20' },
  { id: 'arc-park', title: 'Arc Park', tag: 'Urbant landskap', color: 'from-lime-400/20 to-emerald-500/20' },
  { id: 'wave-campus', title: 'Wave Campus', tag: 'Utdanning', color: 'from-cyan-400/20 to-indigo-500/20' },
]

function Glitch() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12),transparent_45%)] animate-pulse" />
      <div className="absolute inset-0 opacity-30 mix-blend-overlay [background:repeating-linear-gradient(90deg,transparent,transparent_8px,rgba(255,255,255,0.06)_8px,rgba(255,255,255,0.06)_9px)]" />
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative bg-black text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Prosjekter</h2>
          <div className="text-xs text-zinc-400">Hover for detaljer</div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialProjects.map((p) => (
            <motion.a
              key={p.id}
              href={`#/project/${p.id}`}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              layout
              className="relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className={`h-48 bg-gradient-to-br ${p.color}`} />
              <div className="p-5">
                <div className="text-xs uppercase tracking-widest text-zinc-400">{p.tag}</div>
                <h3 className="text-xl text-white mt-1">{p.title}</h3>
              </div>

              <AnimatePresence>
                {active === p.id && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                    <Glitch />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
