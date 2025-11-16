import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0b0b0c] text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Om Studioet</h2>
          <p className="mt-6 leading-relaxed">
            Vi er et tverrfaglig studio som utvikler sirkulære og adaptive bygg som svarer på morgendagens behov. Vår tilnærming kombinerer parametrisk design, LCA-analyse og generativ AI.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {["Bærekraft", "AI-Design", "Urbant Design", "Materialinnovasjon"].map((t) => (
              <motion.div key={t} whileHover={{ y: -4 }} className="rounded-xl p-4 bg-white/5 border border-white/10">
                <h3 className="text-white font-medium">{t}</h3>
                <p className="text-xs text-zinc-400 mt-1">Utforsker nye metodikker og verktøy</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {[1,2,3].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="h-28 rounded-xl bg-gradient-to-r from-sky-500/20 to-emerald-500/20 border border-white/10" />
          ))}
        </div>
      </div>
    </section>
  )
}
