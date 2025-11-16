import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sender...')
    // Simulerer innsending
    setTimeout(() => setStatus('Takk! Vi tar kontakt snart.'), 800)
  }

  return (
    <section id="contact" className="relative bg-[#0b0b0c] text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Kontakt</h2>
          <p className="mt-4 text-zinc-400 max-w-xl">Fortell oss om ditt prosjekt. Vi svarer vanligvis innen 1–2 virkedager.</p>
          <div className="mt-8 space-y-2 text-sm">
            <div>kontakt@flames.studio</div>
            <div>+47 400 00 000</div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl p-6 bg-white/5 border border-white/10 space-y-4">
          <div>
            <label className="block text-xs text-zinc-400">Navn</label>
            <input required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white outline-none focus:border-emerald-400/60" />
          </div>
          <div>
            <label className="block text-xs text-zinc-400">E-post</label>
            <input type="email" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white outline-none focus:border-emerald-400/60" />
          </div>
          <div>
            <label className="block text-xs text-zinc-400">Melding</label>
            <textarea rows="4" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white outline-none focus:border-emerald-400/60" />
          </div>
          <button className="btn-primary w-full">Send melding</button>
          {status && <div className="text-sm text-emerald-400 text-center">{status}</div>}
        </form>
      </div>
    </section>
  )
}
