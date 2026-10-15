import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Opportunity from './Components/Opportunity'
import About from './Components/About'
import Skills from './Components/Skills'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ProjectModal from './Components/ProjectModal'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <main>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <Hero />
      <Opportunity />
      <About />
      <Skills />
      <Work onSelectProject={setSelectedProject} />
      <Contact />
      <Footer />
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  )
}

export default App
