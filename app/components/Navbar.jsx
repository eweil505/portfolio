import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div id="navcontainer">
        <div id="linkedin"><a href="https://www.linkedin.com/in/erika-weil/"><img src= '/linkedin.png' className="navIcon"/></a></div>
        <div id="github"><a href="https://github.com/eweil505"><img src= '/github-logo.png' className="navIcon"/></a></div>
        <div id="email"><a href="mailto:erikaweil@outlook.com?Subject=Reaching%20out%20from%20website" target="_top"><img src= '/email-logo.png' className="navIcon"/></a></div>
        <Link className="navlink" id="projects" to="/projects">Projects</Link>
        <Link className="navlink" id="home" to="/">About me</Link>
    </div>
  )
}

export default Navbar
