import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h1 className="sub-title">Projects</h1>
        <div className="project-list">
          <div className="project project-card">
            <img src="./images/placeprep.png" alt="" />
            <div className="layer">
              <h2 className="project-title">Placeprep.com</h2>
              <h3 className="project-tech-stack">HTML | CSS | JavaScript | SCSS | Bootstrap | JSON Server</h3>
              <p className="project-description">Placeprep.com is a customized Educational website where anybody can learn about coding related topics and languages.</p>
              <a className="project-github-link" href="https://github.com/s17200/PlacePrep.com" target="_blank"><i className="fa-brands fa-github"></i>Github</a>
              <a className="project-deployed-link" href="https://place-prep-com.vercel.app/HomePage/index.html" target="_blank"><i className="fa-solid fa-link"></i>Website</a>
            </div>
          </div>
          <div className="project project-card">
            <img src="./images/trivago.png" alt="" />
            <div className="layer">
              <h2 className="project-title">Trivago-Clone</h2>
              <h3 className="project-tech-stack">HTML | CSS | JavaScript | JSON</h3>
              <p className="project-description">Trivago is a leading global accommodation search website, focused on reshaping the way millions of travelers search for and compare hotels and other accommodations.</p>
              <a className="project-github-link" href="https://github.com/s17200/TRIVAGO-CLONE" target="_blank"><i className="fa-brands fa-github"></i>Github</a>
              <a className="project-deployed-link" href="https://trivago-clone-s17200.netlify.app/" target="_blank"><i className="fa-solid fa-link"></i>Website</a>
            </div>
          </div>
          <div className="project project-card">
            <img src="./images/shop.png" alt="" />
            <div className="layer">
              <h2 className="project-title">Shop.com-Clone</h2>
              <h3 className="project-tech-stack">HTML | CSS | JavaScript</h3>
              <p className="project-description">It is a new kind of shopping comparison site that offers the most comprehensive shopping experience on the web.</p>
              <a className="project-github-link" href="https://github.com/s17200/www.shop.com" target="_blank"><i className="fa-brands fa-github"></i>Github</a>
              <a className="project-deployed-link" href="https://bright-halva-d71d53.netlify.app/project.html" target="_blank"><i className="fa-solid fa-link"></i>Website</a>
            </div>
          </div>
          <div className="project project-card">
            <img src="./images/Ikea.png" alt="" />
            <div className="layer">
              <h2 className="project-title">Ikea-Clone</h2>
              <h3 className="project-tech-stack">React js | Redux | Bootstrap | css | chakra-ui | JavaScript</h3>
              <p className="project-description">IKEA is a Swedish multinational conglomerate based in the Netherlands that designs and sells ready-to-assemble furniture, kitchen appliances, and various other goods and home services.</p>
              <a className="project-github-link" href="https://github.com/s17200/Ikea-clone" target="_blank"><i className="fa-brands fa-github"></i>Github</a>
              <a className="project-deployed-link" href="https://github.com/s17200/Ikea-clone" target="_blank"><i className="fa-solid fa-link"></i>Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;