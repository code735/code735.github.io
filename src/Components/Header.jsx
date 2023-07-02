import React from 'react';
import Home from './Home';

const Header = () => {
  const resume = () => {
    window.open("https://1drv.ms/b/s!Akq8ktDdIMsVh20w82V9m_sztbFS?e=vrNEKh", "_blank");
  };

  const closemenu = () => {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
  };

  const openmenu = () => {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
  };

  return (
    <div id="header">
      <div className="container">
        <nav id="nav-menu" className="black">
          <img src="" alt="" className="logo home-img" />

          <ul id="sidemenu">
            <li><a className="nav-link home" href="#home">HOME</a></li>
            <li><a className="nav-link about" href="#about">ABOUT</a></li>
            <li><a className="nav-link skills" href="#skills">SKILLS</a></li>
            <li><a className="nav-link projects" href="#projects">PROJECTS</a></li>
            <li><a href="#githubs">GITHUB</a></li>
            <li><a className="nav-link contact" href="#contact">CONTACT</a></li>
            <li><button id="resume-button-1" onClick={resume}><a id="resume-link-1" className="nav-link resume"
              href="" download=""
              target="_blank">Resume</a></button></li>
            <i className="fas fa-times" onClick={closemenu}></i>
          </ul>
          <i className="fas fa-bars" onClick={openmenu}></i>
        </nav>
        <Home/>
      </div>
    </div>
  );
};

export default Header;