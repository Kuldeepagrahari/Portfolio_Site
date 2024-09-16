import React from 'react'
import "./nav.css"
import {Link} from "react-scroll"

const Nav = () => {
  return (
    <div className='nav'>
      <h1>Portfolio</h1>
      <div className="route-links">
            <Link activeClass="active"  to="home" spy={true} smooth={true} duration={500}>Home</Link>
            <Link activeClass="active" spy={true} to="about" smooth={true} duration={500}>About</Link>
            <Link activeClass="active" spy={true} to="skills" smooth={true} duration={500}>Skills</Link>
            <Link activeClass="active" spy={true} to="projects" smooth={true} duration={500}>Projects</Link>
            <Link activeClass="active" spy={true} to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </div>
  )
}

export default Nav
