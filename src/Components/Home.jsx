import React from 'react';

const Home = () => {
  const resume = () => {
    window.open("https://1drv.ms/b/s!Akq8ktDdIMsVh20w82V9m_sztbFS?e=vrNEKh", "_blank");
  };

  return (
    <div id="home" className="header-text">
      <div className="container">
        <div className="row">
          <div className="about-col-2">
            <h1>Hi, I'm <span>Prathmesh</span> Kumbhar</h1>
            <p style={{ marginBottom: '20px' }}>a dynamic and self-motivated Full Stack Web Developer with expertise in Tech HTML, CSS, JavaScript Java, DSA, React, Redux, Node.js, Express, and MongoDB.</p>
            <button id="resume-button-2" onClick={resume}><a id="resume-link-2"
              href="./Resume/Prathmesh-Kumbhar-Resume.pdf" download="Prathmesh-RESUME-DOWNLOAD"
              target="_blank">Resume</a></button>
            <a id="contact-phone">+919588680004</a><i id="phoneicone" className="fa-solid fa-phone"></i>
            <a id="contact-email" href="mailto:KumbharPrathmesh7@gmail.com">Email</a><i id="phoneicone"
              className="fa-solid fa-envelope"></i>
          </div>
          <div className="about-col imk">
            <img className="xxxx" id="prashantimg"
              src="./gif/Prashant.gif"
              alt="" width="350vw" height="450vh" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;