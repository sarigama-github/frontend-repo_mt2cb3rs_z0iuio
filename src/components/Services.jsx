import { motion } from 'framer-motion'
import { Leaf, Cpu, Building2 } from 'lucide-react'

const services = [
  { icon: Leaf, title: 'Bærekraft', desc: 'Sirkulære materialer, energisystemer og livsløpsanalyse.' },
  { icon: Cpu, title: 'AI-Design', desc: 'Parametrisk design, generative verktøy og simuleringsdrevet beslutning.' },
  { icon: Building2, title: 'Urbant Design', desc: 'Menneskesentrerte byrom med fokus på mobilitet og grønn struktur.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-semibold text-white">Tjenester</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} whileHover={{ y: -6 }} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <Icon className="text-emerald-400" />
              <h3 className="mt-4 text-white text-xl">{title}</h3>
              <p className="mt-2 text-zinc-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
