import React from 'react'
import "./index.css"
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contacts/Contact'
import Home from './components/home/Home'
const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Contact />
    </div>
  )
}

export default App
