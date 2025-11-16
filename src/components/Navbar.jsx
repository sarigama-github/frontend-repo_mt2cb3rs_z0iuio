import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Hjem' },
  { href: '#about', label: 'Om' },
  { href: '#projects', label: 'Prosjekter' },
  { href: '#services', label: 'Tjenester' },
  { href: '#contact', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-tight text-white">
          <span className="neon-text">FLAMES</span> • STUDIO
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-300 hover:text-white transition-colors relative group">
              {l.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-sky-400 to-emerald-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-6 space-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 bg-white/5 text-zinc-200 hover:text-white hover:bg-white/10">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
