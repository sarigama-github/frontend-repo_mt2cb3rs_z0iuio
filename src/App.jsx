import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(1000px_600px_at_50%_-20%,rgba(16,185,129,0.08),transparent_60%)]" />
      <Navbar />
      <main className="[--accent:theme(colors.emerald.400)]">
        <Hero />
        <About />
        <Projects />
        <ProjectDetail />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
