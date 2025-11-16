import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2])
  const hue = useTransform(scrollYProgress, [0, 1], [220, 150])

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 6
      const y = (e.clientY / window.innerHeight - 0.5) * 6
      if (ref.current) {
        ref.current.style.setProperty('--tiltX', `${y}deg`)
        ref.current.style.setProperty('--tiltY', `${-x}deg`)
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="home" ref={ref} className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background: ensure it's always behind content */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="w-full h-full animated-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        {/* soft grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
        <motion.h1
          style={{ y: titleY, opacity: titleOpacity, filter: hue.to((h) => `hue-rotate(${h}deg)`) }}
          className="text-4xl md:text-7xl font-semibold tracking-tight text-white">
          Bærekraftige byer. Futuristisk design.
        </motion.h1>
        <motion.p style={{ opacity: titleOpacity }} className="mt-6 max-w-2xl text-zinc-300">
          Vi kombinerer økologi, AI og presis arkitektur for å forme bymiljøer som varer.
        </motion.p>
        <div className="mt-10 flex items-center gap-4">
          <a href="#projects" className="btn-primary">Se prosjekter</a>
          <a href="#contact" className="btn-ghost">Kontakt oss</a>
        </div>
      </div>

      <motion.div style={{ rotateX: 'var(--tiltX)', rotateY: 'var(--tiltY)' }} className="absolute right-10 bottom-10 hidden md:block text-xs text-zinc-500">
        subtle parallax
      </motion.div>
    </section>
  )
}
