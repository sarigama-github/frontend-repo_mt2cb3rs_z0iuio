export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} Flames Studio. Alle rettigheter forbeholdt.</div>
        <div className="text-sm">Bygget med fokus på ytelse og bærekraft.</div>
      </div>
    </footer>
  )
}
